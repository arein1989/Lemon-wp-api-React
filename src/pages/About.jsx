 import 'bulma/css/bulma.min.css';
 import aboutLemonade from '../assets/aboutLemonade.mp4'; 
 import Navbar from '../components/navbar';

function About() {
 

  return (
    <>
      <Navbar />
      <div className="section is-flex is-flex-direction-column is-justify-content-center is-align-items-center ">
         <h1 className="title is-1 has-text-centered is-align-items-center has-text-justified my-3 mx-5 " style={{ color: '#F0F0F0'}}>Lemonade – The Fresh Breath</h1>
        <p className="is-size-5 is-align-items-center has-text-justified my-3 " style={{ color: '#F0F0F0', maxWidth:'1050px' }}>
           Lemonade is more than just a drink; it’s a feeling of summer, sunshine and good times. Whether it’s classic with sugar and freshly squeezed lemon juice, fancy with raspberries or mint, or crisp with ginger, there’s a lemonade for every taste.
        </p>
        <iframe className="is-size-5 has-text-centered is-align-items-center my-3 mx-5 " style={{ color: '#F0F0F0'}}
           width="560" height="315" src={aboutLemonade} title="Lemonade Video" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        
        <div className='p-3 m-3' style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '4px',
            borderLeft: '4px solid #F0F0F0',
          }}>
            <p className="is-italic is-size-5 m-2" style={{ color: '#F0F0F0' }}>
              "When life gives you lemons, you get to choose what you make out of them; it doesn't always have to be lemonade."
            </p>
            <p className="has-text-weight-semibold m-3" style={{ color: '#F0F0F0' }}>
              - Mariana Zapata, The Wall of Winnipeg and Me
            </p>
          </div>
      </div>
    </>
    );
}

export default About;