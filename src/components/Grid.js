import React from 'react'
import Cell from './Cell'


  class Grid extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        currentPlayer: "crosses",
        cells: [],
        crosses: [],
        naughts: [],
        emptyCells: [1,2,3,4,5,6,7,8,9],
        victoryConditions: [[1,2,3], [1,5,9], [1,4,7], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]]
      }
      this.populateGrid = this.populateGrid.bind(this)
      this.updateGrid = this.updateGrid.bind(this)
      this.addIndexToPlayersArray = this.addIndexToPlayersArray.bind(this)
      this.swapPlayer = this.swapPlayer.bind(this)
      this.checkConditions = this.checkConditions.bind(this)
      this.changeCellClass = this.changeCellClass.bind(this)
      this.setClassTo = this.setClassTo.bind(this)
    }

    componentDidMount(){
      this.populateGrid()
    }

    updateGrid(event){
      const id = event.target.id
      event.target.style.backgroundColor = "red"
      if(this.state.emptyCells.includes(parseInt(id))){
        this.removeEmptyIndex(id)
        this.addIndexToPlayersArray(id)
        this.changeCellClass(event.target, id)
        this.checkConditions()
        this.swapPlayer()
      }
    }

    changeCellClass(div, index){
      const cell = this.state.cells[index]
      if(this.state.currentPlayer === 'crosses'){
        this.setClassTo(index, 'crosses')
      }else{
        this.setClassTo(index, 'naughts')
      }
    }

    setClassTo(index, player){
      // const newArr =[]
      // this.state.cells.forEach(cell => {
      //   if(cell.props.id == index){
      //     const newCell = [].concat(cell)
      //     newCell[0].props.className += ` ${player}`
      //     newArr.push(newCell)
      //   }else{
      //     newArr.push(cell)
      //   }
      // })
      // console.log(newArr);

      this.setState(state => {
        // state.cells[index].className = 'hello'
        // return state
      })
    }

    removeEmptyIndex(index){
      const newEmptyArr = this.state.emptyCells.filter(i => index != i)
      this.setState({emptyCells: newEmptyArr})
    }

    addIndexToPlayersArray(index){
      const newPlayerArray = this.state[this.state.currentPlayer]
      newPlayerArray.push(parseInt(index))
      this.setState({playerArray: newPlayerArray})
    }

    swapPlayer(){
      if(this.state.currentPlayer === "crosses"){
        this.setState({currentPlayer: "naughts"})
      } else {
        this.setState({currentPlayer: "crosses"})
      }
    }

    checkConditions(){
      const currentArr = this.state[this.state.currentPlayer]
      this.state.victoryConditions.forEach((cond) => {
        if(currentArr.includes(cond[0]) && currentArr.includes(cond[1]) && currentArr.includes(cond[2])){
          console.log(`Winner: ${this.state.currentPlayer}`);
        }
      })
    }

    populateGrid(){
      const cellsArray = []
      for (var i = 1; i < 10; i++) {
        const cell = <Cell id={i} className="cell" key={i} onClick={this.updateGrid}>{i}</Cell>
        cellsArray.push(cell)
      }
      this.setState({cells: cellsArray})
    }

    render(){
      return(
        <div id="grid">
          {this.state.cells}
          <Cell />
        </div>
      )
    }
  }

export default Grid
