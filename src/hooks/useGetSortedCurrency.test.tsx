import React from "react";
import {renderHook} from "@testing-library/react-hooks";

import {useGetSortedCurrency} from "./useGetSortedCurrency";
import {ReactQueryClientProvider} from "../ReactQueryClientProvider";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const wrapper = ({children}: any) => (
  <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
);

describe("useGetSortedCurrency", () => {
  test("should return currency data", async () => {
    const mock = new MockAdapter(axios);

    const mockData = "response";
    const url = "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";
    mock.onGet(url).reply(200, mockData);

    const {result, waitForNextUpdate} = renderHook(
      () => useGetSortedCurrency(),
      {wrapper},
    );
    expect(result.current.data).toEqual(undefined);
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
  });
});
