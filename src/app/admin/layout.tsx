import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminSidebar from "./AdminSidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f7faff 0%, #eef5ff 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(135deg, #f7faff 0%, #eef5ff 100%)", color: "#0f172a" }}>
      <AdminSidebar />

      <main style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
