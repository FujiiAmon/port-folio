export const WorkCard = (props) => {
    const { src, link = null, text, des = null } = props;
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0",
                    padding: "0",
                    border: "solid",
                    borderRadius: "10px",
                    borderColor: "whitesmoke",
                    backgroundColor: "whitesmoke",
                    width: "100%",
                }}
            >
                <a
                    href={link || "javascript:void(0)"}
                    style={{ paddingBottom: "5px" }}
                >
                    {text}
                </a>
                <img
                    src={src}
                    width={"200px"}
                    height={"300px"}
                    style={{ objectFit: "contain" }}
                />
                <p style={{ textAlign: "left", padding: "10px" }}>{des}</p>
            </div>
        </>
    );
};
