import {React, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalProductContext } from '../context/productcontext'

function Title({category}) {

  const {getFilterValues, filter} = useGlobalProductContext()

  // function getValues(event){
  //      let name = event.target.name
  //      let value = event.target.value
  //      setInput (value);
  // }
  // console.log('i am from input_value',input)

  // const {getValues} = useGlobalProductContext(); 


  return (
    <>
    
  <div className='style-link-product'>
  <NavLink to='/' className='go-back'><strong>HOME</strong></NavLink><strong > / {category}'s Category</strong>
  </div>

  <div className='Input-search'>
    <form onSubmit={(e)=>{e.preventDefault()}}>
    <input type='text' name='text'  value ={filter.text} placeholder='Search Your Fashion' onChange={getFilterValues}/>
    </form>
  </div>

    </>
  )
}

export default Title