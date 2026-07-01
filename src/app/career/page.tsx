import { getPage } from "@/lib/data";

export async function generateMetadata() {
  const pageData = await getPage("careers");
  return {
    title: pageData?.seo?.title || "Career | Infy+ consulting",
    description: pageData?.seo?.description || "",
    keywords: pageData?.seo?.keywords?.join(", ") || "",
    alternates: {
      canonical: pageData?.seo?.canonical,
    },
  };
}

export default async function Career() {
  const pageData = await getPage("careers");

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { content } = pageData;

  return (
    <div className="container-fluid" style={{ paddingTop: "10px", minHeight: "100vh", background: "#ffff" }}>
      <div className="row align-items-center">
        <div className="col-lg-6 d-lg-block">
          <img src={content.bannerImage} alt="banner" className="banner-img" />
        </div>
        <div className="col-lg-6">
          <div className="contact-form">
            <h2 style={{ marginBottom: "40px" }} className="text-center">
              Join Our <span style={{ color: "#08b3ca" }}>Team</span>
            </h2>
            <div className="col-md-12 text-center">
              <a 
                href={content.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-custom btn-primary" 
                style={{ background: "#0c52a2", color: "white" }}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
