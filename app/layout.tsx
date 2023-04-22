import Providers from "@/components/Provider.tsx/Provider";
import "./globals.scss";

export const metadata = {
  title: "Modyo Memory Game",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
