"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/career" },
  ];

  return (
    <nav 
      className="w-100 shadow-sm" 
      style={{ 
        backgroundColor: "#040914", 
        position: "sticky", 
        top: 0, 
        zIndex: 1050,
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <div className="container-fluid px-4 py-3 d-flex justify-content-between align-items-center">
        
        {/* Logo Section */}
        <Link href="/" className="text-decoration-none">
          <img src="/assets/images/logo.png" alt="InfyPlus Logo" style={{ width: "180px", height: "auto" }} />
        </Link>

        {/* Mobile Toggle Button (Visible only on screens smaller than lg) */}
        <button
          className="d-lg-none btn p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          style={{ border: "1px solid rgba(255,255,255,0.2)", background: "transparent" }}
        >
          <span 
            style={{
              display: "block",
              width: "26px",
              height: "26px",
              transition: "background-image 0.2s ease-in-out",
              backgroundImage: isMenuOpen 
                ? `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23fefefe' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M7 7l16 16M7 23l16-16'/%3E%3C/svg%3E")`
                : `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23fefefe' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
              backgroundSize: "cover"
            }}
          />
        </button>

        {/* Desktop Links (Hidden on mobile, visible on lg and above) */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: isActive ? "#0c52a2" : "#ffffff",
                  fontWeight: isActive ? "700" : "500",
                  textDecoration: "none",
                  fontSize: "1rem",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0c52a2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#0c52a2" : "#ffffff")}
              >
                {link.label}
              </Link>
            );
          })}
          <a 
            href="#contact-us" 
            style={{
              color: "#ffffff",
              fontWeight: "500",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0c52a2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Rendered conditionally based on state) */}
      {isMenuOpen && (
        <div className="d-lg-none px-4 pb-4 pt-2" style={{ backgroundColor: "#040914" }}>
          <div className="d-flex flex-column gap-3">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: isActive ? "#0c52a2" : "#ffffff",
                    fontWeight: isActive ? "700" : "500",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    display: "block",
                    padding: "8px 0"
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a 
              href="#contact-us" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                color: "#ffffff", 
                fontWeight: "500", 
                textDecoration: "none", 
                fontSize: "1.1rem",
                display: "block",
                padding: "8px 0"
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}