"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="btn btn-outline-light d-flex align-items-center justify-content-center w-100 mt-3"
      style={{ padding: "10px" }}
    >
      <i className="fas fa-sign-out-alt me-2"></i> Logout
    </button>
  );
}
