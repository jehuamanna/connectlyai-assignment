import { CALLTOACTIONSOCIALMEDIAWIDGETACTIONS } from "./CallToActionSocialMediaWidget.actions";
import {
  ICallToActionSocialMediaWidgetDispatchActions,
  IState,
} from "./CallToActionSocialMediaWidget.models";

export const callToActionSocialMediaWidgetReducer = (
  state: IState,
  action: ICallToActionSocialMediaWidgetDispatchActions
): IState => {
  switch (action.type) {
    case CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_SMS:
      return { ...state, sms: action.data };
    case CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_MESSENGER:
      return { ...state, messenger: action.data };
    case CALLTOACTIONSOCIALMEDIAWIDGETACTIONS.FETCH_INSTAGRAM:
      return { ...state, instagram: action.data };
    default:
      return state;
  }
};
