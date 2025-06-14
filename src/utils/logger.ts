import { Context, Logger } from 'koishi'

const loggers: Record<string, Logger> = {}

let logLevel = -1

export function createLogger(ctx: Context, name: string = 'vpn-control-chan') {
    const result = loggers[name] || ctx.logger(name)

    if (logLevel >= 0) {
        result.level = logLevel
    }

    loggers[name] = result

    return result
}

export function setLoggerLevel(level: string | number) {
    // 将字符串级别转换为数字
    if (typeof level === 'string') {
        switch (level) {
            case 'debug':
                logLevel = 0
                break
            case 'info':
                logLevel = 1
                break
            case 'warn':
                logLevel = 2
                break
            case 'error':
                logLevel = 3
                break
            default:
                logLevel = 1 // 默认为 info
        }
    } else {
        logLevel = level
    }

    for (const name in loggers) {
        loggers[name].level = logLevel
    }
}
