import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,

            // onNavigate is a callback function that will be called
            // whenever the MarketingApp navigates
            // to a different route
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                console.log('container AuthApp onNavigate: ', nextPathname);

                // if the pathname of the MarketingApp is different
                // from the pathname of the container app,
                // navigate the container app to the pathname of the MarketingApp
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },

            onSignIn,
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}></div>;
}
