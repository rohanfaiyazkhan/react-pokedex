import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";
import { LoadingStates } from "../../data/LoadingStates";
import { VarKeyMap } from "../../data/VarKeyMap";

const blink = keyframes`
    0% {
        opacity: 1;
    }

    25% {
        opacity: 1;
    }

    30% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
`;

const LoadingIndicators = styled.div`
    grid-column: 2/6;
    margin: 1.5em 0.5em;
    align-self: start;
    justify-self: center;
    display: flex;

    .loading-circle {
        position: relative;
        display: block;
        overflow: hidden;
        content: " ";
        margin-right: 0.5rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: var(${VarKeyMap.Gray900});

        &:last-child {
            margin-right: 0;
        }

        &:after {
            content: " ";
            position: absolute;
            left: 0.05rem;
            top: 0.05rem;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            opacity: 0;
            animation: ${(props) =>
                props.loading
                    ? css`
                          ${blink} 1.5s infinite
                      `
                    : "none"};
        }

        &:first-child:after {
            background-color: #6f91c7;
        }

        &:nth-child(2):after {
            background-color: #7ec76f;
            animation-delay: 0.5s;
        }

        &:nth-child(3):after {
            background-color: #c7a46f;
            animation-delay: 1s;
        }
    }
`;

function Loading({ loadingState }) {
    const isLoading = loadingState === LoadingStates.Loading;

    return (
        <LoadingIndicators loading={isLoading}>
            <div className="loading-circle"></div>
            <div className="loading-circle"></div>
            <div className="loading-circle"></div>
        </LoadingIndicators>
    );
}

Loading.propTypes = {
    loadingState: PropTypes.string,
};

export default Loading;
