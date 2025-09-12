import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import UserFormModel from "./components/UserFormModel";
import type { UserI } from "./types/user";

export default function App() {
    const [users, setUsers] = useState<UserI[]>([
        {
            firstName: "Farouk",
            lastName: "Messaoudi",
            age: 20,
            id: "user-1",
        },
    ]);
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 container mx-auto gap-4">
                {users.map((user) => (
                    <ProfileCard
                        id={user.id}
                        age={user.age}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        key={user.id}
                    />
                ))}
            </div>
            <UserFormModel
                onCreateUser={(user) => {
                    setUsers((p) => [...p, user]);
                }}
            />
        </>
    );
}
