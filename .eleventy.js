module.exports = function (eleventyConfig) {
  	eleventyConfig.addPassthroughCopy("src/shared");
  	eleventyConfig.addPassthroughCopy("src/**/*.swf");
  	eleventyConfig.addPassthroughCopy("src/**/*.asp");
	eleventyConfig.setServerOptions({
		liveReload: true,
		domDiff: false,
	});
	return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};