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
                            <SBrandTitle>PortFolio</SBrandTitle>
                            <SBrandCaption>Thinking, building, refining.</SBrandCaption>
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
    background: rgba(248, 242, 233, 0.78);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(82, 63, 42, 0.08);
    border-radius: 1.5rem;
    box-shadow: 0 18px 48px rgba(82, 63, 42, 0.08);
    margin-top: 0.9rem;
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
    color: #f7f2ea;
    background: linear-gradient(135deg, #1f1a16 0%, #6f4d2a 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
`;

const SBrandTitle = styled.p`
    margin: 0;
    font-weight: 800;
    font-size: 1.05rem;
    color: #1f1a16;
`;

const SBrandCaption = styled.p`
    margin: 0;
    font-size: 0.82rem;
    color: rgba(31, 26, 22, 0.7);
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
    color: rgba(31, 26, 22, 0.78);
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.42);
    transition:
        transform 180ms ease,
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        box-shadow 180ms ease;

    &.active {
        color: #1f1a16;
        background: rgba(255, 255, 255, 0.9);
        border-color: rgba(111, 77, 42, 0.18);
        box-shadow: 0 10px 22px rgba(82, 63, 42, 0.1);
    }

    &:hover {
        transform: translateY(-1px);
        border-color: rgba(111, 77, 42, 0.16);
    }
`;
