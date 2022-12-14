import {BuildOptions} from "./types/buildTypes";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration  {
    return {
        mode: options.mod,
        entry: options.paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path : options.paths.output,
            publicPath: "/",
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        plugins: buildPlugins (options),
        devtool: options.isDev?"inline-source-map":undefined,
        devServer: options.isDev?buildDevServer(options):undefined
    }
}