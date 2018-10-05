const homeDirectoryName = "src";
const outputDirectoryName = "dist"
const bundleName = "bundle";

//By using the WebIndexPlugin, we can use our custom html and it will be the entry point of the application.

const { FuseBox, WebIndexPlugin } = require("fuse-box");
const {BabelPlugin} = require('fuse-box');

const fuse = FuseBox.init({
  useTypescriptCompiler: true,
  homeDir: `${homeDirectoryName}/`,
  target: "electron@esnext", //if you are going for browser, change to browser and not electron
  output: `${outputDirectoryName}/$name.js`,
  plugins: 
  [WebIndexPlugin(
    {
      template: 'src/template.html'
    })
  ,BabelPlugin({ //You can add other babel plugins here!
    config:
    {
      plugins: [
        
      ]
    }
  })],
});
fuse.dev(); // launch http server
fuse
  .bundle(bundleName)
  .instructions("> app.tsx") 
  .hmr()
  .watch();
fuse.run();
