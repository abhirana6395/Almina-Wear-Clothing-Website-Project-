import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "rgba(255,255,255,0.85)",
            color: "#000",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            borderRadius: "14px",
            padding: "14px 18px",
            fontWeight: "500",
          },
        }}
      />
    <App />
  </StrictMode>,
)
