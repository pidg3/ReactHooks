import React from 'react';
import MousePosition from './RenderProps/MousePosition';
import Cat from './RenderProps/Cat';
import Dog from './RenderProps/Dog';

export default class RenderProps extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', width: '100%', height: '75%' }}>
        <MousePosition
          render={mousePosition => <Dog mousePosition={mousePosition} />}
        />
        <MousePosition
          render={mousePosition => <Cat mousePosition={mousePosition} />}
        />
      </div>
    );
  }
}
