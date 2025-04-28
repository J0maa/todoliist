import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // استيراد ملفات CSS
import App from './App'  // استيراد مكون App

// ربط تطبيق React بـ DOM
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)