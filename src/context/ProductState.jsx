import React, { useReducer, useState } from 'react'
import ProductContext from './productContext'
import { cartReducer } from './reducers'

const ProductState = (props) => {
  let p1 = {
    name: 'apple',
    price: 100
  }
  const prod = [
    {
      'id': 1,
      'name': 'Apple',
      'description': 'This is fresh and healthy',
      'price': 100,
      'instock': 5
    },
    {
      'id': 2,
      'name': 'Mango',
      'description': 'This is local product from Nepal',
      'price': 200,
      'instock': 4
    },
    {
      'id': 3,
      'name': 'Mango',
      'description': 'This is local product from Nepal',
      'price': 200,
      'instock': 4
    },
    {
      'id': 4,
      'name': 'Mango',
      'description': 'This is local product from Nepal',
      'price': 200,
      'instock': 2
    },
    {
      'id': 5,
      'name': 'Mango',
      'description': 'This is local product from Nepal',
      'price': 200,
      'instock': 6
    },
    {
      'id': 6,
      'name': 'Mango',
      'description': 'This is local product from Nepal',
      'price': 200,
      'instock': 7
    },
    {
      'id': 7,
      'name': 'Mango',
      'description': 'This is local product from Nepal',
      'price': 200,
      'instock': 12
    },
  ]

  const [product, setProduct] = useState(prod)

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart:[]
  })

  // const [article, setArticle] = useState([])

  // const update = () => {
  //   setTimeout(() => {
  //     setProduct({
  //       name: 'orange',
  //       price: 50,
  //     });
  //   }, 5000);
  // }

  // const fetchApi = async () => {
  //   try {
  //     const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=480927097d7c4ac3ac697cba94f8a06e")
  //     if (!response.ok) {
  //       throw new Error("Not Responding")
  //     }
  //     const data = await response.json()
  //     setArticle(data.articles)
  //   } catch (error) {
  //     throw new Error("Not Responding")
  //   }
  // }

  return (
    <ProductContext.Provider value={{state, dispatch, product }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
