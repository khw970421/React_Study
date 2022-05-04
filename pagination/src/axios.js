import axios from "axios";

const getRepository = async (target, currentPage, countPerPage) => {
  const params = {
    keyword: target,
    currentPage,
    countPerPage,
    confmKey: process.env.REACT_APP_SERVICE_KEY,
    resultType: "json",
  };

  try {
    const response = await axios.get(`/api/addrlink/addrLinkApiJsonp.do`, {
      params,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getRepository };
