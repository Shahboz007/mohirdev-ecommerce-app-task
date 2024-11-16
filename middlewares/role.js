const roleMiddleware = (allowRoles) => async (req, res, next) => {
    if (!req.session.user) {
        return res.status(403).redirect('/auth/login');
    }

    const userRole = req.session.user.adminStatus ? "admin" : 'user';

    if (!allowRoles.includes(userRole)) {
        return res.status(403).redirect('/auth/login');
    }

    next();
}

module.exports = roleMiddleware;