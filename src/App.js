import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src="logo.png" alt="logo" />
          <div className="subhead"><b>Located inside Fariba Beauty Lab</b></div>
          <div><strong>3456 Motor Ave #103 Los Angeles, CA 90034</strong></div>
        </div>

        <div className="about">
          <p>Stripless Wax is a private body waxing studio. Owner and founder, Alexandra Cristobal has mastered an almost painless body waxing experience. Hard wax, paired with skill, expertise, techniques and products to achieve the 'ultimate' body waxing experience.</p>
          <p>Alexandra, originally an LA girl who moved to Miami and then back to LA, has more than 10 years experience. Her formal education was obtained in both cities. She had the added privilege of private training with an expert in Brazilian body waxing. Alexandra is proud to provide her clients with only the best products along with painless body waxing and skin care. </p>
        </div>

        <div className="book">
          <p>For the fastest and easiest way to book an appointment,<br /> please text <a href="tel:13052050119">305-205-0119</a> or email <a href="mailto:justwaxme@gmail.com">justwaxme@gmail.com</a></p>
        </div>

        <div className="services">
          <div className="subhead">Services Offered</div>
          <div className="lists">
            <div className="list">
            <div className="subhead">Women</div>
              <ul>
                <li>Brows</li>
                <li>Lip</li>
                <li>Nose</li>
                <li>Chin</li>
                <li>Face</li>

                <li>Underarms</li>
                <li>Belly Strip</li>
                <li>Tummy</li>

                <li>Half Arm</li>
                <li>Full Arm</li>

                <li>Bikini Line</li>
                <li>Deep Bikini</li>
                <li>Brazilian</li>
                <li>Full Bikini</li>
                <li>Between the Cheeks</li>
                <li>Full Tush</li>

                <li>Half Legs</li>
                <li>Full Legs</li>
                <li>Feet & Toes</li>
              </ul>
            </div>
            <div className="list">
              <div className="subhead">Men</div>
              <ul>
                <li>Back</li>
                <li>Chest</li>
                <li>Ears</li>
                <li>Nose</li>
                <li>Half Arm</li>
                <li>Full Arm</li>
                <li>Half Leg</li>
                <li>Full Leg</li>
              </ul>
          </div>
        </div>
        </div>
        <div className="links">
          <div>
            <a href="mailto:justwaxme@gmail.com"><img src="email.png" alt="" /></a>
          </div>
          <div>
            <a href="https://www.yelp.com/biz/stripless-wax-los-angeles-2" rel="noopener noreferrer" target="_blank"><img src="yelp.png" alt="" /></a>
          </div>
          <div>
            <a href="https://www.instagram.com/striplesswax_/" rel="noopener noreferrer" target="_blank"><img src="insta.png" alt="" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
