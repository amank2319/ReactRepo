import React, { Component } from 'react';
import {Link} from 'react-scroll';
class Navbar extends Component {
 
render() {
return (
    <div className="navbar">
    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={600}>Home</Link>&nbsp;&nbsp;
    <Link activeClass="active" to="products" spy={true} smooth={true} offset={-70} duration={600}>Products</Link>&nbsp;&nbsp;
    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={600}>About</Link>&nbsp;&nbsp;
    <Link activeClass="active" to="support" spy={true} smooth={true} offset={-70} duration={600}>Support</Link>&nbsp;&nbsp;
</div>
);
}

}
export default Navbar;