import { notFound } from "next/navigation";
import { institutes, getInstituteBySlug } from "@/app/data/institutes";
import InstituteInner from "./InstituteInner";

export async function generateStaticParams() {
  return institutes.map((inst) => ({
    slug: inst.slug,
  }));
}

export default async function InstitutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ IMPORTANT: unwrap params
  const { slug } = await params;

  const institute = getInstituteBySlug(slug);

  if (!institute) notFound();

  return (
    <main className="bg-white text-[#0f1f52]">
      <InstituteInner institute={institute} />
    </main>
  );
}