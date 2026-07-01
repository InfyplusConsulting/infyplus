import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .ul-res {
            width: auto !important;
          }
          .ul-res-div {
            flex-direction: column;
          }
        }
      `}</style>
      <footer style={{ backgroundColor: "#000", color: "white", padding: "40px 20px", marginTop: "auto" }} id="contact-us">
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
            
            {/* Left Column */}
            <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
              <h6 style={{ color: "#0c52a2" }}>Connecting the RIGHT Dots!</h6>
              <p>
                At InfyPlus Consulting, we revolutionize business operations with our insightful thinking, strategic digital approaches, and out-of-the-box strategies.
              </p>
            </div>
            
            {/* Middle Column - Services */}
            <div style={{ flex: "1 1 450px", minWidth: "300px" }}>
              <h6 style={{ color: "#0c52a2" }}>SERVICES</h6>
              <div style={{ display: "flex", gap: "10px" }} className="ul-res-div">
                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, fontSize: "14px", width: "50%" }} className="ul-res">
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Marketing Consulting</Link>
                  </li>
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Brand Strategy</Link>
                  </li>
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Brand Relaunch & Repositioning</Link>
                  </li>
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Brand Audits</Link>
                  </li>
                </ul>
                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, fontSize: "14px", width: "50%" }} className="ul-res">
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Market Research</Link>
                  </li>
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Social Media Management</Link>
                  </li>
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Performance Marketing</Link>
                  </li>
                  <li>
                    <Link href="/services" style={{ color: "white", textDecoration: "none" }} className="footer-service-link">• Website Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column */}
            <div style={{ flex: "1 1 220px", minWidth: "200px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <p style={{ fontSize: "14px", textAlign: "right" }}>
                <strong>(+91) 922 042 7172</strong>
                <br />
                connect@infyplus.com
              </p>
            
              <div className="social-icons" style={{ marginTop: "20px" }}>
                <a href="https://www.linkedin.com/company/infyplus" target="_blank" rel="noopener noreferrer" style={{ color: "black", margin: "0 6px" }}>
                  <i className="fab fa-linkedin fa-lg" style={{ color: "white", transition: "color 0.3s ease" }}></i>
                </a>
                <a href="https://www.facebook.com/infyplus.consulting" target="_blank" rel="noopener noreferrer" style={{ color: "black", margin: "0 6px" }}>
                  <i className="fab fa-facebook fa-lg" style={{ color: "white", transition: "color 0.3s ease" }}></i>
                </a>
                <a href="https://www.instagram.com/infyplusconsulting" target="_blank" rel="noopener noreferrer" style={{ color: "black", margin: "0 6px" }}>
                  <i className="fab fa-instagram fa-lg" style={{ color: "white", transition: "color 0.3s ease" }}></i>
                </a>
                <a href="https://wa.me/919220427172" target="_blank" rel="noopener noreferrer" style={{ color: "black", margin: "0 6px" }}>
                  <i className="fab fa-whatsapp fa-lg" style={{ color: "white", transition: "color 0.3s ease" }}></i>
                </a>
              </div>
            </div>
      
          </div>
        </div>
      </footer>
    </>
  );
}
