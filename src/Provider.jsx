import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"

const auth0_domain = process.env.AUTH0_DOMAIN
const auth0_client_id = process.env.AUTH0_CLIENT_ID
const auth0_audience = process.env.AUTH0_AUDIENCE
const auth0_callback_url = process.env.AUTH0_CALLBACK_URL
const mdTheme = createTheme();

const AppProvider = ({ children }) => (
  <ThemeProvider theme={mdTheme}>
    <CssBaseline />
    <Auth0Provider
      domain={auth0_domain}
      clientId={auth0_client_id}
      audience={auth0_audience}
      redirectUri={auth0_callback_url}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  </ThemeProvider>
)

export default AppProvider
