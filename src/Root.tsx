import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { ProductProvider } from './context'

export default class Root extends Component {
    render() {
        return (
            <ProductProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ProductProvider>
        )
    }
}
