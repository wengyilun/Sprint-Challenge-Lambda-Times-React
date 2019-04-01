import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        carouselData:[],
        currentIndex:0,
        showRightButton:true,
        showLeftButton:false
    }
    this.leftButton = React.createRef()
    this.rightButton = React.createRef()
  }
  componentDidMount(){
    this.setState({carouselData: carouselData})
    //console.log(this.state.carouselData)
    setTimeout(()=>{
      this.selectedImage()
    }, 3000)
  }

  leftClick = () => {
     if(this.state.currentIndex === 0){
       this.setState({'showLeftButton':false})
        return
     }
    this.setState((prevSate)=>({
      showLeftButton: true,
      currentIndex:prevSate.currentIndex-1
    }))
    console.log('this.state.currentIndex,',this.state.currentIndex)
  
  }

  rightClick = () => {
    if(this.state.currentIndex >= this.state.carouselData.length - 1){
      this.setState({'showRightButton':false})
      return
    }
  
    this.setState((prevSate)=>({
      showRightButton: true,
      currentIndex:prevSate.currentIndex+1
    }))
    
  }

  selectedImage = () => {
  
    return <img src={this.state.carouselData[this.state.currentIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel" ref={this.container}>
        {this.selectedImage()}
        <div className={`${this.state.showLeftButton ? "left-button" : "left-button hidden"}`}
             ref={this.leftButton}
             onClick={this.leftClick}>{"<"}</div>
        <div className={`${this.state.showRightButton ? "right-button" : "right-button hidden"}`}
             ref={this.rightButton}
             onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
