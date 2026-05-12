import styled from "styled-components";
import { Profile } from "../../pages/Profile";
import { Tools } from "../../pages/Tools";
import { Works } from "../../pages/Works";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

export const MyRouter = () => {
    return (
        <BrowserRouter basename="/">
            <SApp>
                <SHeader>
                    <SBrand>
                        <SBrandMark>FA</SBrandMark>
                        <div>
                            <SBrandTitle>FujiiAmon PortFolio</SBrandTitle>
                        </div>
                    </SBrand>
                    <SNav>
                        <SNavLink to="/port-folio">About</SNavLink>
                        <SNavLink to="/tools">Tools</SNavLink>
                        <SNavLink to="/works">Works</SNavLink>
                    </SNav>
                </SHeader>
                <SMain>
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/port-folio" element={<Profile />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/works" element={<Works />} />
                    </Routes>
                </SMain>
            </SApp>
        </BrowserRouter>
    );
};

const SHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1.25rem;
    position: sticky;
    top: 0;
    z-index: 30;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(91, 124, 250, 0.12);
    border-radius: 1.5rem;
    box-shadow: 0 18px 48px rgba(91, 124, 250, 0.08);
    margin-top: 0;
`;

const SApp = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const SMain = styled.main`
    padding-top: 1.5rem;
`;

const SBrand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    min-width: 0;
`;

const SBrandMark = styled.span`
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: #ffffff;
    background: linear-gradient(135deg, #5b7cfa 0%, #49cfa2 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
`;

const SBrandTitle = styled.p`
    margin: 0;
    font-weight: 800;
    font-size: 1.05rem;
    color: #243040;
`;

const SBrandCaption = styled.p`
    margin: 0;
    font-size: 0.82rem;
    color: rgba(36, 48, 64, 0.7);
`;

const SNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.5rem;
`;

const SNavLink = styled(NavLink)`
    padding: 0.75rem 1rem;
    border-radius: 999px;
    color: rgba(36, 48, 64, 0.78);
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.74);
    transition:
        transform 180ms ease,
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        box-shadow 180ms ease;

    &.active {
        color: #243040;
        background: rgba(255, 255, 255, 0.98);
        border-color: rgba(91, 124, 250, 0.18);
        box-shadow: 0 10px 22px rgba(91, 124, 250, 0.1);
    }

    &:hover {
        transform: translateY(-1px);
        border-color: rgba(91, 124, 250, 0.16);
    }
`;
