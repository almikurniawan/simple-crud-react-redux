import React from 'react';
import XPanel from '../component/XPanel/';
import XTable from '../component/XTable/';
import {connect} from 'react-redux';
import {doTambah} from '../actions/actions';
import {bindActionCreators} from 'redux';
import XFormGroup from '../component/XFormGroup/';
import {FormGroup, ControlLabel, FormControl, Button, Alert} from 'react-bootstrap';

const _ = require("lodash");

class TambahWisata extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sukses : false,
			data :{
				id : '',
				nama : '',
				kota : '',
				deskripsi : ''
			}
		};
	}

	componentDidMount(){
		const self = this;
	}

	handleChange(event){
		let newState = this.state;
		newState.data[event.target.name] = event.target.value;
		this.setState(newState);
	}

	tambah(){
		this.props.doTambah(this.state.data);
		this.setState({sukses:true})
	}

	CreateForm(){
		var ket = null;
		if(this.state.sukses){
			ket = <Alert bsStyle="success">
				    <strong>Berhasil</strong> klik menu wisata untuk melihat hasilnya
				  </Alert>;
		}
		return (
			<div className="row">
				<div className="col-lg-12">
					{ket}
				</div>
				<div className="col-lg-6">
					<XFormGroup name="id" label="ID Wisata" value={this.state.data.id} onChange={(event) => this.handleChange(event)}/>
				</div>
				<div className="col-lg-6">
					<XFormGroup name="nama" label="Nama Wisata" value={this.state.data.nama} onChange={(event) => this.handleChange(event)}/>
				</div>
				<div className="col-lg-6">
					<XFormGroup name="kota" label="Lokasi Kota" value={this.state.data.kota} onChange={(event) => this.handleChange(event)}/>
				</div>
				<div className="col-lg-6">
					<FormGroup controlId="formControlsTextarea">
				      <ControlLabel>Deskripsi</ControlLabel>
				      <FormControl 
				      	componentClass="textarea" 
				      	placeholder="Deskripsi" 
				      	name="deskripsi" 
				      	value={this.state.data.deskripsi} 
				      	onChange={(event) => this.handleChange(event)} />
				    </FormGroup>
				</div>
				<div className="col-lg-6">
					<Button bsStyle="primary" onClick={()=>this.tambah()}>Simpan</Button>
				</div>
			</div>
		);
	}


	render(){
		return (
				<div className="col-lg-12">
					<XPanel content={this.CreateForm()} headerTitle = "Tambah Wisata" />
				</div>
		);
	}
}

function mapStateToProps(state){
	return {
		wisata : state.listWisata.data
	}
}

function matchDispactToProps(dispatch){
	return bindActionCreators({
		doTambah : doTambah
	}, dispatch);
}

export default connect(mapStateToProps, matchDispactToProps)(TambahWisata);