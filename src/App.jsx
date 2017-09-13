import React from 'react';
import Router from '../router';
import Footer from './template/footer';

export default class App extends React.Component {
    render(){
        return (<div>
        			<Router />
        			<Footer />
		        </div>);
    }
}