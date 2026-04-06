import { Link } from 'react-router-dom';

function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <img className="card-image" src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="muted">{product.brand}</p>
        <p className="price">${product.price}</p>
        <div className="card-actions">
          <Link className="btn btn-ghost" to={`/products/${product.id}`}>
            Details
          </Link>
          <button className="btn" onClick={() => onAdd(product)} type="button">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
