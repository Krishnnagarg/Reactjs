
import './App.css'
import UserContext from './Context/userContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
 
  return (
    <UserContextProvider>
     <h1>React With Krishna</h1>
     <Login/>
     <Profile />
    </UserContextProvider>  
  )
}

export default App
