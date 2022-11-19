export default class Router {
    constructor(routes){
        this.routes = routes;
    }
    pathToRegex(path) {
        return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
    }

    getParams(match) {
        const values = match.result.slice(1);
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

        return Object.fromEntries(keys.map((key, i) => {
            return [key, values[i]];
        }));
    }

    navigateTo(url) {
        history.pushState(null, null, url);
        this.router();
    }
    async router() {
        const potentialMatches = this.routes.map(route => {
            return {
                route: route,
                result: location.pathname.match(this.pathToRegex(route.path))
            };
        });

        let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

        if (!match) {
            match = {
                route: this.routes[0],
                result: [location.pathname]
            };
        }

        const view = new match.route.view(this.getParams(match));

        document.querySelector("#app").innerHTML = await view.getHtml();
    }
}







