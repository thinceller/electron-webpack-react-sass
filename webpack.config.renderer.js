const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.join(__dirname, 'dist');

module.exports = [
  {
    entry: './src/renderer/index.jsx',
    target: 'electron-renderer',
    output: {
      path: distDir,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env',{'modules': false}],
                  'react',
                ],
              },
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/renderer/index.html',
        inject: false
      })
    ]
  }
];
