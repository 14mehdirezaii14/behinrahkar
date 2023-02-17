import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { useState } from 'react';
import { configQueryClient } from '@/config/configQueryClient';




export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(configQueryClient))
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
