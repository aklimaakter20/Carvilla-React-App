
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import NewestCar from './Components/NewestCar'
// import FeaturedCar from './Components/FeaturedCar'
import ClientSay from './Components/ClientSay'

function App() {

  return (
    <>
      <Navbar/>
      <Card/>
      <NewestCar/>
      {/* <FeaturedCar/> */}
      <ClientSay/>
      
    </>
  )
}

export default App
