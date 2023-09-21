import React from 'react';
import Hero from '../components/heroSection';
import Footer from '../components/footerSection';

function homePage() {
  return (
    <div>
        {/* Hero Section */}
        <Hero/>

        {/* Footer Section */}
        <Footer/>
    </div>
  )
}

export default homePage