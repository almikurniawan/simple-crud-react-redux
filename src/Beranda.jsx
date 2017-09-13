import React from 'react';
import XPanel from '../component/XPanel/index';

export default class Beranda extends React.Component {
    render(){
        return (
        	<div className="col-lg-12">
				<XPanel content="WELLCOME" headerTitle = "WELLCOME" />
			</div>
        );
    }
}