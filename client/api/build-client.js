import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    // Creating a preconfigured instance of axios for the server
    // request should be made to http://ingress-nginx-controller.blahblah

    return axios.create({
      // http://SERVICENAME.NAMESPACE.svc.cluster.local
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    // Creating a preconfigured instance of axios for the browser
    // requests can be made with a base url of '/'

    return axios.create({
      baseURL: "/",
    });
  }
};
