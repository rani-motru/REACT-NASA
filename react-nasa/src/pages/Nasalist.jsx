import { useState, useEffect } from 'react'
import Form from '../components/Form'
import DisplayList from '../components/Displaylist.jsx'
function Nasalist() {
    const [search, setSearch] = useState(null);

    const getSearch = async (searchterm) => {
    const url = `https://images-api.nasa.gov/search?q=${searchterm}`;
    
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setSearch(data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getSearch();
  }, []);

  return (
    <div>
      <center><h3>Type in the Search:  <Form nasaSearch={getSearch}/></h3></center>
      {search ? <DisplayList search={search}/> :"loading"}
        {/* <h1>This is the  Nasa list Page </h1> */}
       
    </div>
  )
}

export default Nasalist