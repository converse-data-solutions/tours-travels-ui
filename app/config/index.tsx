import { commonConfiguration } from "./Common";

interface ApiConfig {
  externalservice: {
    backendUrl: string;
  };
}

let backendDomain =
  process.env.BACKEND_DOMAIN || commonConfiguration.externalservice.backendUrl;

const apiConfiguration: ApiConfig = {
  ...commonConfiguration,
  externalservice: {
    backendUrl: backendDomain,
  },
};

export default apiConfiguration;
