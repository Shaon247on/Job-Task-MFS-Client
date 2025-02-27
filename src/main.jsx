import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes/Main';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
       <AuthProvider>
          <RouterProvider router={router} />
          </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
