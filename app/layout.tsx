import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";

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
      <body className="">
        <Provider>
          <div>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <NavBar />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
