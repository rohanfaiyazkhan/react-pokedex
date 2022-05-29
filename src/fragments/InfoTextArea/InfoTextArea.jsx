import PropTypes from "prop-types";
import styled from "styled-components";
import { VarKeyMap } from "../../data/VarKeyMap";
import Stats from "../Stats";

const InfoBox = styled.div`
    --scroll-track: var(${VarKeyMap.Gray900});
    --scroll-thumb: var(${VarKeyMap.RedHover});

    font-family: "Pokemon";
    background-color: var(${VarKeyMap.Light2});
    border: 4px solid var(${VarKeyMap.RedShadow});
    box-shadow: inset 0px -4px 2px rgba(132, 8, 8, 0.5);
    margin: 1rem 1rem 0.5rem 0;
    padding: 0.25rem 0.75rem;
    height: 6em;
    grid-column: span 4 / span 4;
    overflow-y: auto;
    scrollbar-color: var(--scroll-thumb) var(--scroll-track);

    &::-webkit-scrollbar-thumb {
        background: var(--scroll-thumb);
    }

    &::-webkit-scrollbar-track {
        background: var(--scroll-track);
    }
`;

function InfoTextArea({ stats }) {
    return (
        <InfoBox>
            <Stats stats={stats} />
        </InfoBox>
    );
}

export const InfoTextAreaProps = {
    stats: PropTypes.array.isRequired,
};

InfoTextArea.propTypes = InfoTextAreaProps;

export default InfoTextArea;
