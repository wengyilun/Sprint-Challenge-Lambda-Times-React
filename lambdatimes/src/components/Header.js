import React from 'react';
import style from 'styled-components'

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const HeaderWrapper = style.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      background-color: #fff;
      border-bottom: 1px solid lightgrey;
      width: 100%;
      height: 120px;
      margin-top: 44px;
      padding-bottom: 15px;
      @media (min-width: 1280px) {
        .header {
            width: 1280px;
        }
      }
      h1{
          font-size: 60px;
          font-family: Didot, serif;
          font-weight: bold;
          flex: 8;
          text-align: center;
          color: #000;
      }
`
const DateSpan = style.span`
      margin-left: 25px;
      flex: 1;
`
const TempSpan = style.span`
      text-align: right;
      margin-right: 25px;
      flex: 1;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </HeaderWrapper>
  )
}

export default Header
