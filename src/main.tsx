import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import './index.css'
import App from './App.tsx'

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
    setToLS('all-themes', themes.default);
    return(
        <App />
    )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PrimeReactProvider>
        <Index />
      </PrimeReactProvider>
  </StrictMode>,
)
