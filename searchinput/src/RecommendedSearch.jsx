import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

function RecommendedSearch({
  items = [],
  keyword = "",
  selected,
  handleLoading,
  changeKeyword,
}) {
  const clickKeyword = ({ target }) => {
    changeKeyword(target.innerText);
  };
  return (
    <>
      {handleLoading ? (
        <SearchResultList>
          <Recommend>검색 중..</Recommend>
        </SearchResultList>
      ) : items.length > 0 ? (
        <SearchResultList>
          <Recommend>추천 검색어</Recommend>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={index === selected ? "selected" : ""}
                tabIndex="0"
                onClick={clickKeyword}
              >
                <IoIosSearch color="black" size="20px" />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </SearchResultList>
      ) : keyword === "" ? null : (
        <SearchResultList>
          <Recommend>검색어 없음</Recommend>
        </SearchResultList>
      )}
    </>
  );
}

const Recommend = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #919191;
  margin: 0px;
`;

const SearchResultList = styled.div`
  background-color: #ffffff;
  max-width: 700px;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid;
  ul {
    padding: 0px;
    li {
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 10px 0;

      &.selected {
        background-color: #eee;
      }
      :first-child {
        margin-top: 10px;
      }
      :hover {
        cursor: pointer;
        background-color: #eee;
      }

      p {
        margin-left: 10px;
      }
    }
  }
`;

export default RecommendedSearch;
