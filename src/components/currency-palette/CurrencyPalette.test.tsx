import React from "react";
import {CurrencyPalette} from "./CurrencyPalette";
import {fireEvent, render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe("CurrencyPalette", () => {
  describe("when empty search", () => {
    it("should render all curencies", async () => {
      const {container, getByPlaceholderText} = render(
        <CurrencyPalette
          currencies={[
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
              nameI18N: "",
              precision: 0,
            },
            {
              banknoteRate: {
                buy: 4,
                indicator: 0,
                lastModified: new Date(),
                middle: 0,
                sell: 5,
              },
              countryName: "Hungary",
              countryCode: "HU",
              currency: "HUF",
              denominations: [],
              exchangeRate: {
                buy: 2,
                indicator: 0,
                lastModified: new Date(),
                middle: 0,
                sell: 3,
              },
              flags: [],
              nameI18N: "",
              precision: 0,
            },
          ]}
          isLoading={false}
        />,
      );
      const country = getByPlaceholderText("Search by country name...");
      const listItems = container.querySelector("ul");

      expect(listItems?.children.length).toBe(2);
      expect(country).toHaveValue("");
    });
  });
  describe("when search value not empty", () => {
    it("should render filtered currencies", async () => {
      const {getByPlaceholderText, container} = render(
        <CurrencyPalette
          currencies={[
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
              nameI18N: "",
              precision: 0,
            },
            {
              banknoteRate: {
                buy: 4,
                indicator: 0,
                lastModified: new Date(),
                middle: 0,
                sell: 5,
              },
              countryName: "Hungary",
              countryCode: "HU",
              currency: "HUF",
              denominations: [],
              exchangeRate: {
                buy: 2,
                indicator: 0,
                lastModified: new Date(),
                middle: 0,
                sell: 3,
              },
              flags: [],
              nameI18N: "",
              precision: 0,
            },
          ]}
          isLoading={false}
        />,
      );

      const country = getByPlaceholderText("Search by country name...");

      const listItems = container.querySelector("ul");

      act(() => {
        fireEvent.change(country, {target: {value: "Australia"}});
      });

      expect(listItems?.children.length).toBe(1);
      expect(country).toHaveValue("Australia");
    });
  });
});
