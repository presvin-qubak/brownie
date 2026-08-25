import {
  FaHeart,
  FaLeaf,
  FaAward,
  FaUsers,
  FaCheck,
} from "react-icons/fa";

import { motion } from "framer-motion";

import aboutBrownie from "../../assets/about-brownie.avif";

import "./About.css";


function About() {

  /* ========================================
     ANIMATION VARIANTS
  ======================================== */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
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


  const slideLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  const slideRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  const staggerContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
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


  return (
    <section className="about">


      {/* ========================================
          ABOUT HERO
      ======================================== */}

      <motion.div
        className="about-heading"

        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.3,
        }}

        variants={fadeUp}
      >

        <p>
          🍫 TEMPTING WORLD
        </p>

        <motion.h1
          whileHover={{
            scale: 1.02,
          }}

          transition={{
            duration: 0.2,
          }}
        >
          About <span>Us</span>
        </motion.h1>

        <p>
          A world of delicious brownies, unforgettable
          flavors, and sweet moments made with love.
        </p>

      </motion.div>


      {/* ========================================
          OUR STORY
      ======================================== */}

      <div className="about-story">


        {/* IMAGE */}

        <motion.div
          className="about-image"

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.25,
          }}

          variants={slideLeft}
        >

          <motion.img
            src={aboutBrownie}
            alt="Tempting World Brownies"

            whileHover={{
              scale: 1.04,
            }}

            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />

        </motion.div>


        {/* CONTENT */}

        <motion.div
          className="about-content"

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.25,
          }}

          variants={slideRight}
        >

          <p className="about-label">
            OUR STORY
          </p>

          <h2>
            Made With Love,
            <span> Served With Happiness</span>
          </h2>

          <p>
            At Tempting World, we believe that every brownie
            should create a moment worth remembering. What
            started with a simple love for chocolate grew into
            a passion for creating delicious and beautiful
            brownies.
          </p>

          <p>
            From classic brownies to premium creations,
            blondies, brownie cupcakes, and cookie brownies,
            every treat is carefully prepared with quality
            ingredients and plenty of love.
          </p>


          {/* FEATURES */}

          <motion.div
            className="about-features"

            variants={staggerContainer}
          >

            <motion.div
              className="about-feature"
              variants={cardAnimation}

              whileHover={{
                x: 5,
              }}
            >
              <FaCheck />
              <span>Fresh Ingredients</span>
            </motion.div>


            <motion.div
              className="about-feature"
              variants={cardAnimation}

              whileHover={{
                x: 5,
              }}
            >
              <FaCheck />
              <span>Made With Love</span>
            </motion.div>


            <motion.div
              className="about-feature"
              variants={cardAnimation}

              whileHover={{
                x: 5,
              }}
            >
              <FaCheck />
              <span>Premium Quality</span>
            </motion.div>


            <motion.div
              className="about-feature"
              variants={cardAnimation}

              whileHover={{
                x: 5,
              }}
            >
              <FaCheck />
              <span>Delicious Flavors</span>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>


      {/* ========================================
          VALUES
      ======================================== */}

      <div className="about-values">


        <motion.div
          className="about-values-heading"

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.3,
          }}

          variants={fadeUp}
        >

          <p>
            WHY TEMPTING WORLD
          </p>

          <h2>
            What Makes Us <span>Special?</span>
          </h2>

        </motion.div>


        <motion.div
          className="values-grid"

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={staggerContainer}
        >


          {/* QUALITY */}

          <motion.div
            className="value-card"
            variants={cardAnimation}

            whileHover={{
              y: -8,
            }}

            transition={{
              duration: 0.25,
            }}
          >

            <motion.div
              className="value-icon"

              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
            >
              <FaAward />
            </motion.div>

            <h3>
              Premium Quality
            </h3>

            <p>
              We choose quality ingredients to create
              brownies that taste as amazing as they look.
            </p>

          </motion.div>


          {/* FRESH */}

          <motion.div
            className="value-card"
            variants={cardAnimation}

            whileHover={{
              y: -8,
            }}

            transition={{
              duration: 0.25,
            }}
          >

            <motion.div
              className="value-icon"

              whileHover={{
                scale: 1.15,
                rotate: -5,
              }}
            >
              <FaLeaf />
            </motion.div>

            <h3>
              Fresh & Delicious
            </h3>

            <p>
              Every brownie is made with care to give you
              a fresh and unforgettable experience.
            </p>

          </motion.div>


          {/* LOVE */}

          <motion.div
            className="value-card"
            variants={cardAnimation}

            whileHover={{
              y: -8,
            }}

            transition={{
              duration: 0.25,
            }}
          >

            <motion.div
              className="value-icon"

              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
            >
              <FaHeart />
            </motion.div>

            <h3>
              Made With Love
            </h3>

            <p>
              From our kitchen to your hands, every treat
              is prepared with passion and love.
            </p>

          </motion.div>


          {/* CUSTOMERS */}

          <motion.div
            className="value-card"
            variants={cardAnimation}

            whileHover={{
              y: -8,
            }}

            transition={{
              duration: 0.25,
            }}
          >

            <motion.div
              className="value-icon"

              whileHover={{
                scale: 1.15,
                rotate: -5,
              }}
            >
              <FaUsers />
            </motion.div>

            <h3>
              Made For You
            </h3>

            <p>
              Your happiness is what inspires us to create
              new flavors and tempting experiences.
            </p>

          </motion.div>

        </motion.div>

      </div>


      {/* ========================================
          FINAL MESSAGE
      ======================================== */}

      <motion.div
        className="about-bottom"

        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.3,
        }}

        variants={fadeUp}
      >

        <motion.h2
          whileHover={{
            scale: 1.02,
          }}
        >
          Life Is Better With
          <span> Brownies 🍫</span>
        </motion.h2>

        <p>
          Explore our tempting world and discover your
          next favorite brownie.
        </p>

      </motion.div>

    </section>
  );
}


export default About;