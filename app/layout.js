import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Skill Community",
  description: "Chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}