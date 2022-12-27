const users = [
    { id: 1, firstName: "Saraa", lastName: "Naraa"},
    { id: 2, firstName: "Naraa", lastName: "Ganbaa"},
];

exports.getUsers = (req, res, next) => {
    res.status(200).json({
        users: users,
    });
};

exports.createUser = (req, res, next) => {
    console.log(req.body);
    users.push({id: users.length + 1, ...req.body});
    res.status(400).json({message: 'New user is created.'});
};

exports.getUser = (req, res, next) => {
    const { id } = req.params;
    if(id>users.length) {
        res.status(400).json({message: "id is not exist"})
    } else {
        res.status(200).json(users[parseInt(id) - 1]);
    }
}
