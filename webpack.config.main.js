const path = require('path');

const distDir = path.join(__dirname, 'dist');

module.exports = [
  {
    entry: './src/main.js',
    target: 'electron-main',
    node: {
      __dirname: false,
    },
    output: {
      path: distDir,
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', {'modules': false}],
                ],
              },
            }
          ]
        }
      ],
    },
  },
];