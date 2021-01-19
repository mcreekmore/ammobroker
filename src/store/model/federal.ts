import {Store} from './store';

export const Federal: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: 'body > div.page > div > div:nth-child(2) > div:nth-child(2) > div.prices-add-to-cart-actions > div:nth-child(2) > div.col-4.d-flex.flex-column.justify-content-end.align-items-end > div',
      text: ['available'],
    },
    outOfStock: {
        container: 'body > div.page > div > div:nth-child(2) > div:nth-child(2) > div.prices-add-to-cart-actions > div:nth-child(2) > div.col-4.d-flex.flex-column.justify-content-end.align-items-end > div',
        text: ['available in-store only', 'currently unavailable'],
      },
    maxPrice: {
      container: 'span[class^="price_column right"]',
      euroFormat: false,
    },
  },
  links: [
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-XM193LC1+AC1.html'
    },
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-XM193X.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223JX.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223BLX.html'
    },  
    {
      brand: 'federal',
      model: 'rem',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-varmint/11-AE223G.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-XM193BLX.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223N.html'
    },  
    {
      brand: 'federal',
      model: 'rem',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223T75.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-XM855BK150.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-training/11-XM193BK420+AC1.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223BUK1.html'
    },  
    {
      brand: 'federal',
      model: 'rem',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-varmint-and-predator/11-AE22350VP.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-training/11-XM855BK420+AC1.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-XM193+LPC120.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223BUK.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '.223rem',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-AE223BK.html'
    },  
    {
      brand: 'federal',
      model: 'fmj',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-rifle/11-XM855+LPC120.html'
    },  
    {
      brand: 'federal',
      model: 'nato',
      series: '5.56x45mm',
      url: 'https://www.federalpremium.com/rifle/american-eagle/american-eagle-training/11-XM855LC1+AC1.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-handgun/11-AE9AP.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-handgun/11-AE9DP100.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-indoor-range-training-lead-free/11-AE9LF1.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-handgun/11-AE9DP.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-handgun/11-AE9FP.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-indoor-range-training/11-AE9N1.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-indoor-range-training/11-AE9N2.html'
    },  
    {
      brand: 'federal',
      model: 'luger',
      series: '9mm',
      url: 'https://www.federalpremium.com/handgun/american-eagle/american-eagle-handgun-suppressor/11-AE9SUP1.html'
    },  
    
    // {
    //     brand: 'federal',
    //     model: 'luger',
    //     series: '9mm',
    //     url: ''
    // },   
  ],
  name: 'federal',
};
