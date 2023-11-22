import React from 'react'

function DisplayList({search}) {

  const displayItem =search.collection.items;

  return(
    <div className='result-container'>
       {displayItem.map((items ,index) => (
        <div key={index} >
        {items.links && items.links.filter((i)=>i.render === "image").map((j,index) => (<img src= {j.href} key ={index}/>))}
        {/*check if the itmes.data is an array before using in map*/}
        {Array.isArray(items.data)&&
        items.data.map((d, index) =>(
            <div key={index} className ='text-container'>
                <p className ='title'>{d.title} </p>
                <p className="date">{d.date_created.slice(0,10)}</p>
                {/* <h3>description:{d.description}</h3> */}
            </div>
        ))}
    </div>
  
  ))}
  </div>
  );

        }

export default DisplayList;