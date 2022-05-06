import styled from "styled-components";
import PropTypes from "prop-types";
import { VarKeyMap } from "../../data/VarKeyMap";

const TypeIndicatorContainer = styled.div`
    grid-column: span 4 / span 4;
    display: flex;
    align-self: center;
`;

const TypeIndicator = styled.div`
    background-color: var(${VarKeyMap.Light2});
    border: 4px solid var(${VarKeyMap.RedShadow});
    width: 40%;
    font-size: 1.2rem;
    padding: 0.1rem 0.3rem;
    height: 1.5em;
    margin: 0 0.1rem;
    border-radius: 8px;
`;

function TypeIndicators({ type1, type2 }) {
    return (
        <TypeIndicatorContainer>
            <TypeIndicator>{type1}</TypeIndicator>
            <TypeIndicator>{type2}</TypeIndicator>
        </TypeIndicatorContainer>
    );
}

TypeIndicators.propTypes = {
    type1: PropTypes.string.isRequired,
    type2: PropTypes.string,
};

export default TypeIndicators;
