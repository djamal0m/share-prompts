import "@/styles/globals.css";

export const metadata = {
  title: "Share Prompts",
  description: "Find and Share AI Prompts"
} as const;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="body">
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
