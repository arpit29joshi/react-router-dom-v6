import { Link } from 'react-router-dom'
import product from '../data'
const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        {product.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/product/${product.id}`}>More Info</Link>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Products
