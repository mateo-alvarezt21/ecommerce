import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'
import Product from './Product'
import "./styles/Home.css"

const Home = () => {
    
    const [categories, setCategories] = useState([])
    const [nameFilter, setNameFilter] = useState("")
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [categoryFilter, setCategoryFilter] = useState(0)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const nameProduct = e.target.nameProduct.value
        setNameFilter(nameProduct)
    }

    useEffect(() => {
        axiosEcommerce.get("/products").then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axiosEcommerce.get("/categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err))
    }, [])
    
    useEffect(() => {
        const newProductsByName = products.filter(product => product.title.toLowerCase().includes(nameFilter.toLowerCase()))
        if(categoryFilter){
            const newProductsByCategory = newProductsByName.filter(product => product.categoryId === categoryFilter)
            setFilterProducts(newProductsByCategory)
        } else{
            setFilterProducts(newProductsByName)
        }
    }, [nameFilter, products, categoryFilter])
    
    

return (
    <main className='home'> 
        <form onSubmit={handleSubmit}>
            <div className='search'>
                <input className='search__input' id="nameProduct" type="text" placeholder='Search a product...' />
                <button className='search__btn'><i className='bx bx-search'></i></button>
            </div>
            <div className='categories'>
                <h3 className='categories__title'>categories</h3>
                <ul className='categories__ul'>
                    <li className='categories__li'>All</li>
                    {
                        categories.map((category) =>(
                            <li className='categories__li' onClick={() => setCategoryFilter(category.id)} key={category.id}>{category.name}</li>
                        ))
                    }
                </ul>
            </div>
        </form>
        <section className='home__listProducts'>
            {
                filterProducts.map(product => <ProductCard key={product.id} product={product}/> )
            }
        </section>

    </main>
)
}

export default Home