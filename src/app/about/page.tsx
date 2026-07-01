import { getPage } from "@/lib/data";

export async function generateMetadata() {
  const pageData = await getPage("about");
  return {
    title: pageData?.seo?.title || "About | Infy+ Consulting",
    description: pageData?.seo?.description || "",
    keywords: pageData?.seo?.keywords?.join(", ") || "",
    alternates: {
      canonical: pageData?.seo?.canonical,
    },
  };
}

export default async function About() {
  const pageData = await getPage("about");

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { content } = pageData;

  return (
    <>
      {/* Hero Section with Video Background */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-center responsive-video" 
        style={{ background: "#040914", overflow: "hidden", width: "100%", padding: "0", height: "80vh" }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, marginTop: "0px" }}
        >
          <source src={"https://res.cloudinary.com/dsi8rmtfp/video/upload/v1782945674/whatsapp_video_2025-04-21_at_7.02.50_pm_f7nq41.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Who We Are? */}
      <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", color: "#0c52a2", marginBottom: "15px" }}>
            {content.whoWeAreTitle}
          </h1>
          <p style={{ marginTop: "30px", fontSize: "18px", color: "#000" }}>
            <span style={{ color: "#000", fontWeight: 700 }}>InfyPlus Consulting</span> {content.whoWeAreText.replace("InfyPlus Consulting is a leading strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence. ", "is a leading strategic marketing firm specializing in data-driven growth strategies, brand development, and digital excellence. ")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: "#f2f6fb", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto", fontFamily: "'Segoe UI', sans-serif", color: "#1a1a1a" }}>
          <h2 style={{ color: "#0c52a2", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: "bold", textAlign: "center", marginBottom: "25px" }}>
            {content.storyTitle}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }} className="images-center">
            {/* Image */}
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <img src={content.founderImage || "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782945703/vn_ol4fdb.png"} alt="Founder" style={{ width: "100%", maxWidth: "200px", borderRadius: "6px", marginBottom: "10px" }} />
              <p style={{ fontWeight: "bold", marginBottom: "4px" }}>{content.founderName}</p>
              <p style={{ margin: 0 }}>Founder -</p>
              <p style={{ margin: 0 }}>InfyPlus Consulting</p>
            </div>
            {/* Text Content */}
            <div style={{ flex: "1 1 400px" }} className="text-content">
              {content.storyParagraphs.map((paragraph: string, index: number) => {
                if (index === 0) {
                  return (
                    <p key={index} style={{ fontSize: "1rem", lineHeight: 1.6, textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: paragraph.replace("InfyPlus", "<strong>InfyPlus</strong>").replace("marketing isn’t just about visibility, it’s about creating value-driven impact", "<em>marketing isn’t just about visibility, it’s about creating value-driven impact</em>") }} />
                  );
                } else if (index === 1) {
                  return (
                    <p key={index} style={{ fontSize: "1rem", lineHeight: 1.6, textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: paragraph.replace("Vaibhav Nigam", "<strong>Vaibhav Nigam</strong>").replace("Hult International Business School", "<strong>Hult International Business School</strong>").replace("Queen Margaret University", "<strong>Queen Margaret University</strong>").replace("ISB Hyderabad", "<strong>ISB Hyderabad</strong>") }} />
                  );
                } else if (index === 3) {
                  return (
                    <p key={index} style={{ fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic", color: "#333", textAlign: "justify" }}>
                      {paragraph}
                    </p>
                  );
                } else if (index === 4) {
                  return (
                    <p key={index} style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold", marginBottom: "5px", textAlign: "justify" }}>
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={index} style={{ fontSize: "1rem", lineHeight: 1.6, marginTop: index === 6 ? "10px" : "0", textAlign: "justify" }}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Guiding Force */}
      <section style={{ backgroundColor: "#e9f0fb", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto", fontFamily: "'Segoe UI', sans-serif", color: "#1a1a1a" }}>
          <h2 style={{ color: "#0c52a2", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
            {content.mentorTitle}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "flex-start", justifyContent: "space-between" }} className="guiding-img">
            {/* Left Text Content */}
            <div style={{ flex: "1 1 60ch", minWidth: "280px" }} className="text-content">
              {content.mentorParagraphs.map((paragraph: string, index: number) => {
                if (index === 0) {
                  return (
                    <p key={index} style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: paragraph.replace("Dr. Rakesh Arya", "<strong>Dr. Rakesh Arya</strong>") }} />
                  );
                } else if (index === 3) {
                  return (
                    <p key={index} style={{ fontStyle: "italic", fontWeight: 600, margin: "15px 0", color: "#1a1a1a", textAlign: "justify" }}>
                      {paragraph}
                    </p>
                  );
                }
                return <p key={index} style={{ textAlign: "justify" }}>{paragraph}</p>;
              })}
            </div>
            {/* Image and Bio */}
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <img src={content.mentorImage || "https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782945701/ra_gewx5h.png"} alt={content.mentorName} style={{ width: "100%", maxWidth: "200px", borderRadius: "6px", marginBottom: "10px" }} />
              <p style={{ fontWeight: "bold", marginBottom: "4px" }}>{content.mentorName}</p>
              <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: content.mentorTitleText.replace(" | ", "<br>") }} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ backgroundColor: "#000", padding: "50px 20px", color: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "auto", fontFamily: "'Segoe UI', sans-serif", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", marginBottom: "40px" }}>
            {content.successTitle}
          </h2>
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column-reverse", alignItems: "center", alignContent: "flex-end", flexWrap: "wrap" }}>
            {content.successStories.map((story: any, idx: number) => (
              <p key={idx} style={{ textAlign: "justify" }}>
                <span style={{ color: "#0c52a2", fontWeight: "bold" }}>{story.label}:</span> {story.text}
              </p>
            ))}
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}
