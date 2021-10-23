import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activity: {}
    }
  }

  componentDidMount() {
    fetch("http://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(data => 
        this.setState({
           activity:data
          })
        )
  }
  render() {
    return (
      <div className="App">
        {this.state.activity.type}
      </div>
    );
  }
}

export default App;
