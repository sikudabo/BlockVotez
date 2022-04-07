/**
 * React component that displays a top Banner on a page with text. 
 */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { sizeBreakpoints } from '../utils';
import { TopPageBannerProps } from '../typings/types';

const cssFunction = ({ img }: { img: any }) => {
    return css`
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: darken;
        text-align: center;
        margin: 0;
        width: 100%;
        padding-top: 50px;
    `;
}

const PageContainer = styled.div`
    margin-top: 50px;
    width: 100%;
`

const BackgroundBannerImage = styled.div`
    height: 550px;
    max-width: 100%;
    @media (min-width: ${sizeBreakpoints.laptop}) {
        padding-top: 20px;
    }
    @media (max-width: ${sizeBreakpoints.tablet}) {
        height: 200px;
    }

    .header-text-container {
        margin-top: 500px;
    }

    .header-text {
        color: rgb(255, 255, 255);
        font-size: 30px;
        font-weight: 700;
        margin-top: 100px;

        @media (min-width: ${sizeBreakpoints.laptop}) {
            font-size: 60px;
        }
    }

    .body-text {
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 700px;

        @media (min-width: ${sizeBreakpoints.laptop}) {
            font-size: 40px;
        }
    }

    ${cssFunction}
`;

export default function TopPageBanner({ img, headerText, bodyText }: TopPageBannerProps) {
    return (
        <PageContainer>
            <BackgroundBannerImage img={img}>
                <div className='header-texxt-container'>
                    <p className='header-text'>
                        {headerText}
                    </p>
                </div>
                <p className='body-text'>
                    {bodyText}
                </p>
            </BackgroundBannerImage>
        </PageContainer>
    );
}
