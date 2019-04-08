import React, { Component } from "react";
import fileData from "../data.json";
import "../App.css";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProdctTable extends Component {
  state = {
    products: fileData.data,
    filteredProducts: fileData.data,
    query: "",
    checked: false
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }

  handleSearch = e => {
    const { products } = this.state;
    const value = e.target.value;

    this.setState({ query: value });

    const newFilteredProducts = products.filter(eachProduct =>
      eachProduct.name.includes(value)
    );

    this.setState({ filteredProducts: newFilteredProducts });
  };

  handleCheckBox = () => {
    const { checked } = this.state;

    this.setState({
      checked: !checked
    });
  };

  render() {
    const { products, query, filteredProducts, checked } = this.state;
    // console.log(products)
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar handleSearch={this.handleSearch} handleCheckBox={this.handleCheckBox}/>
        <ProductTable products={query.length ? filteredProducts : products} checked={checked}/>
      </div>
    );
  }
}

export default FilterableProdctTable;
