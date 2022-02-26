import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './TopNav.css'
import Navbar from '../Navbar';
class TopNav  extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <>
            <nav className="TopNavItems">
                <h1 className="TopNav-logo">Kaizen</h1>
                <div className="menu-icon" onClick={this.handleClick} >
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            <ul className={this.state.clicked ? 'TopNav-menu active' : 'TopNav-menu'}>
                 {MenuItems.map((item,index)=> {
                    return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                        {item.title}
                        
                        </a>
                    </li>
                 )
                })}
            </ul>
            

            <Button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.cdata.com/';
      }}>Cdata official website</Button>
            </nav>
            <Navbar />
            </>
        )
    }
}
export default TopNav
