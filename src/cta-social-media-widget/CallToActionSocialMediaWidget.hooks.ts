import React, { useReducer } from "react";
import HttpMockAxiosAdapter from "../utils/axios-mock-adapter";
import { CALLTOACTIONSOCIALMEDIAWIDGETACTIONS } from "./CallToActionSocialMediaWidget.actions";
import {
  ICallToActionSocialMediaWidgetDispatchActions,
  IState,
} from "./CallToActionSocialMediaWidget.models";
import { callToActionSocialMediaWidgetReducer } from "./CallToActionSocialMediaWidget.reducer";
import {
  CallToActionSocialMediaWidgetServices,
  ICallToActionSocialMediaWidgetService,
} from "./CallToActionSocialMediaWidget.services";

export const useInit = (): {
  state: IState;
  actions: CallToActionSocialMediaWidgetActions;
} => {
  const [state, dispatch] = useReducer<
    (
      state: IState,
      action: ICallToActionSocialMediaWidgetDispatchActions
    ) => IState,
    IState
  >(
    callToActionSocialMediaWidgetReducer,
    {} as IState,
    (arg: IState) => ({} as IState)
  );

  const services = new CallToActionSocialMediaWidgetServices();
  const actions = new CallToActionSocialMediaWidgetActions(
    dispatch,
    services,
    state
  );
  new HttpMockAxiosAdapter();
  return { state, actions };
};

export interface ICallToActionSocialMediaWidgetActions {
  fetchSMS: (cb: (response: any) => void) => void;
  fetchMessenger: (cb: (response: any) => void) => void;
  fetchInstagram: (cb: (response: any) => void) => void;
}

export class CallToActionSocialMediaWidgetActions
  implements ICallToActionSocialMediaWidgetActions
{
  private readonly dispatch: React.Dispatch<ICallToActionSocialMediaWidgetDispatchActions>;
  private readonly service: ICallToActionSocialMediaWidgetService;
  private readonly state: IState;
  constructor(
    dispatch: React.Dispatch<ICallToActionSocialMediaWidgetDispatchActions>,
    service: ICallToActionSocialMediaWidgetService,
    state: IState
  ) {
    this.dispatch = dispatch;
    this.service = service;
    this.state = state;
  }
  fetchSMS: (cb: (response: any) => void) => void = async (cb) => {
    const smsData = await this.service.fetchSMS(cb);
    this.dispatch({
      type: CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_SMS,
      data: smsData.data,
    });
  };
  fetchMessenger: (cb: (response: any) => void) => void = async (cb) => {
    const messengerData = await this.service.fetchMessenger(cb);
    this.dispatch({
      type: CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_MESSENGER,
      data: messengerData.data,
    });
  };
  fetchInstagram: (cb: (response: any) => void) => void = async (cb) => {
    const instagramData = await this.service.fetchInstagram(cb);
    this.dispatch({
      type: CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_INSTAGRAM,
      data: instagramData.data,
    });
  };
}
