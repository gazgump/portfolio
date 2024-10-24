import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from './footer';

const AboutPage = props => (
  <>
     <section className="bg-squares-pattern border-b border-gray-400 bg-repeat py-20 lg:py-20">
      <div className="2xl:container 2xl:mx-auto px-4 2xl:px-0">
        <div className="flex items-center justify-left h-full flex-wrap md:flex-nowrap">
          <div className="grid grid-cols-12 gap-8 w-full">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center h-full">
                <DotLottieReact
                  src="animations/profile-about.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center justify-center lg:justify-start h-full">
                <div>
                  <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-7xl font-poppins font-black text-black mb-4 lg:mb-4">Craft Beer, Foodie and Book Worm</h1>
                </div>
              </div>
            </div>
          </div>
        </div>		
      </div>
    </section>

    <section className="bg-white border-t border-b border-gray-300">
      <div className="2xl:container 2xl:mx-auto py-12 px-4 2xl:px-0">
        <h3 className="text-black font-poppins font-bold text-4xl text-center">Beer</h3>
      </div>
    </section>

    <section>
      <div className="grid grid-cols-12 gap-8 w-full">
        <div className="col-span-12">
          <div className="elfsight-app-48654651-65d5-41ac-b8c2-13732438cb48" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>

    <section className="bg-white border-t border-b border-gray-300">
      <div className="2xl:container 2xl:mx-auto py-12 px-4 2xl:px-0">
        <h3 className="text-black font-poppins font-bold text-4xl text-center">Food</h3>
      </div>
    </section>

    <section>
      <div className="grid grid-cols-12 gap-8 w-full">
        <div className="col-span-12">
          <div className="elfsight-app-5d9be36f-ec1b-4750-8628-4f4035351ef5" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>

    <section className="bg-white border-t border-b border-gray-300">
      <div className="2xl:container 2xl:mx-auto py-12 px-4 2xl:px-0">
        <h3 className="text-black font-poppins font-bold text-4xl text-center">Books</h3>
      </div>
    </section>

    <section>
      <div className="grid grid-cols-12 gap-8 w-full">
        <div className="col-span-12">
          <div className="elfsight-app-c90fa4f6-edde-4129-9842-7b337c86be1a" data-elfsight-app-lazy></div>
          <script type="text/javascript" src="https://www.juicer.io/embed/bizarro_boyo/embed-code.js" async defer></script>
        </div>
      </div>
    </section>

    <Footer/>
  </>
)

export default AboutPage