// const homeDirectoryName = "src";
// const outputDirectoryName = "dist"
// const bundleName = "bundle";

const {fusebox} = require('fuse-box');
const {pluginJSON} = require('fuse-box');


const fuse = fusebox
({
    entry: 'src/app.tsx',
    target: 'browser',
    devServer: true,
    // homeDir: homeDirectoryName,
    webIndex:
    { 
      template:'src/template.html'
    },
    hmr: true,
    // useSingleBundle: true,
    //for some reason this is needed, 👇
    //even tho the official documentation doesnt mention it
    dependencies:{include:['tslib']}, 
    plugins: [pluginJSON()]
});
fuse.runDev();