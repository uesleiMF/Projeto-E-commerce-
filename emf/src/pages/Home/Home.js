import Banner from '../../components/Banner/Banner';
import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Home.css';


export default function Home() {

  const [games, setGames] = useState([]);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      setGames(response.data)
    })
  }

  useEffect(() => {
    getData()
  })

  return (

         <div className='home'>

          <div>
              <img src="https://images-americanas.b2w.io/produtos/01/00/img/3081358/8/3081358804_1SZ.jpg" width='100%' height='200px'/>
              <div className="home_legend">Legend 1</div>

               <img src="https://images-americanas.b2w.io/produtos/01/00/img/3081358/8/3081358804_1SZ.jpg" width='100%' height='200px'/>
              <div className="home_legend">Legend 1</div>
          </div>
          
          
        

          <div className='hom'>

             <div>
              <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='200px'/>
              <div className="home_legend">Legend 2</div>
              
              <img  src="https://portalpopline.com.br/wp-content/uploads/2021/11/homem-aranha-trailer-640x800.jpg"width='100%' height='200px'/>
              <div className="home_legend">Legend 3</div>
          </div>
          

          <div className='ho'>
         
          <div>
              <img  src="https://portalpopline.com.br/wp-content/uploads/2021/11/homem-aranha-trailer-640x800.jpg"width='100%' height='200px'/>
              <div className="home_legend">Legend 3</div>
              <img  src="https://portalpopline.com.br/wp-content/uploads/2021/11/homem-aranha-trailer-640x800.jpg"width='100%' height='200px'/>
              <div className="home_legend">Legend 3</div>
          </div>
          
          


        

      <Search />
      <CardContainer title='Produtos Eletronicos'>
      {
        games.map(game => (
          <Card 
            key={game.id}
            image={game.imageUrl}
            name={game.name}
            price={game.price}
          />
        ))
      }
      </CardContainer>
  </div>
  </div>
  </div>
  )
}