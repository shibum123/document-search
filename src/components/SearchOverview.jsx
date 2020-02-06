import React from "react";
import "../App.scss";
import "font-awesome/css/font-awesome.min.css";
import moment from "moment";

const client = require("../services/connection.js");
const indexName = "doc-index-01";
let payload;

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);;

    this.state = {
      dataList: []
    };
  }

  componentDidMount() {
    this.getElasticSearchData();
  }
  getElasticSearchData = (payload = "") => {
    var that = this;
    client
      .search({
        index: indexName,
        body: payload
      })
      .then(
        function(resp) {
          console.log(resp.hits);
          that.setState({
            dataList: resp.hits.hits
          });
        },
        function(err) {
          console.log(err.message);
        }
      );
  };
  searchItems = val => {
    payload = val
      ? {
          query: {
            regexp: {
              title: {
                value: ".*" + val + ".*",
                flags: "ALL"
              }
            }
          }
        }
      : "";
    this.getElasticSearchData(payload);
  };
  handleMouseClick = () => {
    this.searchItems(this.refs["inputField"].value);
  };
  handleKeyDown = evt => {
    if (evt.key === "Enter") {
      this.searchItems(evt.target.value);
    }
  };

  render() {
    return (
      <div className="search-overview">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <center>
              <h3 className="main-title">The Search Tool | V1.0</h3>
            </center>
            <div className="input-group search-overview__header">
              <input
                type="text"
                className="form-control"
                ref="inputField"
                placeholder="Enter Search Text"
                onKeyDown={this.handleKeyDown}
                aria-label="Enter Search Text"
                aria-describedby="basic-addon2"
              />
              <button
                className="search-overview__input input-group-append"
                onClick={this.handleMouseClick}
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <input
                type="button"
                className="search-overview__button"
                value="Search"
                onClick={this.handleMouseClick}
              />
              <label className="search-overview__label">Advanced Search</label>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="search-overview__container">
            <label className="search-overview__item-header">File Name</label>
            <label className="search-overview__item-header">Category</label>
            <label className="search-overview__item-header">Submitted On</label>
            <label className="search-overview__item-header-contents">
              Preview
            </label>
            <label className="search-overview__item-header">Action</label>
          </div>
          {this.state.dataList.map(item => (
            <div key={"div_" + item._id} className="search-overview__container">
              <label className="search-overview__item">{`${item._source.filename.substr(
                0,
                10
              )}...`}</label>
              <label className="search-overview__item">Submission</label>
              <label className="search-overview__item">
                {moment(item._source.create_date).format("DD-MM-YYYY")}
              </label>
              <label className="search-overview__item-contents">{`${item._source.content.substr(
                0,
                120
              )}...`}</label>
              <label className="search-overview__item">Go to</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
