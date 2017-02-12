//This just manually bundles your code using `node fuse.js`
const fsbx = require("fuse-box");
let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap:
    {
      bundleReference: "sourcemaps.js.map",
      outFile: "./build/sourcemaps.js.map",
    },
    outFile: "./build/bundle.js",
    plugins: [
        fsbx.JSONPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["es2015"]
            }
        })
    ]
});

fuseBox.bundle(">renderer.js");
