import React, { Component } from "react";
import ProductRow from "./ProductRow";
import "../App.css";


class ProdcutTable extends Component {
  render() {
    const { products, checked } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>InStock</th>
          </thead>
          <tbody>
            {products.map((eachProduct, index) => {
              if(checked) {
                if(eachProduct.stocked) {
              return <ProductRow key={index} eachProduct={eachProduct} />;
                }
              } else return <ProductRow key={index} eachProduct={eachProduct} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProdcutTable;

