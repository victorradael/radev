'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight, Home, FileText, Settings, Users, BarChart } from 'lucide-react'

const menuItems = [
  { name: 'Início', icon: Home, path: '/' },
  { name: 'Relatórios', icon: FileText, path: '/relatorios' },
  { name: 'Usuários', icon: Users, path: '/usuarios' },
  { name: 'Estatísticas', icon: BarChart, path: '/estatisticas' },
  { name: 'Configurações', icon: Settings, path: '/configuracoes' },
]

export default function SidebarMenu() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={`flex flex-col min-h-max bg-gray-800 text-pale-blue transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex p-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-pale-blue hover:text-gray-300 transition-colors"
        >
          {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} passHref>
                <span
                  className={`flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors ${
                    pathname === item.path ? 'bg-gray-700' : ''
                  }`}
                >
                  <item.icon size={24} className="min-w-[24px]" />
                  {isExpanded && <span className="ml-3">{item.name}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}