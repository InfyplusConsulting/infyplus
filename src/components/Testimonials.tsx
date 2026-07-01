"use client";

import { useEffect, useState } from "react";

export default function Testimonials({ testimonials }: { testimonials: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      showTestimonials("next");
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const showTestimonials = (direction: "next" | "prev") => {
    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 1 : 3;

    if (direction === "next") {
      setCurrentIndex((prev) => (prev + step) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - step + testimonials.length) % testimonials.length);
    }
  };

  const getVisibleTestimonials = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const itemsToShow = isMobile ? 1 : 3;
    const visible = [];

    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section style={{ backgroundColor: "#e8effa", padding: "60px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2 style={{ color: "#0c52a2", fontWeight: "bold", marginBottom: "40px" }}>Client Testimonials</h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          {/* Left Arrow */}
          <div onClick={() => showTestimonials("prev")} style={{ cursor: "pointer" }}>
            <span style={{ fontSize: "24px", color: "#0c52a2" }}>&#10094;</span>
          </div>

          {/* Testimonials Container */}
          <div style={{ flex: 1, maxWidth: "100%", display: "flex", justifyContent: "center", overflow: "hidden" }}>
            {visibleTestimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  flex: "0 0 auto",
                  minWidth: "280px",
                  maxWidth: "300px",
                  margin: "10px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "300px",
                }}
              >
                <p style={{ fontStyle: "italic", fontSize: "14px" }}>"{t.text}"</p>
                <p style={{ fontWeight: "bold", color: "#0c52a2", marginTop: "auto" }}>
                  — {t.name}
                  <br />
                  <span style={{ fontWeight: "normal" }}>
                    {t.title}
                    <br />
                    {t.location}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div onClick={() => showTestimonials("next")} style={{ cursor: "pointer" }}>
            <span style={{ fontSize: "24px", color: "#0c52a2" }}>&#10095;</span>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: "50px" }}>
          <h4 style={{ color: "#0c52a2", fontWeight: "bold" }}>Let’s Build Your Marketing Strategy</h4>
          <p style={{ textAlign: "center" }}>Book a free consultation.</p>
          <a
            href="https://wa.me/919220427172"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#0c52a2", color: "white", padding: "10px 25px", textDecoration: "none", borderRadius: "4px" }}
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </section>
  );
}
