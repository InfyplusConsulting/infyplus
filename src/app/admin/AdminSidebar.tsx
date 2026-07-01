"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: "fas fa-home" },
    { href: "/admin/pages", label: "Pages & SEO", icon: "fas fa-file-alt" },
    { href: "/admin/blogs", label: "Blogs", icon: "fas fa-blog" },
    { href: "/admin/services", label: "Services", icon: "fas fa-cogs" },
    { href: "/admin/testimonials", label: "Testimonials", icon: "fas fa-quote-left" },
    { href: "/admin/faqs", label: "FAQs", icon: "fas fa-question-circle" },
  ];

  const baseStyle: React.CSSProperties = {
    padding: "12px 14px",
    borderRadius: "10px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "background-color 0.2s ease, color 0.2s ease",
  };

  const activeStyle: React.CSSProperties = {
    ...baseStyle,
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontWeight: 600,
  };

  const inactiveStyle: React.CSSProperties = {
    ...baseStyle,
    color: "#e2e8f0",
  };

  return (
    <aside style={{ width: "260px", background: "linear-gradient(180deg, #040914 0%, #0b1730 100%)", color: "#fff", padding: "24px 20px", display: "flex", flexDirection: "column", boxShadow: "8px 0 24px rgba(2, 8, 23, 0.15)" }}>
      <div style={{ marginBottom: "28px" }}>
        <h3 style={{ color: "#7ec2ff", margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>InfyPlus Admin</h3>
        <p style={{ margin: "6px 0 0", color: "#94a3b8", fontSize: "13px" }}>Content management hub</p>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} style={isActive ? activeStyle : inactiveStyle}>
              <i className={link.icon}></i> {link.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "16px" }}>
        <LogoutButton />
      </div>
    </aside>
  );
}