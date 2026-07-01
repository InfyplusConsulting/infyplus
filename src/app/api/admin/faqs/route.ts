import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db";
import FAQ from "@/models/FAQ";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const faqs = await FAQ.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json({ faqs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json({ error: "Failed to fetch FAQs" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    
    const faq = await FAQ.create(body);
    return NextResponse.json({ faq, message: "FAQ created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating FAQ:", error);
    return NextResponse.json({ error: error.message || "Failed to create FAQ" }, { status: 500 });
  }
}
