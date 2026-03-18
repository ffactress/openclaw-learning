'use client'

import { useState, useEffect } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const menuItems = [
    { id: 'capabilities', label: '能干嘛', icon: '🎯' },
    { id: 'what-is', label: '是什么', icon: '🤖' },
    { id: 'installation', label: '安装流程', icon: '📦' },
    { id: 'first-config', label: '首次配置', icon: '⚙️' },
    { id: 'security', label: '安全问题', icon: '🔒' },
    { id: 'usage', label: '使用场景', icon: '💡' },
    { id: 'troubleshooting', label: '常见问题和查找', icon: '🔧' },
    { id: 'resources', label: '相关链接', icon: '🔗' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar')
      const menuButton = document.getElementById('menu-button')
      
      if (sidebar && menuButton && 
          !sidebar.contains(event.target as Node) && 
          !menuButton.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <>
      {!isMobile ? (
        <aside id="sidebar" className="fixed left-0 top-0 h-full w-64 bg-primary border-r border-accent overflow-y-auto z-50">
          <div className="p-6">
            <div className="text-2xl font-bold text-white flex items-center">
              <span className="mr-2">🦞</span>
              OpenClaw 学习
            </div>
          </div>

          <nav className="px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center px-4 py-3 rounded-lg transition-colors text-gray-300 hover:bg-accent hover:text-white"
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-accent">
            <p className="text-xs text-gray-400 text-center">
              本地优先 · 安全可靠
            </p>
          </div>
        </aside>
      ) : (
        <>
          <button
            id="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 right-4 z-50 bg-primary border border-accent rounded-lg p-3 hover:bg-accent transition-colors"
            aria-label="菜单"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isOpen && (
            <aside id="sidebar" className="fixed right-0 top-0 h-full w-64 bg-primary border-l border-accent overflow-y-auto z-50 shadow-2xl">
              <div className="p-6">
                <div className="text-2xl font-bold text-white flex items-center">
                  <span className="mr-2">🦞</span>
                  OpenClaw 学习
                </div>
              </div>

              <nav className="px-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center px-4 py-3 rounded-lg transition-colors text-gray-300 hover:bg-accent hover:text-white"
                      >
                        <span className="mr-3 text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-accent">
                <p className="text-xs text-gray-400 text-center">
                  本地优先 · 安全可靠
                </p>
              </div>
            </aside>
          )}
        </>
      )}
    </>
  )
}