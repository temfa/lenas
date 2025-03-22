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

export function generateRandomID(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
