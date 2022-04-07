import React from 'react';
import styled from '@emotion/styled';
import { TopPageBanner } from '../components';
import WorkersImage from '../media-images/WorkersTogether.jpeg';

const HomePageContainer = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
`;

export default function Home() {
    return (
        <HomePageContainer>
            <TopPageBanner 
                bodyText='Everyone should have a say'
                headerText='BlockVotez'
                img={WorkersImage} 
            />
        </HomePageContainer>
    );
}