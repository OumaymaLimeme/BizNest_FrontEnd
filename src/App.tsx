import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListBusiness from './pages/post-list/PostList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <ListBusiness />
        </div>
    </>
  )
}

export default App
