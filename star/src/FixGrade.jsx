import React from "react";
import styled, { css } from "styled-components";
import "./FixGrade.css";

const FixGrade = ({ percent = 30 }) => {
  return (
    <>
      <div class="star-rating">
        <span style={{ width: `${percent}%` }}></span>
      </div>
    </>
  );
};

export default FixGrade;
