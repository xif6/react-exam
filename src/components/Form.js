import React from 'react';

class Form extends React.Component {
  state = {
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const jedi = { name: this.state.name };
    this.props.addJedi(jedi);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formTitle}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="jedi"
                 value={this.state.name}
                 onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit">ajouter</button>
        </form>
      </div>
    );
  }
};

export default Form;
