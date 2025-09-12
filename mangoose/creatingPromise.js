const accept = true;
const postTicket = async function () {
    if (accept) {
        return "you have been accepted";
    } else {
        throw new Error("you have been refused");
    }
};

postTicket()
    .then(() => {
        console.log("accepted");
    })
    .catch(() => {
        console.error("refused");
    });
