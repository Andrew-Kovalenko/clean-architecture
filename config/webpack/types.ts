export enum ENV_MODE {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development'
}

export interface EnvVariables {
    mode: ENV_MODE
}