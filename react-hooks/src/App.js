import React, { createContext, useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import Home from './components/Home';
// import Counter from './components/Counter';
import About from './components/About';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

const Counter = React.lazy(() => import("./components/Counter"));
export const SumContext = createContext()

function App() {
  const [sum, setSum] = useState(0)

  const handleSum = (param) => {
    setSum(param)
  }
  return (
    <div className="App">
      <SumContext.Provider value={sum}>
        <Header ></Header>
      </SumContext.Provider>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route
          path="/counter"
          element={
            <React.Suspense fallback={<>...</>}>
              <Counter onSetSum={handleSum} />
            </React.Suspense>
          }
        />
        {/* <Route path='/counter' element={<Counter onSetSum={handleSum} />} /> */}
        <Route path='/about' element={<About />} />
      </Routes>
      <Counter2></Counter2>
      <br />
      <br />
      <br />
      <Counter3></Counter3>
      <Footer></Footer>
    </div>
  );
}

export default App;
