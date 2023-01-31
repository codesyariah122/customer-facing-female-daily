/**
 * Convert price number data to currency
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {string}
 */
export function currencyFormat(
  price?: number,
  useDecimal: boolean = false
): string {
  let currency = price
    ? price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      })
    : '0';
  if (!useDecimal) {
    currency = currency.slice(0, -3); //remove decimal
  }
  return currency;
}
