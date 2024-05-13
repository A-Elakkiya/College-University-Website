import React from 'react';
import './About.css';
import about_img from '../images/about.png';
import play_icon from '../images/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
       <div className="left">
           <img src={about_img} alt="about-img" className='about_img' />
           <img src={play_icon} alt="about-play-icon" className='about_play_icon' onClick={() =>{setPlayState(true)}}/>
       </div>
       <div className="right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Embark a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculu, is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic filed of educaiton.</p>
        <p>With a focus on innovation, hands-on learning and personalized mentorship , our programs prepare aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
        <p>Whether you aspire to become a teacher , administrator, counselor or educational leader, our diverse range of porgrams offers the perfect pathway to achieve your goals and unlock your full potential in changing the future of education.</p>
       </div>
    </div>
  )
}

export default About