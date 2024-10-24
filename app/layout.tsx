import './globals.css'
import SidebarMenu from './components/sidebar-menu'
import { DolfimLogo } from '@/components/ui/dolfimLogo'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SidebarMenu />
          <main className='w-screen bg-slate'>{children}</main>
        </div>
      </body>
    </html>
  )
}