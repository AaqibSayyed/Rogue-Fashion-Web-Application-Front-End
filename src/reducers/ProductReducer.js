const ProductReducer = (state, action) => {

    switch (action.type) {
        case "IS_API_LOADING":
            return { ...state, isLoading: true }

        case "SET_API_DATA":
            return {
                ...state, isLoading: false, products: action.payload, men_products: action.payload.filter((currElement) => {
                    return currElement.category_id === 1
                }), women_products: action.payload.filter((currElement) => {
                    return currElement.category_id === 2
                }), kid_products: action.payload.filter((currElement) => {
                    return currElement.category_id === 3
                })
            }

        case "IS_API_ERROR":
            return { ...state, isLoading: false, isError: true }

        case "IS_SINGLE_API_LOADING":
            return { ...state, isLoading: true }

        case "SET_SINGLE_API_DATA":
            return { ...state, isLoading: false, productDetails: action.payload }

        case "IS_SINGLE_API_ERROR":
            return { ...state, isLoading: false, isError: true }

        case "UPDATE FILTER TEXT":
            const { name, value } = action.payload
            return {
                ...state, filter: {
                    ...state.filter,
                    [name]: value
                }
            }

        case "UPDATE PRODUCT FILTER":
            const { text, category } = state.filter

            const copy_men_products = state.products.filter((currElement) => {
                return currElement.category_id === 1
            });

            const copy_women_products = state.products.filter((currElement) => {
                return currElement.category_id === 2
            })

            const copy_kid_product = state.products.filter((currElement) => {
                return currElement.category_id === 3
            })

   
            let filter_men_product = copy_men_products;
            let filter_women_product = copy_women_products;
            let filter_kid_product = copy_kid_product;





            if (text) {
                filter_men_product = copy_men_products.filter((currElement) => {
                    return currElement.name.toLowerCase().includes(text.toLowerCase())
                })
                filter_women_product = copy_women_products.filter((currElement) => {
                    return currElement.name.toLowerCase().includes(text.toLowerCase())
                })

                filter_kid_product = copy_kid_product.filter((currElement) => {
                    return currElement.name.toLowerCase().includes(text.toLowerCase())
                })


            }


            if (category!=='All') {
                filter_men_product = copy_men_products.filter((currElement) => {
                    return currElement.name.toLowerCase().includes(category.toLowerCase())
                })

                filter_women_product = copy_women_products.filter((currElement) => {
                    return currElement.name.toLowerCase().includes(category.toLowerCase())
                })

                filter_kid_product = copy_kid_product.filter((currElement) => {
                    return currElement.name.toLowerCase().includes(category.toLowerCase())
                })
            }

            if(text && category!=='All'){
                filter_men_product = copy_men_products.filter((currElement) => {
                    if(currElement.name.toLowerCase().includes(text.toLowerCase()) && currElement.name.toLowerCase().includes(category.toLowerCase())){
                        return currElement
                    }
                    return null
                })

                filter_women_product = copy_women_products.filter((currElement) => {
                    if(currElement.name.toLowerCase().includes(text.toLowerCase()) && currElement.name.toLowerCase().includes(category.toLowerCase())){
                        return currElement
                    }
                    return null
                })


                filter_kid_product = copy_kid_product.filter((currElement) => {
                    if(currElement.name.toLowerCase().includes(text.toLowerCase()) && currElement.name.toLowerCase().includes(category.toLowerCase())){
                        return currElement
                    }
                    return null
                })
            }


            return {
                ...state,
                men_products: filter_men_product,
                women_products: filter_women_product,
                kid_products: filter_kid_product
            }


        default:
            return state
    }

}

export default ProductReducer