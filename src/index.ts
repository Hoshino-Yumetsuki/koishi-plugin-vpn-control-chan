import { Context, Logger } from 'koishi'
import type Config from './config'
import { createLogger, setLoggerLevel } from './utils/logger'
import { registerAllCommands } from './commands'

export let logger: Logger

export function apply(ctx: Context, config: Config) {
    logger = createLogger(ctx)
    setupLogger(config)

    registerAllCommands(ctx, config, logger)
}

function setupLogger(config: Config) {
    if (config.isLog) {
        setLoggerLevel(config.logLevel)
    }
}

export * from './config'
