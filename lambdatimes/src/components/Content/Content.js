import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import Carousel from "../Carousel/Carousel";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({tabs: tabData})
    this.setState({cards: cardData})
    console.log(tabData)
  }

  changeSelected = tab => {
    console.log('handleSlected', tab)
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: tab})
  };

  filterCards = () => {
    const filteredArr = [...this.state.cards]
  
    const tab = this.state.selected
    if(tab === 'all'){
      return filteredArr
    }else{
      return filteredArr.filter(el => (
       el['tab'] === tab))
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs}
              selectTabHandler={this.changeSelected}
              selectedTab={this.state.selected}/>
        <Carousel/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
