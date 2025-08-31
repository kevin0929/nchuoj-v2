import UserHeader from "@/components/user/UserHeader";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserHeader />
        {children}
      </body>
    </html>
  );
}
