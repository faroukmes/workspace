import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const width = progress + "%";
    return (
        <section>
            <div
                style={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "12px",
                    backgroundColor: "lightgray",
                    overflow: "hidden",
                }}
            >
                <div
                    className="widthChange"
                    style={{
                        width: width,
                        height: "100%",
                        backgroundColor: "lightgreen",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "black",
                    }}
                >
                    {width}
                </div>
            </div>
            <div>
                <label htmlFor="age">Enter Percentage:</label>
                <input
                    min={0}
                    max={100}
                    type="number"
                    value={progress}
                    onChange={(e) => {
                        setProgress(e.target.value);
                    }}
                />
                <Toaster />
            </div>
        </section>
    );
}
