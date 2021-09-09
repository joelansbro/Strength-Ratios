import React, { useReducer, useState } from 'react';
import './bulma.min.css';

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
    <div className="container">
      <h1 className="title">Strength Ratios</h1>
      <form onSubmit={handleSubmit}>
       <div className="field">
         <div className="label">
           <p>Count</p>
           <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
         </div>
       </div>
       <button type="submit">Submit</button>
      </form>


      {submitting &&
      <div>
        {ratios.benchPress*formData.count}
      </div>
      }

<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Front Squat</p>
      <p className="subtitle">{ratios.frontSquat*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Clean Deadlift</p>
      <p className="subtitle">{ratios.cleanDeadlift*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Snatch Deadlift</p>
      <p className="subtitle">{ratios.snatchDeadlift*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Power Deadlift</p>
      <p className="subtitle">{ratios.powerDeadlift*formData.count}</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Bench Press</p>
      <p className="subtitle">{ratios.benchPress*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Close-Grip Bench Press</p>
      <p className="subtitle">{ratios.closeGripBenchPress*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Push Press</p>
      <p className="subtitle">{ratios.pushPress*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Incline Bench Press</p>
      <p className="subtitle">{ratios.inclineBenchPress*formData.count}</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Military Press</p>
      <p className="subtitle">{ratios.militaryPress*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Weighted Dip</p>
      <p className="subtitle">{ratios.weightedDip*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Supinated Chin Up</p>
      <p className="subtitle">{ratios.supinatedChinUp*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Chest Supported Barbell Row</p>
      <p className="subtitle">{ratios.chestSupportedBarbellRow*formData.count}</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Preacher Curl</p>
      <p className="subtitle">{ratios.preacherCurl*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Standing Reverse Curl</p>
      <p className="subtitle">{ratios.standingReverseCurl*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Clean and Jerk</p>
      <p className="subtitle">{ratios.cleanAndJerk*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Snatch</p>
      <p className="subtitle">{ratios.snatch*formData.count}</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Clean</p>
      <p className="subtitle">{ratios.clean*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Jerk</p>
      <p className="subtitle">{ratios.jerk*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Power Clean</p>
      <p className="subtitle">{ratios.powerClean*formData.count}</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Power Jerk</p>
      <p className="subtitle">{ratios.powerJerk*formData.count}</p>
    </article>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is=parent">
    <article className="tile is-child box">
      <p className="title">Power Snatch</p>
      <p className="subtitle">{ratios.powerSnatch*formData.count}</p>
    </article>
  </div>
</div>

    </div>
  )
}

export default App;