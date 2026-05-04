import './globals.css';

export const metadata = {
  title: 'Ian Magtaas · Senior Software Engineer',
  description: 'Senior Software Engineer, Technical Lead, and Platform & AI Systems Engineer based in Manila.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
