import React from 'react'
import Grid from '../components/Grid.js'

class GameBox extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      turn: 1
    }
  }



  render(){
    return (
      <div className="grid">
        <Grid/>
      </div>
    )
  }

}

export default GameBox
