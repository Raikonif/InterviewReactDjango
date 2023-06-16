import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { BASE_BACK_URL } from "~/constants/service.constants.ts";

const service = axios.create({
  baseURL: BASE_BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  return <InternalAxiosRequestConfig<any>>config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

service.interceptors.request.use(onRequest, onRequestError);
service.interceptors.response.use(onResponse, onResponseError);

export { service };
