import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
	componentWillReceiveProps(nextProps){
		console.log("Props : ",nextProps.children);
	}

	componentDidMount(){
		console.log("Mount : ",this.props);
	}
    render(){
        return (<div>
        		
		        </div>);
    }
}