import React from "react";

const Overlay = (props: { onClick: (e: React.MouseEvent) => void }) => {
    return <div className="overlay" onClick={props.onClick}></div>;
}

export default Overlay;
