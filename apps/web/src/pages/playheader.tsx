/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */

/**
 * This is playground file for configuring TopHeader component
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
import { TopHeader, FooterMain, CardProduct } from 'ui';

/**
 * Search option parameters
 * In MainSearch component we will see search by category section
 * This is parameters for populate the options
 */
const searchOptions = [
  { optionName: 'opt-1' },
  { optionName: 'opt-2' },
  { optionName: 'opt-3' },
  { optionName: 'opt-4' },
];

/**
 * Notif contents parameters
 * For populate items on MiniNotif section
 */
const notifContents = [
  { imgSrc: '/', title: 'title1', description: 'desc1', postDate: 'postDate1' },
  { imgSrc: '/', title: 'title2', description: 'desc2', postDate: 'postDate2' },
  { imgSrc: '/', title: 'title3', description: 'desc3', postDate: 'postDate3' },
  { imgSrc: '/', title: 'title4', description: 'desc4', postDate: 'postDate4' },
  { imgSrc: '/', title: 'title5', description: 'desc5', postDate: 'postDate5' },
];

/**
 * Cart items parameters
 * For populate order data on MiniCart section
 */
const cartItems = [
  {
    itemId: '',
    itemSku: '',
    itemPrice: 1180000,
    itemQtyAmount: 4,
    itemQtyTitle: 'Quantity',
    itemName: 'Product Pre Order',
    itemImgSrc: '/',
    itemAttributes: [
      { name: 'size', value: 20 },
      { name: 'color', value: 'red' },
    ],
    itemInfoPreOrder: {
      expireTime: '5',
      expireUnit: 'Days',
      message: 'pre order time',
    },
    itemInfoDiscount: { discountPercentage: '5%', originalItemPrice: 2800000 },
    itemCurrency: 'IDR',
  },
  {
    itemId: '',
    itemSku: '',
    itemPrice: 1180000,
    itemQtyAmount: 4,
    itemQtyTitle: 'Quantity',
    itemName: 'Product Pre Order',
    itemImgSrc: '/',
    itemAttributes: [{ name: 'color', value: 'white' }],
    itemInfoDiscount: { discountPercentage: '5%', originalItemPrice: 2800000 },
    itemCurrency: 'IDR',
  },
];

/**
 * Menu items parameters
 * For populated menu item in TopMenu section
 */
const menuItems = [
  { menuItemTitle: 'What are you looking for?' },
  { menuItemTitle: '4.4 Sale' },
];

/**
 * Sample use of TopHeader component
 * @returns {React.ReactElement}
 */
export default function playheader() {
  return (
    <>
      <TopHeader
        topbarTitle={'Download FD Studio Apps'}
        topbarDownloadTitle={'Download our app'}
        topbarAlloTitle={'Allo explore'}
        topbarHelpTitle={'Need Help?'}
        topbarLangId={'ID'}
        topbarLangEn={'EN'}
        imgLogoSrc={
          'https://fd-stg.setoko-test.com/media/logo/default/FD_Studiologo.png'
        }
        imgLogoHref={'https://fd-stg.setoko-test.com'}
        altLogoText={'logo'}
        searchAllTitle={'All'}
        searchByTitle={'Search By Category'}
        searchPlaceholder={'What are you looking for'}
        searchOptions={searchOptions}
        notifTotal={58}
        notifTransactionsTabTitle={'Transactions'}
        notifTransactionsTotal={28}
        notifUpdatesTabTitle={'Updates'}
        notifUpdatesTotal={30}
        notifMarkAllTitle={'Mark All'}
        notifViewAllTitle={'View All'}
        notifContents={notifContents}
        cartTotalAmount={12}
        cartEmptyTitle={
          "It's never too late to start adding stuff to your cart :)"
        }
        cartTotalTitle={'Total'}
        cartTotalPrice={3000000}
        cartViewAllTitle={'View All'}
        cartViewAllLink={'/'}
        cartItems={cartItems}
        accountData={{
          name: 'John Doe',
          imgSrc:
            'https://fd-stg.setoko-test.com/media/logo/default/FD_Studiologo.png',
        }}
        authData={{ loginText: 'login', registerText: 'register' }}
        topmenuCategoryTitle={'Categories'}
        topmenuCategoriesMenu={[
          {
            categoryName: 'categoryName1',
            bannerImg:
              'https://e7.pngegg.com/pngimages/258/854/png-clipart-spongebob-spongebob.png',
            categories: [
              {
                categoryName: 'child-1-CategoryName1',
                subCategory: [
                  {
                    categoryName: 'subCategory1-child1',
                    bannerImg:
                      'https://www.kindpng.com/picc/m/84-846788_transparent-jellyfish-png-spongebob-jellyfish-png-png-download.png',
                  },
                  { categoryName: 'subCategory2-child1' },
                ],
              },
              {
                categoryName: 'child-2-CategoryName1',
                bannerImg:
                  'https://www.kindpng.com/picc/m/292-2920798_imagenes-sad-de-bob-esponja-png-download-creator.png',
                categories: [
                  {
                    categoryName: 'subChild1-child-2-CategoryName1',
                    bannerImg:
                      'https://www.kindpng.com/picc/m/84-846856_transparent-gary-spongebob-hd-png-download.png',
                  },
                ],
              },
            ],
          },
          { categoryName: 'categoryName2' },
        ]}
        topmenuItems={menuItems}
      />

      <div className="flex">
        <CardProduct
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
        />

        <CardProduct
          isWishlist={true}
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
        />

        <CardProduct
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
          isAddToCart={true}
          addToCartText={'+ Add to Cart'}
        />

        <CardProduct
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
          stockInfoMessage={'Product Available'}
          isStockAvailable={true}
        />

        <CardProduct
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
        />
      </div>

      <FooterMain
        footerMottoText={[
          'Best Price',
          '100% Authentic',
          'Safe & Trusted',
          'More Product Choices',
          'Exclusive Offers',
        ]}
        footerInfoData={[
          {
            footerInfoTitle: 'Get to Know Us',
            footerInfo: [
              {
                footerInfoText: 'About FD Studio',
                footerInfoLink: '#',
              },
              {
                footerInfoText: 'Inspire Me',
                footerInfoLink: '#',
              },
            ],
          },
          {
            footerInfoTitle: 'Help',
            footerInfo: [
              {
                footerInfoText: 'Help Center',
                footerInfoLink: '#',
              },
              {
                footerInfoText: 'Return and Refund',
                footerInfoLink: '#',
              },
            ],
          },
          {
            footerInfoTitle: 'Buying Guide',
            footerInfo: [
              {
                footerInfoText: 'How to Shop',
                footerInfoLink: '#',
              },
              {
                footerInfoText: 'Safe  Shopping Guarantee',
                footerInfoLink: '#',
              },
            ],
          },
          {
            footerInfoTitle: 'FD Studio Seller',
            footerInfo: [
              {
                footerInfoText: 'Sell On FD Studio',
                footerInfoLink: '#',
              },
              {
                footerInfoText: 'Seller Education Center',
                footerInfoLink: '#',
              },
              {
                footerInfoText: 'Seller Education Center',
                footerInfoLink: '#',
              },
            ],
          },
        ]}
        footerInfoConnect={[
          {
            footerInfoTitle: 'Download Our App',
            footerInfo: [],
          },
          {
            footerInfoTitle: 'Follow Us',
            footerInfo: [],
          },
        ]}
        footerBarTitle={'FD Studio 2021 | Indonesia’s No.1 Beauty Destionation'}
      />
    </>
  );
}
