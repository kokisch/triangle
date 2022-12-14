import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/buildTypes";

export function buildLoaders (options:BuildOptions): webpack.RuleSetRule[] {

    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev?"style-loader":MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: options.isDev?'[path][name]__[local]--[hash:base64:8]':'[hash:base64:8]'
                        }
                    }

                },
                "sass-loader",
            ],
        }

    ]
}