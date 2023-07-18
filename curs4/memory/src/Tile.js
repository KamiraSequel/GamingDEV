let visible = 'invisible';
function clickedTile(){
    console.log('clicked Tile' + index);
    visible = 'visible';
}

function Tile(props){
    let visible = 'invisible';
    return <div className='tile rounded-md' onClick={() => clickedTile(props.index)}>
    <img src = {'https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-' + props.tile + '.png'}
    
    alt={props.altText}
    data-culoare={props.culoare}
    className={visible}
    />
  </div>
}

export default Tile;