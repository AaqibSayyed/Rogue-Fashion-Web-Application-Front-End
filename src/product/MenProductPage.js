import { useGlobalProductContext } from '../context/productContext'
import MainProductPage from './MainProductPage'
import Title from '../component/Title'
import Filter from '../component/Filter'
import '../assets/css/product.css'


function MenProductPage() {
  const { men_products } = useGlobalProductContext()
  let men_category = "Men"
  // console.log('recently added men product',men_products)
  let filter_Category=["All","Tshirt", "Jeans", "Pants","Straight Fit","SweatShirt","Denim Shirt",  "Full Sleeves","Denim Jacket" ]

  return (
    <>
      <div className='title'>
        <Title category={men_category}/>
      </div>
      <div className='product-page-container'>

        <div className='Filter-section'>

          <Filter filter_Category={filter_Category}/>
        </div>
        <div className='divide-line'></div>

        <section className='main-product-container'>
          {
            men_products.map((element) => {
              // console.log('i am from element',)
              return <MainProductPage key={element.id} {...element} />
            })
          }
        </section>
      </div >
    </>

  )
}


export default MenProductPage