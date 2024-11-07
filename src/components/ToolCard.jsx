export const ToolCard = (props) => {
    const { src, text, lev, des } = props;
    return (
        <>
            <div
                style={{
                    width: "170px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    border: "solid",
                    borderColor: "whitesmoke",
                    borderRadius: "10px",
                    margin: "5px",
                    paddingBottom: "0px",
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
