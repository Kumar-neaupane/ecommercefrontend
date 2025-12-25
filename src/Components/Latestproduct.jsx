import "../Style/Homepage.css";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import postItem1 from "../../images/post-item1.jpg";
import postItem2 from "../../images/post-item2.jpg";
import postItem3 from "../../images/post-item3.jpg";
import postItem4 from "../../images/post-item4.jpg";
import postItem5 from "../../images/post-item5.jpg";
import React from 'react'

const Latestproduct = () => {
    const featuredProducts = [
    {
      id: 1,
      image: postItem1,
      name: "Running shoes for men",
      price: "$99",
      icons: [<SearchIcon />, <LockIcon />],
    },
    {
      id: 2,
      image: postItem2,
      name: "Running shoes for men",
      price: "$99",
      icons: [<SearchIcon />, <LockIcon />],
    },
    {
      id: 3,
      image: postItem3,
      name: "Running shoes for men",
      price: "$99",
      icons: [<SearchIcon />, <LockIcon />],
    },
    {
      id: 4,
      image: postItem4,
      name: "Running shoes for men",
      price: "$99",
      icons: [<SearchIcon />, <LockIcon />],
    },
    {
      id: 5,
      image: postItem5,
      name: "Running shoes for men",
      price: "$99",
      icons: [<SearchIcon />, <LockIcon />],
    },
  ];
  return (
    <div>
    <section className="latest-products">
            <div className="section-header">
              <h2>LATEST PRODUCTS</h2>
              <button className="view-all">VIEW ALL</button>
            </div>
    
            <div className="featuredGrid">
              {featuredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="imagewithicons">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="featuredimg"
                    />
                    <p className="icons">{product.icons}</p>
                  </div>
                  <div className="product-meta">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
           {/**  <div className="twoimage">
              <img src={postItem4} alt="Promotional 1" />
              <img src={postItem3} alt="Promotional 1" />
            </div>*/}
          </section>
      
    </div>
  )
}

export default Latestproduct
