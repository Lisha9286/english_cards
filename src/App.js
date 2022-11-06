import { useEffect, useState } from "react"
import Gallery from './Components/Pages/Gallery/Gallery'
import Homepage from './Components/Pages/Homepage/Homepage'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage'
import { Layout } from './Components/Layout'
import dataContext from "./Components/createContext"
// import PostServices from './Api/PostServices'
import GetServices from './Api/GetServices'



function App() {
  const [data, setData] = useState([])
  async function componentDidMount() {
    const words = await GetServices.getCards()
    setData(words)
  }

  useEffect(() => {
    componentDidMount()
  }, [])

  return (
    <>
      <dataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={< Homepage />} />
            <Route index path='train' element={< Gallery />} />
            <Route index path='*' element={< NotFoundPage />} />
          </Route>
        </Routes>
      </dataContext.Provider>
    </>
  );
}

export default App;