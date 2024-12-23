import styled from "styled-components";
import { ToolCard } from "../components/ToolCard";

export const Tools = () => {
    return (
        <>
            <h1 style={{ textAlign: "left", marginLeft: "5%" }}>Tools</h1>

            <SGrid>
                <ToolCard
                    src={"https://img.icons8.com/color/96/python--v1.png"}
                    text={"Python"}
                    lev={":★★☆☆☆"}
                    des={"大学の授業で習得。ゲームを少し作成。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/c-plus-plus-logo.png"}
                    text={"C++"}
                    lev={":★★☆☆☆"}
                    des={"大学の授業で習得。授業の数値解析で使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/html-5--v1.png"}
                    text={"html"}
                    lev={":★☆☆☆☆"}
                    des={"プレーンで使用することはほぼナシ。現在勉強中。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/css3.png"}
                    text={"CSS"}
                    lev={":★★☆☆☆"}
                    des={"プレーンで使用することはほぼナシ。現在勉強中。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/react-native.png"}
                    text={"react"}
                    lev={":★★☆☆☆"}
                    des={"自主制作でいくつかのアプリを作った。現在勉強中。"}
                />
                <ToolCard
                    src={
                        "https://img.icons8.com/fluency/96/microsoft-teams-2019.png"
                    }
                    text={"teams"}
                    lev={":★★★★☆"}
                    des={"名大祭実行委員会の仕事に使用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/slack.png"}
                    text={"slack"}
                    lev={":★★★☆☆"}
                    des={"オープンキャンパスの仕事に使用。"}
                />
                <ToolCard
                    src={
                        "https://img.icons8.com/color/96/adobe-illustrator--v1.png"
                    }
                    text={"illustrater"}
                    lev={":★★★★☆"}
                    des={"デザイン作成、設営図・設計図の作成に使用。"}
                />

                <ToolCard
                    src={"https://img.icons8.com/fluency/96/canva.png"}
                    text={"canva"}
                    lev={":★★★☆☆"}
                    des={"illustrater/inkscapeと併用。"}
                />
                <ToolCard
                    src={"https://img.icons8.com/color/96/figma--v1.png"}
                    text={"Figma"}
                    lev={":★☆☆☆☆"}
                    des={
                        "JPHACKSのアプリ開発で出会ってから図の作成などに使用。"
                    }
                />
                <ToolCard
                    src={
                        "https://img.icons8.com/color/96/adobe-premiere-pro--v1.png"
                    }
                    text={"PremierePro"}
                    lev={":★☆☆☆☆"}
                    des={"バイトで行っている授業動画の簡単な編集に使用。"}
                />
                <ToolCard
                    src={
                        "https://img.icons8.com/material-outlined/96/notion--v1.png"
                    }
                    text={"Notion"}
                    lev={":★★★☆☆"}
                    des={"自身のタスク管理に使用。"}
                />
            </SGrid>
        </>
    );
};

const SGrid = styled.div`
    width: 90%;
    margin: auto;
    background-color: aquamarine;
    display: grid;
    gap: 3vh;
    padding: 3vh;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    border-radius: 10px;
`;
