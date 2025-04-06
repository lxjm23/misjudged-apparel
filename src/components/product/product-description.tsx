import { Product } from "@/lib/shopify/types";
import Price from "../price";
import VariantSelector from "./variant-selector";
import Prose from "../prose";
import { AddToCart } from "../cart/add-to-cart";

export function ProductDescription({product} : {product: Product}){
  return(
    <>
      <div className="mb-6 flex flex-col border-b pb-6">
        <h1 className="mb-2 text-3xl font-medium">{product.title}</h1>
        <div className=" rounded-full">
          <Price amount={product.priceRange.maxVariantPrice.amount} currencyCode={product.priceRange.maxVariantPrice.currencyCode} />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants}/>
      {product.descriptionHtml ? (
        <Prose className="mb-6 text-sm leading-light" html={product.descriptionHtml}/>
      ) : null}
      <AddToCart product={product}/>
    </>
  )
}