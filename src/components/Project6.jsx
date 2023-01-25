import React, { Component } from 'react';
import { MenuItems } from "./Project-6/MenuItems";
import { Button } from "./Project-6/Button";
import "./css/Project6.css"

class ReactNavbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>React</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                            <a href={item.url} className={item.cName}>
                            {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default ReactNavbar;