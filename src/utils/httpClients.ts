import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import {
  IDispalyToastResponse,
  IMessage,
} from "../cta-social-media-widget/CallToActionSocialMediaWidget.models";

export interface HttpRequest extends AxiosRequestConfig {}
export interface HttpResponse extends AxiosResponse {}
export interface HttpClient extends AxiosInstance {}
export interface HttpError extends AxiosError {}

export interface HttpResponseData<T> {
  data: T;
  errors: string[];
}

const httpClient = axios.create({}) as HttpClient;

const handleRequest = async (httpsRequest: HttpRequest) => ({
  ...httpsRequest,
});
const handleRequestError = (error: HttpError) => Promise.reject(error);
httpClient.interceptors.request.use(handleRequest, handleRequestError);

const handleResponse = (response: HttpResponse) => response;
const handleResponseError = (error: any) => Promise.reject(error);

httpClient.interceptors.response.use(handleResponse, handleResponseError);

interface IParams {
  url: string;
  cb: (data: IDispalyToastResponse<string>) => void;
}

export const fetchServiceWrapper = async (params: IParams) => {
  const responseData: HttpResponseData<IMessage> =
    {} as HttpResponseData<IMessage>;
  // We can initialize logger here;
  const { url, cb } = params;
  try {
    const response = await httpClient.get(url);
    if (response.status === 200) {
      responseData.data = response.data;
      cb({ data: responseData.data.success, status: "success" });
    } else {
      cb({ error: responseData.data.success, status: "failure" });

      responseData.errors = ["Error in loading data"];
    }
  } catch (e) {
    const error = e as any;
    if (error.response) {
      cb({ error: error.response.data.failure, status: "failure" });

      responseData.errors = error?.response.data && [error?.response?.data];
    }
    responseData.errors = responseData.errors || ["Unknown error"];
    //log error here.
  }
  return responseData;
};

export default httpClient;
