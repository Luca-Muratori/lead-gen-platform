// 1. Imports first
import { validateEnv } from '@lead-gen/shared';
import "./globals.css";

// 2. Run the validation IMMEDIATELY (Fail-fast)
validateEnv();

// 3. Metadata (Standard Next.js)
export const metadata = {
  title: "Lead Gen Storefront",
  description: "Capture leads effectively",
};

// 4. THE DEFAULT EXPORT (This is what the error is complaining about)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}