import React from "react";
import {createStructuredSelector} from "reselect";
import { connect } from 'react-redux';
import {compose} from "redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from "react-router-dom";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

const CartDropdownContainer = compose(
    withRouter,
    connect(mapStateToProps),
)(CartDropdown);

export default CartDropdownContainer;
