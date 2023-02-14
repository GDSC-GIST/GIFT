import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as Rect } from "../../styles/s_rect.svg";

const boxVariants = {
    start: {
      opacity: 0,
      scale: 0.5,
    },
    end: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.5,
        delayChildren: 0.3,
      },
    },
  };

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const colors=["#FFE5BF","#D7BFFF","#BFE8FF"];

function Motion() {
    const [num,setNum]=useState(0);
  return (
    <div>
      {/* <Box variants={boxVariants} initial="start" animate="end"> */}
      <Box transition={{duration:3}} animate={{
    scale: [1, 1.2, 1, 1, 1, 0],
    y: [2,0,2,10,15,20]
  }} onClick={()=>setNum(num+1)} >
        <Rect fill={colors[0]}></Rect>
        <h1>{num}</h1>
      </Box>
    </div>
  );
};

export default Motion;