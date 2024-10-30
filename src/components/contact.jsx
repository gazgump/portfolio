import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Form from './form';

const ContactPage = props => (
  <>
    <section className="bg-squares-pattern border-b border-gray-400 bg-repeat py-20 lg:py-20">
      <div className="2xl:container 2xl:mx-auto px-4 2xl:px-0">
        
        <div className="grid grid-cols-12 gap-8 w-full">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center h-full">
              <DotLottieReact
                src="animations/profile-contact.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center justify-center lg:justify-start h-full">
              <div>
                <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-7xl font-poppins font-black text-black mb-4 lg:mb-4">Get in touch for more information</h1>
              </div>
            </div>
          </div>
        </div>
        	
      </div>
    </section>

    <section>
      <div className="2xl:container 2xl:mx-auto py-12 px-4 2xl:px-0">
        <div className="grid grid-cols-12 gap-8 w-full">
          <div className="col-span-12 xl:col-span-8">
            <Form/>
          </div>
          <div className="hidden xl:block xl:col-span-4">
            <div className="flex items-center h-full">
              <DotLottieReact
                src="animations/rocket.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ContactPage;