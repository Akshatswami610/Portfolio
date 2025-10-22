# 🚀 Akshat Swami - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Python Backend Developer. Built with Next.js 15, TypeScript, and Tailwind CSS.
<img width="1899" height="906" alt="image" src="https://github.com/user-attachments/assets/2d12bad7-e4b4-4800-8227-6dc33cef0849" />

---

## 🌐 Live Demo
🔗 **[Visit the live site](https://blog-website-3wu2.onrender.com)**

---

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful gradient designs with smooth animations
- **📱 Fully Responsive**: Optimised for all devices and screen sizes
- **⚡ Fast Performance**: Built with Next.js 15 App Router for optimal speed
- **🌈 Smooth Animations**: Powered by Framer Motion
- **📧 Contact Form**: Integrated with Resend API for email notifications
- **📊 Google Analytics**: Track visitor behavior and engagement
- **🎯 SEO Optimised**: Meta tags and structured data for better search visibility
- **♿ Accessible**: WCAG compliant with semantic HTML
- **🔍 Project Showcase**: Detailed project cards with live demos and GitHub links
- **💼 Experience Timeline**: Professional experience and education history

## 🛠 Tech Stack

### Frontend
- **Next.js 15.5.6** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library

### Backend & Services
- **Resend 4.0.0** - Email delivery service
- **Vercel Analytics** - Website analytics

### UI Components
- **shadcn/ui** - Reusable component library
- **Lucide React** - Icon library
- **tw-animate-css** - Animation utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend API key (for contact form)

### Installation

### 1️⃣ Clone the repository
      git clone https://github.com/Akshatswami610/portfolio.git
      cd portfolio

### 2️⃣ Install dependencies
      npm install

### 3️⃣ Set up environment variables
### Create a `.env local` file in the root directory:
      RESEND_API_KEY=your_resend_api_key_here      #Resend API Key for contact form

### 4️⃣ Run the development server
    npm run dev
  

### 5️⃣ Open your browser
   
      Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

<pre>
portfolio/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server action for contact form
│   ├── projects/
│   │   └── page.tsx            # All projects page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Home page
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── all-projects.tsx        # All projects component
│   └── contact-form.tsx        # Contact form component
├── portfolio.tsx               # Main portfolio component
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
</pre>

## 📑 Sections

### 1. **Hero Section**
- Eye-catching introduction
- Social media links (GitHub, LinkedIn, Email)
- Animated badges showcasing expertise

### 2. **About Me**
- Professional summary
- Key skills and expertise
- Downloadable CV button

### 3. **Skills**
- **Languages & Frameworks**: Python, Django, FastAPI, Flask, WebSockets
- **Databases**: PostgreSQL, MySQL, MongoDB, SQLite
- **Cloud & Deployment**: AWS S3, AWS RDS, Render, Docker
- **Tools**: PyCharm, Git, Postman, MongoDB Compass
- Interactive skill progress bars

### 4. **Experience**
- Current role at Infosys Springboard
- Key responsibilities and achievements

### 5. **Projects**
- Featured projects with:
  - Project descriptions
  - Tech stack badges
  - GitHub repository links
  - Live demo links
  - Outcome summaries
- Link to view all projects

### 6. **Education**
- B.Tech in Computer Science (Lovely Professional University)
- Intermediate (Kendriya Vidyalaya AFS)

### 7. **Certifications**
- Python Foundation Certification (Infosys Springboard)

### 8. **Contact**
- Interactive contact form with validation
- Email, phone, and location information
- Real-time form submission with success/error feedback

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email functionality | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics tracking ID | No |



## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Vercel** for hosting and deployment
- **Resend** for email delivery
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Akshat Swami](https://github.com/Akshatswami610)

</div>
