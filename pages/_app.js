import '../styles/globals.css'
import Layout from '../comps/Layout'

function MyApp({ Component, pageProps }) {
  return (<div>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </div>)
}

export default MyApp
