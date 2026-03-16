import "./globals.css";

export const metadata = {
  title: "Counterdata Visualisation for Digital Museum Collections",
  description: "Counterdata Visualisation for Digital Museum Collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
