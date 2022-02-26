import React from 'react';
import CardsData from './CardsData';
import './home.css';
import Cards from './Cards';
import logo from '../images/logo.png';
import qq from '../images/—Pngtree—the online exchange of xie_3737653 - Copy.png'
import ee from '../images/Untitled.png'
import y from '../images/kisspng-web-design-web-portal-world-wide-web-web-developme-welcome-to-cloudgeek-cloudgeek-a-leading-solutio-5cd466d2bdb091.117549121557423826777.png'
function Home() {
  const CardsIdea = CardsData.map((val) => {
    return (<Cards
    key={val.id}
      category={val.category}
      description={val.description}
      name={val.name}
      status={val.ideaStatus}
     ></Cards>)
     ;
  })
  return (
    <div>
    <div className='home'>
    <img src={y}  style={{
        paddingTop:'460px',
              paddingLeft:'350px',
              resizeMode: "cover",
              paddingTop:'400px',
              height:'800'
            }} class="img-fluid" 
      
      ></img>
     {CardsIdea}
    </div>
    </div>
  );
}
export default Home;
