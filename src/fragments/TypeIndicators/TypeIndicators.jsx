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
    box-shadow: 0 0 0 2px var(${VarKeyMap.Dark1});
    font-family: "Pokemon";
    width: 35%;
    font-size: 1rem;
    padding: 0.5rem 1rem 0;
    text-transform: capitalize;
    height: 1.5em;
    margin: 0 0.25rem;
    border-radius: 8px;
`;

function TypeIndicators({ types }) {
    return (
        <TypeIndicatorContainer>
            <TypeIndicator>{types[0].type.name}</TypeIndicator>
            {types.length > 1 && types[1]?.type?.name && (
                <TypeIndicator>{types[1].type.name}</TypeIndicator>
            )}
        </TypeIndicatorContainer>
    );
}

TypeIndicators.propTypes = {
    types: PropTypes.array.isRequired,
};

export default TypeIndicators;
