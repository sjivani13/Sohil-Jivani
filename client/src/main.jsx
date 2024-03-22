import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProvideAuth } from './hooks/useProvideAuth.jsx';
import { ProvideSearch } from './hooks/useSearch.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAuth>
      <ProvideSearch>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProvideSearch>
    </ProvideAuth>
  </React.StrictMode>,
)
