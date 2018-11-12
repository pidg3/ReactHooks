import React from 'react';
import frankie from '../frankie.jpg';

const HEIGHT = 180;
const WIDTH = 220;

export default class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition: props.mousePosition.x,
      yPosition: props.mousePosition.y
    };
  }
  render() {
    const mousePosition = this.props.mousePosition;
    return (
      <img
        src={frankie}
        style={{
          transition: '1s',
          width: WIDTH,
          height: HEIGHT,
          position: 'absolute',
          left: mousePosition.x - WIDTH / 2,
          top: mousePosition.y - HEIGHT / 2,
          pointerEvents: 'none'
        }}
        alt="Frankie the Dog"
      />
    );
  }
}
