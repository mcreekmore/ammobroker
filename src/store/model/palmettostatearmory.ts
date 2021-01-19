import {Store} from './store';

export const PalmettoStateArmory: Store = {
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
        container: '#maincontent > div.columns > div > div.product-info-main > div.product.alert.stock > a',
        text: ['notify me when back in stock'],
      },
    maxPrice: {
      container: 'span[class^="price_column right"]',
      euroFormat: false,
    },
  },
  links: [
    {
        brand: 'hornady',
        model: 'rem',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/hornady-frontier-223-rem-55gr-fmj-1000rd-bx-fr106.html'
    },
    {
        brand: 'cci',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/cci-5200-9mm-115-grain-1000-round-bulk-pack-cc5000bk1000.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-xm193bk-5-56-1000rd-case.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/american-eagle-5-56mm-62gr-fmj-steel-core-ammunition-1000-rounds-xm855csf.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/american-eagle-223-55gr-fmjbt-ammunition-1000rds-ae223bk.html'
    },
    {
        brand: 'federal',
        model: 'nato',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-american-eagle-5-56-nato-62gr-fmj-820rd-ammo-can-zsam855moi.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-5-56-55gr-fmj-bt-400rd-ammo-can-xm193ml1.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-5-56-55gr-fmj-bt-420rd-loose-m2a1-ammo-can-xm193bk420-ac1.html'
    },
    {
        brand: 'hornady',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/hornady-556-xm193-55gr-fmj-500rd-bx-fr204.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/american-eagle-223-rem-55gr-fmj-bt-ammo-420rds-ae223bk420-ac1.html'
    },
    {
        brand: 'bronze',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/pmc-x-tac-5-56mm-55gr-fmj-ammunition-200rd-sealed-battle-pack-5-56x-bp.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/lake-city-5-56-nato-62-grain-xm855-fmj-on-10-round-clips-in-ammo-can-of-420rds.html'
    },
    {
        brand: 'prvi',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-9mm-fmj-124-gr-1000-round-ammo-can-ppn9mc.html'
    },
    {
        brand: 'bronze',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/catalog/product/view/id/19028/s/pmc-223-55gr-fmj-ammunition-200rd-battle-pack-223a-bp/'
    },
    {
        brand: 'fiocchi',
        model: 'bt',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/fiocchi-extrema-40-gr-v-max-polymer-tip-bt-223-rem-5-56-ammo-200-box-223fhvb.html'
    },
    {
        brand: 'hornady',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/hornady-223-rem-55gr-fmj-500rd-can-fr104.html'
    },
    {
        brand: 'prvi',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-5-56x45mm-m193-fmjbt-55gr-1000-rounds-bulk-pack-ppn5561mc.html'
    },
    {
        brand: 'prvi',
        model: 'm855',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-5-56-m855-62-gr-1000-round-ammo-can-ppn5562mc.html'
    },
    {
        brand: 'prvi',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-9mm-fmj-124-gr-200-round-battle-pack-ppn9bp.html'
    },
    {
        brand: 'winchester',
        model: 'nato',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/winchester-ammunition-55-gr-fmj-5-56-ammo-200-rounds-box-usa556l2.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/lake-city-m855-5-56x45-1000rd-bulk-package.html'
    },
    {
        brand: 'remington',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/remington-umc-55-gr-full-metal-jacket-223-rem-ammo-200-box-l223r3a.html'
    },
    {
        brand: 'fiocchi',
        model: 'nato',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/fiocchi-5-56x45mm-m193-55-gr-420-round-bulk-box-62gr-m193f.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/federal-american-eagle-115-gr-full-metal-jacket-9mm-ammo-200-box-ae9dp200.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/fiocchi-range-dynamics-62-gr-full-metal-jacket-boat-tail-223-rem-5-56-ammo-1000-box-223crd.html'
    },
    {
        brand: 'winchester',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/winchester-ammunition-usa-124-gr-full-metal-jacket-9mm-ammo-1000-box-q4318ac.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/fiocchi-range-dynamics-55-gr-full-metal-jacket-boat-tail-223-rem-5-56-ammo-1000-box-223ard.html'
    },
    {
        brand: 'sig sauer',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/sig-sauer-elite-ball-115-gr-full-metal-jacket-9mm-ammo-50-box-e9mme1200.html'
    },
    {
        brand: 'winchester',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/winchester-ammunition-usa-115-gr-full-metal-jacket-9mm-ammo-500-box-ww9c.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/federal-american-eagle-55-gr-full-metal-jacket-223-rem-5-56-ammo-500-box-ae223bl5ac.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/federal-9mm-luger-115-grain-fmj-blazer-brass-500-round-black-bulk-box.html'
    },
    {
        brand: 'bronze',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/pmc-bronze-9mm-115gr-fmj-ammunition-300rd-sealed-battle-pack-9a-bp.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/fiocchi-range-dynamics-115-gr-full-metal-jacket-9mm-ammo-100-box-9ard100.html'
    },
    {
        brand: 'tula',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/tula-9x19mm-115gr-fmj-steel-cased-ammunition-900rd-sealed-tin-ta919151.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/federal-223-rem-55gr-fmj-bt-300rd-black-bulk-box.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/federal-9mm-115-gr-fmj-250-round-black-pack-c9115bp250.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/fiocchi-range-dynamics-115-gr-full-metal-jacket-9mm-ammo-200-box-9ard.html'
    },
    {
        brand: 'prvi',
        model: 'm855',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-5-56-m855-200rd.html'
    },
    {
        brand: 'prvi',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-5-56-m193-200rd.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-xm193cbp-5-56mm-55gr-fmj-400rd-bulk-pack.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/lake-city-5-56-m855-62gr-300rd-pack.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-5-56-55gr-clipped-in-820rd-ammo-can-xm193k.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/lake-city-5-56-nato-62-grain-xm855f-fmj-not-on-10-round-clips-in-ammo-can-of-420rds.html'
    },
    {
        brand: 'federal',
        model: 'nato',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/bulk-xm855-600rds-in-50-caliber-ammo-can.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/american-eagle-223-rem-55gr-fmj-bt-1000-round-ammo-can-xm223bl-ac.html'
    },
    {
        brand: 'fiocchi',
        model: 'rem',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/223-rem-50gr-hornady-v-max-200rds-in-ammo-can-223fhva.html'
    },
    {
        brand: 'tula',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-55gr-fmj-steel-case-ammunition-500rds-sealed-tin-ta223551.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/fiocchi-223-remington-55gr-fmj-ammunition-200rd-range-pack-223arp.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/fiocchi-9mm-124gr-fmj-ammunition-200rd-range-pack-9crp.html'
    },
    {
        brand: 'hornady',
        model: 'rem',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/hornady-223-remington-55gr-hp-match-american-gunner-ammunition-247rd-can-80828.html'
    },
    {
        brand: 'tula',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-62gr-fmj-steel-cased-ammunition-1000rds-ta223622-case.html'
    },
    {
        brand: 'tula',
        model: 'rem',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-75gr-hp-steel-cased-ammunition-1000rds-ta223754-case.html'
    },
    {
        brand: 'tula',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-55gr-fmj-steel-cased-ammunition-1000rd-case-25-boxes-of-40-ta223540.html'
    },
    {
        brand: 'tula',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-62gr-fmj-steel-cased-ammunition-1000-round-case-50-boxes-of-20-ta223620.html'
    },
    {
        brand: 'tula',
        model: 'rem',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-62gr-hp-steel-case-ammunition-1000-round-case-ta223621.html'
    },
    {
        brand: 'tula',
        model: 'fmj',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-62gr-fmj-steel-cased-ammunition-1000-round-case-ta223102.html'
    },
    {
        brand: 'tula',
        model: 'rem',
        series: '.223rem',
        url: 'https://palmettostatearmory.com/tula-223-remington-62gr-hp-steel-cased-ammunition-1000rds-ta223623-case.html'
    },
    {
        brand: 'magtech',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/catalog/product/view/id/27268/s/magtech-cbc-5-56mm-xm193-55gr-fmj-1000-round-ammo-can-556mil/'
    },
    {
        brand: 'federal',
        model: 'm855',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-5-56mm-62gr-xm855-ammunition-800-rounds-xm855lpcc800.html'
    },
    {
        brand: 'fiocchi',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/fiocchi-9mm-115gr-fmj-ammunition-200-round-range-pack-9arp.html'
    },
    {
        brand: 'prvi',
        model: 'nato',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/prvi-partizan-5-56x45mm-m193-fmjbt-55gr-1000-rounds-cardboard-bulk-box-ppn5561b-ps.html'
    },
    {
        brand: 'winchester',
        model: 'fmj',
        series: '9mm',
        url: 'https://palmettostatearmory.com/winchester-usa-9mm-115gr-fmj-ammunition-200rds-usa9w.html'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://palmettostatearmory.com/federal-american-eagle-syntech-range-115-gr-total-syntech-jacket-round-nose-9mm-ammo-200-box-ae9sj1200.html'
    },
    {
        brand: 'federal',
        model: 'luger',
        series: '9mm',
        url: 'https://palmettostatearmory.com/federal-american-eagle-syntech-range-124-gr-syntech-jacket-round-nose-9mm-ammo-500-box-ae9sj2b500.html'
    },
    {
        brand: 'wolf',
        model: 'luger',
        series: '9mm',
        url: 'https://palmettostatearmory.com/wolf-performance-polyformance-115-gr-full-metal-jacket-9mm-ammo-50-box-919tins.html'
    },
    {
        brand: 'federal',
        model: 'fmj',
        series: '5.56x45mm',
        url: 'https://palmettostatearmory.com/federal-american-eagle-5-56-62gr-fmj-bt-420rd-loose-m2a1-ammo-can-xm855bk420-ac1.html'
    },
    // {
    //     brand: 'federal',
    //     model: 'luger',
    //     series: '9mm',
    //     url: ''
    // },
  ],
  name: 'palmettostatearmory',
};
