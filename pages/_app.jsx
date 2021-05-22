import { ThemeProvider } from "styled-components"
import { QueryClientProvider, QueryClient } from "react-query"
import theme from "../styles/theme"
import { GlobalStyles } from "../styles/GlobalStyles"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
