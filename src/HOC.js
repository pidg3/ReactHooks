import React from 'react';
import withMousePositionWrapper from './HOC/withMousePositionWrapper';
import Cat from './shared/Cat';
import Dog from './shared/Dog';

const CatWithMousePosition = withMousePositionWrapper(Cat);
const DogWithMousePosition = withMousePositionWrapper(Dog);

export default class HOC extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', width: '100%', height: '75%' }}>
        <CatWithMousePosition />
        <DogWithMousePosition />
      </div>
    );
  }
}
