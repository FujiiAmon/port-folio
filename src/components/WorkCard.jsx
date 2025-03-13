import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const WorkCard = (props) => {
    const { src, link = null, text, des = null } = props;
    const isPdf = src.endsWith(".pdf");
    const [elementHeight, setElementHeight] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            setElementHeight(elementRef.current.clientHeight);
        }
    }, []);

    return (
        <>
            <div
                ref={elementRef}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    height: "fit-content",
                    margin: "0",
                    padding: "0",
                    border: "solid",
                    borderColor: "whitesmoke",
                    borderRadius: "10px",
                    backgroundColor: "whitesmoke",
                    gridRow: `span ${Math.ceil(elementHeight / 20)}`,
                }}>
                <a
                    href={link || "javascript:void(0)"}
                    style={{
                        width: "100%",
                        textDecoration: "underline",
                        fontSize: "90%",
                    }}>
                    {text}
                </a>
                <div>
                    {isPdf ? (
                        <object
                            data={`${src}#toolbar=0`}
                            type="application/pdf"
                            style={{
                                width: "90%",
                                margin: "auto",
                                padding: "1rem",
                                objectFit: "contain",
                            }}></object>
                    ) : (
                        <img
                            src={src}
                            style={{
                                width: "90%",
                                margin: "1rem",
                                padding: "0",
                                objectFit: "contain",
                            }}
                        />
                    )}
                </div>
                <p
                    style={{
                        margin: "0",
                        paddingTop: "0",
                        padding: "1rem",
                        textAlign: "left",
                        width: "90%",
                        overflowWrap: "break-word",
                    }}>
                    {des}
                </p>
            </div>
        </>
    );
};

WorkCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    des: PropTypes.string,
};
