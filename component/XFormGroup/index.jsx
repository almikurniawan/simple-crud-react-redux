import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class XFormGroup extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){

	}

	componentDidMount(){

	}

	componentWillReceiveProps(nextProps){
		this.props = nextProps;
	}

	render(){
		return (
			<FormGroup>
				<ControlLabel>{this.props.label}</ControlLabel>
				<FormControl 
					id={this.props.id} 
					name={this.props.name} 
					value={this.props.value} 
					onChange={(event) => this.props.onChange(event)} />
			</FormGroup>
		);
	}

}
