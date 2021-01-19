import {Store} from './store';

export const TargetSportUSA: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: '#product > div.product-info > div.product-options > vinv.vinv_118433 > div > div.stock-info',
      text: ['available'],
    },
    outOfStock: {
        container: 'body',
        text: ['this product is out of stock'],
      },
    maxPrice: {
      container: 'span[class^="price_column right"]',
      euroFormat: false,
    },
  },
  links: [
    {
        brand: 'cci',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/cci-blazer-brass-9mm-luger-ammo-115-grain-full-metal-jacket-5200-p-1008.aspx'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-american-eagle-9mm-ammo-115-grain-ammo-full-metal-jacket-ae9dp-p-660.aspx'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-hst-law-enforcement-9mm-luger-ammo-147-grain-jacketed-hollow-point-p9hst2-p-3547.aspx'   
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-law-enforcement-9mm-luger-ammo-124-grain-hst-jacketed-hollow-point-p9hst1-p-3546.aspx'   
    },
    {
        brand: 'cci',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/cci-blazer-brass-9mm-luger-ammo-124-grain-full-metal-jacket-5201-p-4172.aspx'   
    },
    {
        brand: 'speer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/speer-lawman-9mm-ammo-115-grain-tmj-53650-p-662.aspx'
    },
    {
        brand: 'speer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/speer-lawman-9mm-luger-ammo-124-grain-total-metal-jacket-53651-p-1094.aspx'   
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-ae-9mm-luger-ammo-124-gr-fmj-ae9ap-p-659.aspx'   
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-american-eagle-9mm-luger-ammo-147-grain-full-metal-jacket-ae9fp-p-661.aspx'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-champion-9mm-luger-ammo-115-grain-full-metal-jacket-wm5199-p-3154.aspx'
    },
    {
        brand: 'speer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/speer-gold-dot-law-enforcement-duty-9mm-ammo-124-grain-jhp-53618-p-3526.aspx'
    },
    {
        brand: 'sellier & bellot',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/sellier-bellot-9mm-luger-ammo-115-gr-fmj-sb9a-p-3541.aspx'
    },
    {
        brand: 'speer',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/speer-lawman-9mm-luger-ammo-147-grain-tmj-53620-p-930.aspx'
    },
    {
        brand: 'tulammo',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/tul-ammo-9mm-luger-ammo-115-grain-fmj-steel-case-ta919150-p-3079.aspx'
    },
    {
        brand: 'bronze',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/pmc-bronze-9mm-luger-ammo-115-grain-full-metal-jacket-9a-p-3108.aspx'
    },
    {
        brand: 'aguila',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/aguila-9mm-luger-ammo-115-grain-full-metal-jacket-1e097704-p-3657.aspx'
    },
    {
        brand: 'magtech',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/magtech-sport-9mm-ammo-115-grain-fmj-9a-p-2830.aspx'
    },
    {
        brand: 'geco',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/geco-9mm-luger-ammo-124-grain-fmj-220340050-p-3538.aspx'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/federal-law-enforcement-9mm-luger-ammo-124-grain-hst-jacketed-hollow-point-p9hst3-p-58888.aspx'
    },
    {
        brand: 'hornady',
        model: 'luger',
        series: '9mm',
        url: 'https://www.targetsportsusa.com/hornady-critical-defense-9mm-luger-ammo-115-gr-ftx-90250-p-950.aspx'
    },
    {
        brand: 'hornady',
        model: 'casull',
        series: '454',
        url: 'https://www.targetsportsusa.com/hornady-handgun-hunter-454-casull-ammo-200-grain-monoflex-lead-free-9151-p-110181.aspx'
    },
    // {
    //     brand: 'federal',
    //     model: 'luger',
    //     series: '9mm',
    //     url: ''
    // },
  ],
  name: 'targetsportusa',
};
