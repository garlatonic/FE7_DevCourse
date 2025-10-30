import "../assets/css/circular-bar.css";
import "../assets/css/style.css";

export const metadata = {
  title: {
    default: "Movie App | TMDB",
    template: "%s | TMDB",
  },
  description: "TMDB Movie App Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
