import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.23, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <motion.div className="container" exit="exit" transition={transition}>
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="frame">
                <Link to={`/model/mohammed-umer`}>
                  <ProgressiveImage
                    src={require("../images/yasmeen.webp")}
                    placeholder={require("../images/compressed-image.jpg")}
                  >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt="Yasmeen Tariq"
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">Mohammed Umer</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  </>
);

export default Home;
