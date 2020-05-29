import http from "./HttpService";
import { backendEndpoint } from "../config.json";

const resourceEndpoint = `${backendEndpoint}`;

function resourceUrl(service: any) {
  //  return `${circuitEndpoint}circuits/${service}/`;
  // return `http://localhost:9000/circuits/${service}/`;
}

export function resourceUpload(resource: any) {
  // return http.post(resourceUrl(""), {
    // resource: resource,
  // });
}
