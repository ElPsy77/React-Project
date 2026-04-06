function AboutPage() {
  return (
    <section className="about">
      <h1>About This Project</h1>
      <p>
        This app was built as a full React digital product. It demonstrates dynamic routing,
        API integration, global state with Context, and multiple user interactions.
      </p>
      <ul>
        <li>Routing: 6 pages + NotFound</li>
        <li>API requests: products, product details, users, random quote</li>
        <li>State: theme and cart management in React Context</li>
        <li>Extra library: classnames</li>
      </ul>
    </section>
  );
}

export default AboutPage;
