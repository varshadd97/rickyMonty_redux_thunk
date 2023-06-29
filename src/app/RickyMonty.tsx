/** @format */

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginationAction } from "./redux/action/pageAction";
import { fectEpisodeAction } from "./redux/action/episodeAction";

function RickyMonty() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const data = useSelector((state: any) => state);
  const loading = useSelector((state: any) => state?.loading);
  const error = useSelector((state: any) => state?.error);

  useEffect(() => {
    dispatch(fetchPaginationAction(currentPage));
    dispatch(fectEpisodeAction(currentPage));
  }, []);

  useEffect(() => {
    dispatch(fetchPaginationAction(currentPage));
    dispatch(fectEpisodeAction(currentPage));
  }, [currentPage]);

  if (
    data == null ||
    data == undefined ||
    data?.paginationReducer?.data == null
  ) {
    return <div>Loading...</div>;
  }

  if (data == null || data == undefined || data?.episodeReducer?.data == null) {
    return <div> episodeReducer Loading...</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    setCurrentPage((pre) => pre + 1);
  };

  return (
    <>
      <div className="mx-auto mt-4" style={{ width: "200px" }}>
        <input
          type="text"
          className="p-2 rounded-3"
          placeholder="Search Character"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid-container container ">
        {data &&
          data?.paginationReducer?.data[1]
            ?.slice(0, 6)
            ?.filter((val: any) => {
              if (val == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item: any, index: any) => {
              // console.log("item", item?.image);
              return (
                <div className="card">
                  <div className="d-flex justify-content-start bg-secondary bg-gradient text-white check">
                    <div>
                      <Image
                        src={item?.image}
                        alt="rickymonty"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="ps-3 pt-3 ">
                      <h2>{item?.name}</h2>
                      <div>
                        {" "}
                        <span
                          style={{
                            backgroundColor:
                              item?.status == "Alive"
                                ? "green"
                                : item?.status == "Dead"
                                ? "red"
                                : "lightGrey",
                            height: "15",
                            width: "15",
                            borderRadius: "25px",
                            color:
                              item?.status == "Alive"
                                ? "green"
                                : item?.status == "Dead"
                                ? "red"
                                : "lightGrey",
                            marginRight: "5px",
                          }}
                        >
                          00
                        </span>
                        status : {item?.status}
                      </div>
                      <div className="mt-2 text">Last known location : </div>
                      <div>{item?.location?.name}</div>
                      <div className="mt-2 text">First see in : </div>
                      <div>
                        {data &&
                          data?.episodeReducer?.data[1]
                            ?.slice(0, 1)
                            ?.map((itm: any) => {
                              return <span>{itm?.name}</span>;
                            })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="mx-auto mt-4" style={{ width: "200px" }}>
        <button onClick={handleClickPrevious} className="m-4 bg-light p-2">
          Previous
        </button>

        <button onClick={handleClickNext} className="bg-light p-2">
          next
        </button>
      </div>
    </>
  );
}
export default RickyMonty;
