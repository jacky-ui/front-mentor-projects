import { useState, useEffect } from 'react';
import axios from 'axios';
import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import AdviceCard from '../../components/AdviceCard/AdviceCard';
import './AdviceGenerator.scss';

function AdviceGenerator() {
    useSetBodyClass("adviceBody");
    useSetTitle("Frontend Mentor | Advice Generator");
    const [adviceApi, setAdvice] = useState(null);
    const [loader, setLoaader] = useState(false);
  
    setTimeout(() => {
      setLoaader(true);
    }, 5000)
    
    useEffect(() => {
      axios
        .get('https://api.adviceslip.com/advice')
        .then((response) => setAdvice(response.data.slip))
        .catch((error) => console.log(error));
    }, [])
  
    const handleChangeAdvice = () => {
      axios
        .get('https://api.adviceslip.com/advice')
        .then((response) => setAdvice(response.data.slip))
        .catch((error) => console.log(error));
    }
    if(!loader) {
      return(
        /*Credits to loading.io for loader animation*/
        <div className='loading'>
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )
    } else
    return (
      <>
        <AdviceCard 
          adviceObject={adviceApi}
          onClick={handleChangeAdvice}
        />
      </>
    );
  }
  

export default AdviceGenerator;