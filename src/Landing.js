import React from 'react';
import Video from './videos/cvideo.mp4';
import './landing.css';

function Landing() {
    return(
        
        <div className="container">
        <h1 className="title">Realtime COVID-19 tracker</h1>
        <video className="video" autoPlay={true} muted={true} loop={true} src={Video}/>
        <Link className="btn" to="/tracker">Track COVID-19 situation</Link>
        <h2 className="title2">Safety guidelines</h2>
        <ul class="check-list">
      <li>Clean your hands often</li>
      <li>Cough or sneeze in your bent elbow - not your hands!</li>
      <li>Avoid touching your eyes, nose and mouth</li>
      <li>Limit social gatherings and time spent in crowded places</li>
      <li>Avoid close contact with someone who is sick</li>
      <li>Clean and disinfect frequently touched objects and surfaces</li>
       </ul>
        <p className="footer">©All rights reserved by Saydul Kader</p>
        </div>
        
    )

}

export default Landing;
