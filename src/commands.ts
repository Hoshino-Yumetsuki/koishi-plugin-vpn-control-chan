import { Context, Logger } from 'koishi'
import type Config from './config'
import { TailscalePlatform } from './platforms/tailscale'
import type { VPNPlatform } from './platforms/types'

const platformRegistry: Map<string, VPNPlatform> = new Map()

function initializePlatforms(): void {
    platformRegistry.set('tailscale', new TailscalePlatform())
    // 未来可以在这里添加更多平台
    // platformRegistry.set('wireguard', new WireGuardPlatform())
    // platformRegistry.set('openvpn', new OpenVPNPlatform())
}

export function registerAllCommands(
    ctx: Context,
    config: Config,
    logger: Logger
): void {
    initializePlatforms()

    ctx.command('vcc', 'VPN Control Chan | VPN 控制酱♡', {
        authority: config.minAuthority
    })

    for (const [name, platform] of platformRegistry) {
        try {
            platform.registerCommands(ctx, config, logger)
            logger.debug(`已注册 ${name} 平台命令`)
        } catch (error) {
            logger.error(`注册 ${name} 平台命令失败`, { error: error.message })
        }
    }
}

export function getPlatform(name: string): VPNPlatform | undefined {
    return platformRegistry.get(name.toLowerCase())
}
export { platformRegistry }
