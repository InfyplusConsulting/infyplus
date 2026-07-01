"use client";

import { useEffect, useState } from "react";

export default function AdminFAQs() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    question: "", answer: "", order: 0
  });

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/faqs");
    const data = await res.json();
    setFaqs(data.faqs || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this FAQ?")) {
      await fetch(`/api/admin/faqs/${id}`, { method: "DELETE" });
      fetchFaqs();
    }
  };

  const handleEdit = (f: any) => {
    setFormData({
      question: f.question, answer: f.answer, order: f.order || 0
    });
    setEditingId(f._id);
    setFormVisible(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = formData;

    const url = editingId ? `/api/admin/faqs/${editingId}` : "/api/admin/faqs";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setFormVisible(false);
      setEditingId(null);
      fetchFaqs();
      setFormData({ question: "", answer: "", order: 0 });
    } else {
      const error = await res.json();
      alert(error.error || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#0c52a2" }}>Manage FAQs</h2>
        <button className="btn btn-primary" style={{ backgroundColor: "#0c52a2" }} onClick={() => {
          setEditingId(null);
          setFormData({ question: "", answer: "", order: 0 });
          setFormVisible(!formVisible);
        }}>
          {formVisible ? "Cancel" : "Add New FAQ"}
        </button>
      </div>

      {formVisible && (
        <div className="card shadow-sm mb-4 p-4">
          <h4>{editingId ? "Edit FAQ" : "Add New FAQ"}</h4>
          <form onSubmit={handleSubmit} className="row g-3 mt-2">
            <div className="col-md-10">
              <label className="form-label">Question</label>
              <input type="text" className="form-control" value={formData.question} onChange={e => setFormData({...formData, question: e.target.value})} required />
            </div>
            <div className="col-md-2">
              <label className="form-label">Order</label>
              <input type="number" className="form-control" value={formData.order} onChange={e => setFormData({...formData, order: Number(e.target.value)})} />
            </div>
            <div className="col-md-12">
              <label className="form-label">Answer (HTML allowed)</label>
              <textarea className="form-control" rows={3} value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})} required />
            </div>

            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-success">Save FAQ</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading FAQs...</p>
      ) : (
        <div className="card shadow-sm p-3">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Order</th>
                <th>Question</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map(f => (
                <tr key={f._id}>
                  <td>{f.order}</td>
                  <td><strong>{f.question}</strong></td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(f)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(f._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {faqs.length === 0 && (
                <tr><td colSpan={3} className="text-center">No FAQs found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
