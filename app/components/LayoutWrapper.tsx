"use client";

import { usePathname } from "next/navigation";
import HomeHeader from "../home/homeheader";
import FooterPremium from "../home/Footer";
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideOnHome = pathname === "/";

  return (
    <>
      {!hideOnHome && <HomeHeader />}
      {children}
      {!hideOnHome && <FooterPremium />}
    </>
  );
}