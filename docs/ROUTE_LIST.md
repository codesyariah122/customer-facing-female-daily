# ROUTE LIST

<domain>/products ->>> ini URL untuk crawling product (Google Ads atau Facebook Ads)

<domain>/category/[Category-0]/[Category-1] ->>> Produk list berdasarkan kategori
->> <domain>/product/url-key-dan-sku -->>> produk detail
->> <domain>/product/recomendation/<url-key-product-set> ->> product list tanpa filter

<domain>/products/search?q=XXXX&cat=xxx&popular=XXX

<domain>/flashsale --->>> (campign primary)
<domain>/flashsale/[Category-0] --->>> (flashsale untuk Category-0)

<domain>/brands ->>> brand directory page
<domain>/brand/[url-key-brand] -->> PLP

<domain>/promo/coupon ->>> ini promo dengan code
<domain>/promo/ ->> semua list promo card
<domain>/promo/[detail-url-key] ->>> detail promo dan coupon

<domain> ->> BLOG ->> ini ke website femaledaily
<domain> ->> REVIEW ->> ini ke website review femaledaily

<domain>/[static-page] --->>
<domain>/help-center --->> ???

<domain>/checkout/cart --->> list product di dalam shoping cart (GUEST masih bisa akses)
<domain>/checkout --->> trigger LOGIN dialog --->>> redirect to this page kalo KOSONG ke HOMEPAGE

<domain>/account/orders
->> <domain>/account/order/[order-id]
->> <domain>/account/order/invoice/[invoice-id]
<domain>/account/reviews --->> femaledaily website????
<domain>/account/profile -->> settings akses ke MPC
<domain>/account/wishlist
<domain>/account/address
<domain>/account/notification
<domain>/account/payments
<domain>/account/issues
<domain>/account/coupons
