import React, { Component } from 'react';

class ToggleSwitch extends Component {
    render(){
        return(
<div className="toggle-button-cover">
<div className="button-cover">
  <div className="button r" id="button-1">
  <label className="toggle-switch-label" htmlFor={this.props.Name}>
                        <span className="toggle-switch-timer" />
                        <span className="toggle-switch-switch" />
                    </label>
    <input type="checkbox" className="checkbox" name={this.props.Name} id={this.props.Name} />
    <div className="knobs"></div>
    <div className="layer"></div>
  </div>
</div>
</div>
        );
    }
}

export default ToggleSwitch;



