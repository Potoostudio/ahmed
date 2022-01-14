import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
    strategy='lazyOnload'
    src={`https://www.googletagmanager.com/gtag/js?id=G-R2RL87R687`}
    />
  
    <Script
    strategy='lazyOnload'>
      {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-R2RL87R687');
            `}
    </Script>
  
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
