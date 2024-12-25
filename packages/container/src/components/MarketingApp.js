import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            // onNavigate is a callback function that will be called
            // whenever the MarketingApp navigates
            // to a different route
            onNavigate: ({ pathname: nextPathname }) => {
                console.log('Container noticed navigation in child marketing app: ', nextPathname);
                const { pathname } = history.location;

                // if the pathname of the MarketingApp is different
                // from the pathname of the container app,
                // navigate the container app to the pathname of the MarketingApp
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}></div>;
}
