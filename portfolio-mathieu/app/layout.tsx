import "./globals.css";

export const metadata = {
  title: 'Mathieu \'DEV',
  icons: {
    icon: '/icone_prtfl.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body>{children}</body>
    </html>
  );
}
