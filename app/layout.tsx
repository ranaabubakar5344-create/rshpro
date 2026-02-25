// import type { Metadata } from "next";
// import { Playfair_Display, Poppins } from "next/font/google";
// import "./globals.css";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-playfair",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
//   variable: "--font-poppins",
// });

// export const metadata: Metadata = {
//   title: "RSH Education Group",
//   description: "Empowering minds and shaping the future of education.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${playfair.variable} ${poppins.variable} font-[var(--font-poppins)] antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


//2ndd 


import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RSH Education Group",
  description: "Empowering minds and shaping the future of education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} font-[var(--font-poppins)] antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}