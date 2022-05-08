import PropTypes from "prop-types";
import styled from "styled-components";
import InfoTextArea, { InfoTextAreaProps } from "./InfoTextArea";
import SvgDpad from "../../assets/components/Dpad";

const DPadContainer = styled.div`
    grid-column: span 2 / span 2;
    margin: 1rem 1.5rem 0.5rem 1.5rem;
`;

function DpadController({ stats }) {
    return (
        <>
            <DPadContainer>
                <SvgDpad />
            </DPadContainer>
            <InfoTextArea stats={stats} />
        </>
    );
}

DpadController.propTypes = {
    stats: InfoTextAreaProps.stats,
};

export default DpadController;
