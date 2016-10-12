import React from 'react';

var Stopwatch = React.createClass({
  getInitialState : function() {
    return {seconds : 0, minutes : 0, hours : 0};
  },
  startWatch : function() {
    console.log('start');
  },
  stopWatch : function() {
    console.log('stop');
  },
  clearWatch : function() {
    console.log('clear');
  },
  render : function() {
    return <div>
              <div className="stopwatch">
                <div id="hours">00</div>:
                <div id="minutes">00</div>:
                <div id="seconds">00</div>
              </div>
              <div className="buttons">
                <button id="start" onClick={this.startWatch}>Start</button>
                <button id="stop" onClick={this.stopWatch}>Stop</button>
                <button id="clear" onClick={this.clearWatch}>Clear</button>
              </div>
            </div>
  }
});

export default Stopwatch;