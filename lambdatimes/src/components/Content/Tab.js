import React from 'react';
import Tabs from "./Content";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`${props.selectedTab === props.tab ? "tab active-tab" : "tab" }`}
      onClick={(e) => {
         props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
    tab:PropTypes.string.isRequired,
    selectedTab:PropTypes.string.isRequired,
    selectTabHandler: PropTypes.func.isRequired,
}


export default Tab;
