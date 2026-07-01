import dbConnect from "./db";
import Page from "@/models/Page";
import Blog from "@/models/Blog";
import Service from "@/models/Service";
import FAQ from "@/models/FAQ";
import Testimonial from "@/models/Testimonial";
import * as mockData from "./mockData";

export async function getTestimonials() {
  try {
    await dbConnect();
    const data = await Testimonial.find({}).sort({ order: 1 }).lean();
    if (data && data.length > 0) {
      return data.map((d: any) => ({
        text: d.text,
        name: d.name,
        title: d.title,
        location: d.location,
        order: d.order
      }));
    }
  } catch (error) {
    console.error("Failed to fetch testimonials from DB, falling back to mock data", error);
  }
  return mockData.testimonials;
}

export async function getServices() {
  try {
    await dbConnect();
    const data = await Service.find({}).sort({ order: 1 }).lean();
    if (data && data.length > 0) {
      return data.map((d: any) => ({
        title: d.title,
        icon: d.icon,
        description: d.description,
        bullets: d.bullets,
        order: d.order
      }));
    }
  } catch (error) {
    console.error("Failed to fetch services from DB, falling back to mock data", error);
  }
  return mockData.services;
}

export async function getFAQs(page: string) {
  try {
    await dbConnect();
    const data = await FAQ.find({ page }).sort({ order: 1 }).lean();
    if (data && data.length > 0) {
      return data.map((d: any) => ({
        question: d.question,
        answer: d.answer,
        page: d.page,
        order: d.order
      }));
    }
  } catch (error) {
    console.error(`Failed to fetch FAQs for ${page} from DB, falling back to mock data`, error);
  }
  return mockData.faqs.filter(f => f.page === page);
}

export async function getPage(pageId: string) {
  try {
    await dbConnect();
    const data = await Page.findOne({ pageId }).lean();
    if (data) {
      return {
        pageId: data.pageId,
        title: data.title,
        seo: data.seo,
        content: data.content
      };
    }
  } catch (error) {
    console.error(`Failed to fetch page ${pageId} from DB, falling back to mock data`, error);
  }
  return mockData.pages[pageId];
}

export async function getBlogs() {
  try {
    await dbConnect();
    const data = await Blog.find({}).sort({ datePublished: -1 }).lean();
    if (data && data.length > 0) {
      return data.map((d: any) => ({
        title: d.title,
        slug: d.slug,
        synopsis: d.synopsis,
        content: d.content,
        author: d.author,
        category: d.category,
        image: d.image,
        datePublished: d.datePublished instanceof Date ? d.datePublished.toISOString().split('T')[0] : String(d.datePublished),
        dateModified: d.dateModified instanceof Date ? d.dateModified.toISOString().split('T')[0] : String(d.dateModified),
        seo: d.seo
      }));
    }
  } catch (error) {
    console.error("Failed to fetch blogs from DB, falling back to mock data", error);
  }
  return mockData.blogs;
}

export async function getBlogBySlug(slug: string) {
  try {
    await dbConnect();
    const d = await Blog.findOne({ slug }).lean() as any;
    if (d) {
      return {
        title: d.title,
        slug: d.slug,
        synopsis: d.synopsis,
        content: d.content,
        author: d.author,
        category: d.category,
        image: d.image,
        datePublished: d.datePublished instanceof Date ? d.datePublished.toISOString().split('T')[0] : String(d.datePublished),
        dateModified: d.dateModified instanceof Date ? d.dateModified.toISOString().split('T')[0] : String(d.dateModified),
        seo: d.seo
      };
    }
  } catch (error) {
    console.error(`Failed to fetch blog ${slug} from DB, falling back to mock data`, error);
  }
  return mockData.blogs.find(b => b.slug === slug);
}
