import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITestimonial extends Document {
  text: string;
  name: string;
  title: string;
  location: string;
  order: number;
}

const TestimonialSchema: Schema = new Schema(
  {
    text: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Testimonial: Model<ITestimonial> = mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
export default Testimonial;
