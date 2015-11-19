import React, { Component } from 'react';

export default class MeetingRoom extends Component {
  render() {
    return (
      <rect 
        x={this.props.pos.x}
        y={this.props.pos.y}
        width="150" 
        height="150" 
        style={style.MeetingRoom}/>
    );
  }
}

const style = {
  MeetingRoom: {
    fill:"blue",
    stroke:"pink",
    strokeWidth:"5",
    fillOpacity:"0.1",
    strokeOpacity:"0.9",
  }
};