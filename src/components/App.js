import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { fetchJedi, addJedi } from './action';
import Form from './Form';

function mapStateToProps(state) {
  return {
    jedi: state.jedi,
  };
}

class App extends Component {
  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi = () => {
    this.props.dispatch(fetchJedi());
  }

  addJedi = (jedi) => {
    this.props.dispatch(addJedi(jedi));
    // this.props.dispatch({
    //   type: 'ADD_JEDI',
    //   payload: jedi
    // });
  }

  render() {
    const { jedi } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {jedi.map((jedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
        < Form formTitle="Ajouter un Jedi" addJedi={this.addJedi} />
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
};

export default connect(
  mapStateToProps,
)(App);
