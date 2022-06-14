import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Stack from "@mui/material/Stack"

import LoginPage from "Pages/Login"
import WalletPage from "Pages/Wallet"
import gif from "Assets/infinite-gif-preloader.gif"

const NoMatch = () => {
  const { isAuthenticated } = useAuth0()
  const navigateNext = () => {
    if (isAuthenticated) {
      return <Navigate to="/wallet" />
    } else {
      return <Navigate to="/login" />
    }
  }

  return (
    <>
      {navigateNext()}
    </>
  )
}

const ProtectedRoute = ({ children }) => {
  const { error, isLoading, isAuthenticated } = useAuth0()
  if (isLoading) return <Loading />
  if (error) return <div>Oops... {error.message}</div>

  return isAuthenticated ? children : <Navigate to="/login" />
}

const Loading = () => (
  <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="center"
    spacing={2}
    marginTop={30}
  >
    <img src={gif} alt="loading..." />
  </Stack>
)

const WalletRouting = () => (
  <ProtectedRoute>
    <Routes>
      <Route path="*" element={<WalletPage />} />
    </Routes>
  </ProtectedRoute>
)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wallet/*" element={<WalletRouting />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
