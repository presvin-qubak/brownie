import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Footer.css";

function Footer() {

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
        staggerChildren: 0.15,
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


  const socialVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 20,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };


  return (
    <footer className="footer">

      {/* ========================================
          FOOTER TOP
      ======================================== */}

      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >

        {/* ========================================
            BRAND
        ======================================== */}

        <motion.div
          className="footer-brand"
          variants={itemVariants}
        >

          <motion.h2
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            Tempting <span>World</span>
          </motion.h2>


          <p>
            A tempting world of delicious brownies,
            irresistible flavors, and sweet moments
            made with love.
          </p>


          {/* Social Media */}

          <motion.div
            className="footer-social"
            variants={containerVariants}
          >

            <motion.a
              href="#"
              aria-label="Instagram"
              variants={socialVariants}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FaInstagram />
            </motion.a>


            <motion.a
              href="#"
              aria-label="Facebook"
              variants={socialVariants}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FaFacebookF />
            </motion.a>


            <motion.a
              href="#"
              aria-label="WhatsApp"
              variants={socialVariants}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FaWhatsapp />
            </motion.a>

          </motion.div>

        </motion.div>


        {/* ========================================
            QUICK LINKS
        ======================================== */}

        <motion.div
          className="footer-links"
          variants={itemVariants}
        >

          <h3>Quick Links</h3>

          <motion.div
            whileHover={{ x: 5 }}
          >
            <Link to="/">
              Home
            </Link>
          </motion.div>


          <motion.div
            whileHover={{ x: 5 }}
          >
            <Link to="/category">
              Category
            </Link>
          </motion.div>


          <motion.div
            whileHover={{ x: 5 }}
          >
            <Link to="/about">
              About
            </Link>
          </motion.div>


          <motion.div
            whileHover={{ x: 5 }}
          >
            <Link to="/contact">
              Contact
            </Link>
          </motion.div>

        </motion.div>


        {/* ========================================
            CATEGORIES
        ======================================== */}

        <motion.div
          className="footer-links"
          variants={itemVariants}
        >

          <h3>Categories</h3>

          <motion.div whileHover={{ x: 5 }}>
            <Link to="/category/basic">
              Basic
            </Link>
          </motion.div>


          <motion.div whileHover={{ x: 5 }}>
            <Link to="/category/premium">
              Premium
            </Link>
          </motion.div>


          <motion.div whileHover={{ x: 5 }}>
            <Link to="/category/trending">
              Trending
            </Link>
          </motion.div>


          <motion.div whileHover={{ x: 5 }}>
            <Link to="/category/healthy">
              Healthy
            </Link>
          </motion.div>


          <motion.div whileHover={{ x: 5 }}>
            <Link to="/category/luxury">
              Luxury
            </Link>
          </motion.div>

        </motion.div>


        {/* ========================================
            NEWSLETTER
        ======================================== */}

        <motion.div
          className="footer-newsletter"
          variants={itemVariants}
        >

          <h3>
            Stay Tempted 🍫
          </h3>


          <p>
            Subscribe to discover new flavors,
            special offers, and tempting updates.
          </p>


          <motion.div
            className="newsletter-box"
            whileHover={{
              scale: 1.02,
            }}
          >

            <input
              type="email"
              placeholder="Your email address"
            />


            <motion.button
              type="button"
              whileHover={{
                x: 4,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FaArrowRight />
            </motion.button>

          </motion.div>

        </motion.div>

      </motion.div>


      {/* ========================================
          FOOTER BOTTOM
      ======================================== */}

      <motion.div
        className="footer-bottom"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
      >

        <p>
          © {new Date().getFullYear()} Tempting World.
          All Rights Reserved.
        </p>


        <p className="footer-made">
          Made with{" "}
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart />
          </motion.span>{" "}
          for brownie lovers
        </p>

      </motion.div>

    </footer>
  );
}

export default Footer;