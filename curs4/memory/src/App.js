import React, { useState } from "react";
import "./App.css";
import Tile from "./Tile";

function shuffle(tiles) {
  // [0; tiles.length)
  console.log(tiles);

  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * tiles.length); // [0; 1)
    console.log(
      "exchange " + i + "(" + tiles[i] + ") with " + j + "(" + tiles[i] + ")"
    );
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  console.log(tiles);
}

class App extends React.Component {
  //let [noShown, setNoShown] = useState(0);

  state={
    objects: [],
    noShown: 0,
  }

  constructor() {
    super();
    console.log("Constructor App Component");
    this.oldIndex = -1;
    this.shown= [];
  }

  componentDidMount() {
    console.log("App component mounted");

    this.state.objects = [
      "bear",
      "corgi",
      "crab",
      "rabbit",
      "fish",
      "panda",
      "parrot",
      "pig",
      "rhinoceros",
      "shark",
      "snail",
      "turtle",
    ];
    console.log(this.state.objects);
    console.log(...this.state.objects);
    this.state.objects = [...this.state.objects, ...this.state.objects];

    shuffle(this.state.objects);

    for(let i = 0; i < objects.length;) i++; {
      this.shown[i] = 0;
    }

    this.setState(
      {
        objects: this.state.objects
      }
    )

    let a = 5;
    let b = 6;
    [a, b] = [b, a];

    console.log(a, b);

    const array1 = [1, 4, 9, 16];
  }
  incShown() {
   this.setState(
    {
      noShown: this.state.noShown + 1
    }
   );
    //daca avem 2 tiles deschise
    if (this.state.noShown === 2){

   
    // si sunt egale le pastram
    if(this.oldIndex === -1) { //una singura deschisa

    }
    else{ //doua deschise
      if(this.object[this.oldIndex] === this.objects[index]){
        //am deschis doua si sunt egale
        console.log('Tiles are equal: ' +
        this.objects[this.oldIndex] + ', ' + this.objects[index]);
        this.oldIndex = -1;
      }
      else {
        //am deschis doua, dar nu sunt egale
        //le inchid dupa doua secunde
        setTimeout(() => {
          this.render();
        }, 2 * 1000);
      }
    }

    }
    // altfel, declansam un timer de inchedere dupa 2 secunde
  }

  render() {
    const that = this;
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {this.state.objects.map((object, index) => {
            return (
              <Tile
                tile={object}
                altText={"icon of " + object}
                culoare={"red"}
                index={index}
                functieClick={() => that.incShown(index)} 
                shown={this.show[index]}
              />
            );
          })}
          {/* array1.map(x => x * 2 + ' ')}
          {array1.map(function(x) {
            return x * 2;
          }) */}
          Shown: {this.state.noShown}
        </div>
      </div>
    );
  }
}

export default App;
