import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      activity: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("http://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(data => 
        this.setState({
          loading: false,
          activity: data
          })
        )
  }

  

  render() {
    const text = this.state.loading ? "loading..." : this.state.activity.type
    return (
      <div className="App">
      <p>{text}</p> 
      </div>
    );
  }
}

export default App;
