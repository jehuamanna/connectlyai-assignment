import httpClient from "./httpClients";

import MockAxiosAdapter from "axios-mock-adapter";
// This sets the mock adapter on the default instance

class HttpMockAxiosAdapter {
  constructor() {
    const mock = new MockAxiosAdapter(httpClient);

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet("/sms").reply(200, {
      success: "Successfully sent to sms",
    });
    mock.onGet("/messenger").reply(500, {
      failure: "Failed to send to Messenger",
    });
    mock.onGet("/instagram").reply(200, {
      success: "Successfully sent Instagram",
    });
  }
}

export default HttpMockAxiosAdapter;
