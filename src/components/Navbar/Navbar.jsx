import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUtensils,
  FaBars,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";


function Navbar() {

  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(false);


  /* ========================================
     SEARCH FUNCTION
  ======================================== */

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    // Don't navigate when empty
    if (!value.trim()) {
      return;
    }

    // Send search text to Category page
    navigate(
      `/category?search=${encodeURIComponent(value)}`
    );

  };


  /* ========================================
     CLOSE SEARCH
  ======================================== */

  const closeSearch = () => {

    setSearchOpen(false);
    setSearch("");

  };


  /* ========================================
     ANIMATIONS
  ======================================== */

  const sidebarVariants = {

    hidden: {
      x: "-100%",
    },

    visible: {
      x: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },

    exit: {
      x: "-100%",

      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },

  };


  const overlayVariants = {

    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.3,
      },
    },

    exit: {
      opacity: 0,

      transition: {
        duration: 0.25,
      },
    },

  };


  const linksContainerVariants = {

    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08,
      },
    },

  };


  const linkVariants = {

    hidden: {
      opacity: 0,
      x: -30,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.3,
      },
    },

  };


  const logoVariants = {

    hidden: {
      opacity: 0,
      x: -20,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.5,
      },
    },

  };


  return (

    <>

      {/* ========================================
          NAVBAR
      ======================================== */}

      <nav className="navbar">


        {/* ========================================
            LOGO
        ======================================== */}

        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >

          <NavLink
            to="/"
            className="logo"
            onClick={closeSearch}
          >

            <FaUtensils />

            <span>
              Tempting World
            </span>

          </NavLink>

        </motion.div>


        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

        <div className="nav-links">

          <NavLink
            to="/brownie"
            end
            onClick={closeSearch}
          >
            Home
          </NavLink>

          <NavLink
            to="/category"
            onClick={closeSearch}
          >
            Category
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeSearch}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeSearch}
          >
            Contact
          </NavLink>

        </div>


        {/* ========================================
            RIGHT ICONS
        ======================================== */}

        <div className="nav-icons">


          {/* ========================================
              SEARCH
          ======================================== */}

          <motion.div

            className={`search-container ${
              searchOpen ? "search-open" : ""
            }`}

            animate={{
              width: searchOpen ? 220 : 40,
            }}

            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}

          >

            <AnimatePresence>

              {searchOpen && (

                <motion.input

                  type="text"

                  placeholder="Search brownies..."

                  value={search}

                  onChange={handleSearch}

                  autoFocus

                  initial={{
                    opacity: 0,
                    width: 0,
                  }}

                  animate={{
                    opacity: 1,
                    width: "100%",
                  }}

                  exit={{
                    opacity: 0,
                    width: 0,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                />

              )}

            </AnimatePresence>


            {/* SEARCH / CLOSE BUTTON */}

            <motion.button

              type="button"

              className="search-button"

              onClick={() => {

                if (searchOpen) {

                  closeSearch();

                } else {

                  setSearchOpen(true);

                }

              }}

              aria-label="Search"

              whileHover={{
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.9,
              }}

            >

              <AnimatePresence mode="wait">

                {searchOpen ? (

                  <motion.span
                    key="close"

                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}

                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}

                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >

                    <FaTimes />

                  </motion.span>

                ) : (

                  <motion.span
                    key="search"

                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}

                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}

                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >

                    <FaSearch />

                  </motion.span>

                )}

              </AnimatePresence>

            </motion.button>

          </motion.div>


          {/* ========================================
              HAMBURGER
          ======================================== */}

          <motion.button

            type="button"

            className="menu-button"

            onClick={() =>
              setSidebarOpen(true)
            }

            aria-label="Open menu"

            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.9,
            }}

          >

            <FaBars />

          </motion.button>


        </div>

      </nav>


      {/* ========================================
          SIDEBAR + OVERLAY
      ======================================== */}

      <AnimatePresence>


        {/* OVERLAY */}

        {sidebarOpen && (

          <motion.div

            className="sidebar-overlay"

            variants={overlayVariants}

            initial="hidden"

            animate="visible"

            exit="exit"

            onClick={() =>
              setSidebarOpen(false)
            }

          />

        )}


        {/* SIDEBAR */}

        {sidebarOpen && (

          <motion.aside

            className="sidebar"

            variants={sidebarVariants}

            initial="hidden"

            animate="visible"

            exit="exit"

          >


            {/* SIDEBAR HEADER */}

            <div className="sidebar-header">


              <motion.div

                className="sidebar-logo"

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: 0.25,
                  duration: 0.4,
                }}

              >

                <FaUtensils />

                <span>
                  Tempting World
                </span>

              </motion.div>


              <motion.button

                type="button"

                className="sidebar-close"

                onClick={() =>
                  setSidebarOpen(false)
                }

                aria-label="Close menu"

                whileHover={{
                  rotate: 90,
                  scale: 1.1,
                }}

                whileTap={{
                  scale: 0.85,
                }}

              >

                <FaTimes />

              </motion.button>

            </div>


            {/* SIDEBAR LINKS */}

            <motion.div

              className="sidebar-links"

              variants={linksContainerVariants}

              initial="hidden"

              animate="visible"

            >

              <motion.div variants={linkVariants}>

                <NavLink
                  to="/brownie"
                  end
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                >
                  Home
                </NavLink>

              </motion.div>


              <motion.div variants={linkVariants}>

                <NavLink
                  to="/category"
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                >
                  Category
                </NavLink>

              </motion.div>


              <motion.div variants={linkVariants}>

                <NavLink
                  to="/about"
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                >
                  About
                </NavLink>

              </motion.div>


              <motion.div variants={linkVariants}>

                <NavLink
                  to="/contact"
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                >
                  Contact
                </NavLink>

              </motion.div>

            </motion.div>

          </motion.aside>

        )}

      </AnimatePresence>

    </>

  );

}


export default Navbar;