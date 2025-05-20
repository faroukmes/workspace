import React, { useState } from "react";
import "./exercice.css";
export default function Exercice() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: 20,
    });
    return (
        <section className="formular">
            <div>
                <label htmlFor="text">First name: </label>
                <br />
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={(e) => {
                        setUser({ ...user, firstName: e.target.value });
                    }}
                />
            </div>
            <div>
                <label htmlFor="text">last name: </label>
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={(e) => {
                        setUser({ ...user, lastName: e.target.value });
                    }}
                />
            </div>
            <div>
                <label htmlFor="number">Age: </label>
                <br />
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={(e) => {
                        setUser({ ...user, age: Number(e.target.value) });
                    }}
                />
            </div>
            <div className="textPlace">
                <p>{`Hello, ${user.firstName} ${user.lastName}`}</p>
                <p>{`you are, ${user.age}y.o`}</p>
            </div>
        </section>
    );
}
