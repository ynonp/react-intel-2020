import React from 'react';
import ReactDOM from 'react-dom';
import tinycolor from 'tinycolor2';
import { useState, useCallback } from 'react';

const ColorBox = React.memo(function ColorBox(props) {
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();
  console.log('ColorBox');

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
});

function ColorPalette(props) {
  console.log('ColorPalette');

  const { start } = props;
  const [deletedBoxes, setDeletedBoxes] = useState(new Set());
  const [forceUpdate, setForceUpdate] = useState(false);

  const removeBox = useCallback(function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setForceUpdate(v => !v);
  }, [deletedBoxes]);

  const colors = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
        key={i}
      />
    );
  }
  return colors;
}

function Counter(props) {
  const [ticks, setTicks] = useState(0);
  return (
    <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
  );
}

function ColorSelector(props) {
  const [color, setColor] = useState('#000000');
  console.log('ColorSelector');
  return (
    <div>
      <div>
        <Counter />        
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

ReactDOM.render(<ColorSelector/>, document.querySelector('main'));

