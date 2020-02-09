import React from "react";
import Datatable from "react-bs-datatable";
import "../App.scss";
import "font-awesome/css/font-awesome.min.css";
import moment from "moment";

const client = require("../services/connection.js");
const indexName = "doc-index-01";
let payload;

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: []
    };

    this.header = [
      { title: "Name", prop: "filename", sortable: true, filterable: true }
    ];
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
      function (resp) {
        console.log(resp.hits);
        that.setState({
          dataList: resp.hits.hits
        });
      },
      function (err) {
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
    const header = [
      { title: 'File Name', prop: 'filename', sortable: true },
      { title: 'Category', prop: 'category' },
      { title: 'Submitted On', prop: 'create_date' },
      { title: 'Perview', prop: 'content' },
      { title: 'Action', prop: 'action' }
    ];

    const body = this.state.dataList.map(item => {
      return {
        filename: item._source.filename,
        category: 'Submission',
        create_date: moment(item._source.create_date).format("DD-MM-YYYY"),
        content: `${item._source.content}...`,
        action: <a href='#'>Go to</a>
      }
    })

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
        <div className="table-responsive">
        </div>
        <Datatable
          tableHeaders={header}
          tableBody={body}
          tableClassName="striped hover responsive"
        />
      </div>
    );
  }
}
