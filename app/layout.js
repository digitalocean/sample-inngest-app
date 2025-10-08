export const metadata = {
  title: "Next.js + Inngest on DigitalOcean App Platform",
  description: "Demo: simulate a signup and fire an Inngest event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "ui-sans-serif, system-ui" }}>
        {children}
      </body>
    </html>
  );
}
