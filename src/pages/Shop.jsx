import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        idDrink: product.idDrink,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    alert(`${product.name} er tilføjet til kurven!`);
  };

  // Function to extract description from content
  const extractDescription = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    let text = tempDiv.textContent || tempDiv.innerText || '';
    text = text.replace(/\s+/g, ' ').trim();
    text = text.replace(/Pris:\s*\d+\s*kr/gi, '');
    text = text.replace(/Add to cart/gi, '');

    return text || 'Ingen beskrivelse tilgængelig';
  };

  useEffect(() => {
    const drinkPrices = {
      "Blackberry Lemonade": 55,
      "Lavender Lemonade": 60,
      "Raspberry Lemonade": 30,
      "Strawberry Lemonade": 50,
      "Blueberry Lemonade": 45,
      "Blueberry lemonade": 35,
      "Watermelon Lemonade": 55,
      "Mint lemonade": 45,
      "Orange Lemonade": 50,
      "Cherry Lemonade": 60,
      "Kiwi Lemonade": 55,
      "Granatapple Lemonade": 35, // Tilføjet den 12. drink
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'http://localhost:8888/Lemon-wp-api/wp-json/wp/v2/posts?_embed'
        );
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        const formattedProducts = data.map((post) => {
          // Handle featured image
          let imageUrl = '';
          if (post._embedded && post._embedded['wp:featuredmedia']) {
            imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
          }

          return {
            id: post.id,
            idDrink: post.id.toString(),
            name: post.title.rendered,
            price: drinkPrices[post.title.rendered] || 0,
            description: extractDescription(post.content.rendered),
            image: imageUrl || 'https://via.placeholder.com/400x300?text=Lemonade',
          };
        });

        setProducts(formattedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Loading and error states
  if (isLoading)
    return (
      <>
        <Navbar />
        <div className="section">
          <h1 className="title mx-6 mt-4" style={{ color: '#F0F0F0' }}>
            Our Drinks
          </h1>
          <p>Loading products...</p>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="section">
          <h1 className="title mx-6 mt-4" style={{ color: '#F0F0F0' }}>
            Our Drinks
          </h1>
          <p className="has-text-danger">Error: {error}</p>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <h1 className="title mx-6 mt-4" style={{ color: '#F0F0F0' }}>
        Our Drinks
      </h1>
      <div>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`card m-6 ${
              index % 2 === 0 ? '' : 'has-background-light'
            }`}
            style={{ backgroundColor: '#F0F0F0' }}
          >
            <div
              className={`columns is-vcentered ${
                index % 2 === 0 ? '' : 'is-flex-direction-row-reverse'
              }`}
            >
              <div className="column is-half p-0">
                <figure className="image is-3by2">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/400x300?text=Lemonade';
                    }}
                  />
                </figure>
              </div>
              <div className="column is-half is-justifty-content-center is-align-items-center">
                <h2 className="title is-3 mx-4">{product.name}</h2>
                <p className="subtitle is-5 m-4">{product.description}</p>
                <p className="is-size-4 has-text-weight-bold mx-4">
                  Pris: {product.price} kr
                </p>
                <button
                  className="button is-medium is-rounded m-3"
                  onClick={() => handleAddToCart(product)}
                  style={{ backgroundColor: '#1E2B18', color: '#F0F0F0' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;