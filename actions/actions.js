export function doEdit(id,data){	
	return {
		type : "DOEDIT",
		id : id,
		payload : data
	}
}

export function doTambah(data){	
	return {
		type : "DOTAMBAH",
		payload : data
	}
}

export function _delete(id){
	return {
		type : "DELETE",
		id : id
	}
}