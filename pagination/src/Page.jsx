import React, { useState, useRef } from "react";
import { getRepository } from "./axios";
import RoadJibunAddress from "./RoadJibunAddress";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Page = ({
  clickAddress = (address) => {
    console.log("선택된 address 정보 제공", address);
  },
  currentPage = 1,
  countPerPage = 5,
  paginationCount = 5,
}) => {
  const refContainer = useRef(1);
  const [inputValue, setInputValue] = useState("");
  const [searchAddressArr, setSearchAddressArr] = useState([]);
  const [searchTotalCount, setSearchTotalCount] = useState(0);
  const [apiMesseage, setApiMessage] = useState("");
  const [paginationCountState, setPaginationCountState] = useState([]);

  // Input onChange 및 KeyPress 이벤트
  const changeValue = ({ target }) => {
    setInputValue(target.value);
  };

  const checkEnter = async ({ code }) => {
    if (code === "Enter") {
      const totalCount = await searchAPI(inputValue, currentPage, countPerPage);
      refContainer.current = currentPage;
      setPaginationCountState(checkFirstCountPage(totalCount));
    }
  };

  const checkFirstCountPage = (count) => {
    if (count <= paginationCount * countPerPage) {
      // 할수있는 페이지만큼 생성
      return Array.from(
        { length: Math.ceil(count / countPerPage) },
        (_, i) => i + 1
      );
    } else {
      return Array.from({ length: paginationCount }, (_, i) => i + 1);
    }
  };

  // 주소 api 가져와서 처리
  const searchAPI = async (target, currentPage, countPerPage) => {
    const res = await getRepository(target, currentPage, countPerPage);
    const filterObj = JSON.parse(res.slice(1, res.length - 1))?.results?.juso;
    const totalCount = JSON.parse(res.slice(1, res.length - 1))?.results?.common
      ?.totalCount;
    setSearchTotalCount(totalCount);
    setApiMessage(
      JSON.parse(res.slice(1, res.length - 1))?.results?.common?.errorMessage
    );
    if (
      JSON.parse(res.slice(1, res.length - 1))?.results?.common
        ?.errorMessage !== "정상"
    ) {
      alert(
        JSON.parse(res.slice(1, res.length - 1))?.results?.common?.errorMessage
      );
    } else {
      setSearchAddressArr(filterObj || []);
    }
    return totalCount;
  };

  // 페이지 숫자 선택시 해당 ref로 refContainer 변경 및 searchAPI 재시작
  const clickIdx = (e) => {
    refContainer.current = Number(e.target.id);
    searchAPI(inputValue, refContainer.current, countPerPage);
  };

  const findLeft = () => {
    if (paginationCountState[0] !== 1) {
      refContainer.current = paginationCountState[0] - paginationCount;
      searchAPI(inputValue, refContainer.current, countPerPage);

      // 현재 위치에서부터 이전껏은 무조건 5개를 만족시키니 Array.from으로 5개 적용
      setPaginationCountState(
        Array.from(
          { length: paginationCount },
          (_, i) => refContainer.current + i
        )
      );
    } else {
      alert("첫번째 페이지입니다.");
    }
  };
  const findRight = () => {
    // 페이지네이션의 마지막 IDX에서 countPerPage를 곱한 것보다 전체 TotalCount가 크다면 그 이후가 존재하므로 if문 실행
    // TotalCount가 작다면 그 이후가 더 존재하지 않으므로 else문 alert 실행
    if (
      paginationCountState[paginationCountState.length - 1] * countPerPage <
      Number(searchTotalCount)
    ) {
      refContainer.current = paginationCountState[0] + paginationCount;
      searchAPI(inputValue, refContainer.current, countPerPage);

      // 5개의 배열중에서 마지막 페이지 전체 Math.ceil(count/5) 를 한 것보다 작거나 같은 것들만 처리
      setPaginationCountState(
        Array.from(
          { length: paginationCount },
          (_, i) => refContainer.current + i
        ).filter((val) => val <= Math.ceil(searchTotalCount / paginationCount))
      );
    } else {
      alert("마지막 페이지입니다.");
    }
  };
  return (
    <>
      <DetailInput
        placeholder={"🔍 주소 또는 건물명으로 검색"}
        onKeyPress={checkEnter}
        onChange={changeValue}
        value={inputValue}
      />
      {searchAddressArr.map((road) => (
        <RoadJibunAddress
          key={road.bdMgtSn}
          roadAddr={road.roadAddr}
          jibunAddr={road.jibunAddr}
          zipNo={road.zipNo}
          click={() => {
            clickAddress(road);
          }}
        />
      ))}
      {searchAddressArr.length !== 0 && (
        <SearchCountContainer>
          <FaArrowLeft onClick={findLeft} />
          {paginationCountState.map((val, idx) => (
            <SearchCount
              key={idx}
              id={val}
              onClick={clickIdx}
              isBold={refContainer.current === val}
            >
              {val}
            </SearchCount>
          ))}
          <FaArrowRight onClick={findRight} />
        </SearchCountContainer>
      )}
      {apiMesseage !== "" && searchAddressArr.length === 0 && (
        <div> 검색 결과가 없습니다.</div>
      )}
    </>
  );
};

const DetailInput = styled.input`
  width: 320px;
  height: 48px;
  padding: 14px;
  box-sizing: border-box;
  margin: 4px 16px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
`;

const SearchCountContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchCount = styled.div`
  margin: 0px 8px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-size: ${({ isBold }) => (isBold ? "18px" : "14px")};
`;

export default Page;
