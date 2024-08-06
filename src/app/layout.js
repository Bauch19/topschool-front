import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
});

export const metadata = {
  title: "TopSchool",
  description: "TopSchool primer medio de comunicación escolar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
