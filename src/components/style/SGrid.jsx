import styled from "styled-components";

export const SGrid = styled.div`
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.9),
        rgba(240, 247, 255, 0.94)
    );
    box-shadow: 0 24px 48px rgba(91, 124, 250, 0.08);
    margin: 1rem 0 1.5rem;
    padding: 1rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(91, 124, 250, 0.08);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
`;
