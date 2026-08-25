import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./Contact.css";


function Contact() {

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
      x: -70,
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
      x: 70,
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
        staggerChildren: 0.12,
      },
    },
  };


  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="contact">


      {/* ========================================
          CONTACT HEADING
      ======================================== */}

      <motion.div
        className="contact-heading"

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
          Get In <span>Touch</span>
        </motion.h1>

        <p>
          Have a question, special request, or simply want
          to say hello? We&apos;d love to hear from you.
        </p>

      </motion.div>


      {/* ========================================
          CONTACT CONTENT
      ======================================== */}

      <div className="contact-container">


        {/* ========================================
            LEFT SIDE
        ======================================== */}

        <motion.div
          className="contact-info"

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={slideLeft}
        >

          <h2>
            Let&apos;s Talk About
            <span> Something Delicious</span>
          </h2>

          <p className="contact-text">
            Whether you have a question about our brownies,
            want to place a special order, or need help,
            our team is always happy to help.
          </p>


          {/* CONTACT ITEMS */}

          <motion.div
            variants={staggerContainer}
          >


            {/* Phone */}

            <motion.div
              className="contact-item"
              variants={itemAnimation}

              whileHover={{
                x: 6,
              }}
            >

              <motion.div
                className="contact-icon"

                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
              >
                <FaPhone />
              </motion.div>

              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>

            </motion.div>


            {/* Email */}

            <motion.div
              className="contact-item"
              variants={itemAnimation}

              whileHover={{
                x: 6,
              }}
            >

              <motion.div
                className="contact-icon"

                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
              >
                <FaEnvelope />
              </motion.div>

              <div>
                <h3>Email Us</h3>
                <p>hello@temptingworld.com</p>
              </div>

            </motion.div>


            {/* Location */}

            <motion.div
              className="contact-item"
              variants={itemAnimation}

              whileHover={{
                x: 6,
              }}
            >

              <motion.div
                className="contact-icon"

                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
              >
                <FaMapMarkerAlt />
              </motion.div>

              <div>
                <h3>Visit Us</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>

            </motion.div>


            {/* Opening Hours */}

            <motion.div
              className="contact-item"
              variants={itemAnimation}

              whileHover={{
                x: 6,
              }}
            >

              <motion.div
                className="contact-icon"

                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
              >
                <FaClock />
              </motion.div>

              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Sunday</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>

            </motion.div>

          </motion.div>

        </motion.div>


        {/* ========================================
            RIGHT SIDE - FORM
        ======================================== */}

        <motion.div
          className="contact-form"

          initial="hidden"
          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={slideRight}
        >

          <h2>
            Send Us a Message
          </h2>


          <motion.form
            variants={staggerContainer}
          >

            {/* ========================================
                NAME
            ======================================== */}

            <motion.div
              className="form-group"
              variants={itemAnimation}
            >

              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />

            </motion.div>


            {/* ========================================
                EMAIL
            ======================================== */}

            <motion.div
              className="form-group"
              variants={itemAnimation}
            >

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />

            </motion.div>


            {/* ========================================
                PHONE
            ======================================== */}

            <motion.div
              className="form-group"
              variants={itemAnimation}
            >

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
              />

            </motion.div>


            {/* ========================================
                MESSAGE
            ======================================== */}

            <motion.div
              className="form-group"
              variants={itemAnimation}
            >

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
              ></textarea>

            </motion.div>


            {/* ========================================
                SUBMIT
            ======================================== */}

            <motion.button
              type="submit"
              className="contact-submit"

              variants={itemAnimation}

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              Send Message

              <motion.span
                whileHover={{
                  x: 5,
                }}
              >
                <FaPaperPlane />
              </motion.span>

            </motion.button>

          </motion.form>

        </motion.div>

      </div>

    </section>
  );
}


export default Contact;