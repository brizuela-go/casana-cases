import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'MX',
    defaultLanguageCode: 'ES',
    storeDomain: 'casana-cases2.myshopify.com',
    storefrontToken: import.meta.env.PUBLIC_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-10',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
