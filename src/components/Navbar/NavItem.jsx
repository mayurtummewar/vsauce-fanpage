import React from 'react'

const NavItem = (props) => {
  return (<a href={props.redirect}>
    <div>{props.item}</div>
  </a>
  )
}

export default NavItem