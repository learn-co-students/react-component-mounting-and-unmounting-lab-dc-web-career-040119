

import React, {Component} from 'react'
import CharacterContainer from './containers/CharacterContainer'

const Card = (props) => {
  state = {
    backview: false
  }
}

  render(){
    return(
      <Card backview={props.backview}/>
    )
  }

export default CharacterContainer
