import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getProductById } from '../services/api';

function ProductDetailsPage() {
  const { productId } = useParams();
  const { addToCart } = useAppContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const response = await getProductById(productId);
        setProduct(response.data);
      } catch (error) {
        console.error('Product details request failed:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) {
    return <p className="muted">Loading product details...</p>;
  }

  if (!product) {
    return (
      <div>
        <p>Product not found.</p>
        <Link className="btn btn-ghost" to="/products">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <section className="details">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p className="muted">Brand: {product.brand}</p>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <p>Rating: {product.rating}</p>
        <div className="hero-actions">
          <button className="btn" onClick={() => addToCart(product)} type="button">
            Add to cart
          </button>
          <Link className="btn btn-ghost" to="/products">
            Back to products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
