import React, { useReducer, useState } from 'react';
import './bulma.min.css';
import ToggleSwitch from './Toggleswitch';
import './styles.css';

  const formReducer = (state, event)=>{
    if(event.reset) {
      return {
        apple: '',
        count: 0,
        name: '',
        'gift-wrap': false,
      }
    }
    return {
      ...state,
      [event.name]: event.value
    }
  }

  const ratios = {
    'frontSquat': 0.85,
    'cleanDeadlift': 1,
    'snatchDeadlift': 0.9,
    'powerDeadlift': 1.2,
    'benchPress': 0.75,
    'closeGripBenchPress': 0.675,
    'pushPress': 0.6375,
    'inclineBenchPress': 0.6,
    'militaryPress': 0.45,
    'weightedDip': 0.7875,
    'supinatedChinUp': 0.675,
    'chestSupportedBarbellRow': 0.525,
    'preacherCurl': 0.3,
    'standingReverseCurl': 0.2625,
    'cleanAndJerk': 0.8,
    'snatch': 0.66,
    'clean': 0.816,
    'jerk': 0.84,
    'powerClean': 0.68,
    'powerJerk': 0.72,
    'powerSnatch': 0.54,
    }



function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  const [submitting, setSubmitting ] = useState(false);

  const handleSubmit = event => {
   event.preventDefault();
   setSubmitting(true);
 }

 const handleChange = event =>{
   const isCheckbox = event.target.type === 'checkbox';
   setFormData({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value,
   });
 }
  return (
    <>
    <ToggleSwitch Name='Page Style'/>
    <div className="container">
      <h1 className="title">Squat - Strength Ratios</h1>
      <form onSubmit={handleSubmit}>
       <div className="field has-text-centered">
         <div className="label">
           <p>Back Squat</p>
           <input className="input is-rounded" type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
         </div>
       </div>
       <div className="field has-text-centered">
       <button type="submit" className="button is-dark has-text-centered">Submit</button>
       </div>
      </form>

    <section className="section" />

      {submitting && 
      <div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Front Squat</p>
      
      <p className="subtitle">{(ratios.frontSquat*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Clean Deadlift</p>
      
      <p className="subtitle">{(ratios.cleanDeadlift*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Snatch Deadlift</p>
      
      <p className="subtitle">{(ratios.snatchDeadlift*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Power Deadlift</p>
      
      <p className="subtitle">{(ratios.powerDeadlift*formData.count).toFixed()}kg</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Bench Press</p>
      
      <p className="subtitle">{(ratios.benchPress*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Close-Grip Bench Press</p>
      
      <p className="subtitle">{(ratios.closeGripBenchPress*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Push Press</p>
      
      <p className="subtitle">{(ratios.pushPress*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Incline Bench Press</p>
      
      <p className="subtitle">{(ratios.inclineBenchPress*formData.count).toFixed()}kg</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Military Press</p>
      
      <p className="subtitle">{(ratios.militaryPress*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Weighted Dip</p>
      
      <p className="subtitle">{(ratios.weightedDip*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Supinated Chin Up</p>
      
      <p className="subtitle">{(ratios.supinatedChinUp*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Chest Supported Barbell Row</p>
      
      <p className="subtitle">{(ratios.chestSupportedBarbellRow*formData.count).toFixed()}kg</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Preacher Curl</p>
      
      <p className="subtitle">{(ratios.preacherCurl*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Standing Reverse Curl</p>
      
      <p className="subtitle">{(ratios.standingReverseCurl*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Clean and Jerk</p>
      
      <p className="subtitle">{(ratios.cleanAndJerk*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Snatch</p>
      
      <p className="subtitle">{(ratios.snatch*formData.count).toFixed()}kg</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Clean</p>
      
      <p className="subtitle">{(ratios.clean*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Jerk</p>
      
      <p className="subtitle">{(ratios.jerk*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Power Clean</p>
      
      <p className="subtitle">{(ratios.powerClean*formData.count).toFixed()}kg</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Power Jerk</p>
      
      <p className="subtitle">{(ratios.powerJerk*formData.count).toFixed()}kg</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child notification is-dark has-text-centered">
      <p className="subtitle">Power Snatch</p>
      
      <p className="subtitle">{(ratios.powerSnatch*formData.count).toFixed()}kg</p>
    </article>
  </div>
</div>
</div>
}
    </div>
    </>
  )
}

export default App;