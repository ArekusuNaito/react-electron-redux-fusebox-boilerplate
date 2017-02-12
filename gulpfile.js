'use strict';

const fsbx = require("fuse-box");
const gulp = require('gulp');
const electron = require('electron-connect').server.create();
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

gulp.task("bundle",()=>
{
    fuseBox.bundle('>renderer.js')


})


gulp.task('default', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('main.js', electron.restart);

  // Reload renderer when anything on the src folder changes, bundle it and then reload electron
  // gulp.watch(['src/**/*.**', './build/index.html'],['bundle'])
  gulp.watch(['src/**/*.**', './build/index.html'],['bundle',electron.reload]);
});
