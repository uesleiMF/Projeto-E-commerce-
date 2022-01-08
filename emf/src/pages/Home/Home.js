import Banner from '../../components/Banner/Banner';
import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
    <>
      <Banner 
        image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_432,q_auto,w_768/ncom/en_US/games/switch/l/life-is-strange-true-colors-switch/hero' 
        age='16'
        info='Violência, drogas'
      />
      <Search />
      <CardContainer title='Jogos'>
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
    </>
  )
}