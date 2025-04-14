
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to Home Staging Company, where we transform ordinary spaces into extraordinary showcases that sell.
          </p>
          <p className="mb-6">
            Since our founding in 2010, we've been helping homeowners, realtors, and investors maximize their property's potential 
            through expert staging services. Our team of professional designers brings years of experience and a keen eye for design 
            to every project, ensuring that each space we stage makes a lasting impression on potential buyers.
          </p>
          <p className="mb-6">
            What sets us apart is our commitment to understanding both the property and the target market. We carefully analyze 
            each space to highlight its strengths and minimize any weaknesses, creating a balanced and appealing environment 
            that helps buyers envision themselves living there.
          </p>
          <p className="mb-6">
            Our extensive inventory of contemporary furniture, artwork, and accessories allows us to customize each staging to 
            the specific property and target demographic, ensuring that we create the right look and feel for every home we stage.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
