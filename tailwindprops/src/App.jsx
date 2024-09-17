import './App.css'
import Card from './components/Card'

function App() {
  const obj = {
    username: "my ANE",
    age: 13
  }
  let arr = [1.3, "KJDBV"]
  return (
    <>
      <h1 className='bg-blue-200 text-black mb-4'>Hello There from second project</h1>
      <Card hello="kjsbvkj" object={obj} arr={arr}/>
      <Card />
    </>
  )
}

export default App
