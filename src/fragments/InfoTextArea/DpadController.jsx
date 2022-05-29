import PropTypes from "prop-types";
import styled from "styled-components";
import InfoTextArea, { InfoTextAreaProps } from "./InfoTextArea";
import SvgDpad from "../../assets/components/Dpad";

const DPadContainer = styled.div`
    position: relative;
    grid-column: 1 / span 2;
    margin: 1rem 1.5rem 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    width: var(--w);
    height: var(--h);
    right: var(--r);
    top: var(--t);
    left: var(--l);
    border-radius: 0.1em;
    cursor: pointer;

    &:hover {
        background: #744c4c;
        transition: background 0.1s ease-in;
    }
`;

const RightButton = styled(Button)`
    --w: 32%;
    --h: 34%;
    --r: 1%;
    --t: calc(50% - var(--h) / 2);
    --l: auto;
`;

const LeftButton = styled(Button)`
    --w: 32%;
    --h: 34%;
    --r: auto;
    --l: 1%;
    --t: calc(50% - var(--h) / 2);
`;

function DpadController({ stats, rightHandler, leftHandler }) {
    return (
        <>
            <DPadContainer>
                <SvgDpad />
                <LeftButton title="Previous Pokemon" onClick={leftHandler} />
                <RightButton title="Next Pokemon" onClick={rightHandler} />
            </DPadContainer>
            <InfoTextArea stats={stats} />
        </>
    );
}

DpadController.propTypes = {
    stats: InfoTextAreaProps.stats,
    rightHandler: PropTypes.func,
    leftHandler: PropTypes.func,
};

export default DpadController;
