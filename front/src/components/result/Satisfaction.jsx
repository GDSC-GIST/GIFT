import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Good } from "../../assets/good.svg";
import { ReactComponent as Bad } from "../../assets/bad.svg";

const sizeStyle = css`
  width: 48px;
  height: 48px;
  margin: 10px;
`;
const colorStyle = css`
  ${(props) => {
    let color;
    if (!props.clicked) color = "#FFE03B";
    else if (props.status) color = "#ff6464";
    else color = "#C3C3C3";
    return css`
      fill: ${color};
      &:hover {
        fill: #ff7474;
      }
    `;
  }}
`;
const cursorEvent = css`
  ${(props) => {
    return css`
      pointer-events: ${props.clicked ? "none" : "auto"};
      cursor: ${props.clicked ? "not-allowed" : "pointer"};
    `;
  }}
`;

const SGood = styled(Good)`
  ${sizeStyle}
  ${colorStyle}
    ${cursorEvent}
`;
const SBad = styled(Bad)`
  ${sizeStyle}
  ${colorStyle}
    ${cursorEvent}
`;

function Satisfaction({ answers, result }) {
  const [state, setState] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (state) {
      pushSatisfaction(state);
    }
  }, [state]);

  function pushSatisfaction(reaction) {
    fetch("resultReaction", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        answer: answers,
        result: result,
        reaction: reaction,
      }),
    }); //reaction 1=good, 2=bad
    setClicked(true);
  }

  return (
    <div>
      <SGood
        onClick={() => {
          setState(1);
        }}
        clicked={clicked}
        status={state === 1}
      />
      <SBad
        onClick={() => {
          setState(2);
        }}
        clicked={clicked}
        status={state === 2}
      />
    </div>
  );
}

export default Satisfaction;
