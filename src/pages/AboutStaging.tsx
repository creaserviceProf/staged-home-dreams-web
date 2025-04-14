
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutStaging = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4 text-center">About Home Staging</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Learn why home staging is a crucial investment when selling your property
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">What is Home Staging?</h2>
            <p className="text-lg mb-6">
              Home staging is the process of preparing a property for sale by strategically arranging furniture, accessories, 
              and decor to showcase the home's best features and help potential buyers envision themselves living in the space.
            </p>
            <p className="mb-10">
              Unlike interior design, which focuses on personal style preferences, home staging is specifically designed to appeal 
              to a broad range of potential buyers and create an emotional connection that drives offers.
            </p>
            
            <h2 className="text-3xl font-serif font-bold mb-6">Why Stage Your Home?</h2>
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Sale</h3>
                <p>
                  Staged homes typically sell 73% faster than non-staged homes. When buyers can visualize themselves in the space, 
                  they're more likely to make an offer quickly.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Higher Selling Price</h3>
                <p>
                  Statistics show that staged homes sell for 1-10% more than non-staged homes. The investment in staging 
                  typically yields a return of 5-15 times the cost.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Better Photos</h3>
                <p>
                  In today's digital-first real estate market, online photos are the first impression buyers have of your home. 
                  Staged homes photograph significantly better, attracting more potential buyers to in-person viewings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Highlight Best Features</h3>
                <p>
                  Professional stagers know how to draw attention to your home's best features while minimizing any flaws, 
                  creating a more appealing overall impression.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-bold mb-6">The Home Staging Process</h2>
            <ol className="list-decimal pl-6 space-y-4 mb-10">
              <li>
                <strong>Initial Consultation:</strong> We assess your property, discuss your goals, and develop a staging strategy 
                tailored to your home and target market.
              </li>
              <li>
                <strong>Preparation:</strong> We may recommend minor repairs, painting, decluttering, or other preparations to 
                ensure your home is ready for staging.
              </li>
              <li>
                <strong>Staging Implementation:</strong> Our team brings in carefully selected furniture, artwork, and accessories 
                to create an appealing, cohesive look throughout the home.
              </li>
              <li>
                <strong>Photography:</strong> Once staging is complete, professional photos are taken for marketing materials 
                and online listings.
              </li>
              <li>
                <strong>Maintenance:</strong> Staged furnishings typically remain in place until the home sells, with our team 
                providing periodic refreshes as needed.
              </li>
            </ol>
            
            <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Ready to Stage Your Home?</h3>
              <p className="mb-4">
                Contact us today to schedule a consultation and learn how our professional staging services can help you 
                sell your property faster and for a better price.
              </p>
              <div className="flex gap-4">
                <a href="/contact" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Contact Us
                </a>
                <a href="/services" className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50 transition-colors">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutStaging;
