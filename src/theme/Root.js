import React, { useEffect } from "react";

export default function Root({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
          console.log("Identity initialized:", user);
        });

        window.netlifyIdentity.on("login", () => {
          window.location.reload();
        });
      }
    };
  }, []);

  return <>{children}</>;
}
