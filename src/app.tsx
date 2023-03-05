import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import SecondPage from "./pages/SecondPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="second">
          <Route index element={<SecondPage/>} />
          <Route path=":number" index element={<SecondPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
