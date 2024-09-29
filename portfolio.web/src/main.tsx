import React from 'react'
import ReactDOM from 'react-dom/client'
import CircularProgress from '@mui/material/CircularProgress';
import { MUIThemeWrapper } from 'mui/MUIThemeWrapper';
import { App } from 'components/App'
import "./i18n/config";
import './main.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<CircularProgress />}>
      <MUIThemeWrapper>
        <App />
      </MUIThemeWrapper>
    </React.Suspense>
  </React.StrictMode>,
)