import React, {Component} from 'react'

class ProductRow extends Component {

  render() { 

    const {name, price, stocked} = this.props.eachProduct
    const nameStyle = stocked ? { color: 'black' } : { color: 'red' };

    return ( 
      <tr>
        <td style={nameStyle}>{name}</td>
        <td>{price}</td>
        <td> {stocked ? 'Yes' : 'No'} </td>
      </tr>


     );
  }
}
 
export default ProductRow;