import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // input directory
  eleventyConfig.setInputDirectory("source");
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // passthrough
  eleventyConfig.addPassthroughCopy("source/**/*.png");
  eleventyConfig.addPassthroughCopy("source/**/*.jpg");
  eleventyConfig.addPassthroughCopy("source/**/*.PNG");
  eleventyConfig.addPassthroughCopy("source/**/*.JPG");
  eleventyConfig.addPassthroughCopy("source/**/*.css");
  eleventyConfig.addPassthroughCopy("source/**/*.js");

  // global layout
  eleventyConfig.addGlobalData("layout", "base.html");

  // HTML allow for keeping HTML in Markdown files
  // (excerpt를 HTML로 렌더링할 때도 쓰기 위해 breaks/linkify 추가는 선택)
  const md = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.setLibrary("md", md);

  // excerpt를 템플릿에서 HTML로 렌더링하기 위한 필터
  eleventyConfig.addFilter("md", (str = "") => md.render(str));

  // ✅ Excerpt 활성화: <!--desc--> 앞을 description(excerpt)로 사용
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--desc-->",
  });

  // ✅ content에서 excerpt(=page.excerpt) 부분을 제거해서 main만 남기기
  eleventyConfig.addFilter("stripExcerpt", (html = "", excerptMd = "") => {
    const excerptHtml = md.render(excerptMd).trim();
    if (!excerptHtml) return html;
    return html.replace(excerptHtml, "").trim(); // 첫 1회 제거
  });

  // shortcode for md
  // 1. spacer shortcode
  // 2. mainContent Styles
// eleventyConfig.addShortcode("spacer", (variant = "default") => {
//   const allowed = ["default", "long", "short", "none"];
//   const v = allowed.includes(variant) ? variant : "default";

//   if (v === "none") {
//     return `<div class="spacer spacer--none"></div>`;
//   }

//   return `<div class="spacer spacer--${v}"><div class="spacerLine spacerLine--${v}"></div></div>`;
// });
//   // paired shortcode for Main Block (grid span wrapper)
//   // EX.
//   // {% mainBlock "2" %} ... {% endmainBlock %}
//   // {% mainBlock "3" %} ... {% endmainBlock %}
//   // {% mainBlock "full" %} ... {% endmainBlock %}
//   eleventyConfig.addPairedShortcode("mainContent", (content, span = "3") => {
//     const allowed = ["2", "1", "full"];
//     const s = allowed.includes(String(span)) ? String(span) : "3";

//     const innerHtml = md.render(content);

//     return `<div class="mainContent mainContent--${s}">${innerHtml}</div>`;
//   });

  // Active Liquid inside Markdown
  return {
    markdownTemplateEngine: "liquid",
  };
}
