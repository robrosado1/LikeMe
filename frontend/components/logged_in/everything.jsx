import React from 'react';
import { Route } from 'react-router-dom'
import NavbarContainer from '../top/navbar/navbar_container';
import Wall from '../wall/wall';

class Everything extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavbarContainer/>
        <Route path="/" component={Wall}/>
      </>
  );
  }
};

export default Everything;
