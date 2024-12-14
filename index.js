import Router from "./paramHashRouter.js";
import Routes from "./routes.js";

window.router = new Router(Routes,"welcome");

window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    const route = routes.find(route => route.hash === hash);
    if (route) {
        route.getTemplate(route.target);
    }
});

// Initial load
if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
} else {
    // Load the welcome page by default
    window.location.hash = "welcome";
}