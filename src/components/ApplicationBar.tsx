import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AppBar, Toolbar } from '@mui/material';
import BlockVotezIcon from './BlockVotezIcon';
import { ApplicationBarProps } from '../typings/types';
import { deviceBreakpoints } from '../utils';

/**
 * 
 * @param backgroundColor The optional background color styling.
 * @returns CSS styling for the application bar
 */

const cssFunction = ({ backgroundColor }: ApplicationBarProps) => {
    return css`
        background-color: ${backgroundColor ? backgroundColor : 'rgb(255, 255, 255)'};

        .site-link {
            color: ${backgroundColor ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
        }
    `;
}

/**
 * Custom styles for the Material UI AppBar component
 */

const StyledApplicationBar = styled(AppBar)`
    font-weight: 700;
    width: 100%;
    display: block;

    .svg-icon-container {
        font-size: 40px;
        color: rgb(255, 255, 255);
        
        .top-nav-icon {
            cursor: pointer;
            font-size: inherit;
        }
    }

    .site-links-container {
        display: flex;
        flex-direction: row;
        margin-left: 10px;

        @media ${deviceBreakpoints.laptop} {
            margin-left: 500px;
        }

        .site-link {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            margin-left: 10px;
        }
    }

    ${cssFunction};
`;

/**
 * Component that will store our application bar and render it with custom styles.
 * @param backgroundColor optional color customization for the application bar.
 * */

export default function ApplicationBar({ backgroundColor }: ApplicationBarProps) {
    return (
        <StyledApplicationBar backgroundColor={backgroundColor} position='fixed'>
            <Toolbar>
                <div className='svg-icon-container'>
                    <BlockVotezIcon className='top-nav-icon' />
                </div>
                <div className='site-links-container'>
                    <p aria-label='About link' className='site-link'>
                        About
                    </p>
                    <p aria-label='Plans Link' className='site-link'>
                        Plans
                    </p>
                    <p aria-label='Businesses Information Link' className='site-link'>
                        Businesses
                    </p>
                    <p aria-label='Company Information Link' className='site-link'>
                        Company
                    </p>
                </div>
            </Toolbar>
        </StyledApplicationBar>
    );
}
