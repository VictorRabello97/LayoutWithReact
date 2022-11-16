import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import {Post, Posttwo} from "./components/Post"

import './global.css'
import styles from "./app.module.css"

function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}> 

       <Sidebar />

        <main>
          < Post
        
        />
      

        < Posttwo
        
        />    
        </main>

    
      </div>
    </div>
    )
  
}

export default App
