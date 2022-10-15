import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export interface HttpRequest extends AxiosRequestConfig {}
export interface HtttpResponse extends AxiosResponse {}
export interface HttpClient extends AxiosInstance {}
export interface HttpsError extends AxiosError {}

export interface HttpResponseData {
  data?: {};
  error?: [];
}

const httpClient = axios.create({}) as HttpClient;

const handleRequest = async (httpsRequest: HttpRequest) => ({
  ...httpsRequest,
});
const handleRequestError = (error: HttpsError) => Promise.reject(error);
httpClient.interceptors.request.use(handleRequest, handleRequestError);

const handleResponse = (response: HtttpResponse) => response;
const handleResponseError = (error: any) => Promise.reject(error);

httpClient.interceptors.response.use(handleResponse, handleResponseError);

export default httpClient;
