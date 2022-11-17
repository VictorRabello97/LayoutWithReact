import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import {Post} from "./components/Post"

import './global.css'
import styles from "./app.module.css"

const posts = [ 
  { 
    id: 1,
    author: {
      avatarUrl: 'https://github.com/victorrabello97.png',
      name: 'Victor Rabello',
      role: 'Web Developer'
    },
    content: [ 
     {type: 'paragraph', content: 'Fala Galera '},
     {type: 'paragraph', content: 'Estou aprimorando meus conhecimentos em React com a ajuda do pessoal da RocketSeat!'},
     {type: 'paragraph', content: ' Fica aqui o meu agradecimento pela excelente didática e objetividade do curso!'},
     {type: 'link', content: <a href=""> https:/github.com/victorrabello97</a>},
    ],
    publishedAt: new Date('2022-05-03 20:00: 00')
                
    }, 
    {
      id: 2,
    author: {
      avatarUrl: 'https://github.com/jorgenicolas.png',
      name: 'Jorge Nicolas',
      role: 'UX Desingn'
    },
    content: [ 
     {type: 'paragraph', content: 'Fala Galera '},
     {type: 'paragraph', content: 'Estou aprimorando meus conhecimentos em React com a ajuda do pessoal da RocketSeat!'},
     {type: 'paragraph', content: ' Fica aqui o meu agradecimento pela excelente didática e objetividade do curso!'},
     {type: 'link', content: <a href=""> https:/github.com/victorrabello97</a>},
    ],
    publishedAt: new Date('2022-05-03 20:00: 00')
                
    }, 
]

function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}> 

       <Sidebar />

        <main>
          {posts.map(post => {
            return (<Post 
              author= {post.author}
              content= {post.content}
              publishedAt= {post.publishedAt}


            
            />
           )
          })}

        </main>

    
      </div>
    </div>
    )
  
}

export default App
