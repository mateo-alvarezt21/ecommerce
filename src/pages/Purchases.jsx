import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/purchases/PurchaseCard'
import { axiosEcommerce, getConfig } from '../utils/configAxios'
import "./styles/Purchases.css"

const Purchases = () => {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    axiosEcommerce
      .get("/purchases", getConfig())
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err))
  }, [])
  

  return (
    <main>
      <section>
        <section>
          <h3 className='title'>My purchases</h3>
          <section className='title_section'>

            {
              purchases.map((purchase) => <PurchaseCard key={purchase.id} purchase={purchase}/>)
            }
          </section>
        </section>
      </section>
    </main>
  )
}

export default Purchases