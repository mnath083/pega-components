import fs from 'fs';
import path from 'path';

const root = process.cwd();

const patches = [
  {
    file: 'node_modules/@pega/constellation-dx-components-build-utils/lib/build/build.js',
    from: "child_process.execSync(`npx webpack --mode=production --env buildFolderFullPath=${buildFolderFullPath} buildFolderName=${buildFolderName} packageVersion=${packageVersion} appStaticUrl=${appStaticUrl} orgId=${orgId} v3=${v3} --config ${webpackPath}/webpack.config.js`, {",
    to: "child_process.execFileSync('npx', [\n    'webpack',\n    '--mode=production',\n    '--env',\n    `buildFolderFullPath=${buildFolderFullPath}`,\n    `buildFolderName=${buildFolderName}`,\n    `packageVersion=${packageVersion}`,\n    `appStaticUrl=${appStaticUrl}`,\n    `orgId=${orgId}`,\n    `v3=${v3}`,\n    '--config',\n    `${webpackPath}/webpack.config.js`\n  ], {"
  },
  {
    file: 'node_modules/@pega/constellation-dx-components-build-utils/lib/dev-server-asset/dev-server.js',
    from: "child_process.execSync(`npx webpack serve --mode=development --env mode=development buildFolderFullPath=${buildFolderFullPath} v3=false port=${port} --config ${webpackPath}/webpack.config.js`, {",
    to: "child_process.execFileSync('npx', [\n    'webpack',\n    'serve',\n    '--mode=development',\n    '--env',\n    'mode=development',\n    `buildFolderFullPath=${buildFolderFullPath}`,\n    'v3=false',\n    `port=${port}`,\n    '--config',\n    `${webpackPath}/webpack.config.js`\n  ], {"
  }
];

let changed = 0;

for (const patch of patches) {
  const filePath = path.join(root, patch.file);
  if (!fs.existsSync(filePath)) {
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes("child_process.execFileSync('npx', [")) {
    continue;
  }
  if (!content.includes(patch.from)) {
    continue;
  }
  fs.writeFileSync(filePath, content.replace(patch.from, patch.to), 'utf8');
  changed += 1;
}

if (changed > 0) {
  console.log(`[postinstall] Applied ${changed} Pega build-utils patch(es) for space-safe webpack config paths.`);
}
