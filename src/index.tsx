import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import client from './apollo'
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
)
