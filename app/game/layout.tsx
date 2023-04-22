export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="game-view flex justify-center">{children}</div>;
}
