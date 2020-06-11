import http from "./HttpService";
import { backendEndpoint } from "../config.json";

const circuitEndpoint = `${backendEndpoint}`;

function circuitUrl(service: string) {
  //  return `${circuitEndpoint}circuits/${service}/`;
  //api.ses2a.zyrn.dev/
  return `https://api.ses2a.zyrn.dev/circuits/${service}`;
}

export function circuitUpload(circuit: Array<string>) {
  return http.post(circuitUrl(""), {
    circuit: circuit,
  });
}

export function circuitRetrieve() {
  return http.get(circuitUrl(""), {});
}
