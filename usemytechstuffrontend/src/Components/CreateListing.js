import React, { useState } from "react";
import { connect } from "react-redux";
import { postOwner} from "../Actions/ownerActions";
const initialFormValues = {
  product_name: "",
  description: "",
  price: "",
};

const CreateListing = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.postOwner();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Product Name
          <input
            type="text"
            name="product_name"
            onChange={onChange}
            value={formValues.product_name}
            placeholder="Product Name"
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            onChange={onChange}
            value={formValues.description}
            placeholder="Description"
          ></input>
        </label>
        <label>
          Price
          <input
            type="text"
            name="price"
            onChange={onChange}
            value={formValues.price}
            placeholder="Price"
          ></input>
        </label>
        <label>
          Image
          <input
            type="text"
            name="image"
            onChange={onChange}
            value={formValues.image}
            placeholder="Image"
          ></input>
        </label>
        <button>Submit Listing</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    owner: state.owner.owner,
  };
};

export default connect(mapStateToProps, {postOwner})(CreateListing);
