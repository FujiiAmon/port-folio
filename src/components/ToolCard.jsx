export const ToolCard = (props) => {
    const { src, text, lev, des } = props;
    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0",
                    padding: "0",
                    border: "solid",
                    borderColor: "whitesmoke",
                    borderRadius: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        textDecoration: "underline",
                        alignItems: "center",
                    }}
                >
                    <p>{text}</p>
                    <p>{lev}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <img
                        width="100px"
                        height="100px"
                        src={src}
                        style={{
                            backgroundColor: "Whitesmoke",
                            borderRadius: "10px",
                        }}
                    />
                    <p
                        style={{
                            textAlign: "left",
                            width: "100px",
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
