import styled from "styled-components";
import { VarKeyMap } from "./data/VarKeyMap";
import SvgTopCircle from "./assets/components/TopCircle";
import SvgTopSeparator from "./assets/components/TopSeparator";
import MainScreen from "./fragments/MainScreen/MainScreen";
import Loading from "./fragments/Loading/Loading";
import { ditto as pokemon } from "./data/samplePokemon";
import DpadController from "./fragments/InfoTextArea/DpadController";
import SpeechButton from "./fragments/SpeechButton/SpeechButton";
import ContextWrappers from "./contexts/ContextWrappers";

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Frame = styled.main`
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

function App() {
    return (
        <ContextWrappers>
            <Section>
                <Frame>
                    <TopCircleContainer>
                        <SvgTopCircle width={"100%"} height={"100%"} />
                    </TopCircleContainer>
                    <Loading />
                    <TopSeparatorContainer>
                        <SvgTopSeparator width={"100%"} height={"100%"} />
                    </TopSeparatorContainer>
                    <MainScreen pokemon={pokemon} />
                    <SpeechButton />
                    <DpadController stats={pokemon.stats} />
                </Frame>
            </Section>
        </ContextWrappers>
    );
}

export default App;
