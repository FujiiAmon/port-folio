import styled from "styled-components";
import { WorkCard } from "../components/WorkCard";
import narrowescape from "../assets/narrowescape.png";
import jphacks from "../assets/jphacks.png";
import pokePedia from "../assets/poke-pedia.png";
import kasou from "../assets/kasou.png";
import kouya from "../assets/kouya.png";
import media1 from "../assets/media1.png";
import media2 from "../assets/media2.png";

export const Works = () => {
    return (
        <>
            <h1 style={{ textAlign: "left" }}>Works</h1>
            <SGrid>
                <WorkCard
                    src={narrowescape}
                    link={"https://github.com/FujiiAmon/NarrowEscape/settings"}
                    text={"自作ゲーム"}
                    des={
                        "コードをただ並べただけにとどまってしまっている。WEB上で動かせるようにしたい。"
                    }
                />
                <WorkCard
                    src={jphacks}
                    link={
                        "https://atmospheric-pressure-forecast.web.app/signin"
                    }
                    text={"JPHACKSでのアプリ開発"}
                    des={
                        "フロント開発に触れるきっかけになった作品。実力の足りなさを痛感。"
                    }
                />
                <WorkCard
                    src={pokePedia}
                    link={"https://fujiiamon.github.io/poke-pedia/"}
                    text={"poke-pedia"}
                    des={
                        "pokeAPIからデータを引っ張ってきてそれっぽく表示させる。APIからデータを引っ張ってくるときの非同期処理の勉強になった。"
                    }
                />
            </SGrid>
            <p>その他デザインなど</p>
            <SGrid>
                <WorkCard src={kasou} text={"名大祭の企画宣伝ビラ"} />
                <WorkCard src={kouya} text={"名大祭の後夜祭のロゴ"} />
                <WorkCard src={media1} text={"生協機関紙の表紙１"} />
                <WorkCard src={media2} text={"生協機関紙の表紙２"} />
            </SGrid>
        </>
    );
};

const SGrid = styled.div`
    background-color: violet;
    display: grid;
    padding: 3% 2%;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
`;
