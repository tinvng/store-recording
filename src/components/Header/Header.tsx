import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../car-logo.svg'
import { ButtonContainer } from '../Button';
import styled from 'styled-components'

export default class Header extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm px-sm-4">
				{/* Logo */}
				<Link to='/'>
					<img
						src={logo}
						alt=''
						className='navbar-brand'
						style={{
							width: 80,
							height: 40,
							color: 'white'
						}}
					/>
				</Link>
			
				{/* Products */}
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-2">
						<Link to='/' className="nav-link">
							Products
						</Link>
					</li>
				</ul>
			
				{/* Cart */}
				<Link to='/cart' className="ml-auto">
					<ButtonContainer>
						<span className='mr-2'>
							<i className="fas fa-cart-plus"/>
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		)
	}
}

const NavWrapper = styled.nav`
	background-color: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.1rem;
		text-transform: capitalize;
	}
`
