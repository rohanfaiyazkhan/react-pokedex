import PropTypes from "prop-types";
import styled from "styled-components";
import { VarKeyMap } from "../../data/VarKeyMap";
import SvgVolumeIcon from "../../assets/components/VolumeIcon";

const Knob = styled.button`
    --w: 50px;
    width: var(--w);
    height: var(--w);
    border-radius: 50%;
    margin: 1.5rem 1rem 0.5rem 1.5rem;
    padding-top: 0.25rem;
    border: none;
    background-color: var(${VarKeyMap.Gray900});
    box-shadow: 0px 4px 4px rgba(169, 13, 13, 0.75);
    grid-column: 1/3;
    color: var(${VarKeyMap.Gray600});
    cursor: pointer;

    &:hover {
        background-color: var(${VarKeyMap.Gray800});
    }
`;

function SpeechButton(props) {
    return (
        <Knob>
            <SvgVolumeIcon width="100%" height="100%" />
        </Knob>
    );
}

SpeechButton.propTypes = {};

export default SpeechButton;
