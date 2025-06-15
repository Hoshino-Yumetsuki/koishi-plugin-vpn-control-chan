import { Context, Logger, Session } from 'koishi'

export interface VPNPlatform {
    name: string
    generateAuthKey(ctx: Context, config: any): Promise<string>
    generateInstallCommand(authKey: string): string
    handleNewCommand(ctx: Context, config: any, session: Session): Promise<void>
    registerCommands(ctx: Context, config: any, logger: Logger): void
}

export interface AuthKeyResult {
    key: string
    expiryDays: number
    installCommand: string
}
