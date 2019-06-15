

import React, {Component} from 'react'
import CharactersContainer from './containers/CharactersContainer'

class App extends Component {
  constructor(){
  super()

  this.state = {
    characterList: []

    }
   }

   render(){
     return(
       <div class='app'>
        <CharactersContainer characterList={this.state.characterList}/>
       </div>
     )
   }
  }

export default App
