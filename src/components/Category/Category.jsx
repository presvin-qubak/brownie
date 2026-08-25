import { NavLink, useSearchParams } from "react-router-dom";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

import basicBrownie from "../../assets/basic-brownie.avif";
import premiumBrownie from "../../assets/premium-brownie.avif";
import trendingBrownie from "../../assets/trending-brownie.avif";
import healthyBrownie from "../../assets/healthy-brownie.avif";
import luxuryBrownie from "../../assets/luxury-brownie.avif";
import blondie from "../../assets/classic-blondie.webp";
import brownieCupcake from "../../assets/brownie-cupcake.webp";
import miniBox from "../../assets/mini-classic-box.avif";
import cookieBrownie from "../../assets/chocolate-cookie-brownie.webp";

import "./Category.css";


/* ========================================
   CATEGORY DATA
======================================== */

const categories = [

  {
    id: 1,
    name: "Basic",
    description: "Delicious brownies for everyday cravings",
    image: basicBrownie,
  },

  {
    id: 2,
    name: "Premium",
    description:
      "Rich and indulgent brownies made for special moments",
    image: premiumBrownie,
  },

  {
    id: 3,
    name: "Trending",
    description:
      "Our most loved and popular brownie creations",
    image: trendingBrownie,
  },

  {
    id: 4,
    name: "Healthy",
    description:
      "A lighter way to enjoy your favorite treats",
    image: healthyBrownie,
  },

  {
    id: 5,
    name: "Luxury",
    description:
      "Elegant brownies crafted for a luxurious experience",
    image: luxuryBrownie,
  },

  {
    id: 6,
    name: "Blondie Variety",
    description:
      "Golden blondies with delicious flavors",
    image: blondie,
  },

  {
    id: 7,
    name: "Brownie Cupcakes",
    description:
      "Soft brownie goodness in a cupcake style",
    image: brownieCupcake,
  },

  {
    id: 8,
    name: "Mini Box Brownies",
    description:
      "Small boxes packed with delicious brownie bites",
    image: miniBox,
  },

  {
    id: 9,
    name: "Cookie Brownies",
    description:
      "The perfect combination of cookies and brownies",
    image: cookieBrownie,
  },

];


/* ========================================
   ANIMATION VARIANTS
======================================== */

const headingVariants = {

  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {

    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },

  },

};


const gridVariants = {

  hidden: {},

  visible: {

    transition: {
      staggerChildren: 0.12,
    },

  },

};


const cardVariants = {

  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {

    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },

  },

};


/* ========================================
   CATEGORY COMPONENT
======================================== */

function Category() {

  /* ========================================
     READ SEARCH QUERY
  ======================================== */

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";


  /* ========================================
     FILTER CATEGORIES
  ======================================== */

  const filteredCategories = categories.filter((category) => {

    const searchText = search.toLowerCase().trim();

    if (!searchText) {
      return true;
    }

    return (

      category.name
        .toLowerCase()
        .includes(searchText)

      ||

      category.description
        .toLowerCase()
        .includes(searchText)

    );

  });


  return (

    <section className="category">


      {/* ========================================
          HEADING
      ======================================== */}

      <motion.div

        className="category-heading"

        variants={headingVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.3,
        }}

      >

        <p>
          🍫 TEMPTING WORLD
        </p>


        <h2>

          {search ? (
            <>
              Search <span>Results</span>
            </>
          ) : (
            <>
              Explore Our <span>Categories</span>
            </>
          )}

        </h2>


        <p className="category-description">

          {search
            ? `Showing results for "${search}"`
            : "Discover a tempting collection of brownies created for every mood, craving, and occasion."
          }

        </p>

      </motion.div>


      {/* ========================================
          SEARCH RESULT
      ======================================== */}

      {search && (

        <motion.div

          className="category-search-info"

          initial={{
            opacity: 0,
            y: -10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

        >

          <FaSearch />

          <span>
            Searching for:
          </span>

          <strong>
            {search}
          </strong>

        </motion.div>

      )}


      {/* ========================================
          CATEGORY GRID
      ======================================== */}

      {filteredCategories.length > 0 ? (

        <motion.div

          className="category-grid"

          variants={gridVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.15,
          }}

        >

          {filteredCategories.map((category) => {

            const categorySlug = category.name
              .toLowerCase()
              .replace(/\s+/g, "-");


            return (

              <motion.div

                key={category.id}

                variants={cardVariants}

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                transition={{
                  duration: 0.3,
                }}

              >

                <NavLink

                  to={`/category/${categorySlug}`}

                  className="category-card"

                >


                  {/* ========================================
                      IMAGE
                  ======================================== */}

                  <div className="category-image">

                    <img
                      src={category.image}
                      alt={category.name}
                    />

                  </div>


                  {/* ========================================
                      CONTENT
                  ======================================== */}

                  <div className="category-content">

                    <h3>
                      {category.name}
                    </h3>


                    <p>
                      {category.description}
                    </p>


                    <span className="category-button">

                      Explore

                      <FaArrowRight />

                    </span>

                  </div>


                </NavLink>

              </motion.div>

            );

          })}

        </motion.div>

      ) : (

        /* ========================================
           NO RESULTS
        ======================================== */

        <motion.div

          className="no-results"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

        >

          <div className="no-results-icon">
            🍫
          </div>

          <h3>
            No Brownies Found
          </h3>

          <p>
            We couldn&apos;t find anything matching
            <strong> &quot;{search}&quot;</strong>.
          </p>

          <NavLink
            to="/category"
            className="clear-search"
          >
            View All Categories
          </NavLink>

        </motion.div>

      )}

    </section>

  );

}


export default Category;