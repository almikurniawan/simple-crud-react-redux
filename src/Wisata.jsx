import React from 'react';
import XPanel from '../component/XPanel/';
import XTable from '../component/XTable/';
import {connect} from 'react-redux';
import {_delete} from '../actions/actions';
import {bindActionCreators} from 'redux';

class Wisata extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.CreateTable();
	}

	CreateTable(){
		_.each(this.props.wisata, function(v, i){
			v.edit = (<div><button name="edit" className="btn btn-warning">Edit</button> <button name="delete" className="btn btn-danger">Delete</button></div>);
		});

		return (
			<div>
				<button className="btn btn-primary" style={{marginBottom:'10px'}} onClick={()=>this.props.history.push('/wisata/baru')}> + Baru</button>
				<XTable header={
					[
						{
							key:'id',
							label:'ID',
							width:5
						},
						{
							key:'nama',
							label:'Nama Wisata',
							width:40
						}
						,
						{
							key:'kota',
							label:'Kota',
							width:20
						}
						,
						{
							key:'deskripsi',
							label:'Deskripsi',
							width:15
						},
						{
							key:'edit',
							label:'Aksi',
							width:15
						},
					]
				}
				body={this.props.wisata}
				onItemClick={(action,value) => this.handleClick(action, value)}
				/>
			</div>
		);
	}

	handleClick(action,wisata){
		console.log(this.props.history);
		if(action=="edit"){
			this.props.history.push('/wisata/edit/'+wisata.id);
		}else if(action=="delete"){
			this.props._delete(wisata.id);
		}
	}

	render(){
		return (
				<div className="col-lg-12">
					<XPanel content={this.CreateTable.bind(this)()} headerTitle = "List Wisata" />
				</div>
		);
	}
}

function mapStateToProps(state){
	return {
		wisata : state.listWisata.data
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		_delete : _delete
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wisata);