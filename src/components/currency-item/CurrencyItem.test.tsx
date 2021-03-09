import React from "react";
import {CurrencyItem} from "./CurrencyItem";
import {render} from "@testing-library/react";

describe("CurrencyItem", () => {
  it("should render component", async () => {
    const currency = {
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
      nameI18N: "",
      precision: 0,
    };

    const {baseElement} = render(<CurrencyItem currency={currency} />);

    expect(baseElement).toBeInTheDocument();
  });
  it("should render country and rates", async () => {
    const currency = {
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
      nameI18N: "Australian Dollar",
      exchangeRate: {
        buy: 25,
        indicator: 0,
        lastModified: new Date(),
        middle: 0,
        sell: 31,
      },
      flags: [],
      precision: 0,
    };

    const {getByText} = render(<CurrencyItem currency={currency} />);

    const exchangeRate = getByText("Exchange rate: 25");
    const banknoteRate = getByText("Banknote rate: 48");
    const country = getByText("Australia, Currency: Australian Dollar");

    expect(exchangeRate).toBeInTheDocument();
    expect(banknoteRate).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });
});
