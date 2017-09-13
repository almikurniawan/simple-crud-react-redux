import React from 'react';
import history from './history';
import { Route, Link, browserHistory, IndexRoute, BrowserRouter, Switch  } from 'react-router-dom';
import Beranda from './src/Beranda';
import Wisata from './src/Wisata';
import EditWisata from './src/EditWisata';
import TambahWisata from './src/TambahWisata';
import Header from './src/template/header';
export default class Router extends React.Component{
	render(){
		return (
			<BrowserRouter history={history}>
				<div>
					<Header/>
					<Route exact path = "/" component = {Beranda}/>
					<Switch>
						<Route exact path="/wisata" component={Wisata}/>
						<Route path="/wisata/edit/:number" component={EditWisata}/>
						<Route path="/wisata/baru" component={TambahWisata}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}