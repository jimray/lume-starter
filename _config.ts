import lume from "lume/mod.ts";
import lightningCss, { version } from "lume/plugins/lightningcss.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const site = lume({
  src: "./src",
});

// configure Lightning CSS
site.use(lightningCss({
  extensions: [".css"],
  includes: "_includes",
  options: {
    minify: true,
    drafts: {
      nesting: true,
      customMedia: true,
    },
    targets: {
      android: version(98),
      chrome: version(98),
      edge: version(98),
      firefox: version(97),
      ios_saf: version(15),
      safari: version(15),
      opera: version(83),
      samsung: version(16),
    },
  },
}));

// automatically copy assets
site.copy("assets", ".");

//generate site maps
site.use(sourceMaps());

export default site;
