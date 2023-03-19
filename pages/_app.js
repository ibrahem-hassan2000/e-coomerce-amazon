import '@/styles/globals.css'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Layout from '@/components/Layout';


const clientSideEmotionCache = createCache({ key: 'css' });
export default function App({ Component, pageProps , emotionCache = clientSideEmotionCache, }) {
  return( 
    <CacheProvider value={emotionCache}>
      <Layout>
      <Component {...pageProps} />

      </Layout>
  </CacheProvider>
  )
}
