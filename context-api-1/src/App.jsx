import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context API project 1</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
