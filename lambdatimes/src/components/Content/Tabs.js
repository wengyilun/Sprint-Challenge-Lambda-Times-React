import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";
import Cards from "./Cards";


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {
            props.tabs.map((el,idx) =>
                <Tab key={idx}
                     tab={el}
                     selectedTab={props.selectedTab}
                     selectTabHandler={props.selectTabHandler}
                />
            )
          }
      </div>
    </div>
  );
};

Tabs.propTypes = {
    tabs:PropTypes.arrayOf(
             PropTypes.string.isRequired
    ).isRequired
}

export default Tabs;
