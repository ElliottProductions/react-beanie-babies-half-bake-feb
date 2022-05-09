import { Link } from 'react-router-dom';
import './App.css';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <div className="beanie-card">
      <p>{beanieBaby.title}</p>
      <img src={beanieBaby.image}/>
    </div>
    
  );
}
