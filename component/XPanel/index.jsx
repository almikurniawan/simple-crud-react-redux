import React from 'react';
import {Panel} from 'react-bootstrap';
import PropTypes from 'prop-types';

class XPanel extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props);
	}
	componentWillReceiveProps(nextProps){
		this.props=nextProps;
	}
	render(){
		return (
			<Panel header={this.props.headerTitle}>
				{
					this.props.content
				}
			</Panel>
		);
	}
}

XPanel.propTypes = {
	headerTitle : PropTypes.string,
	content : PropTypes.oneOfType([
		PropTypes.object, 
		PropTypes.string, 
		PropTypes.element, 
		PropTypes.node,
		PropTypes.func
	]),
};

XPanel.defaultProps = {
	headerTitle : 'Title',
	content : 'Konten'
};

export default XPanel;
