import React from 'react';
import cat from '../cat.jpg';

const HEIGHT = 300;
const WIDTH = 200;

export default class Cat extends React.Component {
  render() {
    const mousePosition = this.props.mousePosition;
    return (
      <img
        src={cat}
        style={{
          position: 'absolute',
          width: WIDTH,
          height: HEIGHT,
          left: mousePosition.x - WIDTH / 2,
          top: mousePosition.y - HEIGHT / 2,
          pointerEvents: 'none'
        }}
        alt="The Cat"
      />
    );
  }
}
