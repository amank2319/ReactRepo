import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'
class Home extends Component {
render() {
return (
<div className="home-section" id="home">
<br></br>
<br></br>
<ReactTypingEffect className="typingeffect" text={['Search for your product']} speed={100} eraseDelay={700}/>
<Social/>
</div>
);
}
}
export default Home;