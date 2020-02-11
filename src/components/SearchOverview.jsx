import React, { useState, useEffect, createRef } from "react";
import Datatable from "react-bs-datatable";
import "../App.scss";
import "font-awesome/css/font-awesome.min.css";
import moment from "moment";

const client = require("../services/connection.js");
const indexName = "doc-index-01";
let payload;

const SearchOverview = () => {
  const [dataList, setDataList] = useState([]);
  const inputField = createRef();

  useEffect(() => {
    getElasticSearchData();
  }, []);

  // TODO: service module
  /* istanbul ignore next */
  const getElasticSearchData = async (payload = "") => {
    client
      .search({
        index: indexName,
        body: payload
      })
      .then(
        (resp) => {
          // console.log(resp.hits);
          setDataList(resp.hits.hits);
        },
        (err) => {
          // console.log(err.message);
        }
      );
  };
  /* istanbul ignore next */
  const searchItems = val => {
    payload = val
      ? {
          query: {
            regexp: {
              title: {
                /* istanbul ignore next */
                value: ".*" + val + ".*",
                flags: "ALL"
              }
            }
          }
        }
      : "";
    getElasticSearchData(payload);
  };
  const handleMouseClick = () => {
    searchItems(inputField.value);
  };
  const handleKeyDown = evt => {
    if (evt.key === "Enter") {
      searchItems(evt.target.value);
    }
  };

  const header = [
    { title: "File Name", prop: "filename", sortable: true },
    { title: "Category", prop: "category" },
    { title: "Submitted On", prop: "create_date" },
    { title: "Perview", prop: "content" },
    { title: "Action", prop: "action" }
  ];

  const body = dataList.map(item => {
    return {
      filename: (
        <span title={item._source.filename}>{item._source.filename}</span>
      ),
      category: "Submission",
      create_date: moment(item._source.create_date).format("DD-MM-YYYY"),
      content: (
        <span title={`${item._source.content.substring(0, 50)}...`}>
          {item._source.content}
        </span>
      ),
      action: (
        <a href="#" className="search-overview__link">
          Go to
        </a>
      )
    };
  });

  return (
    <div className="search-overview">
      <center>
        <h3 className="search-overview__title">
          The Search Tool |
          <span className="search-overview__title-version"> V1.0</span>
        </h3>
      </center>
      <div className="input-group search-overview__header">
        <input
          type="text"
          className="form-control"
          ref={inputField}
          placeholder="Enter Search Text"
          onKeyDown={handleKeyDown}
          aria-label="Enter Search Text"
          aria-describedby="basic-addon2"
        />
        <button
          className="search-overview__input input-group-append"
          onClick={handleMouseClick}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <input
          type="button"
          className="search-overview__button"
          value="Search"
          onClick={handleMouseClick}
        />
        <label className="search-overview__label">Advanced Search</label>
      </div>
      <Datatable
        tableHeaders={header}
        tableBody={body}
        tableClassName="striped hover responsive"
      />
    </div>
  );
};

export default SearchOverview;
