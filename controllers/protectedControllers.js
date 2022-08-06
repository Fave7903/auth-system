exports.usersOnly = (req, res) => {
    res.status(200).json({message: "Welcome to your --User-- dashboard"})
}

exports.staffOnly = (req, res) => {
    res.status(200).json({message: "Welcome to your --Staff-- dashboard"})
}

exports.managersOnly = (req, res) => {
    res.status(200).json({message: "Welcome to your --Manager-- dashboard"})
}

exports.adminOnly = (req, res) => {
    res.status(200).json({message: "Welcome to your --Admin-- dashboard"})
}