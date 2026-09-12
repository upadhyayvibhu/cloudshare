import { BrowserRouter, Route, Routes } from "react-router-dom"

import ProtectedRoute from "./components/common/ProtectedRoute"

import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import MyFiles from "./pages/MyFiles"
import Subscription from "./pages/Subscription"
import Transactions from "./pages/Transactions"
import Upload from "./pages/Upload"
import { RedirectToSignIn } from "@clerk/react"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-files"
          element={
            <ProtectedRoute>
              <MyFiles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App