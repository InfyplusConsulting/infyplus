import { getPage, getTestimonials } from "@/lib/data";
import HomeScripts from "@/components/HomeScripts";
import Testimonials from "@/components/Testimonials";

export async function generateMetadata() {
  const pageData = await getPage("home");
  return {
    title: pageData?.seo?.title || "InfyPlus Consulting",
    description: pageData?.seo?.description || "",
    keywords: pageData?.seo?.keywords?.join(", ") || "",
    alternates: {
      canonical: pageData?.seo?.canonical,
    },
  };
}

export default async function Home() {
  const pageData = await getPage("home");
  const testimonials = await getTestimonials();

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { content } = pageData;

  return (
    <>
      <HomeScripts />
      
      {/* Hero Section with Particle Background */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-center responsive-video" 
        style={{ background: "#040914", overflow: "hidden", width: "100%", padding: "0", height: "80vh" }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src={content.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <div id="particles-js" style={{ position: "absolute", zIndex: -10 }}></div>

      {/* Banner */}
      <section className="container-fluid" style={{ backgroundColor: "black", padding: "40px 0" }}>
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6 text-white px-5">
            <h2 style={{ fontWeight: "bold", fontSize: "2.2rem", lineHeight: 1.4, marginLeft: "40px" }} dangerouslySetInnerHTML={{ __html: content.bannerTitle.replace("Data-Driven Strategic Marketing", "<span style='color: #0c52a2;'>Data-Driven Strategic Marketing</span>") }} />
          </div>
          {/* Right Image */}
          <div className="col-md-6 text-center px-4 mt-4 mt-md-0">
            <img src={content.bannerImage} alt="Strategic Marketing" className="img-fluid" style={{ maxWidth: "500px", width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section style={{ backgroundColor: "#f2f6fb", padding: "60px 20px" }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <div className="container-p">
                <div id="left-circle" className="circle"></div>
                <h1 className="pipe">{">>>"}</h1>
                <div id="right-circle" className="circle"></div>
              </div>
              <h2 style={{ fontWeight: "bold", marginTop: "20px", marginBottom: "15px" }}>{content.philosophyTitle}</h2>
              <p style={{ fontSize: "1rem", color: "#000", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: content.philosophyText.replace("'Connecting the Right Dots.'", "<span style='color: #0c52a2; font-weight: bold;'>‘Connecting the Right Dots.’</span>").replace(/relevant insights|strategic elements|growth|impact|data-driven/g, "<strong>$&</strong>") }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "40px 20px", backgroundColor: "#f0f4fc" }}>
        <h2 style={{ textAlign: "center", color: "#0c52a2", marginBottom: "30px" }}>{content.whyChooseUsTitle}</h2>
        <div style={{ maxWidth: "900px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <ul style={{ listStyleType: "none", padding: 0, flex: 1, minWidth: "300px" }}>
            {content.whyChooseUsBullets.map((bullet: string, idx: number) => {
              const [title, desc] = bullet.split(" – ");
              return (
                <li key={idx} style={{ marginBottom: "15px" }}>
                  <span style={{ color: "#0c52a2", fontWeight: "bold" }}>{title} – </span>{desc}
                </li>
              );
            })}
          </ul>
          <img src={content.whyChooseUsImage} alt="Why Choose Us" style={{ maxWidth: "350px", width: "100%", height: "auto", marginTop: "20px" }} />
        </div>
      </section>

      {/* How We Work */}
      <section style={{ backgroundColor: "#e8effa", padding: "60px 20px", paddingBottom: "80px" }}>
        <div className="container text-center">
          <h2 style={{ color: "#0c52a2", fontWeight: "bold", marginBottom: "40px" }}>{content.howWeWorkTitle}</h2>
          <div className="row justify-content-center align-items-center">
            {/* Left Illustration */}
            <div className="col-md-2 d-none d-md-block">
              <img src="https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782947875/7.1_ylpllr.png" alt="Left Illustration" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            {/* Main Content */}
            <div className="col-md-8">
              <div className="row text-center justify-content-center align-items-center">
                <div className="col-12 mb-4">
                  <h6 style={{ color: "#0c52a2", fontWeight: "bold" }}>{content.howWeWorkSteps[0].title}</h6>
                  <p style={{ margin: 0 }}>{content.howWeWorkSteps[0].desc}</p>
                </div>
                <div className="col-12 d-flex flex-wrap justify-content-around align-items-center">
                  <div style={{ flex: 1, minWidth: "200px", padding: "10px" }}>
                    <div style={{ marginBottom: "40px" }}>
                      <h6 style={{ color: "#0c52a2", fontWeight: "bold" }}>{content.howWeWorkSteps[1].title}</h6>
                      <p style={{ margin: 0 }}>{content.howWeWorkSteps[1].desc}</p>
                    </div>
                    <div style={{ marginTop: "40px", position: "absolute" }} className="position">
                      <h6 style={{ color: "#0c52a2", fontWeight: "bold" }}>{content.howWeWorkSteps[2].title}</h6>
                      <p style={{ margin: 0 }}>{content.howWeWorkSteps[2].desc}</p>
                    </div>
                  </div>
                  <div style={{ flex: "0 0 auto", padding: "10px" }} className="dn">
                    <img src="https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782947876/6.1_gn9vqa.png" alt="Cycle Diagram" style={{ width: "140px", maxWidth: "100%" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: "200px", padding: "10px", paddingTop: "10px" }}>
                    <div style={{ marginBottom: "40px" }}>
                      <h6 style={{ color: "#0c52a2", fontWeight: "bold" }}>{content.howWeWorkSteps[3].title}</h6>
                      <p style={{ margin: 0 }}>{content.howWeWorkSteps[3].desc}</p>
                    </div>
                    <div style={{ marginTop: "30px", position: "absolute", marginLeft: "-50px" }} className="p-mrep">
                      <h6 style={{ color: "#0c52a2", fontWeight: "bold" }}>{content.howWeWorkSteps[4].title}</h6>
                      <p style={{ margin: 0 }}>{content.howWeWorkSteps[4].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Illustration */}
            <div className="col-md-2 d-none d-md-block">
              <img src="https://res.cloudinary.com/dsi8rmtfp/image/upload/v1782947875/7_wufd8v.png" alt="Right Illustration" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", alignItems: "stretch" }}>
            {content.transformationImages.map((img: string, idx: number) => (
              <div key={idx} style={{ flex: "1 1 300px", maxWidth: "100%" }}>
                <img src={img} alt={`Business Strategy ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
              </div>
            ))}
          </div>
          <p style={{ marginTop: "30px", fontSize: "18px", color: "#0c52a2", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: content.transformationSubtitle.replace("ideas but about linking", "ideas but about linking<br>") }} />
        </div>
      </section>

      {/* Our Clients Section */}
      <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#e1e7f2" }}>
        <h2 style={{ color: "#0c52a2", marginBottom: "30px" }}>Our Clients</h2>
        <div className="client-logo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", border: "1px solid black", maxWidth: "1093px", margin: "auto", overflowX: "hidden" }}>
          {content.clientLogos.map((logo: string, idx: number) => (
            <img key={idx} src={logo} alt={`Client ${idx + 1}`} style={{ width: "100%", height: "auto", border: "1px solid black" }} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </>
  );
}
