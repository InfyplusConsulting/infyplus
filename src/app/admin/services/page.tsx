"use client";

import { useEffect, useState } from "react";

export default function AdminServices() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "", description: "", icon: "", bullets: ""
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/services");
    const data = await res.json();
    setServices(data.services || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
      fetchServices();
    }
  };

  const handleEdit = (service: any) => {
    setFormData({
      title: service.title, description: service.description, icon: service.icon, 
      bullets: service.bullets.join("\n")
    });
    setEditingId(service._id);
    setFormVisible(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title, description: formData.description, icon: formData.icon, 
      bullets: formData.bullets.split("\n").map(b => b.trim()).filter(b => b)
    };

    const url = editingId ? `/api/admin/services/${editingId}` : "/api/admin/services";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setFormVisible(false);
      setEditingId(null);
      fetchServices();
      setFormData({ title: "", description: "", icon: "", bullets: "" });
    } else {
      const error = await res.json();
      alert(error.error || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#0c52a2" }}>Manage Services</h2>
        <button className="btn btn-primary" style={{ backgroundColor: "#0c52a2" }} onClick={() => {
          setEditingId(null);
          setFormData({ title: "", description: "", icon: "", bullets: "" });
          setFormVisible(!formVisible);
        }}>
          {formVisible ? "Cancel" : "Add New Service"}
        </button>
      </div>

      {formVisible && (
        <div className="card shadow-sm mb-4 p-4">
          <h4>{editingId ? "Edit Service" : "Add New Service"}</h4>
          <form onSubmit={handleSubmit} className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Service Title</label>
              <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Icon URL</label>
              <input type="text" className="form-control" value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} required />
            </div>
            <div className="col-md-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
            </div>
            <div className="col-md-12">
              <label className="form-label">Bullets (One per line)</label>
              <textarea className="form-control" rows={4} value={formData.bullets} onChange={e => setFormData({...formData, bullets: e.target.value})} required />
            </div>

            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-success">Save Service</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div className="card shadow-sm p-3">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Icon</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service._id}>
                  <td><img src={service.icon} alt="icon" style={{ width: "40px" }} /></td>
                  <td><strong>{service.title}</strong></td>
                  <td>{service.description.substring(0, 50)}...</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(service)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(service._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr><td colSpan={4} className="text-center">No services found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
