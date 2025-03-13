import styled from "styled-components";
import { Profile } from "../../pages/Profile";
import { Tools } from "../../pages/Tools";
import { Works } from "../../pages/Works";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

export const MyRouter = () => {
    return (
        <BrowserRouter basename="/">
            <SHeader>
                PortFolio
                <Link to="/port-folio">About</Link>
                <Link to="/tools">Tools</Link>
                <Link to="/works">Works</Link>
            </SHeader>
            <Routes>
                <Route path="/port-folio" element={<Profile />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
};

const SHeader = styled.header`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 0;
    margin-bottom: 10px;
    position: left;
    display: flex;
    justify-content: space-around;
    background-color: #dfdfdf;
`;
