const resolveRoutes = (route) => {

    if (route) {
        const validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
};

export default resolveRoutes;