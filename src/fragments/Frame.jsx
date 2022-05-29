import styled from "styled-components";
import { VarKeyMap } from "../data/VarKeyMap";
import SvgTopCircle from "../assets/components/TopCircle";
import SvgTopSeparator from "../assets/components/TopSeparator";
import MainScreen from "../fragments/MainScreen/MainScreen";
import Loading from "../fragments/Loading/Loading";
import { ditto as pokemon } from "../data/samplePokemon";
import DpadController from "../fragments/InfoTextArea/DpadController";
import SpeechButton from "../fragments/SpeechButton/SpeechButton";
import usePokemonId from "./../utils/hooks/usePokemonId";
import useCachedResource from "../contexts/NetworkCacheLayer/useCachedResource";
import backgroundImg from "../assets/background.jpg";

const HiddenOverlay = styled.div`
    display: none;

    @media (min-width: 428px) {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--light-2);
        left: 0;
        top: 0;
        z-index: 0;
        opacity: 0.8;
        filter: blur(8px);
    }
`;

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const Container = styled.main`
    z-index: 1;
    background-color: var(${VarKeyMap.Red});
    width: min(100vw, var(${VarKeyMap.PokedexWidth}));
    height: var(${VarKeyMap.PokedexHeight});
    margin: 0 auto;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: min-content;
    border: 4px solid var(${VarKeyMap.RedShadow});
    box-shadow: 0 0 0 4px var(${VarKeyMap.Gray800});
`;

const TopCircleContainer = styled.div`
    grid-column: 0 / 2;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
    align-self: start;
`;

const TopSeparatorContainer = styled.div`
    grid-column: 1/7;
    align-self: start;
    height: 110px;
`;

function Frame(props) {
    const [id, incrementId, decrementId] = usePokemonId();

    const pokemonResource = useCachedResource("pokemon", id);
    const speciesResource = useCachedResource("species", id);

    return (
        <Section>
            <HiddenOverlay />
            <Container>
                <TopCircleContainer>
                    <SvgTopCircle width={"100%"} height={"100%"} />
                </TopCircleContainer>
                <Loading />
                <TopSeparatorContainer>
                    <SvgTopSeparator width={"100%"} height={"100%"} />
                </TopSeparatorContainer>
                <MainScreen pokemon={pokemonResource?.resource} />
                <SpeechButton />
                <DpadController
                    stats={pokemonResource?.resource?.stats}
                    rightHandler={incrementId}
                    leftHandler={decrementId}
                />
            </Container>
        </Section>
    );
}

export default Frame;
