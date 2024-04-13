import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

// export const getLoaders = (): ModuleOptions["rules"] => {
//     return [
//         {
//             test: /\.css$/i,
//             use: [MiniCssExtractPlugin.loader, "css-loader"],
//         },
//         {
//             test: /\.tsx?$/,
//             use: 'ts-loader',
//             exclude: /node_modules/,
//         },
//     ]
// }


export function getLoaders(): ModuleOptions["rules"] {
    return [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}