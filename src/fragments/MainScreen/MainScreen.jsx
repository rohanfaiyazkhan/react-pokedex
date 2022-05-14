import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { VarKeyMap } from "../../data/VarKeyMap";
import SvgSwitchIcon from "../../assets/components/SwitchIcon";
import TypeIndicators from "./../TypeIndicators/TypeIndicators";

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
        text-transform: capitalize;
    }

    .spriteToggle {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        border: 4px solid var(${VarKeyMap.Gray600});
        box-shadow: 2px 2px 0 2px var(${VarKeyMap.Gray300});
        cursor: pointer;
    }
`;

const PositionedTypeIndicators = styled(TypeIndicators)`
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
`;

function MainScreen({ pokemon }) {
    const id = pokemon.id;
    const name = pokemon.name;
    const frontSprite = pokemon.sprites.front_default;
    const backSprite = pokemon.sprites.back_default;

    const [spriteToShow, setSpriteToShow] = useState("front");

    const toggleSpriteToShow = () => {
        setSpriteToShow((val) => (val === "front" ? "back" : "front"));
    };

    return (
        <MainScreenDisplay>
            <p className="name">
                {id}. {name}
            </p>
            <img
                src={spriteToShow === "front" ? frontSprite : backSprite}
                alt={`front-sprite-${name}`}
            />
            <button
                className="spriteToggle"
                title="Toggle which side the pokemon is facing"
                onClick={toggleSpriteToShow}
            >
                <SvgSwitchIcon
                    alt="Icon by Zulfahmi Al Ridhawi in Noun Project"
                    width="100%"
                    height="100%"
                />
            </button>
            <PositionedTypeIndicators types={pokemon.types} />
        </MainScreenDisplay>
    );
}

MainScreen.propTypes = {
    pokemon: PropTypes.object,
};

export default MainScreen;
