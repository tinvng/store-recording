import React, { Component } from 'react'
import { ProductType } from '../../utils/typeDefinition';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../context'

interface Props {
	key: any,
	product: ProductType,
}

export default class Product extends Component<Props> {
	onClickItem = () => {
		console.log('click on the img container')
	}

	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
				<div className="card">
					<div
						className="img-container p-5"
						onClick={this.onClickItem}
					>
						<Link to='/details'>
							<img
								src={img}
								alt={`product ${title}`}
							/>
						</Link>
					</div>
				</div>
			</ProductWrapper>
		)
	}
}

const ProductWrapper = styled.div`

`
