import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Header extends React.Component {
    render(){
        return (
        	<Navbar>
			    <Navbar.Header>
			    </Navbar.Header>
			    <Nav>
			    	<LinkContainer to="/">
			    		<NavItem eventKey={1} href="#">Home</NavItem>
			    	</LinkContainer>
			    	<LinkContainer to="/wisata">
			    		<NavItem eventKey={2} href="#">Wisata</NavItem>
			    	</LinkContainer>
			    </Nav>
			</Navbar>
       	);
    }
}