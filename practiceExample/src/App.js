import React, { createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./common/Header";
import CounterK from "./components/CounterK";
const Home = React.lazy(() => import('./page/Home'))
const Counter = React.lazy(() => import('./page/Counter'))
const About = React.lazy(() => import('./page/About'))

export const SumContext = createContext()
function App() {

  const [sum, setSum] = useState(0)
  const handleSum = (param) => setSum(param)

  return (
    <div className="App">
      <SumContext.Provider value={sum}>
        <Header></Header>
      </SumContext.Provider>
      <CounterK></CounterK>
      <Routes>
        <Route path="/home" element={<React.Suspense fallback="<>Loading...</>"><Home /></React.Suspense>} />
        <Route path="/counter" element={<React.Suspense fallback="<>Loading...</>"><Counter handleSum={handleSum} /></React.Suspense>} />
        <Route path="/about" element={<React.Suspense fallback="<>Loading...</>"><About /></React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;


/*********************************
 * Counter App*
 * Child Component*
 * Hooks (Custom Hooks)*
 * useMemo*
 * useCallback*
 * useEffect (componentDidMount)
 * HOC
 * React Routing
 * React Lazy
 * useContext
 * API Fetch (set Loader)*
 * Error Handling (Try-Catch)
 * Debounce
 * Throtling
 * redux toolkit, store
 * actions, useSelector, useDispatch
 ********************************/