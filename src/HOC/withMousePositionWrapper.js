import React from 'react';

export default function withMousePositionWrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: null, y: null };
      this.boundingDiv = React.createRef();
    }

    componentDidMount() {
      const {
        top,
        left,
        width,
        height
      } = this.boundingDiv.current.getBoundingClientRect();
      this.setState({
        x: left + width / 2,
        y: top + height / 2
      });
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
    render() {
      return (
        <div
          ref={this.boundingDiv}
          style={{
            margin: 10,
            border: '1px solid red',
            flex: 1,
            height: '100%'
          }}
          onMouseMove={this.handleMouseMove}
        >
          <WrappedComponent mousePosition={this.state} {...this.props} />
        </div>
      );
    }
  };
}
