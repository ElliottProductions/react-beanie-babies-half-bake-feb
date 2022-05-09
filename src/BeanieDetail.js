import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  // you'll need to track the current beanieBaby in state
  // you'll need to get the route param using the appropriate react router hook
  const params = useParams();
  const [beanieBabe, setBeanieBabe] = useState({});

  useEffect(() => {
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    async function load() {
      const beanieData = await getSingleBeanie(params.id);
      setBeanieBabe(beanieData);
    }
    load();
  }, [params.id]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes 

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  }

  return (
    <>
      {console.log(beanieBabe)/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}
      
      <Link to='/'>Home</Link>
      <div className='beanie-detail' onClick={handleBeanieClick}>
        <div className='beanie-data'>
          <p>{beanieBabe.animal}</p>
          <p>{beanieBabe.title}</p>
          <p>Zodiac: {beanieBabe.astroSign}</p>
          <p> Born on {beanieBabe.birthday}</p>
          <img className='beanie-img' src={beanieBabe.image}/>
          <p>Color: {beanieBabe.color}</p>
          <p>Release Date: {beanieBabe.releaseDate}</p>
          <p>Retirement Date: {beanieBabe.retirementDate}</p>

          <p>Size: {beanieBabe.size}</p>
          <p>Theme: {beanieBabe.theme}</p>
          <p>Sub-Theme: {beanieBabe.subtheme}</p>
          <p>Style Number: {beanieBabe.styleNumber}</p>
          <p>Swing Tag Generation: {beanieBabe.swingTagGeneration}</p>
          <p>Tush Tag Generation: {beanieBabe.tushTagGeneration}</p>
        </div>
      </div>  
    </>
  );
}
