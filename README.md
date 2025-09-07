# 📚 Hunting Coders – Next.js Static Blog 📖

Welcome to **Hunting Coders** – a sleek, responsive, and fully static blog website built with **Next.js**! 🌐 This is my **first project in Next.js**, where I explored static site generation, API routes, and client-side interactivity—all without using a database like MongoDB. Instead, content and contact submissions are handled using simple JSON files, making the project lightweight and developer-friendly.

This project is perfect for anyone looking to learn how to build fast, content-driven applications with Next.js while keeping data management simple and effective.

---

## ✨ Features

✅ Static blog pages powered by JSON files  
📂 Data-driven architecture without needing databases  
🧩 API routes handling dynamic content seamlessly  
💬 Contact form submissions stored as JSON files for simplicity  
🎨 Scoped styling with CSS Modules for maintainable, conflict-free designs  
📱 Fully responsive layout optimized for both desktop and mobile browsing  
⚙ Explore serverless patterns and file-based data management in Next.js

---

## 🚀 How It Works – Data Without a Database

Unlike typical web applications that rely on databases, **Hunting Coders** uses **JSON files stored in the project’s directory** to serve and manage data. Here’s how it’s designed:

### 📖 Blog Content Handling
✔ Blog posts are written as structured JSON files, grouped by topic (JavaScript, Next.js, Laravel, React, etc.)  
✔ These files are read by API routes (`blogs.js`, `getblog.js`) which serve the data to pages dynamically  
✔ Users can view blog lists and detailed posts without a backend database—just plain JSON files!

### 📩 Contact Form Workflow
✔ When users fill out the contact form, their input is captured through an API route (`postcontact.js`)  
✔ The submitted data is saved as a new JSON file in the `contactdata` folder  
✔ This simple file-based storage ensures that form data is persistent without setting up a database server  
✔ This approach is ideal for prototypes, learning projects, or static sites where data volume is small

### ⚙️ API Routes as Lightweight Server Functions
✔ Next.js API routes handle the reading and writing of JSON files  
✔ These routes process incoming requests, update data files, and send responses in real-time  
✔ The entire application remains fast, efficient, and easy to deploy on platforms like Vercel or Netlify


---

## 🛠 Tech Stack

| Technology                                                                                                   | Used                  |
| ------------------------------------------------------------------------------------------------------------ | -------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)   | ✅ Framework for SSR & SSG |
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)           | ✅ UI Library          |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)              | ✅ Styling            |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)   | ✅ Serverless API functions |
| 📦 JSON Files                                                                                                | ✅ Data storage without database |

---
## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/DikshitaDas/Hunting-coders/blob/main/screenshots/home-page.png)

### 📄 All Blogs Page
![All Blogs](https://github.com/DikshitaDas/Hunting-coders/blob/main/screenshots/all-blogs.png)

### 📖 Blog Post Page
![Blog Post](https://github.com/DikshitaDas/Hunting-coders/blob/main/screenshots/blog-post.png)

### 📩 Contact Us Page
![Contact Us](https://github.com/DikshitaDas/Hunting-coders/blob/main/screenshots/contact-us.png)

---
## 📥 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DikshitaDas/Hunting-coders.git
2.	Navigate into the project folder
3.	cd Hunting-coders
4.	Install dependencies
5.	npm install
6.	Start the development server
7.	npm run dev
8.	Open http://localhost:3000 in your browser to explore!
________________________________________
🎨 Styling
✔ Uses CSS Modules for component-specific styling
✔ Global styles in globals.css for base formatting
✔ Clean and minimalistic design to prioritize readability and user experience
________________________________________
📖 Learnings & Highlights
📂 File-Based Data Handling
Learn how to manage content with JSON files, perfect for static sites and prototypes.
⚙ API Routes as Serverless Functions
Explore how Next.js API routes can process requests, read/write files, and serve dynamic content without a traditional backend.
🎨 CSS Modules for Scoped Styling
Apply modern CSS techniques to avoid style conflicts and ensure maintainable code.
📱 Responsive Design Principles
Build layouts that adapt smoothly to multiple screen sizes using plain CSS.
________________________________________
📦 Scripts
•	npm run dev – Run the project in development mode
•	npm run build – Build the optimized production version
•	npm start – Launch the production build locally
________________________________________
📜 License
This project is licensed under the MIT License – feel free to use, modify, and share it! ❤️
________________________________________
📬 Connect with Me
Made with ❤️ by DikshitaDas
Dive into Next.js, experiment with file-based workflows, and keep building amazing projects! 🚀📚✨
________________________________________
