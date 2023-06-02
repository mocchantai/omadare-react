import React from "react";
import "./_Overlay.scss";

const EditOverlay = (props: { onClick: (e: React.MouseEvent) => void }) => {
    return <div className="overlay" onClick={props.onClick}></div>;
}

export default EditOverlay;
