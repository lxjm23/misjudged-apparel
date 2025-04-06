import Prose from "@/components/prose";
import { getPage } from "@/lib/shopify";
import { cleanShopifyHtml } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  if (!page) return notFound();

  const cleanedHtml = cleanShopifyHtml(page.body);
 
  return (
    <>
      <h1 className="mb-8 text-4xl font-serif font-bold">{page.title}</h1>
      <Prose className="mb-8" html={cleanedHtml} />
    </>
  );
}
