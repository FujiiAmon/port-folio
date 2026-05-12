import styled from "styled-components";
import { ToolCard } from "../components/ToolCard";

export const Tools = () => {
    return (
        <div className="page-shell page-tools">
            <h1 className="section-heading">Tools</h1>

            <SGrid>
                <ToolCard
                    src={"https://img.icons8.com/color/96/python--v1.png"}
                    text={"Python"}
                    lev={":★★☆☆☆"}
                    des={"ゲームを少し作成。言語モデルを使用した開発でも使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/c-plus-plus-logo.png"}
                    text={"C++"}
                    lev={":★★☆☆☆"}
                    des={"数値解析やアルゴリズムの実装で使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/html-5--v1.png"}
                    text={"html"}
                    lev={":★☆☆☆☆"}
                    des={"プレーンで使用することはほぼナシ。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/css3.png"}
                    text={"CSS"}
                    lev={":★★☆☆☆"}
                    des={"プレーンで使用することはほぼナシ。最近はtailwindをよく 使う。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/react-native.png"}
                    text={"react"}
                    lev={":★★★☆☆"}
                    des={"自主制作でいくつかのアプリを作った。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/nextjs.png"}
                    text={"next"}
                    lev={":★★☆☆☆"}
                    des={"自主制作でいくつかのアプリを作った。現在勉強中。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/fluency/96/microsoft-teams-2019.png"}
                    text={"teams"}
                    lev={":★★★★☆"}
                    des={"学園祭の仕事で使用していた。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/slack.png"}
                    text={"slack"}
                    lev={":★★★☆☆"}
                    des={"オープンキャンパスの仕事やインターン業務で使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/adobe-illustrator--v1.png"}
                    text={"illustrater"}
                    lev={":★★★★☆"}
                    des={"デザイン作成、学園祭時代には設計図の作成に使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/fluency/96/canva.png"}
                    text={"canva"}
                    lev={":★★★☆☆"}
                    des={"illustrater/inkscapeと併用。最近のスライド作成は大体こ れ。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/figma--v1.png"}
                    text={"Figma"}
                    lev={":★☆☆☆☆"}
                    des={"WFの作成などに使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/adobe-premiere-pro--v1.png"}
                    text={"PremierePro"}
                    lev={":★☆☆☆☆"}
                    des={"バイトで行っている授業動画の簡単な編集に使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/material-outlined/96/notion--v1.png"}
                    text={"Notion"}
                    lev={":★★★☆☆"}
                    des={"自身のタスク管理に使用。"}
                />
            </SGrid>
        </div>
    );
};

const SGrid = styled.div`
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.58), rgba(243, 237, 226, 0.9));
    box-shadow: 0 24px 48px rgba(82, 63, 42, 0.08);
    display: grid;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(92, 68, 44, 0.08);
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
