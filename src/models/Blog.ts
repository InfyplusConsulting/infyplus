import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  synopsis: string;
  content: string;
  author: string;
  category: string;
  image: string;
  datePublished: Date;
  dateModified: Date;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    synopsis: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "Vaibhav Nigam" },
    category: { type: String, required: true },
    image: { type: String, required: true },
    datePublished: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now },
    seo: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      keywords: { type: [String], default: [] },
    },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export default Blog;
