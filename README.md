# Dalbir Singh — Software Developer Portfolio

A premium, responsive developer portfolio built with Next.js and designed for Vercel.

## What is included

- High-impact animated hero
- Photo-ready portrait slot (currently a DS monogram)
- Featured FixBee case study
- Selected mobile/cloud projects
- Expertise bento grid
- AI system pipeline visualization
- Engineering/education story
- Responsive navigation and mobile layout
- Reduced-motion accessibility support
- Centralized content configuration

## Requirements

- Node.js 20.9 or newer

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel will detect Next.js automatically.
4. Click Deploy.

No environment variables are required for this version.

## Add your real information

Open:

`data/site.js`

Update:

```js
links: {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR_PROFILE',
  email: 'you@example.com',
  resume: '/Dalbir-Singh-Resume.pdf'
}
```

Put the PDF inside `/public`.

## Add your photo later

1. Put your image in `/public`, for example `/public/dalbir.jpg`.
2. In `data/site.js`, change:

```js
portrait: '/dalbir.jpg'
```

The site automatically replaces the DS monogram with your portrait.

## Suggested next phase

- Add your real portrait and headshot treatment
- Add GitHub / LinkedIn / email / resume
- Add real FixBee screenshots or demo video
- Add live project / repository links
- Add custom domain and Open Graph image
- Optional: add a lightweight project-detail route for FixBee
