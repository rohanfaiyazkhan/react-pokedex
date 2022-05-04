import styled from "styled-components";
import { VarKeyMap } from "./styles/VarKeyMap";
import SvgTopCircle from "./assets/components/TopCircle";
import SvgTopSeparator from "./assets/components/TopSeparator";
import SvgDpad from "./assets/components/Dpad";
import { useEffect } from "react";

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
    border-radius: 8px;
    border: 8px solid var(${VarKeyMap.RedShadow});
`;

const TopCircleContainer = styled.div`
    grid-column: 0 / 2;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
    align-self: start;
`;

const LoadingIndicators = styled.div`
    grid-column: 2/6;
    margin: 1.5em 0.5em;
    align-self: start;
    justify-self: center;
    display: flex;

    .loading-circle {
        display: block;
        content: " ";
        margin-right: 0.5rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: 6px solid var(${VarKeyMap.Gray900});
        background-color: var(${VarKeyMap.Gray900});

        &:last-child {
            margin-right: 0;
        }
    }
`;

const TopSeparatorContainer = styled.div`
    grid-column: 1/7;
    align-self: start;
    height: 110px;
`;

const MainScreen = styled.div`
    --h: 456px;
    grid-column: 1/7;
    height: var(--h);
    margin: 0 0.5rem;
    border: 0.5rem solid var(${VarKeyMap.Gray900});
    border-radius: 8px;
    background-color: var(${VarKeyMap.Gray100});
    box-shadow: inset 0px -4px 2px rgba(132, 8, 8, 0.5);
`;

const Knob = styled.button`
    --w: 50px;
    width: var(--w);
    height: var(--w);
    border-radius: 50%;
    margin: 1.5rem 1rem 0.5rem 1.5rem;
    border: 4px solid var(${VarKeyMap.Gray900});
    background-color: var(${VarKeyMap.Gray900});
    box-shadow: 0px 4px 4px rgba(169, 13, 13, 0.75);
    grid-column: 1/3;
`;

const TypeIndicatorContainer = styled.div`
    grid-column: span 4 / span 4;
    display: flex;
    align-self: center;
`;

const TypeIndicator = styled.div`
    background-color: var(${VarKeyMap.Light2});
    border: 4px solid var(${VarKeyMap.RedShadow});
    width: 40%;
    font-size: 1.2rem;
    padding: 0.1rem 0.3rem;
    height: 1.5em;
    margin: 0 0.1rem;
    border-radius: 8px;
`;

const InfoTextArea = styled.div`
    --scroll-track: var(${VarKeyMap.Gray900});
    --scroll-thumb: var(${VarKeyMap.RedHover});

    background-color: var(${VarKeyMap.Light2});
    border: 4px solid var(${VarKeyMap.RedShadow});
    box-shadow: inset 0px -4px 2px rgba(132, 8, 8, 0.5);
    margin: 1rem 0.5rem 0.5rem 1.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 1.1rem;
    height: 4em;
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

const DPadContainer = styled.div`
    grid-column: span 2 / span 2;
    margin: 1rem 1.5rem 0.5rem 1.5rem;
`;

function App() {
    useEffect(() => {
        speechSynthesis.getVoices().forEach(function (voice) {
            console.log(voice.name, voice.default ? voice.default : "");
        });
    }, []);

    return (
        <Section>
            <Frame>
                <TopCircleContainer>
                    <SvgTopCircle width={"100%"} height={"100%"} />
                </TopCircleContainer>
                <LoadingIndicators>
                    <div className="loading-circle"></div>
                    <div className="loading-circle"></div>
                    <div className="loading-circle"></div>
                </LoadingIndicators>
                <TopSeparatorContainer>
                    <SvgTopSeparator width={"100%"} height={"100%"} />
                </TopSeparatorContainer>
                <MainScreen></MainScreen>
                <Knob />
                <TypeIndicatorContainer>
                    <TypeIndicator>Fire</TypeIndicator>
                    <TypeIndicator>Fighting</TypeIndicator>
                </TypeIndicatorContainer>
                <InfoTextArea>
                    There is a plant seed on its back right from the day this
                    Pokémon is born. The seed slowly grows larger.
                </InfoTextArea>
                <DPadContainer>
                    <SvgDpad />
                </DPadContainer>
            </Frame>
        </Section>
    );
}

export default App;
