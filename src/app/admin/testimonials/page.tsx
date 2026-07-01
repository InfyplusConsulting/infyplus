"use client";

import { useEffect, useState } from "react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    text: "",
    title: "",
    location: "",
    order: 0
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/testimonials");
    const data = await res.json();
    setTestimonials(data.testimonials || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
      fetchTestimonials();
    }
  };

  const handleEdit = (t: any) => {
    setFormData({
      name: t.name || "",
      text: t.text || t.quote || "",
      title: t.title || t.company || "",
      location: t.location || "",
      order: t.order || 0
    });
    setEditingId(t._id);
    setFormVisible(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: formData.name.trim(),
      text: formData.text.trim(),
      title: formData.title.trim(),
      location: formData.location.trim(),
      order: formData.order,
    };

    const url = editingId ? `/api/admin/testimonials/${editingId}` : "/api/admin/testimonials";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setFormVisible(false);
      setEditingId(null);
      fetchTestimonials();
      setFormData({ name: "", text: "", title: "", location: "", order: 0 });
    } else {
      const error = await res.json();
      alert(error.error || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#0c52a2" }}>Manage Testimonials</h2>
        <button className="btn btn-primary" style={{ backgroundColor: "#0c52a2" }} onClick={() => {
          setEditingId(null);
          setFormData({ name: "", text: "", title: "", location: "", order: 0 });
          setFormVisible(!formVisible);
        }}>
          {formVisible ? "Cancel" : "Add New Testimonial"}
        </button>
      </div>

      {formVisible && (
        <div className="card shadow-sm mb-4 p-4">
          <h4>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h4>
          <form onSubmit={handleSubmit} className="row g-3 mt-2">
            <div className="col-md-4">
              <label className="form-label">Client Name</label>
              <input type="text" className="form-control" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Title/Position</label>
              <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} required />
            </div>
            <div className="col-md-2">
              <label className="form-label">Order</label>
              <input type="number" className="form-control" value={formData.order} onChange={e => setFormData({...formData, order: Number(e.target.value)})} />
            </div>
            <div className="col-md-12">
              <label className="form-label">Testimonial</label>
              <textarea className="form-control" rows={3} value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} required />
            </div>

            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-success">Save Testimonial</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading testimonials...</p>
      ) : (
        <div className="card shadow-sm p-3">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Client</th>
                <th>Title</th>
                <th>Testimonial</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map(t => (
                <tr key={t._id}>
                  <td><strong>{t.name}</strong></td>
                  <td>{t.title || t.company || ""}</td>
                  <td>{(t.text || t.quote || "").substring(0, 50)}{(t.text || t.quote || "").length > 50 ? "..." : ""}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(t)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(t._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {testimonials.length === 0 && (
                <tr><td colSpan={4} className="text-center">No testimonials found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
