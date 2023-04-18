import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0025.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import BMK from "../img/logos/BMK_transparent.png";
import MusikFonds from "../img/logos/MusikFonds_transparent.png";
import NeuStartKultur from "../img/logos/NeuStartKultur_transparent_bw.png";
import allLogos from "../img/logos/allLogos.png";
const Credits = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="m-10 flex-1 pt-8 pb-8 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="mt-20 text-2xl lg:text-4xl font-bold mb-4">
              Installation
            </h1>
            <p className="text-sm lg:text-base mb-6">
              Experience an immersive audio-visual installation exploring
              climate change through experimental, electronic, ambient, and
              noise genres.
              <br />
              Listen to Dynamic Systems EP on Bandcamp here
              <a
                href="http://www.bandcamp.com"
                target="_blank"
                className="pl-2 mr-4"
              >
                <FontAwesomeIcon icon={faBandcamp} className="text-2xl" />
              </a>
              <br /> <br />
              Music Production and Programming: Three Amps <br />
              Scientific Data: Lukrecia Štulić <br />
              Max/MSP guidance: Michael Begg | Omnempathy
              <br />
              Mastering: Shun Nakamura <br />
              Website, Visual, Max/MSP consulting: Marco Accardi |{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.anecoica.net/"
              >
                Anecoica studio
              </a>{" "}
              <br />
              Antarctica Photography: Camila Campos <br />
              Antarctica Audio Recording: Corina Peter
              <br />
              Special thanks to TSOP and Jordi Colombi
              <br /> <br />
              {/* <div className="flex items-center space-between"> */}
              {/* <a
                  href="http://www.bandcamp.com"
                  target="_blank"
                  className="mr-4"
                >
                  <FontAwesomeIcon icon={faBandcamp} className="text-2xl" />
                </a> */}
              <div className=" flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/three_amps/"
                  target="_blank"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <img src={allLogos} alt="Logo 2" width="250" height="250" />
                {/* <img
                    src={NeuStartKultur}
                    alt="Logo 3"
                    width="60"
                    height="60"
                  />
                  <img src={BMK} alt="Logo 1" width="150" height="150" /> */}
              </div>
              {/* </div> */}
              <br />
              Click on ENTER to dive into the vulnerability and crisis of our
              environment and human spirit.
            </p>

            <Link to={"/installation"} className="btn">
              Enter
            </Link>
          </motion.div>
          {/* image */}
          <div className="w-full absolute inset-0 flex items-center justify-center opacity-40">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="h-full w-full object-cover overflow-hidden "
            >
              <motion.img
                // whileHover={{ scale: 1. }}
                // transition={transition1}
                src={WomanImg}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Credits;
