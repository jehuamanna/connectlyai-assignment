import { CALLTOACTIONSOCIALMEDIAWIDGETACTIONS } from "./CallToActionSocialMediaWidget.actions";

export type ICallToActionSocialMediaWidgetDispatchActions =
  | { type: CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_SMS; data: ISms }
  | {
      type: CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_MESSENGER;
      data: IMessenger;
    }
  | {
      type: CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_INSTAGRAM;
      data: IInstagram;
    };

interface IMessage {
  success: string;
}
export interface ISms extends IMessage {}
export interface IMessenger extends IMessage {}
export interface IInstagram extends IMessage {}
export interface IState {}
