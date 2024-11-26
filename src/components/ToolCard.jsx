export const ToolCard = (props) => {
    const { src, text, lev, des } = props;
    return (
        <>
            <div
                style={{
                    width: "100%",
                    margin: "0",
                    padding: "0",
                    border: "solid",
                    borderColor: "whitesmoke",
                    borderRadius: "10px",
                }}
            >
                <p
                    style={{
                        width: "100%",
                        textDecoration: "underline",
                        fontSize: "90%",
                    }}
                >
                    {text + lev}
                </p>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={src}
                        style={{
                            width: "90%",
                            aspectRatio: "1/1",
                            objectFit: "cover",
                            backgroundColor: "Whitesmoke",
                            borderRadius: "10px",
                        }}
                    />
                    <p
                        style={{
                            textAlign: "left",
                            width: "90%",
                            minHeight: "50px",
                            overflowWrap: "break-word",
                        }}
                    >
                        {des}
                    </p>
                </div>
            </div>
        </>
    );
};
