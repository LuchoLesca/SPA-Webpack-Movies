const resolveRoutes = (route) => {

    switch (route[0]) {
        case '/':
            return `${route}`
        case ':': 
            return '/:id';
        default:
            return false
    }
};

export default resolveRoutes;