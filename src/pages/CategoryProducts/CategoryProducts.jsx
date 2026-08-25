import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

import categoryData from "../../data/categoryData";

import "./CategoryProducts.css";


function CategoryProducts() {

  /* ========================================
     GET CATEGORY FROM URL
  ======================================== */

  const { categoryName } = useParams();


  /* ========================================
     GET SELECTED CATEGORY
  ======================================== */

  const category = categoryData[categoryName];


  /* ========================================
     GET PRODUCTS
  ======================================== */

  const products = category?.products || [];


  /* ========================================
     FORMAT CATEGORY NAME
  ======================================== */

  const formattedCategory = categoryName
    ?.split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");


  return (
    <section className="category-products">


      {/* ========================================
          HEADING
      ======================================== */}

      <div className="category-products-heading">


        {/* BACK BUTTON */}

        <Link
          to="/category"
          className="back-button"
        >
          <FaArrowLeft />
          Back to Categories
        </Link>


        {/* BRAND */}

        <p>
          🍫 TEMPTING WORLD
        </p>


        {/* CATEGORY TITLE */}

        <h1>
          {category?.title || `${formattedCategory} Brownies`}
        </h1>


        {/* CATEGORY DESCRIPTION */}

        <p className="category-products-description">
          {category?.description ||
            `Discover our delicious collection of ${formattedCategory?.toLowerCase()} brownies.`}
        </p>

      </div>


      {/* ========================================
          PRODUCTS
      ======================================== */}

      {products.length > 0 ? (

        <div className="products-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >


              {/* ========================================
                  PRODUCT IMAGE
              ======================================== */}

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              {/* ========================================
                  PRODUCT CONTENT
              ======================================== */}

              <div className="product-content">


                {/* NAME */}

                <h2>
                  {product.name}
                </h2>


                {/* DESCRIPTION */}

                <p>
                  {product.description ||
                    `Delicious ${product.name.toLowerCase()}.`}
                </p>


                {/* BOTTOM */}

                <div className="product-bottom">


                  {/* PRICE */}

                  <span className="product-price">
                    {product.price}
                  </span>


                  {/* ADD BUTTON */}

                  <button type="button">

                    <FaShoppingCart />

                    kg

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (


        /* ========================================
           NO PRODUCTS
        ======================================== */

        <div className="no-products">

          <h2>
            No Brownies Found 🍫
          </h2>

          <p>
            We are preparing delicious products
            for this category.
          </p>

          <Link to="/category">
            Explore Categories
          </Link>

        </div>

      )}

    </section>
  );
}


export default CategoryProducts;