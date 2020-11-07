import React from 'react';
import './homepage.styles.scss';
import DirectoryComponent from "../../components/directory/directory.component";
import {HomePageContainer} from "./homepage.styles";
const HomePage = () => (
    <HomePageContainer>
        <DirectoryComponent />
    </HomePageContainer>
)

export default HomePage;
