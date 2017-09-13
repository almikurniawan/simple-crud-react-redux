import { combineReducers } from 'redux';
import { edit } from '../actions/actions';
const _ = require("lodash");
var initialWisataState = {
                           data :
                           [
                                 {
                                    id: 1,
                                    nama: 'Wisata Gunung Kelud',
                                    kota : 'Kediri',
                                    deskripsi : 'Gunung Kelud Merupakan blablablablabla'
                                 },
                                 {
                                    id: 2,
                                    nama: 'Air Terjun Dolo',
                                    kota : 'Kediri',
                                    deskripsi : 'Air terjun dolo merupakan blablablabla'
                                 },
                                 {
                                    id: 3,
                                    nama: 'SLG',
                                    kota : 'Kediri',
                                    deskripsi : 'Simpang Lima Gumul adalah monument kebanggaan kabupaten kediri blablbablabal'
                                 }
                           ],
                        };

function listWisata(state=initialWisataState, action){
   let newState;
   switch(action.type) {
      case "DOEDIT":
         newState = Object.assign({}, state);
         const indexEdit = _.findIndex(newState.data, function(o) { return o.id == action.id; });
         newState.data[indexEdit] = action.payload;
         return newState;

      case "DOTAMBAH":
         newState = Object.assign({}, state);
         newState.data.push(action.payload);         
         return newState;

      case "DELETE":
         newState = Object.assign({}, state);
         newState.data = _.remove(newState.data, function(o){
            return o.id != action.id;
         });
         return newState;

      default :
         return state
   }
}

const todoApp = combineReducers({
   listWisata : listWisata,
})

export default todoApp;