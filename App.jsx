import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
   render() {
   console.log(this.props);
      return (
         <div>
            {this.props.todos[0]}
            hhahahah
         </div>
      );
   }
}

const mapStateToProps = state => ({
	todos: state
})

export default connect(
  mapStateToProps
)(App);