import React, { useState } from "react";

export default function Apear() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="Apear">
            <button
                onClick={() => {
                    setIsShow(!isShow);
                }}
            >
                Show/hide
            </button>
            {isShow ? <h2>dqsfdsfqs</h2> : null}
        </div>
    );
}
