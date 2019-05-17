import React, { Component } from 'react'
import Title from './Title'
import { storeProducts } from '../../utils/data'
import { ProductType } from '../../utils/typeDefinition';
import { ProductConsumer } from '../../context'
import Product from '../Product';

interface State {
	products: ProductType[],
}

export default class ProductList extends Component<{}, State> {
	state: State = {
		products: storeProducts,
	}

	render() {
		console.log(this.state.products)
		return (
			<>
				<div className="py-5">
					<div className="container">
						<Title name='our' title='products' />

						<div className="row">
							<ProductConsumer>
								{(value: any) => {
									return value.products.map((product: ProductType) => {
										return <Product key={product.id} product={product} />
									})
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</>
		)
	}
}
