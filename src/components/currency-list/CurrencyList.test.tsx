import React from "react";
import {CurrencyList} from "./CurrencyList";
import {render} from "@testing-library/react";

describe("CurrencyList", () => {
  it("should render currency list", async () => {
    const {getByText} = render(
      <CurrencyList
        items={[
          {
            banknoteRate: {
              buy: 48,
              indicator: 0,
              lastModified: new Date(),
              middle: 0,
              sell: 59,
            },
            countryName: "Australia",
            countryCode: "AU",
            currency: "AUD",
            denominations: [],
            exchangeRate: {
              buy: 25,
              indicator: 0,
              lastModified: new Date(),
              middle: 0,
              sell: 31,
            },
            flags: [],
            nameI18N: "Australian Dollar",
            precision: 0,
          },
        ]}
        loading={false}
      />,
    );

    const country = getByText("Australia, Currency: Australian Dollar");
    expect(country).toBeInTheDocument();
  });
});
