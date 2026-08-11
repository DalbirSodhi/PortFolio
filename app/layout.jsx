import './globals.css';

export const metadata = {
  title: 'Dalbir Singh — Software Developer',
  description:
    'Portfolio of Dalbir Singh — software developer building web and mobile products, backend systems, system architecture, cloud deployments and applied AI experiences.',
  openGraph: {
    title: 'Dalbir Singh — Software Developer',
    description: 'Projects across web, mobile, backend, system design, cloud and applied AI.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
