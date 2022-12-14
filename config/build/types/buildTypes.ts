export type BuildMode = "production" | "development";
export interface BuildPath {
    entry: string,
    output: string,
    html: string,
    src: string
}

export interface BuildOptions {
    mod: BuildMode,
    paths : BuildPath,
    isDev: boolean,
    port: number
}

export interface BuildEnv {
    mod: BuildMode,
    port: number
}