/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export enum MethodOption {
  GET = "get",
}
export const baseURL = "http://localhost:3000/api/v1";

export const HttpClientService = {
  async get<T>(
    url: string,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return HttpClientService.send<T>({
      ...options,
      url,
      baseURL,
      method: MethodOption.GET,
    });
  },

  async send<T>(
    httpOptions: AxiosRequestConfig
  ): Promise<AxiosResponse<T, any>> {
    httpOptions.headers = {
      ...httpOptions.headers,
    };
    return axios(httpOptions);
  },
};
