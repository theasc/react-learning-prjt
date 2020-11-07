import React from "react";
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, OptionsContainer, OptionDiv, OptionLink, LogoContainer} from "./header.styles";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <OptionLink to="/" >
            <LogoContainer />
        </OptionLink>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as={'div'} onClick={signOutStart}>Sign Out</OptionLink>
                    :
                    <OptionLink className='option' to='/signin' >Sign In</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {!hidden && <CartDropdownContainer />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
