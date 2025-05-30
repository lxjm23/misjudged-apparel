import { Product } from "@/lib/shopify/types";
import Grid from "../grid";
import Link from "next/link";
import { GridTileImage } from "../grid/tile";

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link
            href={`/product/${product.handle}`}
            className="relative inline-block h-full w-full"
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
              }}
              src={product.featuredImage?.url}
              options={product.options}
              variants={product.variants}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px), 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
