import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0013.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const Reference = () => {
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
            <h1 className="mt-20 text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
              Resources
            </h1>
            <p className="text-sm lg:text-base mb-6 text-gray-800">
              Model data FESOM sea-ice production for the southern Weddell Sea,
              2002-2017 by Štulić et al., 2023 can be accessed at{" "}
              <a
                target="_blank"
                className="underline"
                href="https://zenodo.org/record/7761156"
              >
                this link
              </a>
              <br /> <br />
              Additional information: <br />
              model: FESOM{" "}
              <a className="underline" target="_blank" href="https://fesom.de/">
                https://fesom.de/
              </a>
              <br />
              polar icebreaker Polarstern:{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.awi.de/en/expedition/research-vessel-and-cutter/polarstern.html"
              >
                https://www.awi.de/en/expedition/research-vessel-and-cutter/polarstern.html
              </a>
              <br />
              polar research:{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.awi.de/en/"
              >
                https://www.awi.de/en/
              </a>
              <br />
              IPCC report 2021:{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.ipcc.ch/report/ar6/wg1/downloads/factsheets/IPCC_AR6_WGI_Regional_Fact_Sheet_Polar_regions.pdf"
              >
                https://www.ipcc.ch/report/ar6/wg1/downloads/factsheets/IPCC_AR6_WGI_Regional_Fact_Sheet_Polar_regions.pdf
              </a>
              <br />
              The Earth observatory, NASA:{" "}
              <a
                className="underline"
                target="_blank"
                href="https://earthobservatory.nasa.gov/world-of-change/sea-ice-antarctic"
              >
                https://earthobservatory.nasa.gov/world-of-change/sea-ice-antarctic
              </a>
              <br />
            </p>
            <Link to={"/credits"} className="btn">
              next
            </Link>
          </motion.div>
          {/* image */}
          <div className="h-full absolute inset-0 flex items-center justify-center opacity-60">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="h-full w-full object-cover"
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

export default Reference;
