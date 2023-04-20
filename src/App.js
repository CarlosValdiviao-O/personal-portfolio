import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './App.css';
import React, { Suspense } from 'react';
import './i18n'

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
