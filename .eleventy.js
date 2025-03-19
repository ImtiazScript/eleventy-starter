module.exports = function(eleventyConfig) {
  // Copy assets directly to the output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  
  // Copy the assets directory to _site
  eleventyConfig.addPassthroughCopy({ "src/_includes/assets": "assets" });
  
  // Watch for changes to CSS/JS
  eleventyConfig.addWatchTarget("assets/");
  
  // Custom shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "layouts"  // This is relative to includes directory
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
