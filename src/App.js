/* App.jsx */
import React, { Suspense, lazy } from 'react';

const Navbar      = lazy(() => import('./components/Navbar'));
const Home        = lazy(() => import('./components/Home'));
const Services    = lazy(() => import('./components/Services'));
const AboutUs     = lazy(() => import('./components/AboutUs'));
const Process     = lazy(() => import('./components/Process'));
const ToolsWeUse  = lazy(() => import('./components/ToolsWeUse'));
const WorkSection  = lazy(() => import('./components/WorkSection'));
const Contact     = lazy(() => import('./components/Contact'));
const Footer      = lazy(() => import('./components/Footer'));

/* --------------------------------------------------------------
   SIMPLE & SMOOTH VENTRILOX LOADER
   -------------------------------------------------------------- */
const SimpleLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* VENTRILOX in serif */}
      <h1 className="font-serif text-5xl md:text-7xl tracking-widest text-white mb-8 animate-fadeIn">
        VENTRILOX
      </h1>

      {/* Smooth spinning dot */}
      <div className="w-10 h-10 border-4 border-t-white border-r-white border-b-gray-800 border-l-gray-800 rounded-full animate-spin"></div>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Suspense fallback={<SimpleLoader />}>
        <Navbar />
        <Home />
        <Services />
        <AboutUs />
        <Process />
        <ToolsWeUse />
        <WorkSection/>
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
