import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const getLoaders = (): ModuleOptions["rules"] => {
    return [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            loader: 'ts-loader',
            test: /\.(ts|tsx)$/,
            options: {
                compiler: 'ts-patch/compiler',
            },
        },
    ]
}
