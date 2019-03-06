import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProductsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>My Products</h1>
    <p>We sell stuff.</p>
    <p>You buy our stuff.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)

export default ProductsPage
