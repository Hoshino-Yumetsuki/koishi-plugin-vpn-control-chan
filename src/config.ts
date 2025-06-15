import { Schema } from 'koishi'

export interface Config {
    // 权限配置
    minAuthority: number
    // Tailscale API 配置
    tailscale: {
        apiUrl: string
        apiKey: string
        tailnet: string
    }
    // 消息配置
    messageBefore: string
    // 日志配置
    isLog: boolean
    logLevel: 'debug' | 'info' | 'warn' | 'error'
}

export const Config: Schema<Config> = Schema.object({
    minAuthority: Schema.number()
        .min(0)
        .max(5)
        .default(3)
        .description('使用插件所需的最低权限等级 (0-5)'),
    tailscale: Schema.object({
        apiUrl: Schema.string()
            .default('https://api.tailscale.com')
            .description('Tailscale API 地址'),
        apiKey: Schema.string().required().description('Tailscale API 密钥'),
        tailnet: Schema.string().required().description('Tailnet 名称')
    }).description('Tailscale API 配置'),
    messageBefore: Schema.string()
        .default('准备中...')
        .description('命令执行前发送的消息'),
    isLog: Schema.boolean().default(false).description('是否启用日志'),
    logLevel: Schema.union(['debug', 'info', 'warn', 'error'])
        .default('info')
        .description('日志级别')
})

export default Config
