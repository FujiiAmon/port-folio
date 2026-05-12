import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const WorkCard = (props) => {
    const { src, link = null, text, des = null } = props;
    const isPdf = src.endsWith(".pdf");
    const [elementHeight, setElementHeight] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            setElementHeight(elementRef.current.clientHeight);
        }
    }, [elementHeight]);

    return (
        <SCard ref={elementRef} $rowSpan={Math.ceil(elementHeight / 20)}>
            {link ? (
                <SCardLink href={link} target="_blank" rel="noreferrer">
                    {text}
                </SCardLink>
            ) : (
                <SCardTitle>{text}</SCardTitle>
            )}
            <SMediaFrame>
                {isPdf ? (
                    <SPreview data={`${src}#toolbar=0`} type="application/pdf" />
                ) : (
                    <SPreviewImage src={src} alt={text} />
                )}
            </SMediaFrame>
            <SDescription>{des}</SDescription>
        </SCard>
    );
};

WorkCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    des: PropTypes.string,
};

const SCard = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    align-items: stretch;
    width: 100%;
    margin: 0;
    padding: 1rem;
    border-radius: 1.35rem;
    border: 1px solid rgba(92, 68, 44, 0.08);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(247, 242, 234, 0.98));
    box-shadow: 0 18px 36px rgba(82, 63, 42, 0.08);
    overflow: hidden;
    grid-row: span ${({ $rowSpan }) => $rowSpan};
    transition:
        transform 180ms ease,
        box-shadow 180ms ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 24px 42px rgba(82, 63, 42, 0.12);
    }
`;

const SCardLink = styled.a`
    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    padding: 0.45rem 0.7rem;
    border-radius: 999px;
    background: rgba(111, 77, 42, 0.08);
    border: 1px solid rgba(111, 77, 42, 0.1);
    color: #5f4631;
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.4;
`;

const SCardTitle = styled.p`
    margin: 0;
    width: fit-content;
    max-width: 100%;
    padding: 0.45rem 0.7rem;
    border-radius: 999px;
    background: rgba(111, 77, 42, 0.08);
    border: 1px solid rgba(111, 77, 42, 0.1);
    color: #5f4631;
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.4;
`;

const SMediaFrame = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    background: linear-gradient(180deg, #f6f1e8 0%, #f0eadf 100%);
    border: 1px solid rgba(92, 68, 44, 0.08);
`;

const SPreview = styled.object`
    width: 100%;
    min-height: 260px;
    aspect-ratio: 4 / 3;
    object-fit: contain;
    background: #f6f1e8;
`;

const SPreviewImage = styled.img`
    width: 100%;
    min-height: 260px;
    aspect-ratio: 4 / 3;
    object-fit: cover;
`;

const SDescription = styled.p`
    margin: 0;
    color: rgba(47, 42, 36, 0.86);
    line-height: 1.75;
    overflow-wrap: break-word;
    font-size: 0.95rem;
`;
