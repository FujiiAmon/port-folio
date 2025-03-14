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
import exawizards from "../assets/exawizards-slide.pdf";
import teamlab from "../assets/teamlab.png";

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
                    src={exawizards}
                    link={
                        "https://judge-man-xahackason-qphxi3kck-fujiiamons-projects.vercel.app/"
                    }
                    text={"JudgeMan※エクサウィザーズのハッカソンで受賞"}
                    des={
                        "エクサウィザーズ主催のハッカソンで作成し、優勝。AIを用いた採用活動を効率化するアプリ。５日間かけて３人で開発に取り組み、課題調査～要件定義～開発と丁寧に取り組んだ。フロント全般とバックエンドのサポートをした。"
                    }
                />
                <WorkCard
                    src={appleple}
                    link={"https://fujiiamon.github.io/appleple-assinment/"}
                    text={"写真の枚数に応じてレイアウトを整えるjsプログラム"}
                    des={
                        "cssの勉強がしたくなって作ってみた。プレーンのjsで記述したり、レスポンシブを意識したりと今まで考えてこなかったことを考えて制作をした。"
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
                        "技育ハッカソンに出場して作成。2日間かけて4人で取り組んだ。生成AIでアイコンを作る&編集&アップロードする機能を開発。即席メンバーで各々が使える技術を採用し、Next.jsとpythonを使用。FastAPItoとバックエンドのサポートを担当。"
                    }
                />
                <WorkCard
                    src={beginnerhackason}
                    link={"https://fujiiamon.github.io/beginners-hackason/"}
                    text={"コミュニケーション促進アプリ"}
                    des={
                        "trackjobさんのビギナーズハッカソンに参加して作成。初対面の人と２人で８時間くらいかけて作成。。会うきっかけを作るための「パスコード交換機能」と会話を練習するための「AIとの会話練習機能」を実装。お互い共通して使用できる技術がhtml,css,jsだったのでこの３つのみで作成。技術力以外にも「機能を絞って実装しきる力」と「コミュ力」が大事だなと思った。"
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
                    src={teamlab}
                    text={"チームラボのインターンに参加"}
                    des={
                        "ソリューションカタリストという業種で２週間インターンに従事。WEBアプリの改善を行い、UI/UXの課題洗い出し～改善～新規施策の検討の流れを学ぶことができた。"
                    }></WorkCard>
                <WorkCard
                    src={techbase}
                    text={"TECH-BASEでMVPを獲得!!"}
                    des={
                        "１か月間8人のチームでPHPの勉強をしてチーム間で成果を競う無償インターンに参加した。ありがたいことに優勝＆MVP獲得。とても忙しかったが、遠くの人とまめに連絡をとって作業をするのが新鮮で面白かった。"
                    }></WorkCard>
                <WorkCard src={kasou} text={"名大祭の企画宣伝ビラを作成"} />
                <WorkCard src={kouya} text={"名大祭の後夜祭のロゴを作成"} />
                <WorkCard src={media1} text={"生協機関紙の表紙１を作成"} />
                <WorkCard src={media2} text={"生協機関紙の表紙２を作成"} />
            </SGrid>
        </>
    );
};

const SGrid = styled.div`
    background-color: violet;
    box-shadow: 0.5rem 0.5rem 0 rgb(210, 80, 160, 1);
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
`;
