import React, { useReducer, useState } from "react";

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
    'closegripbenchpress': 0.9,
    'pushpress': 0.85,
    'inclinebench': 0.8,
    'militarypress': 0.6,
    'weighteddip': 1.05,
    'supinatedchinup': 0.9,
    'chestsupportedbarbellrow': 0.7,
    'preachercurl': 0.4,
    'standingreversecurl': 0.35
    }

    function Bench() {
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
            <form onSubmit={handleSubmit}>
             <div className="field has-text-centered">
               <div className="label">
                 <p>Bench</p>
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
            <p className="subtitle">Close-Grip Bench Press</p>
            
            <p className="subtitle">{(ratios.closegripbenchpress*formData.count).toFixed()}kg</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Push Press</p>
            
            <p className="subtitle">{(ratios.pushpress*formData.count).toFixed()}kg</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Incline Bench</p>
            
            <p className="subtitle">{(ratios.inclinebench*formData.count).toFixed()}kg</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Military Press</p>
            
            <p className="subtitle">{(ratios.militarypress*formData.count).toFixed()}kg</p>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Weighted Dip</p>
            
            <p className="subtitle">{(ratios.weighteddip*formData.count).toFixed()}kg</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Supinated Chin-Up</p>
            
            <p className="subtitle">{(ratios.supinatedchinup*formData.count).toFixed()}kg</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Chest-Supported Barbell Row</p>
            
            <p className="subtitle">{(ratios.chestsupportedbarbellrow*formData.count).toFixed()}kg</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Preacher Curl</p>
            
            <p className="subtitle">{(ratios.preachercurl*formData.count).toFixed()}kg</p>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark has-text-centered">
            <p className="subtitle">Standing Reverse-Curl</p>
            <p className="subtitle">{(ratios.standingreversecurl*formData.count).toFixed()}kg</p>
          </article>
        </div>
        </div>
      </div>
      }
          </div>
        )
      }


export default Bench;