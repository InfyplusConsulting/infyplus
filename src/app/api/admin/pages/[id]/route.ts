import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db";
import Page from "@/models/Page";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await dbConnect();
    const page = await Page.findById(id).lean();
    
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ page }, { status: 200 });
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ error: "Failed to fetch page" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    await dbConnect();
    
    // Check if new slug already exists for a different page
    if (body.slug) {
      const existingPage = await Page.findOne({ slug: body.slug, _id: { $ne: id } });
      if (existingPage) {
        return NextResponse.json({ error: "Another page with this slug already exists" }, { status: 400 });
      }
    }

    const page = await Page.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ page, message: "Page updated successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error updating page:", error);
    return NextResponse.json({ error: error.message || "Failed to update page" }, { status: 500 });
  }
}
