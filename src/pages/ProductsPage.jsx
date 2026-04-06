import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import { getProducts } from '../services/api';

function ProductsPage() {
  const { addToCart } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProducts(20);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Products request failed:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let result = products.filter((product) =>
      product.title.toLowerCase().includes(normalizedSearch)
    );

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, sortBy]);

  return (
    <section>
      <h1>Products</h1>
      <div className="toolbar">
        <input
          className="input"
          placeholder="Search by title"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          className="input"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="default">Default order</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {loading && <p className="muted">Loading products...</p>}

      {!loading && (
        <div className="grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsPage;
