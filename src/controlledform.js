import React from 'react';
import './style.css';

class ControlledForms extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        gender: ''
      }
    };
  }
  handleChange = async e => {
    var errors = { ...this.state.errors };
    console.log(errors)

    if (e.target.value == '') {
      errors[e.target.name] = 'Required';
    } else {
      errors[e.target.name] = '';
      // errors.firstName = ''
    } 
    handlechange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }};
  handleSubmit = async e => {
    e.preventDefault();
    var err = await Object.keys(this.state).filter(key => {
      if (
        this.state[key] == '' &&
        this.state[key] != 'errors' &&
        this.state[key] != 'courses'
      ) {
        return key;
      }
    });
    console.log(err);
    if (err.length > 0) alert('Please fill all fields');
    else alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div>
        {' '}
        <h3>Controlled Form</h3>
        <form onSubmit={e => this.handleSubmit(e)}>
          First Name:{' '}
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          Last Name:{' '}
          <input
            type="text"
            name="firstName"
            value={this.state.lasttName}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          Email:{' '}
          <input
            type="text"
            name="firstName"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          Gender:{' '}
          <input
            type="radio"
            name="Gender"
            value="Male"
            onChange={e => this.handleChange(e)}
          />
          <label>Male</label>
          <input
            type="radio"
            name="Gender"
            value="Female"
            onChange={e => this.handleChange(e)}
          />
          <label>Female</label>
          <br />
          <br />
          <label>Courses:</label>
          <select name="courses">
            <option> advsvg</option>
            <option> advsvg</option>
            <option> advsvg</option>
          </select>
          <br />
          <br />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
export default ControlledForms;
