import {Store} from './store';

export const Natchez: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: '#product_addtocart_form > div.add-to-box > div > button',
      text: ['add to cart'],
    },
    outOfStock: {
        container: 'body > div.wrapper > div > div > div.main.col1-layout > div > div.product-view > div.product-essential.clearfix > div.product-shop > div.product-main-info > div.sku-container > div.price-box-outer > p',
        text: ['out of stock'],
      },
    maxPrice: {
      container: 'span[class^="price_column right"]',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url:
        'https://www.natchezss.com/american-eagle-handgun-ammunition-9mm-luger-115-gr-fmj-1180-fps-100-ct.html',
    },
    {
        brand: 'winchester',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/winchester-usa-forged-9mm-luger-steel-case-115-gr-fmj-handgun-ammunition.html'
    },
    {
        brand: 'cci',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/cci-blazer-brass-handgun-ammunition-9mm-luger-115-gr-fmj-1145-fps-1000-ct-loose-pack.html'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/american-eagle-handgun-ammunition-9mm-luger-124-gr-fmj-1150-fps-50-ct.html'
    },
    {
        brand: 'cci',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/cci-blazer-aluminum-handgun-ammunition-9mm-luger-124-gr-fmj-1090-fps-50-ct.html'
    }
    ,
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/federal-american-eagle-syntech-handgun-ammuntion-9mm-luger-150-gr-tsj-50-ct.html'
    }
    ,
    {
        brand: 'bronze',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/pmc-bronze-handgun-ammunition-9mm-luger-115-gr-fmj-1150-fps-50-box.html'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/federal-champion-handgun-ammunition-9mm-luger-115-gr-fmj-50-box.html'
    },
    {
        brand: 'bronze',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/pmc-bronze-handgun-ammunition-9mm-luger-115-gr-fmj-1150-fps-1000-ct.html'
    },
    {
        brand: 'cci',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/cci-blazer-brass-handgun-ammunition-9mm-luger-115-gr-fmj-1145-fps-100-ct.html'
    },
    {
        brand: 'winchester',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/winchester-usa-handgun-ammunition-9mm-luger-115-gr-fmj-100-box.html'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/american-eagle-handgun-ammunition-9mm-luger-124-gr-fmj-1150-fps-1000-ct.html'
    },
    {
        brand: 'winchester',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/winchester-usa-handgun-ammunition-9mm-luger-115-gr-fmj-200-rds-bulk.html'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/federal-premuim-personal-defense-hydra-shok-low-recoil-ammunition-9mm-luger-135-gr-jhp-1060-fps-20-box.html'
    },
    {
        brand: 'hornady',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/hornady-critical-duty-handgun-ammo-9mm-luger-p-135-gr-flex-tip-1110-fps-25-box.html'
    },
    {
        brand: 'ppu',
        model: 'luger',
        series: '9mm',
        url: 'https://www.natchezss.com/ppu-handgun-ammunition-9mm-luger-124-gr-fmj-1120-fps-50-ct.html'
    }

  ],
  name: 'natchez',
};
