import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productID } = useParams()
  const product = products.find((product) => product.id === productID)
  const { image, name } = product
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <Link to="/products">Back To Product</Link>
    </section>
  )
}

export default SingleProduct
