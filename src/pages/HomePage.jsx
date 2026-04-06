import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRandomQuote } from '../services/api';

function HomePage() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuote = async () => {
      try {
        const response = await getRandomQuote();
        setQuote(response.data);
      } catch (error) {
        console.error('Quote request failed:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuote();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>React Market Studio</h1>
        <p>
          Digital showcase app with dynamic routes, server requests and interactive shopping
          tools.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn">
            Explore products
          </Link>
          <Link to="/users" className="btn btn-ghost">
            View users
          </Link>
        </div>
      </div>

      <div className="quote-box">
        <h2>Quote of the moment</h2>
        {loading && <p className="muted">Loading quote...</p>}
        {!loading && quote && (
          <blockquote>
            "{quote.quote}" <span>— {quote.author}</span>
          </blockquote>
        )}
      </div>
    </section>
  );
}

export default HomePage;
