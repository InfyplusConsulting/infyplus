"use client";

import { useEffect, useState } from "react";

export default function AdminPages() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    slug: "", title: "", subtitle: "", 
    seoTitle: "", seoDescription: "", seoKeywords: ""
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/pages");
    const data = await res.json();
    setPages(data.pages || []);
    setLoading(false);
  };

  const handleEdit = (page: any) => {
    setFormData({
      slug: page.slug, title: page.content.title || "", subtitle: page.content.subtitle || "",
      seoTitle: page.seo.title, seoDescription: page.seo.description, seoKeywords: page.seo.keywords.join(", ")
    });
    setEditingId(page._id);
    setFormVisible(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fetch current page to merge existing content structure safely
    const existingPage = pages.find(p => p._id === editingId);
    
    const payload = {
      slug: formData.slug,
      content: {
        ...existingPage?.content,
        title: formData.title,
        subtitle: formData.subtitle
      },
      seo: {
        title: formData.seoTitle,
        description: formData.seoDescription,
        keywords: formData.seoKeywords.split(",").map(k => k.trim()).filter(k => k)
      }
    };

    const url = editingId ? `/api/admin/pages/${editingId}` : "/api/admin/pages";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setFormVisible(false);
      setEditingId(null);
      fetchPages();
    } else {
      const error = await res.json();
      alert(error.error || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#0c52a2" }}>Manage Static Pages & SEO</h2>
      </div>

      {formVisible && (
        <div className="card shadow-sm mb-4 p-4">
          <h4>Edit Page: <span className="text-primary">{formData.slug}</span></h4>
          <form onSubmit={handleSubmit} className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Page Title Header</label>
              <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Page Subtitle</label>
              <input type="text" className="form-control" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} />
            </div>

            <h5 className="mt-4 border-bottom pb-2">SEO Settings</h5>
            <div className="col-md-6">
              <label className="form-label">SEO Title</label>
              <input type="text" className="form-control" value={formData.seoTitle} onChange={e => setFormData({...formData, seoTitle: e.target.value})} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">SEO Keywords (comma separated)</label>
              <input type="text" className="form-control" value={formData.seoKeywords} onChange={e => setFormData({...formData, seoKeywords: e.target.value})} />
            </div>
            <div className="col-md-12">
              <label className="form-label">SEO Description</label>
              <textarea className="form-control" rows={2} value={formData.seoDescription} onChange={e => setFormData({...formData, seoDescription: e.target.value})} required />
            </div>

            <div className="col-12 mt-4">
              <button type="button" className="btn btn-secondary me-2" onClick={() => setFormVisible(false)}>Cancel</button>
              <button type="submit" className="btn btn-success">Save Page</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading pages...</p>
      ) : (
        <div className="card shadow-sm p-3">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Page Slug</th>
                <th>SEO Title</th>
                <th>Last Modified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map(page => (
                <tr key={page._id}>
                  <td><strong>{page.slug}</strong></td>
                  <td>{page.seo.title}</td>
                  <td>{page.updatedAt ? new Date(page.updatedAt).toLocaleDateString() : "N/A"}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(page)}>Edit SEO & Content</button>
                  </td>
                </tr>
              ))}
              {pages.length === 0 && (
                <tr><td colSpan={4} className="text-center">No pages found in Database. Using mock fallback. Run seed script.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
