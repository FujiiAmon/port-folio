export const WorkCard = (props) => {
    const { src, link = null, text, des = null } = props;
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    width: "100%",
                    margin: "0",
                    padding: "0",
                    border: "solid",
                    borderColor: "whitesmoke",
                    borderRadius: "10px",
                    alignItems: "center",
                    backgroundColor: "whitesmoke",
                }}
            >
                <a
                    href={link || "javascript:void(0)"}
                    style={{
                        width: "100%",
                        textDecoration: "underline",
                        fontSize: "90%",
                    }}
                >
                    {text}
                </a>
                <img
                    src={src}
                    style={{
                        width: "90%",
                        margin: "auto",
                        objectFit: "contain",
                    }}
                />
                <p
                    style={{
                        margin: "auto",
                        textAlign: "left",
                        width: "90%",
                        minHeight: "50px",
                        overflowWrap: "break-word",
                    }}
                >
                    {des}
                </p>
            </div>
        </>
    );
};
