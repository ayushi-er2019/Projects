import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import "./ListApp.css";
import InfiniteScroll from "react-infinite-scroll-component";

function ListApp() {
  const [cardList, setCardList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (page < 4) {
        setPage(page + 1);
      }
    } else if (scrollTop <= scrollHeight) {
      if (page < 1) {
        setPage(1);
      } else if (page > 1) {
        setPage(page - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [cardList]);

  async function fetchData(page) {
    try {
      const apiUrl = `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=`;
      console.log("page no value== " + page);
      const response = await fetch(apiUrl + (page ? page : 1));
      const jsonData = await response.json();
      if (jsonData.data.recruits) {
        setCardList(jsonData.data.recruits);
      }
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  return (
    <div className="list-app">
      <InfiniteScroll dataLength={cardList.length} next={fetchData(page)}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 32%)",
            justifyContent: "space-between",
            rowGap: "20px",
          }}
        >
          {cardList.map((list) => {
            return <List key={list.id} list={list} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default ListApp;
