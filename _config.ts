import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
});

site.use(postcss({
  keepDefaultPlugins: true
}))
  .copy("css")
  .copy("fonts");

export default site;
