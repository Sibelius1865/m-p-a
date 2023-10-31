import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.scss';

const Index = () => {
  const navigate = useNavigate();
  const moveToHome = () => navigate('./home');
  useEffect(() => {
    let timeout = setTimeout(() => moveToHome(), 3000);
    return () => clearTimeout(timeout);
  }, [])
  const handleClick = () => moveToHome();
  return (
    <div className='index' onClick={handleClick}>
      <div>METAPHILOSOPHY</div>
      <div>PHILOSOPHOLOGY</div>
      <div>APHILOSOPHY</div>
    </div>
  )  
}

export default Index;