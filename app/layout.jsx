import './globals.css';

export const metadata = {
  title: 'Dalbir Singh — Software Developer',
  description:
    'Portfolio of Dalbir Singh — software developer building mobile apps, backend systems, cloud deployments and applied AI products.',
  openGraph: {
    title: 'Dalbir Singh — Software Developer',
    description: 'Projects across mobile, backend, cloud and applied AI.',
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
