import { getBlogBySlug, getBlogs } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | InfyPlus Consulting",
    };
  }

  return {
    title: blog.seo?.title || `${blog.title} | InfyPlus Consulting`,
    description: blog.seo?.description || blog.synopsis,
    keywords: blog.seo?.keywords?.join(", "),
    alternates: {
      canonical: `https://infyplus.com/blogs/${blog.slug}`,
    }
  };
}

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  const allBlogs = await getBlogs();
  const recentPosts = allBlogs.filter((p: any) => p.slug !== slug).slice(0, 4); // Exclude current post

  return (
    <div style={{ backgroundColor: "#fcfcfc", minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="container">
        
        {/* Main Content Area - Centered for better readability */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            {/* ⬅️ BACK BUTTON ADDED HERE */}
            <div className="mb-4">
              <Link 
                href="/blogs" 
                className="text-decoration-none text-muted d-inline-flex align-items-center gap-2 hover-primary transition-colors"
                style={{ fontSize: "0.95rem", fontWeight: "500" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back to Blogs
              </Link>
            </div>

            {/* Blog Header */}
            <header className="mb-5 text-center">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3 fw-medium">
                {blog.category || "Consulting Insight"}
              </span>
              <h1 className="fw-bolder mb-3 display-5" style={{ color: "#1a1a1a", letterSpacing: "-0.5px" }}>
                {blog.title}
              </h1>
              <div className="text-muted d-flex justify-content-center align-items-center gap-2 small">
                <span>By <strong className="text-dark">{blog.author}</strong></span>
                <span>•</span>
                <span>{blog.datePublished || "Recently Published"}</span>
              </div>
            </header>

            {/* Synopsis / TL;DR */}
            {blog.synopsis && (
              <div className="p-4 mb-5 bg-white rounded-4 shadow-sm border-start border-4 border-primary">
                <h6 className="fw-bold text-uppercase text-muted mb-2 small">Synopsis</h6>
                <p className="mb-0 fs-5 text-dark" style={{ lineHeight: "1.6" }}>
                  {blog.synopsis}
                </p>
              </div>
            )}

            {/* Rich Text Content */}
            <article 
              className="blog-rich-content" 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />

            {/* Author / CTA Footer (Commented out as per your code) */}
            {/* ... */}

          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 opacity-10" />

        {/* Footer Widgets (Commented out as per your code) */}
        {/* ... */}

      </div>
    </div>
  );
}