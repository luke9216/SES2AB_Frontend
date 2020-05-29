import http from "./HttpService";
import { backendEndpoint } from "../config.json";

const circuitEndpoint = `${backendEndpoint}`;

function circuitUrl(service: string) {
  //  return `${circuitEndpoint}circuits/${service}/`;
  return `http://localhost:9000/circuits/${service}/`;
}

export function circuitUpload(circuit: Array<string>) {
  return http.post(circuitUrl(""), {
    circuit: circuit,
  });
}
