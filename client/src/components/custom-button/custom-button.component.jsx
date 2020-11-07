import React from "react";
import {CumstomButtonContainer} from "./custom-buttons.styles";

const CustomButton = ({ children, ...props}) => (
    <CumstomButtonContainer {...props}>
        {children}
    </CumstomButtonContainer>
);

export default CustomButton;
