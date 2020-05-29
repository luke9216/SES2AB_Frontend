import http from "./HttpService";
import { backendEndpoint } from "../config.json";

const resourceEndpoint = `${backendEndpoint}`;

function resourceUrl(service: string) {
  //  return `${circuitEndpoint}circuits/${service}/`;
  // return `http://localhost:9000/circuits/${service}/`;
}

export function resourceUpload(resource: Array<string>) {
  // return http.post(resourceUrl(""), {
    // resource: resource,
  // });
}
