import React from 'react';
import Cards1Data from './Cards1Data';
import Cards1 from './Cards1';
function Ideas() {
   
  const Cards1Idea = Cards1Data.map((val) => {
    return (<Cards1
    key={val.id}
      category={val.category}
      description={val.description}
      name={val.name}
      status={val.ideaStatus}
     ></Cards1>)
     ;
  })
  return (
    <div className='ideas'>
     {Cards1Idea}
    </div>
  );
}

export default Ideas;
