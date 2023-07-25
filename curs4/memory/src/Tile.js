import React, {useState} from 'react';

let visible = 'invisible';
function clickedTile(index, setVisible, functieClick){
    console.log('clicked Tile' + index);
    setVisible('visible');
    functieClick();
}

function Tile(props){
    let [visible, setVisible] = useState(props.shown === 1 ? 'visible' : 'invisible');
    return <div className='tile rounded-md' onClick={() => clickedTile(props.index, setVisible, props.functieClick)}>
    <img src = {'https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-' + props.tile + '.png'}
    
    alt={props.altText}
    data-culoare={props.culoare}
    className={visible}
    />

  {props.shown}
  </div>;
}

export default Tile;