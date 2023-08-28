import Login from './components/Login'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TradingTrackr',
  description: 'Tracking your success',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}
        <AuthContextProvider>
          <Login/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
