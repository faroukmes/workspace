import { useState } from "react";

const imageStyle = {
    width: "300px",
    height: "300px",
};

export default function ProductCard() {
    const [isBig, setIsBig] = useState(false);
    const imageStyle = {
        width: isBig ? 300 : 200,
        height: "200px",
    };
    return (
        <div>
            <img
                src="/onepiece.webp"
                alt=""
                style={imageStyle}
                onClick={() => {
                    setIsBig(!isBig);
                }}
            />
        </div>
    );
}
