import React from "react";
import {Table} from 'react-bootstrap';

var _ = require('lodash');

class XTable extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps){
		this.props=nextProps;
	}

	renderHeader(){
		let header = this.props.header;
		let additionalColumn = this.props.additionalColumn;
		let column =[];
		_.each(header, function(value,index){
			column.push(<th key={"Thead_"+Math.random()+"_"+value.key} style={value.width ? {width:value.width+'%'}:''}>{value.label}</th>);
		});
		return column;
	}

	handleClick(event, value){		
		return this.props.onItemClick(event.target.name, value);
	}

	renderBody(){
		let body = this.props.body;
		let self = this;
		return _.map(body, function(v,i){
			return (
				<tr id={i} key={'row_'+i+'_'+Math.random()} onClick={(event) => self.handleClick(event,v)}>
					{
						_.map(self.props.header, function(v2,i2){
							return (
								<td key={'column_'+i+'_'+i2+'_'+Math.random()}>
									{v[v2.key]}
								</td>
							);
						})
					}
				</tr>
			);
		})
	}

	render(){
		return (
				<Table responsive className="table-bordered">
				    <thead>
				      <tr>
				        {this.renderHeader.bind(this)()}
				      </tr>
				    </thead>
				    <tbody>
				        {this.renderBody.bind(this)()}			      
				    </tbody>
				</Table>
		);
	}
}

export default XTable;