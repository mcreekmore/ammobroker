import {Store} from './store';

export const SigSauer: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: '#product-addtocart-button',
      text: ['add to cart'],
    },
    outOfStock: {
        container: '#form-validate-stock > label',
        text: ['subscribe to back in stock notification'],
      },
    maxPrice: {
      container: 'span[class^="price_column right"]',
      euroFormat: false,
    },
  },
  links: [
    {
        brand: 'sig sauer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.sigsauer.com/9mm-147gr-elite-v-crown-jhp-50ct.html'
    },
    {
        brand: 'sig sauer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.sigsauer.com/9mm-115gr-elite-v-crown-jhp-50.html'
    },
    {
        brand: 'sig sauer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.sigsauer.com/9mm-115gr-elite-v-crown-competition-jhp.html'
    },
    {
        brand: 'sig sauer',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://www.sigsauer.com/5-56x45mm-55gr-fmj-case-of-200-rds.html'
    },
    {
        brand: 'sig sauer',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://www.sigsauer.com/5-56x45mm-55gr-fmj-case-of-200-rds-1.html'
    },
    {
        brand: 'sig sauer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.sigsauer.com/9mm-115gr-jhp-1.html'
    },
    // {
    //     brand: 'federal',
    //     model: 'luger',
    //     series: '9mm',
    //     url: ''
    // },   
  ],
  name: 'sigsauer',
};
