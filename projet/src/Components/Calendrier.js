import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import './Calendrier.css';





class Calendrier extends React.Component {
  setTime() {
    const date = new Date()
    const timeOptions = {hour: '2-digit', minute:'2-digit', second:'2-digit'}
    const currentTime = date.toLocaleTimeString([], timeOptions)

    this.setState({
      currentTime: currentTime
    })
  }
  componentWillMount () {
    this.setTime()
  }
  componentDidMount () {
    window.setInterval(function () {
      this.setTime()
    }.bind(this), 1000)
  }
  render() {
    return (
      <div className='clocker'>{this.state.currentTime}</div>
    )
  }
}


export default Calendrier;






