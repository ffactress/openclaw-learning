'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-dark">
      <Sidebar />
      
      <main className="lg:ml-64 max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section id="capabilities" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OpenClaw 能干嘛
            </h1>
            <p className="text-xl text-gray-300">
              了解 OpenClaw 的核心功能和使用场景判断
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('/openclaw-learning/image1.jpeg')}>
              <img 
                src="/openclaw-learning/image1.jpeg" 
                alt="OpenClaw 功能展示 1" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-dark rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('/openclaw-learning/image2.jpeg')}>
              <img 
                src="/openclaw-learning/image2.jpeg" 
                alt="OpenClaw 功能展示 2" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section id="what-is" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OpenClaw 是什么
            </h1>
            <p className="text-xl text-gray-300">
              深入了解 OpenClaw 的架构和设计理念
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">核心定义</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              OpenClaw 是一款个人 AI 助手，运行在你自己的设备上。它可以通过你已经在使用的通讯渠道（WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、Microsoft Teams、WebChat 等）与你交互，还支持语音对话、Canvas 可视化等高级功能。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              OpenClaw 是一个本地优先的 AI 助手网关，它的核心设计理念是：
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">核心设计理念</h2>
            <div className="space-y-4">
              <div className="bg-dark rounded-lg p-6 border-l-4 border-highlight">
                <h3 className="text-xl font-bold text-white mb-2">个人化</h3>
                <p className="text-gray-300">为你个人服务，而非企业级多用户系统</p>
              </div>

              <div className="bg-dark rounded-lg p-6 border-l-4 border-highlight">
                <h3 className="text-xl font-bold text-white mb-2">本地运行</h3>
                <p className="text-gray-300">Gateway 运行在你的设备上（macOS、Linux、Windows WSL2）</p>
              </div>

              <div className="bg-dark rounded-lg p-6 border-l-4 border-highlight">
                <h3 className="text-xl font-bold text-white mb-2">多渠道接入</h3>
                <p className="text-gray-300">支持几乎所有主流通讯平台</p>
              </div>

              <div className="bg-dark rounded-lg p-6 border-l-4 border-highlight">
                <h3 className="text-xl font-bold text-white mb-2">功能丰富</h3>
                <p className="text-gray-300">浏览器控制、Canvas 可视化、语音交互、定时任务等</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">架构概览</h2>
            <div className="bg-dark rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-green-400">
{`WhatsApp / Telegram / Slack / Discord / Google Chat / Signal / iMessage / WebChat
                │
                ▼
┌───────────────────────────────┐
│            Gateway            │
│       (控制平面 - 核心)        │
│     ws://127.0.0.1:18789      │
└──────────────┬────────────────┘
               │
               ├─ AI 智能体 (Agent)
               ├─ CLI 命令行工具
               ├─ WebChat 网页界面
               ├─ macOS/iOS/Android 客户端
               └─ 浏览器控制 (Chrome CDP)`}
              </pre>
            </div>
          </div>
        </section>

        <section id="installation" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              安装流程
            </h1>
            <p className="text-xl text-gray-300">
              详细安装指南和配置步骤
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">系统要求</h2>
            <div className="bg-dark rounded-lg p-6">
              <div className="text-4xl mb-3">🪟</div>
              <h3 className="text-xl font-bold text-white mb-4">Windows</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Windows 10/11</li>
                <li>• WSL2（推荐）或 Git Bash</li>
                <li>• Node.js 18+ 或 Bun</li>
                <li>• 4GB RAM（推荐 8GB）</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">必备（所有平台）</h2>
            <div className="bg-dark rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span><strong className="text-white">Node.js（必须满足版本要求）：</strong>官方要求 Node &gt;= 22</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span><strong className="text-white">Git：</strong>走源码路线时需要</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span><strong className="text-white">可用的模型 API：</strong>免费用GLM、或者kimi</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">openclaw快速安装</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">一、安装 Node.js</h3>
              <p className="text-gray-300 mb-4">调用终端（shellpower），或者用ide（比如trae）</p>
              <p className="text-gray-300 mb-4">依此输入指令：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4 overflow-x-auto">
                <pre>
{`powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
choco install nodejs --version="24.14.0"`}
                </pre>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">验证对应环境安装</h4>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4 overflow-x-auto">
                <pre>
{`node -v
npm -v`}
                </pre>
              </div>
              <p className="text-gray-300">终端会返回对应版本</p>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">二、安装 openclaw</h3>
              <p className="text-gray-300 mb-4">终端输入指令：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>npm install -g openclaw@latest</p>
              </div>
            </div>
          </div>
        </section>

        <section id="first-config" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              首次配置
            </h1>
            <p className="text-xl text-gray-300">
              配置 OpenClaw 并接入 AI 模型
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">配置流程参考</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              首次配置流程参考：<a href="https://zhuanlan.zhihu.com/p/2002485126714644013" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">知乎文章</a>
            </p>
            <p className="text-gray-300 mb-4">搜索关键词：<span className="text-highlight font-bold">【5. 首次配置：onboard 向导逐项填写指南（含命令行视图）】</span></p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">特别注意</h2>
            <div className="bg-dark rounded-lg p-6">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">1.</span>
                  <span><strong className="text-white">模式选择：</strong>选择 <span className="text-highlight font-bold">local</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">2.</span>
                  <span><strong className="text-white">模型配置：</strong>以 GLM4.7 为例</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">3.</span>
                  <span><strong className="text-white">选择提供商：</strong>选择 <span className="text-highlight font-bold">z.ai</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">4.</span>
                  <span><strong className="text-white">输入 API Key：</strong>输入获取的 API Key</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">5.</span>
                  <span><strong className="text-white">选择模型：</strong>接着选择 <span className="text-highlight font-bold">GLM4.7</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">6.</span>
                  <span><strong className="text-white">其他配置：</strong>其他内容先选择 <span className="text-highlight font-bold">skip</span> 即可，后续可配置</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">补充说明：API Key 获取</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">获取步骤</h3>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>前往 <a href="https://bigmodel.cn/" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">智谱AI开放平台</a></li>
                <li>首次注册赠送对应的额度</li>
                <li>创建新的 API Key 并复制</li>
              </ol>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">操作视频</h3>
              <a href="https://www.bilibili.com/video/BV1HMz7BEESy/?spm_id_from=333.337.search-card.all.click&vd_source=c3a0a85547074b8a6e09c2f21bc50007" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-highlight transition-colors">
                别花钱买API了！OpenCode 调用官方免费GLM4.7 Flash大模型
              </a>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">API 是什么？</h3>
              <a href="https://www.bilibili.com/video/BV1LEKMexEV7/?spm_id_from=333.337.search-card.all.click&vd_source=c3a0a85547074b8a6e09c2f21bc50007" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-highlight transition-colors">
                什么是API？DeepSeek技巧升级2.0
              </a>
            </div>
          </div>
        </section>

        <section id="security" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              安全问题
            </h1>
            <p className="text-xl text-gray-300">
              学习安全最佳实践和权限控制
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">一句话原则</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              先当它是"会犯错的实习生"，再慢慢给权限。
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">最小权限原则</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              OpenClaw 使用三层权限控制：Sandbox（运行位置）、Tool Policy（工具可用性）、Elevated（主机执行）。先查看当前生效配置：
            </p>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">查看当前配置</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw sandbox explain</p>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">命令行输出示例</h3>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 overflow-x-auto">
                <pre>
{`🦞 Sandbox Inspector
────────────────────────────────────

Agent: main
  Sandbox mode: non-main
  Current session: sandboxed (non-main)
  Workspace access: rw
  Tool policy: allow [exec, read, write, browser, ...]
  Elevated: disabled`}
                </pre>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">示例：限制工具可用性（只允许读取，不允许写入/删除）</h3>
              <p className="text-gray-300 mb-4">编辑 ~/.openclaw/openclaw.json：</p>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 overflow-x-auto">
                <pre>
{`{
  "agents": {
    "defaults": {
      "sandbox": {
        "mode": "non-main"  // 非主会话在沙箱中运行
      },
      "tools": {
        "allow": ["read", "exec"],  // 只允许读取和执行
        "deny": ["write", "delete", "edit"],  // 禁止写入/删除/编辑
        "sandbox": {
          "tools": {
            "allow": ["read", "exec"],  // 沙箱内也只允许读取和执行
            "deny": ["write", "delete"]
          }
        }
      }
    }
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">逐步开放权限</h3>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>第一阶段：只允许文本处理（allow: ["read"]，禁用 exec）</li>
                <li>第二阶段：允许读取和执行（allow: ["read", "exec"]，禁用 write）</li>
                <li>第三阶段：允许写入特定目录（通过 Sandbox bind mounts 限制范围）</li>
                <li>最后阶段：根据信任度开放更多权限</li>
              </ol>
            </div>

            <div className="bg-dark rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-white mb-4">验证配置生效</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4">
                <p>openclaw sandbox explain --agent main</p>
              </div>
              <p className="text-gray-300 mb-2">修改后重启 Gateway：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw gateway restart</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">不暴露公网</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">检查当前绑定</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4">
                <p>openclaw status --all | grep "Bind"</p>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">命令行输出示例（不安全）</h4>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`Bind: 0.0.0.0:18789  # 监听所有网络接口，危险！`}
                </pre>
              </div>
              
              <p className="text-gray-300 mb-2">如果显示 0.0.0.0，改为 127.0.0.1：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4">
                <p>openclaw configure --section gateway</p>
                <p className="text-gray-400"># 选择 bind: 127.0.0.1 (loopback)</p>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">命令行输出示例（安全）</h4>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`Bind: 127.0.0.1:18789  # 只监听本地，安全`}
                </pre>
              </div>
              
              <p className="text-gray-300 mb-2">如果需要远程访问：使用 SSH 隧道，不要直接暴露端口</p>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`# 在本地机器执行
ssh -N -L 18789:127.0.0.1:18789 user@remote-host

# 然后访问 http://127.0.0.1:18789/（实际连接到远程 Gateway）`}
                </pre>
              </div>
              
              <p className="text-gray-300 mb-2">或使用 Tailscale（官方推荐）：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw configure --section gateway</p>
                <p className="text-gray-400"># 选择 "Enable Tailscale exposure"</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">敏感信息管理</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">不要做的事</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <span>在 Telegram 对话中直接发 API Key</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <span>把 Key 写进公开的配置文件（如 GitHub）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <span>截图时暴露 Token</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <span>在日志中打印完整 Key</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">正确做法</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold mb-2">1. 使用环境变量：</h4>
                  <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-2 overflow-x-auto">
                    <pre>
{`# Linux/macOS/WSL2
export MOONSHOT_API_KEY="sk-..."

# Windows PowerShell
$env:MOONSHOT_API_KEY="sk-..."`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-2">2. 使用 ~/.openclaw/.env（daemon 会自动读取）：</h4>
                  <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4">
                    <p>echo "MOONSHOT_API_KEY=sk-..." &gt;&gt; ~/.openclaw/.env</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-2">3. 定期轮换 API Key：</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• 每月检查一次 Key 使用情况</li>
                    <li>• 发现异常立即轮换</li>
                    <li>• 在 Moonshot/Anthropic 控制台设置使用限制</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">高风险动作二次确认</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <p className="text-gray-300 mb-4">配置执行命令审批流程（使用官方 CLI）：</p>
              <p className="text-gray-300 mb-4">OpenClaw 使用 exec-approvals.json 文件管理需要审批的命令。查看当前配置：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4">
                <p>openclaw approvals get</p>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">命令行输出示例</h4>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`🦞 Exec Approvals
────────────────────────────────────

No approvals configured (all commands allowed)`}
                </pre>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">添加需要审批的命令：</h4>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`# 添加危险命令到审批列表（需要匹配完整路径）
openclaw approvals allowlist add "rm -rf"
openclaw approvals allowlist add "/usr/bin/dd"
openclaw approvals allowlist add "~/.scripts/dangerous.sh"

# 查看更新后的配置
openclaw approvals get`}
                </pre>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">命令行输出示例</h4>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`🦞 Exec Approvals
────────────────────────────────────

Allowlist:
  - rm -rf
  - /usr/bin/dd
  - ~/.scripts/dangerous.sh`}
                </pre>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">从文件批量导入审批规则：</h4>
              <p className="text-gray-300 mb-2">创建 exec-approvals.json：</p>
              <div className="bg-black rounded p-4 font-mono text-xs text-green-400 mb-4 overflow-x-auto">
                <pre>
{`{
  "allowlist": [
    "rm -rf",
    "/usr/bin/dd",
    "~/.scripts/dangerous.sh"
  ]
}`}
                </pre>
              </div>
              
              <p className="text-gray-300 mb-2">导入配置：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 mb-4">
                <p>openclaw approvals set --file ./exec-approvals.json</p>
              </div>
              
              <div className="bg-dark rounded-lg p-6 border-l-4 border-highlight mt-4">
                <p className="text-gray-300">这样配置后，执行这些命令时，Agent 会先请求批准：</p>
                <p className="text-gray-300 mt-2">在 Telegram/Dashboard 中，会显示审批按钮，需要你点击确认。</p>
                <p className="text-gray-300 mt-2 text-sm">注意：审批机制仅适用于 exec 工具。文件删除、写入等操作需要通过 Sandbox 配置和 Tool Policy 控制（见下文）。</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent">
            <h2 className="text-3xl font-bold text-white mb-6">定期安全检查</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              建议安装最新电脑管家配合检查
            </p>
          </div>
        </section>

        <section id="usage" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              使用场景
            </h1>
            <p className="text-xl text-gray-300">
              技能工具安装和使用
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">学习建议</h2>
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">入门步骤</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-highlight mr-3">1.</span>
                  <span>先跑通最小闭环，比如完成最简单的一次对话（确定基础配置）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3">2.</span>
                  <span>执行一个最简单的工作，比如询问现在几点（确定大模型接入）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3">3.</span>
                  <span>对接成功飞书等</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3">4.</span>
                  <span>之后再结合需求，进行更深入学习</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">学习提示</h3>
              <p className="text-gray-300 mb-4">先通过论坛（比如 <a href="https://openclaw.cc/" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://openclaw.cc/</a>）找到别人实现的方式，然后 copy 使用，再根据需求和经验优化</p>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">学习路径图</h2>
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">阶段 1：基础使用（当前）</h3>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">✅</span>
                  <span>安装和配置</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">✅</span>
                  <span>跑通最小闭环</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">✅</span>
                  <span>接入一个渠道</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">阶段 2：扩展能力</h3>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">📖</span>
                  <span>阅读：<a href="https://docs.openclaw.ai/tools/skills" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/tools/skills</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">🔧</span>
                  <span>安装第一个 Skill（如 gmail）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">📝</span>
                  <span>学习配置 Skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">🎯</span>
                  <span>实现一个具体场景（如"每天清邮件"）</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">阶段 3：高级功能</h3>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">📖</span>
                  <span>阅读：<a href="https://docs.openclaw.ai/automation/cron-jobs" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/automation/cron-jobs</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">🔧</span>
                  <span>配置定时任务</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">📖</span>
                  <span>阅读：<a href="https://docs.openclaw.ai/concepts/multi-agent" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/concepts/multi-agent</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">🎯</span>
                  <span>配置多 Agent 路由</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">阶段 4：自定义开发</h3>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start">
                  <span className="text-highlight mr-2">📖</span>
                  <span>阅读：<a href="https://docs.openclaw.ai/tools/skills" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/tools/skills（开发部分）</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">🔧</span>
                  <span>开发自己的 Skill</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">🎯</span>
                  <span>贡献到社区</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">推荐阅读顺序</h2>
            <div className="space-y-6">
              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">1. Skills 生态</h3>
                <p className="text-gray-300 mb-2">链接：<a href="https://docs.openclaw.ai/tools/skills" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/tools/skills</a></p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 了解如何安装和使用社区 Skills</li>
                  <li>• 学习 Skills 配置选项</li>
                </ul>
              </div>

              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">2. 自动化</h3>
                <p className="text-gray-300 mb-2">链接：<a href="https://docs.openclaw.ai/automation/cron-jobs" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/automation/cron-jobs</a></p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 配置定时任务（如每天 9 点清邮件）</li>
                  <li>• 设置 Webhook 触发（如 Sentry 报错自动修复）</li>
                </ul>
              </div>

              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">3. 多 Agent</h3>
                <p className="text-gray-300 mb-2">链接：<a href="https://docs.openclaw.ai/concepts/multi-agent" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/concepts/multi-agent</a></p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 配置多个 Agent（不同用途、不同模型）</li>
                  <li>• 学习消息路由规则</li>
                </ul>
              </div>

              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">4. 安全最佳实践</h3>
                <p className="text-gray-300 mb-2">链接：<a href="https://docs.openclaw.ai/gateway/security" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">https://docs.openclaw.ai/gateway/security</a></p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 深入理解安全模型</li>
                  <li>• 配置细粒度权限控制</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent">
            <h2 className="text-3xl font-bold text-white mb-6">具体进阶步骤</h2>
            <div className="space-y-6">
              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">1. 把一个场景做到稳定</h3>
                <p className="text-gray-300 mb-2">例如"清邮件"做到 90% 可靠</p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 记录失败案例，优化指令</li>
                  <li>• 配置审批流程，避免误操作</li>
                </ul>
              </div>

              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">2. 把指令模板化</h3>
                <p className="text-gray-300 mb-2">把你常用的表达写成固定句式（减少歧义）</p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 创建 ~/.openclaw/workspace/COMMANDS.md</li>
                  <li>• 记录常用指令模板</li>
                </ul>
              </div>

              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">3. 再扩展第二个能力</h3>
                <p className="text-gray-300 mb-2">例如从邮件扩展到日历</p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 安装 calendar skill</li>
                  <li>• 配置 OAuth 授权</li>
                </ul>
              </div>

              <div className="bg-dark rounded-lg p-6">
                <h3 className="text-xl font-bold text-highlight mb-4">4. 最后再考虑自动化触发</h3>
                <p className="text-gray-300 mb-2">定时任务、Webhook（例如 Sentry 触发修复）</p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li>• 配置 cron job</li>
                  <li>• 设置 webhook endpoint</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">skill工具安装</h2>
            <div className="bg-dark rounded-lg p-6">
              <p className="text-gray-300 mb-4">安装 ClawHub 技能工具：</p>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>npm install -g clawhub</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent">
            <h2 className="text-3xl font-bold text-white mb-6">首次推荐安装</h2>
            <div className="bg-dark rounded-lg p-6">
              <p className="text-gray-300 mb-4">推荐安装以下技能：</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-highlight mr-3">•</span>
                  <span><strong className="text-white">skill-vetter</strong> - 安全检查工具，用于验证技能的安全性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3">•</span>
                  <span><strong className="text-white">find-skills</strong> - 技能搜索工具，帮助查找和发现有用的技能</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="troubleshooting" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              常见问题和查找
            </h1>
            <p className="text-xl text-gray-300">
              Gateway 管理和故障排查
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Gateway 管理</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">查看状态</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw gateway status</p>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">启动/停止/重启</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 space-y-2">
                <p>openclaw gateway start</p>
                <p>openclaw gateway stop</p>
                <p>openclaw gateway restart</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">配置管理</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">运行配置向导</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw onboard</p>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">获取/设置配置值</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400 space-y-2">
                <p>openclaw config get agents.defaults.workspace</p>
                <p>openclaw config set agents.defaults.model.primary "openai/gpt-5.2"</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">诊断工具</h2>
            
            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">健康检查</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw doctor</p>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-highlight mb-4">自动修复</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw doctor --fix</p>
              </div>
            </div>

            <div className="bg-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-highlight mb-4">查看日志</h3>
              <div className="bg-black rounded p-4 font-mono text-sm text-green-400">
                <p>openclaw logs --follow</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent">
            <h2 className="text-3xl font-bold text-white mb-6">相关文章查看</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              更多详细的故障排查信息，请查看：<a href="https://openclaw.cc/gateway/troubleshooting" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">Gateway 故障排查</a>
            </p>
          </div>
        </section>

        <section id="resources" className="mb-24 scroll-mt-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              相关链接
            </h1>
            <p className="text-xl text-gray-300">
              有用的资源和参考文档
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent">
            <h2 className="text-3xl font-bold text-white mb-6">资源链接</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg p-6 hover:bg-accent transition-colors group">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">🌐</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight">官网</h3>
                    <p className="text-gray-400 text-sm">openclaw.ai</p>
                  </div>
                </div>
              </a>
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg p-6 hover:bg-accent transition-colors group">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">📚</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight">文档</h3>
                    <p className="text-gray-400 text-sm">docs.openclaw.ai</p>
                  </div>
                </div>
              </a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg p-6 hover:bg-accent transition-colors group">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">💻</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight">GitHub</h3>
                    <p className="text-gray-400 text-sm">github.com/openclaw/openclaw</p>
                  </div>
                </div>
              </a>
              <a href="https://discord.gg/clawd" target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg p-6 hover:bg-accent transition-colors group">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">💬</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight">Discord</h3>
                    <p className="text-gray-400 text-sm">discord.gg/clawd</p>
                  </div>
                </div>
              </a>
              <a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg p-6 hover:bg-accent transition-colors group">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">�️</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight">技能市场</h3>
                    <p className="text-gray-400 text-sm">clawhub.com</p>
                  </div>
                </div>
              </a>
              <a href="https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh" target="_blank" rel="noopener noreferrer" className="bg-dark rounded-lg p-6 hover:bg-accent transition-colors group">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">�</span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-highlight">飞书</h3>
                    <p className="text-gray-400 text-sm">飞书文档</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-highlight transition-colors"
              aria-label="关闭"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="放大查看"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <footer className="lg:ml-64 bg-primary border-t border-accent">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © 2024 OpenClaw 学习指南. 本地优先，安全可靠。
          </p>
        </div>
      </footer>
    </div>
  )
}
