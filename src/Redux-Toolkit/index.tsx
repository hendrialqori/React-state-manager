import React, { useEffect, useState } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import type { RootStateTypes, AppDispatch } from './store'
import { addProduct } from './features/productSlice'
import { getUserFromAPI } from './features/usersSlice'

const ReduxComponent = () => {
  return (
    <main>
      <FormProduct />
      <ListProductComp />
      <UsersComponent />
    </main>
  )
}



const ListProductComp = () => {
  const { products } = useSelector((state:RootStateTypes) => state.product)
  return (
    <section> 
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title} - Rp. {product.price}</h1>
        </div>
      ))}
    </section>
  )
}

const FormProduct = () => {
  const [value, setValue] = useState({
    title: '',
    price: ""
  })

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(prev => {
      return {
        ...prev, 
        [e.target.name]: e.target.value
      }
    })
  }
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  dispatch(addProduct({ title: value.title, price: value.price.toString()}))

  setValue({
    title: "",
    price: ""
  })
 }
  console.log(value)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">title</label>
        <input value={value.title} name="title" type="text" id="title" onChange={handleChange}  />
      </div>
      <div>
        <label htmlFor="price">price</label>
        <input value={value.price} name="price" type="number" id="price" onChange={handleChange}  />
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}


const UsersComponent = () => {
  const { users, loading } = useSelector((state: RootStateTypes) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
      (async () => {
        dispatch(getUserFromAPI())
      })()
  }, [])

  if(loading === 'pending') return <p>Loading ...</p>
  return (
    <>
      {users?.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </>
  )
}



const ReduxToolkitProvider = () => {
    return (
        <Provider store={store}>
            <ReduxComponent />
        </Provider>
    )
}

export default ReduxToolkitProvider