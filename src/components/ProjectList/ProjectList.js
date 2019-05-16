import React, { Component } from 'react';
import './ProjectList.css';
import Project from '../Project/Project';
import messagerScreenshot from '../../assets/mainpage.png'
import munchStatsScreenshot from '../../assets/munch.png'
import quizScreenshot from '../../assets/quiz-screenshot.png'
import vivaScreenshot from '../../assets/viva.png'

class ProjectsList extends Component {
  state = {  }

  componentDidMount(){
    let logo = document.getElementById('logo')
    logo.style.opacity = 0;
    logo.style.width = '0.1px';
  }

  componentWillUnmount() {
    let logo = document.getElementById('logo')
    logo.style.opacity = .3;
    logo.style.width = '45%';
  }

  render() { 
    const messagerDesc = 'A messaging app, designed to organize conversations between friends and/or colleagues.';
    const munchDesc = 'Munch Stats is a meal tracking app. What makes Munch Stats different is our approach to building meals within the app. Using the Edamam API, you can build and track your meals ingredient by ingredient and save each meal for multiple trackings.'
    const quizDesc = 'This is a quiz to truly test your Simpsons knowledge. While building this app, I solidified my performance with pair programming, and DOM manipulation.'
    const vivaDesc = 'Language learning with spaced repetition with a database built around a linked list.'
    return ( 
      <div className = 'projectsContainer'>
        <div className = 'projectsHeader'>
          <h2 id = 'projectsHeader'>
            Projects
          </h2>
        </div>
        <div className = 'projectList'>
            <Project 
              desc = {messagerDesc} 
              screenshot = {messagerScreenshot} 
              live="http://messager.now.sh"
              github = "https://github.com/bobnearents/messager-client"
              name = "Messager"
            />
            <Project 
              desc = {munchDesc} 
              screenshot = {munchStatsScreenshot} 
              live="http://munchstats.now.sh"
            github= "https://github.com/thinkful-ei-armadillo/munchstats-client"
              name = "Munch Stats"
            />
            <Project 
              desc = {vivaDesc} 
              screenshot = {vivaScreenshot} 
              live="https://viva-mexico.now.sh/"
              github= "https://github.com/thinkful-ei-armadillo/spaced-repetition-client-bob-jake"
              name = "Viva Mexico"
            />
            <Project 
              desc = {quizDesc} 
              screenshot = {quizScreenshot} 
              live="https://thinkful-ei-armadillo.github.io/ethan-robert-quiz-app/"
              github= "https://github.com/thinkful-ei-armadillo/ethan-robert-quiz-app"
              name = "Simpsons Quiz"
            />
          
        </div>
      </div>
     );
  }
}
 
export default ProjectsList;