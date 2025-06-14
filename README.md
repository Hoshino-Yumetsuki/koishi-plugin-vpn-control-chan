# VPN 控制酱 - Tailscale 控制插件

一款 Koishi 插件，用于控制 Tailscale VPN 服务。

## 功能特性

- 🔑 自动生成 Tailscale Auth Key
- ⏰ 7天过期时间设置
- 🚀 一键生成安装命令
- 📝 详细的日志记录

## 安装

```bash
yarn add koishi-plugin-vpn-control-chan
```

## 配置

在 Koishi 配置中添加以下配置项：

```yaml
plugins:
  vpn-control-chan:
    tailscale:
      apiUrl: "https://api.tailscale.com"
      apiKey: "your-tailscale-api-key"
      tailnet: "your-tailnet-name"
    messageBefore: "正在生成 Tailscale Auth Key..."
    messageAfter: "Auth Key 生成完成！"
    isLog: true
    logLevel: "info"
```

### 配置项说明

- `tailscale.apiUrl`: Tailscale API 地址，默认为官方 API
- `tailscale.apiKey`: 你的 Tailscale API 密钥（必填）
- `tailscale.tailnet`: 你的 Tailnet 名称（必填）
- `messageBefore`: 命令执行前发送的消息
- `messageAfter`: 命令执行后发送的消息
- `isLog`: 是否启用日志
- `logLevel`: 日志级别 (debug/info/warn/error)

## 使用方法

### 生成 Auth Key

使用以下命令生成新的 Tailscale Auth Key：

```
vcc.new
```

插件会：
1. 调用 Tailscale API 生成一个7天有效期的 Auth Key
2. 构造完整的安装命令
3. 返回可直接执行的 curl 命令

### 示例输出

```
🔑 Tailscale Auth Key 已生成！

执行以下命令来安装和连接 Tailscale：

curl -fsSL https://tailscale.com/install.sh | sh && sudo tailscale up --auth-key=tskey-auth-xxxxxxxxxxxx

⏰ 该 Auth Key 将在 7 天后过期
```

## 获取 Tailscale API 密钥

1. 访问 [Tailscale Admin Console](https://login.tailscale.com/admin/settings/keys)
2. 点击 "Generate API key"
3. 选择合适的权限（需要创建 Auth Key 的权限）
4. 复制生成的 API 密钥到配置中

## 错误排查

- 确保 API 密钥正确且有足够权限
- 检查 Tailnet 名称是否正确
- 查看日志获取详细错误信息

## 许可证

MPL-2.0
