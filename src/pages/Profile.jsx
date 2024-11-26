import { SContainer } from "../components/style/SContainer";
import { SP } from "../components/style/SP";
import { SDl } from "../components/style/SDl";

export const Profile = () => {
    return (
        <>
            <h1 style={{ textAlign: "left", marginLeft: "10px" }}>About</h1>
            <SContainer style={{ margin: "0 auto" }}>
                <SP>Profile</SP>
                <SDl>
                    <dt>名前</dt>
                    <dd>藤井亜門</dd>
                    <dt>誕生日</dt>
                    <dd>2004.03.26</dd>
                    <dt>出身</dt>
                    <dd>埼玉県川越市</dd>
                    <dt>大学</dt>
                    <dd>名古屋大学情報学部自然情報学科３年</dd>
                    <dd>
                        大学では最適化のための数理を学んでいます。今後はこのまま最適化を専攻する予定です。この分野に限らず、機械学習の基礎なども学んでおり大規模言語モデルに興味があります。
                    </dd>
                    <dt>これまで</dt>
                    <dd>
                        ここまでの大学生活では学園祭に力を入れていました。グループワークが好きです。
                    </dd>
                    <dt>興味</dt>
                    <dd>
                        最近はデザインに興味があります。自分の活動の幅を広げるために最近(2024.9)reactの勉強を始めました。
                    </dd>
                </SDl>
            </SContainer>
            <br />
            <SContainer style={{ margin: "0 auto" }}>
                <SP>MyHistory</SP>
                <SDl>
                    <dt>2022.3</dt>
                    <dd>地元の高校を卒業</dd>
                    <dt>2022.4</dt>
                    <dd>名古屋大学情報学部入学。</dd>
                    <dt>2022.7</dt>
                    <dd>
                        大学の授業でPythonの基礎を習得。のめりこんで自作のゲームを作成。
                    </dd>
                    <dt>2022.10</dt>
                    <dd>
                        秋革祭実行委員会としてステージ企画を運営して約150人を動員。
                    </dd>
                    <dt>2023.6</dt>
                    <dd>
                        名大祭実行委員会として後夜祭企画を運営して約300人を動員。
                    </dd>
                    <dt>2023.8</dt>
                    <dd>
                        生協学生委員会としてオープンキャンパスの統括をおこない、久々の対面開催に貢献。
                    </dd>
                    <dt>2023. 9</dt>
                    <dd>
                        名大祭実行委員会の企画局局長に就任し、約40人の部署を１年間支える。
                    </dd>
                    <dt>2023.10</dt>
                    <dd>
                        JPHACKSに出場。周りの助けを借りながらアプリケーションのフロント開発を担当。
                    </dd>
                    <dt>2024. 8</dt>
                    <dd>名大祭実行委員会を引退。</dd>
                    <dt>2024.10</dt>
                    <dd>
                        名古屋市の商店街「大須」の理事長さんと共同でインカレサークルを立ち上げた（現在奮闘中）。
                    </dd>
                    <dt>2024.11</dt>
                    <dd>
                        無償インターンTECH-BASEに参加して参加者と１ケ月間PHPの勉強をする。優勝＆チーム内MVPを獲得した。
                    </dd>
                </SDl>
            </SContainer>
        </>
    );
};
