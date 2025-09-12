import { useState } from "react";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import type { BaseUserI, UserI } from "../types/user";

type Props = {
    onCreateUser: (user: UserI) => void;
};
{
    /* You can open the modal using document.getElementById('ID').showModal() method */
}
{
    /* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */
}

const userSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    age: z
        .number()
        .int()
        .min(1, "Age must be at least 1")
        .max(120, "Age must be less than 120"),
});
export default function UserFormModel({ onCreateUser }: Props) {
    const [user, setUser] = useState<BaseUserI>({
        firstName: "",
        lastName: "",
        age: 0,
    });
    const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        age?: string;
    }>({});

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <form
                    onReset={() => {
                        setUser({
                            firstName: "",
                            lastName: "",
                            age: 0,
                        });
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        // Convert age to number for validation
                        const parsedUser = { ...user, age: Number(user.age) };
                        const result = userSchema.safeParse(parsedUser);
                        if (!result.success) {
                            const fieldErrors: {
                                firstName?: string;
                                lastName?: string;
                                age?: string;
                            } = {};
                            result.error.issues.forEach((err: any) => {
                                if (err.path[0] === "firstName")
                                    fieldErrors.firstName = err.message;
                                if (err.path[0] === "lastName")
                                    fieldErrors.lastName = err.message;
                                if (err.path[0] === "age")
                                    fieldErrors.age = err.message;
                            });
                            setErrors(fieldErrors);
                            return;
                        }
                        setErrors({});
                        onCreateUser({ ...user, id: uuidv4() });
                        const modal = document.getElementById(
                            "my_modal_3"
                        ) as HTMLDialogElement | null;
                        if (modal) {
                            modal.close();
                        }
                        setUser({
                            firstName: "",
                            lastName: "",
                            age: 0,
                        });
                    }}
                    className="flex flex-col gap-2"
                >
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">First name:</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="First Name"
                            value={user.firstName}
                            onChange={(e) => {
                                setUser((p) => ({
                                    ...p,
                                    firstName: e.target.value,
                                }));
                            }}
                        />
                        {errors.firstName && (
                            <span className="text-error text-xs">
                                {errors.firstName}
                            </span>
                        )}
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Last name:</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Last Name"
                            value={user.lastName}
                            onChange={(e) => {
                                setUser((p) => ({
                                    ...p,
                                    lastName: e.target.value,
                                }));
                            }}
                        />
                        {errors.lastName && (
                            <span className="text-error text-xs">
                                {errors.lastName}
                            </span>
                        )}
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Age:</legend>
                        <input
                            type="number"
                            className="input w-full"
                            placeholder="00"
                            value={user.age}
                            onChange={(e) => {
                                setUser((p) => ({
                                    ...p,
                                    age: Number(e.target.value),
                                }));
                            }}
                        />
                        {errors.age && (
                            <span className="text-error text-xs">
                                {errors.age}
                            </span>
                        )}
                    </fieldset>
                    <button type="submit" className="btn btn-primary w-full">
                        Add User
                    </button>
                    <button type="reset" className="btn btn-error w-full">
                        Reset
                    </button>
                </form>
            </div>
        </dialog>
    );
}
