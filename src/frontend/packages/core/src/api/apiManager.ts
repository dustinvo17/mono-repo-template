import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import chalk from "chalk";
import { config } from "../config";

class ApiManager {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log(chalk.yellow(`Making ${config?.method?.toUpperCase()} request to API:  ${config.url}`), {
          headers: config.headers,
          body: config.data
        });
        return config;
      },
      (error) => {
        console.log(chalk.red("Error making request to API:"), {
          error
        });
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response) => {
        console.log(chalk.green("Received response from API:"), {
          response: response.data
        });
        console.log(chalk.green(`${response.status} ${response.statusText}`));
        return response;
      },
      (error) => {
        console.log(chalk.red("Error received from API:"), {
          error
        });
        return Promise.reject(error);
      }
    );
  }

  setHeader(key: any, value: any) {
    this.client.defaults.headers.common[key] = value;
  }
}

export const apiManager = new ApiManager();