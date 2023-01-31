import { WidgetContainer, CardProduct } from 'ui';

export default function container() {
  const randomKey = Math.random();
  return (
    <>
      <br />
      <hr />
      <div className="text-22 font-semibold">Widget using Title</div>
      <WidgetContainer
        useWidgetTitle={true}
        widgetTitle={'Widget title'}
        widgetSeeAllTitle={'SeeAll'}
        widgetSeeAllHref={'https://fd-stg.setoko-test.com"'}
        widgetContent={[
          <CardProduct
            key={randomKey}
            discountPercentage={15}
            ratingCount={4.5}
            item={{
              product: {
                code: 'SF6536JSDF6734',
                name: 'Product Name Lorem Ipsum 123',
                price: {
                  originalPrice: 120000,
                  promoPrice: 99000,
                },
                medias: {
                  url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                },
              },
              quantity: 1,
            }}
            isAddToCart={true}
            addToCartText={'+ Add to Cart'}
          />,
          <CardProduct
            key={randomKey}
            discountPercentage={15}
            ratingCount={4.5}
            item={{
              product: {
                code: 'SF6536JSDF6734',
                name: 'Product Name Lorem Ipsum 123',
                price: {
                  originalPrice: 120000,
                  promoPrice: 99000,
                },
                medias: {
                  url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                },
              },
              quantity: 1,
            }}
            isAddToCart={true}
            addToCartText={'+ Add to Cart'}
          />,
          <CardProduct
            key={randomKey}
            discountPercentage={15}
            ratingCount={4.5}
            item={{
              product: {
                code: 'SF6536JSDF6734',
                name: 'Product Name Lorem Ipsum 123',
                price: {
                  originalPrice: 120000,
                  promoPrice: 99000,
                },
                medias: {
                  url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                },
              },
              quantity: 1,
            }}
            isAddToCart={true}
            addToCartText={'+ Add to Cart'}
          />,
        ]}
      />

      <br />
      <hr />
      <div className="text-22 font-semibold">Widget using Title and Tab</div>
      <WidgetContainer
        useWidgetTitle={true}
        widgetTitle={'Widget title'}
        widgetSeeAllTitle={'SeeAll'}
        widgetSeeAllHref={'https://fd-stg.setoko-test.com"'}
        useWidgetTab={true}
        widgetTab={[
          {
            widgetTabTitle: 'For You',
            widgetTabContent: [
              <CardProduct
                key={randomKey}
                discountPercentage={15}
                ratingCount={4.5}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                isAddToCart={true}
                addToCartText={'+ Add to Cart'}
              />,
              <CardProduct
                key={randomKey}
                discountPercentage={15}
                ratingCount={4.5}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                isAddToCart={true}
                addToCartText={'+ Add to Cart'}
              />,
              <CardProduct
                key={randomKey}
                discountPercentage={15}
                ratingCount={4.5}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                isAddToCart={true}
                addToCartText={'+ Add to Cart'}
              />,
            ],
          },
          {
            widgetTabTitle: 'Best Seller',
            widgetTabContent: [
              <CardProduct
                key={randomKey}
                ratingCount={4.5}
                totalReview={670}
                useRatingStars={true}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                hasStockInfo={true}
                stockInfoMessage={'Few stock left, Order Now'}
                isStockLimited={true}
              />,
              <CardProduct
                key={randomKey}
                ratingCount={4.5}
                totalReview={670}
                useRatingStars={true}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                hasStockInfo={true}
                stockInfoMessage={'Few stock left, Order Now'}
                isStockLimited={true}
              />,
              <CardProduct
                key={randomKey}
                ratingCount={4.5}
                totalReview={670}
                useRatingStars={true}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                hasStockInfo={true}
                stockInfoMessage={'Few stock left, Order Now'}
                isStockLimited={true}
              />,
            ],
          },
        ]}
      />

      <br />
      <hr />
      <div className="text-22 font-semibold">Widget Plain</div>
      <WidgetContainer
        widgetContent={[
          <CardProduct
            key={randomKey}
            discountPercentage={15}
            ratingCount={4.5}
            item={{
              product: {
                code: 'SF6536JSDF6734',
                name: 'Product Name Lorem Ipsum 123',
                price: {
                  originalPrice: 120000,
                  promoPrice: 99000,
                },
                medias: {
                  url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                },
              },
              quantity: 1,
            }}
            isAddToCart={true}
            addToCartText={'+ Add to Cart'}
          />,
          <CardProduct
            key={randomKey}
            discountPercentage={15}
            ratingCount={4.5}
            item={{
              product: {
                code: 'SF6536JSDF6734',
                name: 'Product Name Lorem Ipsum 123',
                price: {
                  originalPrice: 120000,
                  promoPrice: 99000,
                },
                medias: {
                  url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                },
              },
              quantity: 1,
            }}
            isAddToCart={true}
            addToCartText={'+ Add to Cart'}
          />,
          <CardProduct
            key={randomKey}
            discountPercentage={15}
            ratingCount={4.5}
            item={{
              product: {
                code: 'SF6536JSDF6734',
                name: 'Product Name Lorem Ipsum 123',
                price: {
                  originalPrice: 120000,
                  promoPrice: 99000,
                },
                medias: {
                  url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                },
              },
              quantity: 1,
            }}
            isAddToCart={true}
            addToCartText={'+ Add to Cart'}
          />,
        ]}
      />

      <br />
      <hr />
      <div className="text-22 font-semibold">Widget plain with Tab</div>
      <WidgetContainer
        useWidgetTab={true}
        widgetTab={[
          {
            widgetTabTitle: 'For You',
            widgetTabContent: [
              <CardProduct
                key={randomKey}
                discountPercentage={15}
                ratingCount={4.5}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                isAddToCart={true}
                addToCartText={'+ Add to Cart'}
              />,
              <CardProduct
                key={randomKey}
                discountPercentage={15}
                ratingCount={4.5}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                isAddToCart={true}
                addToCartText={'+ Add to Cart'}
              />,
              <CardProduct
                key={randomKey}
                discountPercentage={15}
                ratingCount={4.5}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                isAddToCart={true}
                addToCartText={'+ Add to Cart'}
              />,
            ],
          },
          {
            widgetTabTitle: 'Best Seller',
            widgetTabContent: [
              <CardProduct
                key={randomKey}
                ratingCount={4.5}
                totalReview={670}
                useRatingStars={true}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                hasStockInfo={true}
                stockInfoMessage={'Few stock left, Order Now'}
                isStockLimited={true}
              />,
              <CardProduct
                key={randomKey}
                ratingCount={4.5}
                totalReview={670}
                useRatingStars={true}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                hasStockInfo={true}
                stockInfoMessage={'Few stock left, Order Now'}
                isStockLimited={true}
              />,
              <CardProduct
                key={randomKey}
                ratingCount={4.5}
                totalReview={670}
                useRatingStars={true}
                item={{
                  product: {
                    code: 'SF6536JSDF6734',
                    name: 'Product Name Lorem Ipsum 123',
                    price: {
                      originalPrice: 120000,
                      promoPrice: 99000,
                    },
                    medias: {
                      url: 'https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg',
                    },
                  },
                  quantity: 1,
                }}
                hasStockInfo={true}
                stockInfoMessage={'Few stock left, Order Now'}
                isStockLimited={true}
              />,
            ],
          },
        ]}
      />
    </>
  );
}
