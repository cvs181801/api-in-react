import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      activity: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("http://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(data => 
        this.setState({
          loading: false,
          activity: data,
          
          })
        )
  }

  handleChange(event) {
    const {name, value} = event.target; //for some reason getting an error in console about uncontrolled state
    this.setState({
      [name]: value
    })
  }
  

  render() {
    const text = this.state.loading ? "loading..." : this.state.activity.type
    return (
      <div className="App">
      <p>{text}</p> 
      <input
      type="text"
      value={this.state.firstName}
      name="firstName"
      placeholder="first name"
      onChange={this.handleChange}
      >
      </input>

      <input
      type="text"
      value={this.state.lastName}
      name="lastName"
      placeholder="last name"
      onChange={this.handleChange}
      >
      </input>
      <h1>{this.state.firstName} {this.state.lastName}</h1>

      </div>
    );
  }
}

export default App;
