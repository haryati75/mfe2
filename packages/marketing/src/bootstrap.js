import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
    // Create a memory history object
    // If defaultHistory is provided, use it
    const history = defaultHistory || createMemoryHistory();

    // Child to Container communication
    // --------------------------------
    // If there is a callback function onNavigate,
    // call it whenever the history object changes
    // listen will pass the location object to onNavigate
    // the location object contains the pathname
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        // Container to Child communication
        // --------------------------------
        // onParentNavigate is a callback function that is returned
        // to the container app so that the container app can
        // call it whenever the Container navigates
        onParentNavigate({ pathname: nextPathname }) {
            console.log('Container just navigated: ', nextPathname);
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are running through container,
// and we should export the mount function
export { mount };

