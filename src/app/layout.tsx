import type { Metadata } from "next";
import "./_reset.scss";
import "./_global.scss";
import Header from "./(pages)/common/header/header";

export const metadata: Metadata = {
  title: "Portfolio | Ryoga Mori",
  description: "これはRyoga Moriのポートフォリオサイトとして作成しました。",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main
          style={{
            backgroundImage: "url(/images/bg.webp)",
            backgroundSize: "cover",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
