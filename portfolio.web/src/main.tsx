import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'components/app'
import { LoadingSpinner } from 'components/loading-spinner';
import "./i18n/config";
import './main.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingSpinner />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
