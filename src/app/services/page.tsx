import { getPage, getServices } from "@/lib/data";
import HomeScripts from "@/components/HomeScripts";

export async function generateMetadata() {
  const pageData = await getPage("services");
  return {
    title: pageData?.seo?.title || "Services | InfyPlus Consulting",
    description: pageData?.seo?.description || "",
    keywords: pageData?.seo?.keywords?.join(", ") || "",
    alternates: {
      canonical: pageData?.seo?.canonical,
    },
  };
}

export default async function Services() {
  const pageData = await getPage("services");
  const services = await getServices();

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { content } = pageData;

  return (
    <>
      <HomeScripts />

      {/* Hero Section */}
      <section 
        className="d-flex align-items-center justify-content-center text-center position-relative"
        style={{ height: "60vh", background: "linear-gradient(to bottom, #040914, #0a192f)", overflow: "hidden" }}
      >
        <div id="particles-js" style={{ position: "absolute", zIndex: 1, top: 0, left: 0, width: "100%", height: "100%", opacity: 0.8 }}></div>

        <div className="container position-relative text-white px-3" style={{ zIndex: 2 }}>
          <h1 
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800", letterSpacing: "-1px" }} 
            dangerouslySetInnerHTML={{ __html: content.title.replace("Services", "<span style='color: #3b82f6'>Services</span>") }} 
          />
          <p 
            className="mt-3 mx-auto" 
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", maxWidth: "700px", color: "#94a3b8", lineHeight: "1.6" }}
          >
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ backgroundColor: "#f8fafc", padding: "80px 0", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          
          <div className="row g-4">
            {services.map((service: any, idx: number) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                
                {/* Flat Service Card (No shadow, no hover) */}
                <div 
                  className="card h-100 p-4" 
                  style={{ 
                    borderRadius: "12px", 
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff"
                  }}
                >
                  {/* Direct Icon (No outer box, size increased) */}
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="mb-4"
                    style={{ 
                      width: "56px", 
                      height: "56px", 
                      objectFit: "contain",
                      display: "block"
                    }} 
                  />

                  {/* Content */}
                  <h4 style={{ color: "#0f172a", fontWeight: "700", marginBottom: "12px" }}>
                    {service.title}
                  </h4>
                  <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                    {service.description}
                  </p>

                  {/* Custom Bullet List */}
                  <ul className="list-unstyled mb-0 mt-auto">
                    {service.bullets.map((bullet: string, bIdx: number) => (
                      <li key={bIdx} className="d-flex align-items-start mb-2">
                        <span style={{ color: "#2563eb", marginRight: "10px", marginTop: "2px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span style={{ color: "#475569", fontSize: "0.9rem", fontWeight: "500" }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}