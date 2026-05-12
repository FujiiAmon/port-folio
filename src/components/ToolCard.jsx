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
            <SDescription>{des}</SDescription>
        </SCard>
    );
};

const SCard = styled.article`
    width: 100%;
    margin: 0;
    padding: 1rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(92, 68, 44, 0.08);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(247, 242, 234, 0.98));
    box-shadow: 0 16px 32px rgba(82, 63, 42, 0.08);
`;

const SCardTitle = styled.p`
    margin: 0 0 0.9rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.95rem;
    font-weight: 800;
    color: #2f2a24;
`;

const SLevel = styled.span`
    font-size: 0.85rem;
    color: #7a5c3d;
    white-space: nowrap;
`;

const SImageFrame = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    background: linear-gradient(180deg, #f6f1e8 0%, #f0eadf 100%);
    border: 1px solid rgba(92, 68, 44, 0.08);
`;

const SImage = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;

const SDescription = styled.p`
    margin: 0.9rem 0 0;
    color: rgba(47, 42, 36, 0.86);
    line-height: 1.75;
    overflow-wrap: break-word;
    min-height: 3.5rem;
`;
