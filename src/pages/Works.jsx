import styled from "styled-components";
import { WorkCard } from "../components/WorkCard";
import narrowescape from "../assets/narrowescape.png";
import jphacks from "../assets/jphacks.png";
import pokePedia from "../assets/poke-pedia.png";
import kasou from "../assets/kasou.png";
import kouya from "../assets/kouya.png";
import media1 from "../assets/media1.png";
import media2 from "../assets/media2.png";
import blog from "../assets/blog.png";
import appleple from "../assets/appleple.png";

export const Works = () => {
    return (
        <>
            <h1 style={{ textAlign: "left", marginLeft: "10px" }}>Works</h1>
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
                <WorkCard
                    src={blog}
                    link={"https://fujiiamon.github.io/blog-firebase/"}
                    text={"掲示板"}
                    des={
                        "firebaseでのデータベースの使い方を学ぶために作成。ログイン機能を実装し、ログインしたときのアカウント名が記載される。ログインしていなくても書けるがその場合は”名無しさんと表示される。そろそろcssを特訓したい。”"
                    }
                />
                <WorkCard
                    src={appleple}
                    link={"https://fujiiamon.github.io/appleple-assinment/"}
                    text={"写真の枚数に応じてレイアウトを整えるjsプログラム"}
                    des={
                        "cssの勉強がしたくなり、実際のweb制作会社での仕事を聞くのが手っ取り早いかと思ってアップルップルさんのところで3daysのインターンに参加してこの課題をした(公開許可取得済み)。プレーンのjsで記述したり、レスポンシブを意識したりと今まで考えてこなかったことを考えて制作をした。"
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
    margin: 5%;
    padding: 3% 2%;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
`;
