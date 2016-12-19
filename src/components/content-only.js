import React from 'react'
import Logo from './logo'

const ContentOnlyComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="pure-g home">
      <Logo/>
      {children}
    </div>
  )
};

export default ContentOnlyComponent;
