# VPN Control Chan

一个用于控制和管理 VPN 连接的 Koishi 插件，支持多种 VPN 平台。

## 功能特性

- 🔑 自动生成 VPN Auth Key
- 📋 自动构造安装命令
- ⏰ 支持自定义过期时间
- 🔌 模块化平台架构
- 📝 详细的日志记录

## 支持的平台

- **Tailscale**: 生成 7 天有效期的 Auth Key

## 安装

```bash
yarn add koishi-plugin-vpn-control-chan
```

## 配置

### Tailscale 配置

在 Koishi 配置文件中添加以下配置：

```yaml
plugins:
  vpn-control-chan:
    tailscale:
      apiUrl: "https://api.tailscale.com"  # Tailscale API 地址
      apiKey: "tskey-api-xxxxx"            # 你的 Tailscale API Key
      tailnet: "your-tailnet.ts.net"       # 你的 Tailnet 域名
    messageBefore: "正在生成 Tailscale Auth Key..."  # 可选：生成前的消息
    messageAfter: "Auth Key 生成完成！"             # 可选：生成后的消息
    isLog: true                                   # 是否启用日志
    logLevel: "info"                             # 日志级别
```

### 获取 Tailscale API Key

1. 访问 [Tailscale Admin Console](https://login.tailscale.com/admin/settings/keys)
2. 点击 "Generate API key"
3. 复制生成的 API Key

## 使用方法

### 命令列表

| 命令 | 描述 |
|------|------|
| `vcc` | 显示插件帮助信息 |
| `vcc.tailscale.new` | 生成新的 Tailscale Auth Key |

### 使用示例

1. **查看帮助**：
   ```
   vcc
   ```

2. **生成 Tailscale Auth Key**：
   ```
   vcc.tailscale.new
   ```

插件会自动：
- 调用 Tailscale API 生成 Auth Key
- 构造安装命令
- 返回完整的安装指令

## 错误排查

- 确保 API 密钥正确且有足够权限
- 检查 Tailnet 名称是否正确
- 查看日志获取详细错误信息

## 许可证

MPL-2.0
