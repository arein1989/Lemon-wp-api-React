
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';


function Forside() {
  const navigate = useNavigate();
 

  return (
    <div className="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <p className="is-size-3 has-text-centered is-align-items-center my-3 mx-5 has-background-light" style={{ color: '#1E2B18', width: '100%', padding: '8px' }}>
      If you have a lemon, make lemonade.
      </p>
      
      <div className="Køb">
        <button className="button is-large  is-outlined is-inverted is-align-items-center my-3" onClick={() => navigate('/shop')} style={{ boxShadow: '#b6baba 0 0 0.5em', color: '#F0F0F0', borderRadius:'75px 15px', backgroundColor: '#1E2B18' }}>
        Go to products
        </button>
      </div>
      
    </div>
  );
}

export default Forside;