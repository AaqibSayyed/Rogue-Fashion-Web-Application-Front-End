import { React } from 'react'
import { useGlobalProductContext } from '../context/productcontext'
import MainProductPage from './MainProductPage'
import Title from '../component/Title'
import Filter from '../component/Filter'

function WomenProductPage() {
  const { women_products } = useGlobalProductContext()
  let women_category = "Women"

  let filter_Category=["All","Saree", "Lehnga", "Kurti","Pants", "Jeans", "Shrugs", "Tshirt","Jumpsuit", "Indian Dress", "Straight Pants"]

  return (
    <>

      <div className='title'>
        <Title category={women_category}/>
      </div>


      <div className='product-page-container'>

        <div className='Filter-section'>
          <Filter filter_Category={filter_Category}/>
        </div>

        <div className='divide-line'></div>

        <section className='main-product-container'>
          {
            women_products.map((element) => {
              return <MainProductPage key={element.id} {...element} />
            })
          }
        </section>


      </div >
    </>

  )
}


export default WomenProductPage