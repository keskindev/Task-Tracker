// import React from 'react'

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

//! DEFAULT PROPS
Header.defaultProps = {
  title: "Task Tracker Default",
};

export default Header;
