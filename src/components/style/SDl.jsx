import styled from "styled-components";

export const SDl = styled.dl`
    width: 100%;
    margin: 0;
    color: #3d342c;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(92, 68, 44, 0.08);
    border-radius: 1.1rem;
    text-align: left;
    padding: 1rem 1.1rem;

    dt {
        margin-top: 0.95rem;
        font-weight: 700;
        color: #5f4631;
    }

    dd {
        margin: 0.35rem 0 0;
        padding: 0 0 0.25rem;
        line-height: 1.75;
    }
`;
