export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ color: "#0c52a2", marginBottom: "30px" }}>Dashboard</h1>
      
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0" style={{ backgroundColor: "#0c52a2", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title">Pages</h5>
              <p className="card-text">Manage static page contents and SEO metadata.</p>
              <a href="/admin/pages" className="btn btn-light btn-sm mt-2">Manage Pages</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0" style={{ backgroundColor: "#08b3ca", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title">Blogs</h5>
              <p className="card-text">Create, edit, and delete blog posts.</p>
              <a href="/admin/blogs" className="btn btn-light btn-sm mt-2">Manage Blogs</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0" style={{ backgroundColor: "#040914", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title">Services</h5>
              <p className="card-text">Update services offered by InfyPlus.</p>
              <a href="/admin/services" className="btn btn-light btn-sm mt-2">Manage Services</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0" style={{ backgroundColor: "#555", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title">Testimonials</h5>
              <p className="card-text">Manage client testimonials and feedback.</p>
              <a href="/admin/testimonials" className="btn btn-light btn-sm mt-2">Manage Testimonials</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card shadow-sm border-0 p-4">
            <h4>Welcome to the InfyPlus Admin Panel!</h4>
            <p className="text-muted mt-2">
              Use the sidebar navigation to access different sections of the website content. Any changes made here will instantly reflect on the live website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
