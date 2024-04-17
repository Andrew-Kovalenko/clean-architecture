import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type Configuration } from 'webpack'
import { ClawjectWebpackPlugin } from '@clawject/di/webpack'


export function getPlugins (htmlPath: string): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({ template: htmlPath }),
    new MiniCssExtractPlugin(),
    new ClawjectWebpackPlugin()
  ]
}
