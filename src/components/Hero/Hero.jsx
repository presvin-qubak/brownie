import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Hero.css";

import heroVideo from "../../assets/food.mp4";


function Hero() {

  /* ========================================
     ANIMATION VARIANTS
  ======================================== */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };


  const itemVariants = {
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


  return (

    <section className="hero">


      {/* ========================================
          BACKGROUND VIDEO
      ======================================== */}

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >

        <source
          src={heroVideo}
          type="video/mp4"
        />

      </video>


      {/* ========================================
          DARK OVERLAY
      ======================================== */}

      <div className="hero-overlay"></div>


      {/* ========================================
          HERO CONTENT
      ======================================== */}

      <motion.div
        className="hero-content"

        variants={containerVariants}

        initial="hidden"

        animate="visible"
      >


        {/* ========================================
            SUBTITLE
        ======================================== */}

        <motion.p
          className="hero-subtitle"
          variants={itemVariants}
        >
          🍽️ Welcome to Tempting World
        </motion.p>


        {/* ========================================
            HEADING
        ======================================== */}

        <motion.h1 variants={itemVariants}>

          Taste the{" "}

          <span>
            Temptation
          </span>

        </motion.h1>


        {/* ========================================
            DESCRIPTION
        ======================================== */}

        <motion.p
          className="hero-description"
          variants={itemVariants}
        >
          Discover delicious food, explore amazing
          flavors, and enjoy a world of unforgettable
          tastes.
        </motion.p>


        {/* ========================================
            BUTTONS
        ======================================== */}

        <motion.div
          className="hero-buttons"
          variants={itemVariants}
        >


          {/* ========================================
              PRIMARY BUTTON
          ======================================== */}

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.96,
            }}
          >

            <Link
              to="/category"
              className="primary-btn"
            >

              Explore Food

              <motion.span
                whileHover={{
                  x: 5,
                }}
              >

                <FaArrowRight />

              </motion.span>

            </Link>

          </motion.div>


          {/* ========================================
              SECONDARY BUTTON
          ======================================== */}

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.96,
            }}
          >

            <Link
              to="/about"
              className="secondary-btn"
            >

              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                }}

                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <FaPlay />

              </motion.span>

              Discover More

            </Link>

          </motion.div>


        </motion.div>


      </motion.div>


    </section>
  );
}


export default Hero;