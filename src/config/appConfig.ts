interface IAppConfig {
  api: {
    [key: string]: { url: string; headers: string; token: string };
  };
}

export function appConfig() {
  return {
    api: { callToActionFetchService: { url: "", headers: "", token: "" } },
  } as IAppConfig;
}
