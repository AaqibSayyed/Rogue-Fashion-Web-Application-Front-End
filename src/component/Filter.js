import { useGlobalProductContext } from '../context/productContext'
import '../assets/css/product.css'

function Filter({ filter_Category }) {
  const { getFilterValues } = useGlobalProductContext()
  return (
    <>
      <div className='filter-product-container'>
        <h3 className='filter-category-Categories'>Categories</h3>
        <div>{filter_Category.map((elemet, index) => {
          return <button className="filter-category-button" key={index} type='button' name="category" value={elemet}
            onClick={getFilterValues}>{elemet}
          </button>
        })}</div>
      </div>

    </>

  )
}

export default Filter