# METSAnauts — NASA HUNCH HERA Rover & BothScape Website

A modern, responsive website for the METSAnauts NASA HUNCH team from Ranchview High School, showcasing the HERA Rover & BothScape Simulation Project.

Built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**. Designed for deployment on **Vercel**.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to GitHub + Vercel

### 1. Create a GitHub Repository

```bash
# Initialize git (if not already)
cd metsanauts-website
git init

# Add all files
git add .
git commit -m "Initial commit: METSAnauts website"

# Create repo on GitHub (using GitHub CLI)
gh repo create metsanauts-website --public --source=. --push

# OR manually push to an existing repo:
git remote add origin https://github.com/YOUR_USERNAME/metsanauts-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `metsanauts-website` repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `https://metsanauts-website.vercel.app`

That's it. Every push to `main` will auto-deploy.

## Project Structure

```
metsanauts-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navbar/footer
│   │   ├── page.tsx            # Home / landing page
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── mission/page.tsx    # Mission & problem statement
│   │   ├── rover-systems/page.tsx  # Rover systems overview
│   │   ├── bothscape/page.tsx  # BothScape terrain simulation
│   │   ├── innovations/page.tsx    # Key innovations
│   │   ├── budget-timeline/page.tsx # Budget & timeline
│   │   ├── research/page.tsx   # Research & documentation
│   │   ├── gallery/page.tsx    # Photo gallery
│   │   └── team/page.tsx       # Team page
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       ├── Footer.tsx           # Site footer
│       ├── SectionHeading.tsx   # Reusable section header
│       └── ImagePlaceholder.tsx # Placeholder for missing images
├── public/                     # Static assets (add images here)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── .gitignore
```

## Adding Real Images

Replace `ImagePlaceholder` components with real `<Image>` tags:

1. Place images in the `public/` folder (e.g., `public/images/rover-v2.jpg`)
2. Replace `<ImagePlaceholder label="..." />` with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/rover-v2.jpg" alt="V2 Rover" width={800} height={450} className="rounded-xl" />
   ```

## Tech Stack

- **Next.js 15** — React framework with App Router
- **Tailwind CSS v4** — Utility-first CSS
- **TypeScript** — Type-safe code
- **Vercel** — Deployment platform

## Assumptions

- Budget table data is placeholder — replace with actual spreadsheet data
- Team member roles/bios are approximate — update as needed
- Image placeholders are included where photos, CAD renders, or diagrams should go
- Timeline reflects the schedule from the presentation slides
