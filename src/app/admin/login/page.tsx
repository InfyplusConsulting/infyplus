"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #f4f8ff 0%, #e8f1ff 100%)", padding: "24px" }}>
      <div style={{ maxWidth: "430px", width: "100%", padding: "36px", backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 20px 45px rgba(12, 82, 162, 0.14)", border: "1px solid #e6eefc" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ width: "56px", height: "56px", margin: "0 auto 14px", borderRadius: "16px", background: "linear-gradient(135deg, #0c52a2, #1c78e3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "24px", fontWeight: 700 }}>
            I
          </div>
          <h2 style={{ margin: 0, color: "#0c52a2", fontSize: "28px", fontWeight: 700 }}>Admin Login</h2>
          <p style={{ margin: "8px 0 0", color: "#5b6b82", fontSize: "14px" }}>Sign in to manage your website content</p>
        </div>

        {error && (
          <div style={{ padding: "12px 14px", marginBottom: "16px", backgroundColor: "#fff1f2", color: "#b42318", borderRadius: "10px", border: "1px solid #fecdd3", fontSize: "14px" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: 600 }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: 600 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #cbd5e1", outline: "none", fontSize: "15px", boxSizing: "border-box" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: "100%", padding: "13px 16px", border: "none", borderRadius: "10px", background: loading ? "#6b8fbf" : "linear-gradient(135deg, #0c52a2, #1c78e3)", color: "#fff", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 10px 20px rgba(12, 82, 162, 0.2)" }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
