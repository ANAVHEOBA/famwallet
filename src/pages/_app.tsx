import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/context/AuthContext'
import { TurnkeyProvider } from '@/context/TurnkeyContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TurnkeyProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </TurnkeyProvider>
  )
}