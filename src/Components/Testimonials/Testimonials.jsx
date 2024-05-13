import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../images/next-icon.png';
import back_icon from '../images/back-icon.png';
import user_1 from '../images/user-1.png';
import user_2 from '../images/user-2.png';
import user_3 from '../images/user-3.png';
import user_4 from '../images/user-4.png';


const Testimonials = () => {
  // sliding
  const sliding=useRef();
  let tx=0;

  function slideForward(){
    if(tx > -50){
      tx -= 25;
    }
    sliding.current.style.transform=`translateX(${tx}%)`
  }

  function slideBackward(){
    if(tx < 0){
      tx += 25;
    }
    sliding.current.style.transform=`translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='next-icon' className='next_btn' onClick={slideForward}/>
      <img src={back_icon} alt='back-icon' className='back_btn' onClick={slideBackward}/>
      <div className="sliders ">
        <ul ref={sliding}>
          <li>
            <div className='slider'>
              <div className='user_info'>
                <img src={user_1} alt='user-img' />
                <div>
                  <h3>William </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-art facilites and commitment to academic excellence have truely exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slider'>
              <div className='user_info'>
                <img src={user_2} alt='user-img' />
                <div>
                  <h3>James</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-art facilites and commitment to academic excellence have truely exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slider'>
              <div className='user_info'>
                <img src={user_3} alt='user-img' />
                <div>
                  <h3>Angelina</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-art facilites and commitment to academic excellence have truely exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slider'>
              <div className='user_info'>
                <img src={user_4} alt='user-img' />
                <div>
                  <h3>Smith</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-art facilites and commitment to academic excellence have truely exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials;