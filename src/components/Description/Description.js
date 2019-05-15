import React, { Component } from 'react';
import './Description.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import 'animate.css'

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      words: ['full-stack web developer', 'husband', 'dad', 'cat enthusiast'],
      counter:0,
      inProp:false
     }
  }

  changeWord = () => {
    this.toggleInProp(!true)
    let counter = this.state.counter;
    if(counter >= this.state.words.length-1){
      counter = 0
    }
    else {
      counter++
    }
    this.setState({
      counter,
    })
    this.toggleInProp(!false)
  }

  
  componentDidMount() {
    this.timer = setInterval(this.changeWord, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleInProp = (bool) => {
    let inProp = bool
    this.setState({
      inProp,
    })
  }

  renderText = () => {
    return (
      <span className = 'word'>
        {this.state.words[this.state.counter]}
      </span>
    )
  }
  render() { 
    return ( 
      <CSSTransition in={this.state.inProp} classNames="my-node" timeout = {4000}>
        <span className='word'>
          a {this.renderText()}.
        </span>
      </CSSTransition>
     );
  }
}
 
export default Description;