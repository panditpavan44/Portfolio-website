import React from 'react'
import amit8 from '../assets/amit8.jpeg';

function About() {
  return (
   <section id='about' className='py-24 bg-slate-950 relative overflow-hidden'>
      {/* Animated Background Elements */}
        <div className='absolute inset-0'>
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-2xl">

            </div>
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
            blur-3xl'></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>
        <div className='container mx-auto px-6 py-4'>
            <div className="container px-6 relative z-10">
                <div className="grid lg:grid-col-2 gap-16 items-space">
                    {/* Left image */}
                    <div className={`relative transition-all duration-1000`}>
                        <div className="relative-group">
                            <div className="w-full max-w-md mx-auto">
                                <div className="relative-border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400
                                transition-all duration-300">
                                    <img src={amit8} alt="phote" className='w-full rounded-xl transition-all duration-500 group-hover:scale-105'/>
                                    <div className='absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl
                                    opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
                                    {/* Floating Decoration */}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600/20 rounded-2xl opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/20 rounded-full opacity-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div></div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default About