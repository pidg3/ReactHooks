import React, { useRefs } from 'react';
import useMousePosition from './HOC/useMousePosition';
import Cat from './shared/Cat';
import Dog from './shared/Dog';

export default function Hooks() {
  const catOuterDiv = useRefs(null);
  const dogOuterDiv = useRefs(null);
  // TODO: make this work...

  return (
    <div style={{ display: 'flex', width: '100%', height: '75%' }}>
      <div ref={catOuterDiv}>
        <Cat {...useMousePosition(catOuterDiv)} />
      </div>
      <div ref={dogOuterDiv}>
        <Dog {...useMousePosition(dogOuterDiv)} />
      </div>
    </div>
  );
}
