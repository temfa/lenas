export const formatter = (amount: number, currency: string = "NGN"): string => {
  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 2, // shows two decimal places
    maximumFractionDigits: 2,
    currencyDisplay: "symbol", // displays the currency symbol
  }).format(amount);

  return formatted;
};
