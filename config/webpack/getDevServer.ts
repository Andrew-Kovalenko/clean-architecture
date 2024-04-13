import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

// export const getDevServer = (): DevServerConfiguration => {
//     return {
//         open: true,
//         port: 3000,
//     }
// }

export function getDevServer(): DevServerConfiguration {
    return {
        open: true,
        port: 3000,
    }
}