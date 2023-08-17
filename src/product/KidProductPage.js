import { React } from 'react'
import { useGlobalProductContext } from '../context/productcontext'
import MainProductPage from './MainProductPage'
import Title from '../component/Title'
import Filter from '../component/Filter'


function KidProductPage() {
  const { kid_products } = useGlobalProductContext()
  let kid_category = "Kid"

  let filter_Category=["All","Tshirt", "Dress", "Top", "Sherwani", "Kurta", "Cholis", "Jumsuite", "Jacket", "SweatShirt","Jeans"]

  return (
    <>
      <div className='title'>
        <Title category={kid_category}/>
      </div>
      <div className='product-page-container'>

        <div className='Filter-section'>

          <Filter filter_Category={filter_Category}/>
          
        </div>
        <div className='divide-line'></div>
        <section className='main-product-container'>
          {
            kid_products.map((element) => {
              return <MainProductPage key={element.id} {...element} />
            })
          }
        </section>
      </div >
    </>

  )
}


export default KidProductPage