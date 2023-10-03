const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { amount, product } = action.payload;

    let match = state.cart.filter((currEleme) => { return currEleme.id === product.id })

    if (match.length !== 0 && product.id === match[0].id) {
      const removeArrya = () => {
        return state.cart.map((currEleme, index) => {
          if (product.id === currEleme.id) {
            let previous_cart = [...state.cart]

            previous_cart[index] = {
              id: currEleme.id, name: currEleme.name, image: currEleme.image,
              quantity: currEleme.quantity + amount, amount: currEleme.amount, stock: currEleme.stock
            }
            return {
              ...previous_cart
            }
          }

          return null
        })
      }
      let new_state = removeArrya()
      new_state = new_state.filter((currEleme) => { return currEleme })

      new_state = [...new_state]

      for (let i of new_state) {
        new_state = i
      }

      new_state = new_state[0]


      return {
        ...state,
        cart: [new_state]
      }
    }



    let carPdoduct;

    carPdoduct = {
      id: product.id,
      name: product.name,
      image: product.single_product_image,
      quantity: amount,
      amount: product.total_amount,
      stock: product.stock
    }

    return {
      ...state,
      cart: [...state.cart, carPdoduct]
    }
  }



  if (action.type === "REMOVE_CART_ITEM") {
    const { id } = action.payload
    const remove_item = state.cart.filter((currEleme) => {
      return currEleme.id !== id
    })

    return {
      ...state,
      cart: [...remove_item]
    }

  }

  return state;
};

export default cartReducer;



