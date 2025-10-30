# 🏝️ Ulaman Eco Luxury Resort — Website Clone

A **modern web recreation** of the  website, built to showcase elegant design, smooth animations, and responsive interaction.
This project reflects my focus on **frontend precision, UI aesthetics, and modern web tooling**.

---

## ✨ Highlights

* 🌿 **Pixel-perfect** recreation of a real-world luxury brand website
* ⚡ **Fast and optimized** with Vite and React 18
* 📱 **Fully responsive** for all devices
* 🎨 **Smooth animations & minimalist design** inspired by the resort’s natural theme
* 💡 Built to demonstrate **frontend craftsmanship** and attention to detail

---

## 🧠 My Role

* Implemented **responsive UI** with Tailwind CSS and shadcn/ui
* Designed **smooth page transitions** using Framer Motion
* Structured clean, maintainable React components
* Deployed production build on **Vercel** for live preview

---

## 🧱 Tech Stack

| Category     | Tools                            |
| ------------ | -------------------------------- |
| Framework    | **React 18 + Vite**              |
| Styling      | **Tailwind CSS, shadcn/ui**      |
| Data & Logic | **TanStack Query, React Router** |
| Icons        | **Lucide Icons**                 |
| Deployment   | **Vercel**                       |

---

## 🚀 Getting Started

```bash
git clone git clone https://github.com/Aul-rhmn/ulamanclone.git
cd ulaman-resort-clone
npm install
npm run dev
```

Then visit **[http://localhost:8080](http://localhost:8080)**

---

## 🧩 Folder Structure

```
src/
├── components/   # Reusable UI & sections
├── pages/        # Route-level components
├── hooks/        # Custom hooks
├── lib/          # Utilities & helpers
└── types/        # TypeScript definitions
```

---

## 🎨 Design Philosophy

The design blends **natural textures and modern minimalism**, inspired by the resort’s eco-luxury concept.
Typography combines **Playfair Display** (for elegance) and **Inter** (for clarity), creating a calm yet premium look.

---

## 🌍 Live Demo

🔗 **[View on Vercel](https://ulamanclone.vercel.app/)**

---

## 🧾 License

---

## My Answer

1. I design component hierarchy using an atomic approach starting from small reusable UI elements that combine into larger components. This ensures modularity, easier maintenance, and scalability when adding new features.

2. For state management, I use local state for component specific logic and global state for shared data such as user sessions or theme. The choice depends on how widely the data is accessed across the app.

3. My responsive strategy involves Tailwind’s responsive utilities, CSS Grid, and Flexbox. I also use relative units and test layouts on different breakpoints to maintain consistent appearance across screen sizes.

4. I optimize performance by using code splitting, dynamic imports, and lazy loading for non-critical components. In Nextjs, I leverage next/image for image optimization and ensure third party libraries are minimal to reduce bundle size.

5. When using local JSON data, I structure it by category and maintain consistent field names like title, description, images, etc. This allows easy scaling when supporting multiple pages or new content types.

6. For custom APIs, I follow a clean structure with loading, error, and success states handled centrally. I use tools like SWR or React Query to handle caching and revalidation automatically, improving both performance and user experience.

7. I organize content with flexible schemas, such as defining objects for each content type. This helps when expanding or reusing data across different sections without rewriting structures.

8. On Vercel, I configure optimal caching and enable automatic image optimization. I also utilize Incremental Static Regeneration for static pages that need occasional updates, ensuring both speed and fresh content.

9. For environment setup, I separate development and production variables using env local for dev and Vercel environment variables for production. This keeps secrets safe and avoids accidental exposure in commits.

10. I handle assets by compressing images, preloading fonts, and serving static files through /public. Proper caching and lazy loading are applied to improve load speed and performance.

11. If using Laravel Filament for CMS, I design RESTful APIs with consistent naming, include proper HTTP status codes, and return JSON responses that are easy for the frontend to consume.

12. My database design focuses on normalization creating tables for each content type with foreign keys where necessary. This makes the CMS scalable and easy to maintain.

13. Important admin panel features include simple CRUD interfaces, image uploads, real time previews, search and filtering options, and role-based access control to simplify content management.

14. I structure the project with clear folder organization (components/, pages/, hooks/, lib/). I follow consistent naming conventions, reusable utilities, and component-based logic to support collaboration and scalability.

15. My error handling approach is layered: handle network issues with try/catch, data validation errors with clear messages, and UI errors using fallback components or boundaries. This ensures the app remains stable and user-friendly even under failure.