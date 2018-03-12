import React from 'react';
import {Nav, NavItem} from 'react-bootstrap'

function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }
const Navigation = ({ menu }) => {
    return (
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
            {Object.keys(menu).map((key, i) => {
               return( <NavItem eventKey={i} href={`/${key}`}>
                    {menu[key].text}
                </NavItem>)
            })}
        </Nav>
    )
}

export default Navigation;