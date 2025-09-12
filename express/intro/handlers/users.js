const users = [];
export function getUsers(req, res) {
    res.json(users);
}
export function createUser(req, res) {
    /* console.log(req.body); */
    if (req.body) {
        users.push(req.body);
        res.json({
            success: true,
            message: "you have added a new user",
        }); // we can replace send by json
    } else {
        throw new Error("the body doesn't have data");
    }
}

export function updateUser(req, res) {
    if (req.body) {
        if (req.body.id) {
            const { id: userId, ...data } = req.body;
            const userIndex = users.findIndex((user) => {
                return user.id === userId;
            });
            if (userIndex < 0) throw new Error("user not found");
            users[userIndex] = { id: userId, ...data };
            res.json({
                message: "user updated successfully",
                success: true,
            });
        } else {
            throw new Error("the body doesn't have data");
        }
    } else {
        throw new Error("the id doesn't exist");
    }
}

export function deleteUser(req, res) {
    if (req.body) {
        if (req.body.id) {
            const { id: userId } = req.body;
            const userIndex = users.findIndex((user) => {
                return user.id === userId;
            });
            if (userIndex < 0) throw new Error("User not found");
            users.splice(userIndex, 1);
            res.json({
                success: true,
                message: "user deleted successfully",
            });
        } else {
            throw new Error("The id doesn't exist");
        }
    } else {
        throw new Error("The body doesn't have data");
    }
}
