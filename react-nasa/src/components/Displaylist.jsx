import React from 'react'

function DisplayList({search}) {

  const displayItem =search.collection.items;

  return displayItem.map((items ,index) => (
    <div key={index} className='result-container'>
        {items.links && items.links.filter((i)=>i.render === "image").map((j,index) =><img src= {j.href} key ={index}/>)}
        {/*check if the itmes.data is an array before using in map*/}
        {Array.isArray(items.data)&&
        items.data.map((d, index) =>(
            <div key={index}>
                <h3>title:{d.title}</h3>
                {/* <h3>description:{d.description}</h3> */}
            </div>
        ))}
    </div>
  
  ));
        }

// const loading = () => {
//     return <h1>No search to Display</h1>
// }
// //The component must return some JSX
// return search ? loaded() : loading();
// } <div>Display</div>
//   )
// }

export default DisplayList;