import PropTypes from "prop-types";
import styled from "styled-components";
import { VarKeyMap } from "../../data/VarKeyMap";

const MainScreenDisplay = styled.div`
    --h: 456px;
    position: relative;
    grid-column: 1/7;
    height: var(--h);
    margin: 0 0.5rem;
    border: 0.5rem solid var(${VarKeyMap.Gray900});
    border-radius: 8px;
    background-color: var(${VarKeyMap.Gray100});
    box-shadow: inset 0px -4px 2px rgba(132, 8, 8, 0.5);

    &:before {
        content: " ";
        z-index: 0;
        position: absolute;
        top: -0.5rem;
        left: -0.5rem;
        border: 4px solid var(${VarKeyMap.RedShadow});
        width: calc(100% + 0.65rem);
        height: calc(100% + 0.65rem);
        border-radius: 8px;
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .name {
        font-family: "Pokemon";
        position: absolute;
        left: 8px;
        top: 0;
        padding: 4px 8px;
        border-radius: 1px;
        border: 4px solid var(${VarKeyMap.Gray600});
        box-shadow: 0 0 0 4px var(${VarKeyMap.Dark1});
    }
`;

function MainScreen({ frontSprite, name }) {
    return (
        <MainScreenDisplay>
            <p className="name">{name}</p>
            <img src={frontSprite} alt={`front-sprite-${name}`} />
        </MainScreenDisplay>
    );
}

MainScreen.propTypes = {
    frontSprite: PropTypes.string.isRequired,
    backSprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default MainScreen;
