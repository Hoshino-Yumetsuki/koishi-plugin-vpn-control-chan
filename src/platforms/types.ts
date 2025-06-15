import { Context, Logger, Session } from 'koishi'

export interface VPNPlatform {
    name: string
    generateAuthKey(ctx: Context, config: any): Promise<string>
    generateInstallCommand(authKey: string): string
    listDevices(ctx: Context, config: any): Promise<Device[]>
    handleNewCommand(ctx: Context, config: any, session: Session): Promise<void>
    registerCommands(ctx: Context, config: any, logger: Logger): void
}

export interface AuthKeyResult {
    key: string
    expiryDays: number
}

export interface Device {
    id: string
    name: string
    hostname: string
    addresses: string[]
    os: string
    clientVersion: string
    lastSeen: string
    authorized: boolean
    user: string
    updateAvailable?: boolean
}
