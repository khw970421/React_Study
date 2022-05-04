import React from "react";
import styled, { css } from "styled-components";
import "./FixGrade.css";
import star from "./star.png";

const FixGrade = ({ percent = 70, size = 500 }) => {
  return (
    <>
      <Star size={size}>
        <Rating percent={percent} size={size}></Rating>
      </Star>
    </>
  );
};

const Star = styled.div`
  width: ${({ size }) => `${size}px`};
  display: inline-block;
  height: ${({ size }) => `${size * 0.1809}px`};
  overflow: hidden;
  background: url(${star}) no-repeat;
  background-size: ${({ size }) => `${size}px`};
`;

const Rating = styled.div`
  display: inline-block;
  height: ${({ size }) => `${size * 0.1809}px`};
  overflow: hidden;
  background: url(${star}) no-repeat;
  background-size: ${({ size }) => `${size}px`};
  width: ${({ percent }) => `${percent}%`};
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;
`;

export default FixGrade;
