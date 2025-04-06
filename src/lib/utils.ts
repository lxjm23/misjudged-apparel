import { ReadonlyURLSearchParams } from "next/navigation";
import * as cheerio from 'cheerio';

export function ensureStartWith(stringToCheck: string, startsWith: string){
  return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`
}

export function createUrl(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
}

export function cleanShopifyHtml(rawHtml: string): string {
  const $ = cheerio.load(rawHtml);
  $("meta").remove();
  $("span").each((_, el) => {
    const $el = $(el);
    if (!$el.text().trim()) {
      $el.remove();
    }
  });
  $("span").each((_, el) => {
    const $el = $(el);
    $el.replaceWith($el.html() || "");
  });
  $("[style]").removeAttr("style");
  return $("body").html() || "";
}
