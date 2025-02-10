import React, { useEffect } from "react";

function RedirectToSubdomain({ path }) {
    useEffect(() => {
        const { protocol, hostname, port } = window.location;
        if (!hostname.startsWith("app.")) {
            const newPort = port ? `:${port}` : "";
            window.location.href = `${protocol}//app.${hostname}${newPort}${path}`;
        }
    }, [path]);
    return null;
}

export default RedirectToSubdomain;
