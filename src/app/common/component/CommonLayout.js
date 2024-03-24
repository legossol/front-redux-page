import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
//import Script from '../src/Javascripts/Script';
// import Document, { Main, NextScript } from 'next/document';

const Layout = (props) => (
    <div>
        <Header />
        <div className="highlights"></div>
        {props.children}
        {/* <ScrollToTop showUnder={160}><button id="myBtn" title="Go to top"  tabindex="1" ><span style={{fontStretch:"exnded"}}>â§</span><br />Go to<br />Top</button> */}
      {/* </ScrollToTop> */}
     <Footer />
    </div>
)

export default Layout