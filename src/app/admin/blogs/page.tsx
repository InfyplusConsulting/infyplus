"use client";

import { useEffect, useState } from "react";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "", slug: "", synopsis: "", content: "", author: "Vaibhav Nigam", category: "", image: "",
    seoTitle: "", seoDescription: "", seoKeywords: ""
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/blogs");
    const data = await res.json();
    setBlogs(data.blogs || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      fetchBlogs();
    }
  };

  const handleEdit = (blog: any) => {
    const seo = blog?.seo || {};
    const seoKeywords = Array.isArray(seo.keywords) ? seo.keywords.join(", ") : "";

    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      synopsis: blog.synopsis || "",
      content: blog.content || "",
      author: blog.author || "Vaibhav Nigam",
      category: blog.category || "",
      image: blog.image || "",
      seoTitle: seo.title || "",
      seoDescription: seo.description || "",
      seoKeywords
    });
    setEditingId(blog._id);
    setFormVisible(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title, slug: formData.slug, synopsis: formData.synopsis, content: formData.content,
      author: formData.author, category: formData.category, image: formData.image,
      seo: {
        title: formData.seoTitle,
        description: formData.seoDescription,
        keywords: formData.seoKeywords.split(",").map(k => k.trim()).filter(k => k)
      }
    };

    const url = editingId ? `/api/admin/blogs/${editingId}` : "/api/admin/blogs";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setFormVisible(false);
      setEditingId(null);
      fetchBlogs();
      setFormData({
        title: "", slug: "", synopsis: "", content: "", author: "Vaibhav Nigam", category: "", image: "",
        seoTitle: "", seoDescription: "", seoKeywords: ""
      });
    } else {
      const error = await res.json();
      alert(error.error || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: "#0c52a2" }}>Manage Blogs</h2>
        <button className="btn btn-primary" style={{ backgroundColor: "#0c52a2" }} onClick={() => {
          setEditingId(null);
          setFormData({
            title: "", slug: "", synopsis: "", content: "", author: "Vaibhav Nigam", category: "", image: "",
            seoTitle: "", seoDescription: "", seoKeywords: ""
          });
          setFormVisible(!formVisible);
        }}>
          {formVisible ? "Cancel" : "Add New Blog"}
        </button>
      </div>

      {formVisible && (
        <div className="card shadow-sm mb-4 p-4">
          <h4>{editingId ? "Edit Blog" : "Add New Blog"}</h4>
          <form onSubmit={handleSubmit} className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Slug (URL)</label>
              <input type="text" className="form-control" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <input type="text" className="form-control" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Image URL</label>
              <input type="text" className="form-control" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} required />
            </div>
            <div className="col-md-12">
              <label className="form-label">Synopsis</label>
              <textarea className="form-control" rows={2} value={formData.synopsis} onChange={e => setFormData({...formData, synopsis: e.target.value})} required />
            </div>
            <div className="col-md-12">
              <label className="form-label">HTML Content</label>
              <textarea
                className="form-control"
                rows={8}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              />
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
              <button type="submit" className="btn btn-success">Save Blog</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="card shadow-sm p-3">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog._id}>
                  <td><strong>{blog.title}</strong><br/><small className="text-muted">/{blog.slug}</small></td>
                  <td>{blog.category}</td>
                  <td>{new Date(blog.datePublished).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(blog)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(blog._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr><td colSpan={4} className="text-center">No blogs found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
