import React, { Component } from 'react'
import { storeProducts, detailProduct } from './utils/data'
import { ProductType } from './utils/typeDefinition';

const ProductContext = React.createContext({});

interface State {
    products: ProductType[],
    detailProduct: ProductType,
}

class ProductProvider extends Component<{}, State> {
    state: State = {
        products: storeProducts,
        detailProduct,
    }

    handleDetail = () => {
		console.log('Handle Detail')
	}

	addToCart = () => {
		console.log('Add to cart')
	}

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,  
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
