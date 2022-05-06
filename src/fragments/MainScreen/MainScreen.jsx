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
        left: 0;
        top: 0;
        padding: 4px 8px;
        border: 4px solid var(${VarKeyMap.Dark1});
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
