import styled from "styled-components";

export const ToolCard = (props) => {
    const { src, text, lev, des } = props;
    return (
        <SCard>
            <SCardTitle>
                <span>{text}</span>
                <SLevel>{lev}</SLevel>
            </SCardTitle>
            <SImageFrame>
                <SImage src={src} alt={text} />
            </SImageFrame>
            {des && <SDescription>{des}</SDescription>}
        </SCard>
    );
};

const SCard = styled.article`
    width: 100%;
    margin: 0;
    padding: 1rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(91, 124, 250, 0.08);
    background: #ffffff;
    box-shadow: 0 16px 32px rgba(91, 124, 250, 0.08);
`;

const SCardTitle = styled.p`
    margin: 0 0 0.9rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.95rem;
    font-weight: 800;
    color: #243040;
`;

const SLevel = styled.span`
    font-size: 0.85rem;
    color: #5b7cfa;
    white-space: nowrap;
`;

const SImageFrame = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    background: #f4f8ff;
    border: 1px solid rgba(91, 124, 250, 0.08);
`;

const SImage = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;

const SDescription = styled.p`
    margin: 0.9rem 0 0;
    color: rgba(36, 48, 64, 0.86);
    line-height: 1.75;
    overflow-wrap: break-word;
    min-height: 3.5rem;
`;
