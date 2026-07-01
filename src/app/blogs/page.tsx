import { getBlogs } from "@/lib/data";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | InfyPlus Consulting - Insights & Strategies",
  description: "Stay updated with the latest insights, strategies, and marketing trends from InfyPlus Consulting. Discover expert articles on digital marketing, brand development, and data-driven growth.",
  alternates: {
    canonical: "https://infyplus.com/blogs",
  }
};

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <section id="blogs" style={{ backgroundColor: "#fefefe", paddingTop: "1rem", paddingBottom: "3rem", minHeight: "100vh" }}>
      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row">
          {blogs.map((blog: any, idx: number) => (
            <div key={idx} className="col-md-4 mb-4 d-flex">
              <Link href={`/blogs/${blog.slug}`} className="w-100 text-decoration-none text-dark">
                <div className="blog-card h-100 d-flex flex-column">
                  <img src={blog.image} className="blog-image" alt={blog.title} />
                  <div className="blog-content flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="blog-title">{blog.title}</h5>
                      <div className="blog-meta">{blog.category} | By {blog.author} | {blog.datePublished}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
