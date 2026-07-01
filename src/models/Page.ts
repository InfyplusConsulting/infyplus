import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPage extends Document {
  pageId: string;
  title: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
  };
  content: Record<string, any>;
}

const PageSchema: Schema = new Schema(
  {
    pageId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    seo: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      keywords: { type: [String], default: [] },
      canonical: { type: String },
    },
    content: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

const Page: Model<IPage> = mongoose.models.Page || mongoose.model<IPage>("Page", PageSchema);
export default Page;
