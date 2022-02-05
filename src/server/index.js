require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
})

require('asset-require-hook')({
  extensions: ['png', 'gif', 'jpg', 'svg', 'jpeg'],
  name: 'assets/resources/[name].[ext]',
})

require('.server.js')
