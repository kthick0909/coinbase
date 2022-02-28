import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import "../styles/react-spinner-loader.css";
const supportedChainIds = [4]
const connectors = {
  injected: {}, 
}

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebWeb3Provider
    supportedChainIds={supportedChainIds}
    connectors={connectors}
  >
    <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
