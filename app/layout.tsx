import './globals.css'
import SidebarMenu from './components/sidebar-menu'

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
          <main className='w-screen'>{children}</main>
        </div>
      </body>
    </html>
  )
}