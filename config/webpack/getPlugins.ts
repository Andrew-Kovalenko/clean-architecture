import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type Configuration } from 'webpack'

// export const getPlugins = (): Configuration["plugins"] => {
//     return [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'public', 'index.html')
//         }),
//         new MiniCssExtractPlugin()
//     ]
// }

export function getPlugins (htmlPath: string): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({ template: htmlPath }),
    new MiniCssExtractPlugin(),

  ]
}
