import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';


export default function Home() {

  const [eletros, setEletros] = useState([]);

  const getData = async () => {
    await axios.get('/eletro/findMany')
    .then(response => {
      setEletros(response.data)
    })
  }

  useEffect(() => {
    getData()
  })

  return (

         <div className='home'>

            <Carousel>
                <div>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='300px'/>
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
                                 
                </div>
                
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhEGQfK_WIJ0cTsr8hf1dH_2JKpyMR-BQpQ&usqp=CAU"width='100%' height='300px'/>
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
            
             </div>
               
                <div>
                <img src="https://a-static.mlcdn.com.br/618x463/notebook-samsung-book-np550xda-kf2br-intel-core-i5-8gb-256gb-ssd-156-full-hd-windows-10/magazineluiza/228721600/59832618d31143e43534a9b56acfc410.jpg"width='100%' height='300px'/>
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
             </div>
             
              <div>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='300px'/>
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
          
            </div>
            <div>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='300px' />
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
             </div>
             
              <div>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='300px' />
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
                
            </div>
            <div>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='300px' />
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
             </div>
             
              <div>
                <img src="https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg"width='100%' height='300px'  />
              <div className="home_legend">Tv Sansung "55" Pol de (R$ 4.029,00) ** por** (R$ 3.852,00) A vista</div>
     
           
           
            </div>



            </Carousel>
              
                          


        

      <Search />
      <CardContainer title='Produtos Eletronicos'>
      {
        eletros.map(eletro => (
          <Card 
            key={eletro.id}
            image={eletro.imageUrl}
            name={eletro.name}
            price={eletro.price}
          />
        ))
      }
      </CardContainer>
  </div>
  
  )
}