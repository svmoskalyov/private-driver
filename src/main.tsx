import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.scss'
import App from './App.tsx'
import { store } from './redux/store.ts'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
