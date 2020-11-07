import React from 'react';
import MenuItem from "../menu-item/menu-item.component";
import { connect } from 'react-redux';

import './directory.style.scss';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";

const DirectoryComponent = ({sections}) => ({
    render() {
        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProp}) => <MenuItem key={id} {...otherSectionProp} />)
                }
            </div>
        );
    }
});

const mapStateToProps =  createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryComponent);
