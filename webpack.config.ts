import * as path from 'path'
import webpack from 'webpack'

import {ENV_MODE, EnvVariables} from './config/webpack/types'
import {getDevServer} from './config/webpack/getDevServer'
import {getLoaders} from './config/webpack/getLoaders'
import {getPlugins} from './config/webpack/getPlugins'

module.exports = (env: EnvVariables) => {
    const isDev = env.mode === ENV_MODE.DEVELOPMENT

    const config: webpack.Configuration = {
        mode: env.mode ?? ENV_MODE.DEVELOPMENT,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        devtool: isDev ? 'eval' : undefined,
        devServer: getDevServer(),
        plugins: getPlugins(path.resolve(__dirname, 'public', 'index.html')),
        module: {
            rules: getLoaders()
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
    }

    return config
}
