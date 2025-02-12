import styled from "styled-components";
import { WorkCard } from "../components/WorkCard";
import narrowescape from "../assets/narrowescape.png";
import jphacks from "../assets/jphacks.png";
import pokePedia from "../assets/poke-pedia.png";
import techbase from "../assets/techbase.png";
import kasou from "../assets/kasou.png";
import kouya from "../assets/kouya.png";
import media1 from "../assets/media1.png";
import media2 from "../assets/media2.png";
import blog from "../assets/blog.png";
import appleple from "../assets/appleple.png";
import beginnerhackason from "../assets/beginner-hacks.png";
import lineimgscan from "../assets/line-img-scan.png";
import youtubeapp from "../assets/youtube-app.png";
import tspopt from "../assets/tsp-opt.png";
import studicon from "../assets/studicon.png";

export const Works = () => {
    return (
        <>
            <h1 style={{ textAlign: "left", marginLeft: "5%" }}>Works</h1>

            <p
                style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "5%",
                    marginTop: "0",
                    marginBottom: "0",
                }}>
                自主制作アプリ※タイトルをクリックするとアプリに飛べます
            </p>

            <SGrid>
                <WorkCard
                    src={narrowescape}
                    link={
                        "https://github.com/FujiiAmon/narrow-escape/blob/main/dist/main.zip"
                    }
                    download=""
                    text={"narrow-escape"}
                    des={
                        "避けゲー。pyinstallerを使ってexe化した。もっと手軽に遊べるようにしたい。"
                    }
                />
                <WorkCard
                    src={tspopt}
                    link={"https://github.com/FujiiAmon/tsp_program"}
                    text={"巡回セールスマン問題"}
                    des={
                        "大学の専攻内容で取り組んだ。c言語で書いており、アルゴリズムとしては2opt法と焼きなまし法という手法を用いている。"
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
                <WorkCard
                    src={pokePedia}
                    link={"https://fujiiamon.github.io/poke-pedia/"}
                    text={"poke-pedia"}
                    des={
                        "pokeAPIからデータを引っ張ってきてそれっぽく表示させる。APIからデータを引っ張ってくるときの非同期処理の勉強になった。"
                    }
                />
                <WorkCard
                    src={lineimgscan}
                    link={"https://github.com/FujiiAmon/line-img-scan"}
                    text={"文字抽出エージェント"}
                    des={
                        "LINEの画像を送るとその画像に写っている文字を抽出して返してくれるLINEbot。初めてgasを使って作成した。画像処理はvisionAPIを使用。"
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
                    src={youtubeapp}
                    link={"https://fujiiamon.github.io/youtube-app"}
                    text={"youtubeプレイヤー"}
                    des={
                        "youtubeのAPIを使用して実装したプレイヤー。プロジェクト内でもAPIフォルダを作成してデータを処理している。機能が単調なので生成AIと組み合わせたりしたい。"
                    }
                />
                <WorkCard
                    src={studicon}
                    link={"https://fujiiamon.github.io/icon-gen/"}
                    text={"studicon"}
                    des={
                        "技育ハッカソンに出場して作成。2日間かけて4人で取り組んだ。生成AIでアイコンを作る&編集&アップロードする機能を開発。メンバーは即席だったので、各々が使える技術を採用してNext.jsとpythonを使用。自身は2つを繋ぐためにpythonでFastAPIを担当。(コストの都合で機能停止中)"
                    }
                />
                <WorkCard
                    src={beginnerhackason}
                    link={"https://fujiiamon.github.io/beginners-hackason/"}
                    text={"コミュニケーション促進アプリ"}
                    des={
                        "trackjobさん主催のビギナーズハッカソンに参加した際際に成。初対面の２人と８時間くらいかけて作成。テーマは「きっかけ」と「練習」。会うきっかけを作るための「パスコード交換機能」と会話を練習するための「AIとの会話練習機能」を実装。また、お互い共通して使用できる技術がhtml,css,jsだったのでこの３つのみで作成した。ハッカソンでは技術力以外よりも「機能を絞って実装しきる力」と「コミュ力」の２つが大事だなと思った。デプロイが上手くできない、、、"
                    }
                />
                <WorkCard
                    src={jphacks}
                    link={
                        "https://atmospheric-pressure-forecast.web.app/signin"
                    }
                    text={"JPHACKS23"}
                    des={
                        "初めて参加したハッカソン。WEB制作の経験ゼロで取り組み、CSSを担当した。"
                    }
                />
            </SGrid>
            <p
                style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "5%",
                    marginTop: "0",
                    marginBottom: "0",
                }}>
                その他活動の成果
            </p>
            <SGrid>
                <WorkCard
                    src={techbase}
                    text={"TECH-BASEでMVPを獲得!!"}
                    des={
                        "１か月間8人のチームでPHPの勉強をしてチーム間で成果を競う無償インターンに参加しました。ありがたいことに優勝＆MVP獲得しました。とても忙しかったですが、遠くの人とまめに連絡をとって作業をするのが新鮮で面白かったです。"
                    }></WorkCard>
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
    margin: 3%;
    padding: 2%;
    gap: 3vh;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    border-radius: 10px;
`;
