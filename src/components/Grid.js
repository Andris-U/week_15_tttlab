import React from 'react'


  class Grid extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        cells: [],
        crosses: [],
        naughts: [],
        emptyCells: [1,2,3,4,5,6,7,8,9]
      }
      this.populateGrid = this.populateGrid.bind(this)
    }

    componentDidMount(){
      this.populateGrid()
    }

    populateGrid(){
      const cellsArray = []
      for (var i = 0; i < 9; i++) {
        cellsArray.push(<div id={i} key={i}>{i}</div>)
      }
      this.setState({cells: cellsArray})
    }

    render(){
      return(
        <div>
          {this.state.cells}
        </div>
      )
    }
  }

export default Grid
