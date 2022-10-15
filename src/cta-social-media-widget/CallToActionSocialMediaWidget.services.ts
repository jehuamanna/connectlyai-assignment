import { appConfig } from "../config/appConfig";
import { fetchServiceWrapper, HttpResponseData } from "../utils/httpClients";
import {
  IInstagram,
  IMessenger,
  ISms,
} from "./CallToActionSocialMediaWidget.models";

export interface ICallToActionSocialMediaWidgetService {
  fetchSMS: (cb: (response: any) => void) => Promise<HttpResponseData<ISms>>;
  fetchMessenger: (
    cb: (response: any) => void
  ) => Promise<HttpResponseData<IMessenger>>;
  fetchInstagram: (
    cb: (response: any) => void
  ) => Promise<HttpResponseData<IInstagram>>;
}

export class CallToActionSocialMediaWidgetServices
  implements ICallToActionSocialMediaWidgetService
{
  fetchSMS: (cb: (response: any) => void) => Promise<HttpResponseData<ISms>> =
    async (cb) => {
      let response: HttpResponseData<ISms> = {} as HttpResponseData<ISms>;
      const callToActionFetchService =
        appConfig().api.callToActionFetchService.url;
      let url = `${callToActionFetchService}/sms`;
      response = await fetchServiceWrapper({
        url,
        cb,
      });
      return response;
    };
  fetchMessenger: (
    cb: (response: any) => void
  ) => Promise<HttpResponseData<IMessenger>> = async (cb) => {
    let response: HttpResponseData<IMessenger> =
      {} as HttpResponseData<IMessenger>;
    const callToActionFetchService =
      appConfig().api.callToActionFetchService.url;
    let url = `${callToActionFetchService}/messenger`;
    response = await fetchServiceWrapper({
      url,
      cb,
    });
    return response;
  };
  fetchInstagram: (
    cb: (response: any) => void
  ) => Promise<HttpResponseData<IInstagram>> = async (cb) => {
    let response: HttpResponseData<IInstagram> =
      {} as HttpResponseData<IInstagram>;
    const callToActionFetchService =
      appConfig().api.callToActionFetchService.url;
    let url = `${callToActionFetchService}/instagram`;
    response = await fetchServiceWrapper({
      url,
      cb,
    });
    return response;
  };
}
