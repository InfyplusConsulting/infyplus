require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const cheerio = require('cheerio');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env");
  process.exit(1);
}

// Minimal Blog Schema for insertion
const blogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  snippet: String,
  category: String,
  author: String,
  datePublished: String,
  imageUrl: String,
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

const blogsData = [
  {
    file: 'organizational-transformation.html',
    slug: 'organizational-transformation',
    category: 'IT Consulting Services',
    author: 'Vaibhav Nigam',
    datePublished: 'July 15, 2024',
    imageUrl: '/blogs-images/corporate-connected-teamwork-perforated-paper-gear-1400x800.jpg',
  },
  {
    file: 'integrated-marketing-communications.html',
    slug: 'integrated-marketing-communications',
    category: 'Integrated Marketing',
    author: 'Vaibhav Nigam',
    datePublished: 'July 11, 2024',
    imageUrl: '/blogs-images/pointing-black-background-transparent-falling-hourglass-700x500.jpg',
  },
  {
    file: 'strategic-planning.html',
    slug: 'strategic-planning',
    category: 'Strategic Planning',
    author: 'Vaibhav Nigam',
    datePublished: 'July 10, 2024',
    imageUrl: '/blogs-images/top-view-business-items-with-growth-chart-hands-holding-arrow-700x500.jpg',
  },
  {
    file: 'customer-experience-strategies.html',
    slug: 'customer-experience-strategies',
    category: 'Customer Experience',
    author: 'Vaibhav Nigam',
    datePublished: 'July 9, 2024',
    imageUrl: '/blogs-images/collage-customer-experience-concept-3-700x500.jpg',
  },
  {
    file: 'strong-brand-identity.html',
    slug: 'strong-brand-identity',
    category: 'Branding',
    author: 'Vaibhav Nigam',
    datePublished: 'July 4, 2024',
    imageUrl: '/blogs-images/online-marketing-1400x800.jpg',
  },
  {
    file: 'data-strategies.html',
    slug: 'data-strategies',
    category: 'Analytics',
    author: 'Vaibhav Nigam',
    datePublished: 'July 1, 2024',
    imageUrl: '/blogs-images/representation-user-experience-interface-design-computer-scaled.jpg',
  }
];

async function seedBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB...");
    
    for (const data of blogsData) {
      const filePath = path.join(__dirname, 'blogs', data.file);
      if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        continue;
      }
      
      const html = fs.readFileSync(filePath, 'utf-8');
      const $ = cheerio.load(html);
      
      // Extract the title
      const title = $('section.hero h2').text().trim();
      
      // Extract the content container
      // In the HTML, the content starts after `<div class="container" ...>`
      // and ends before `<style>` or `<footer`
      let contentHtml = '';
      
      const container = $('div.container').filter((i, el) => {
          return $(el).find('section.hero').length > 0;
      });
      
      if (container.length > 0) {
          // Remove the hero section from the container HTML to get just the text
          container.find('section.hero').remove();
          contentHtml = container.html().trim();
      }
      
      // Create a snippet from the first paragraph text
      const snippet = $('p').first().text().replace('Synopsis:', '').trim().substring(0, 150) + '...';

      const existingBlog = await Blog.findOne({ slug: data.slug });
      if (!existingBlog) {
        await Blog.create({
          title: title || data.slug.split('-').join(' '),
          slug: data.slug,
          content: contentHtml,
          snippet,
          category: data.category,
          author: data.author,
          datePublished: data.datePublished,
          imageUrl: data.imageUrl
        });
        console.log(`Inserted: ${data.slug}`);
      } else {
        console.log(`Already exists: ${data.slug}`);
      }
    }
    
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding blogs:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedBlogs();
