import React from 'react';
import CardsData from './CardsData';
import './home.css';
import Cards from './Cards';
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
     {CardsIdea}
    </div>
    </div>
  );
}
export default Home;
