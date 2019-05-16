import React, { Component } from 'react';
import './Description.css';
import 'animate.css'

class Description extends Component {


  componentWillUnmount(){
    clearInterval(this.time)
  }

  componentDidMount(){
    let TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
      }

      this.time = setTimeout(function () {
        that.tick();
      }, delta);
    };

 
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

  }

  render() { 

    return ( 
      <span className='word'>
          <span class="wrap"></span>
        <span href="" class="typewrite" data-period="1000" data-type='[ "a web developer.", "a husband.", "a dad.", "a cat enthusiast." ]'>
          <span class="wrap"></span>
        </span>
      </span>
     );
  }
}

export default Description;