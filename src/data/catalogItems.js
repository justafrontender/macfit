const goods = [
  {
    id: 1,
    catalogSection: 1,
    name: 'Фитбург Классик',
    pictures: ['img/content/fitburg-classic.jpg'],
    price: 160,
    weight: 230,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 2,
    catalogSection: 1,
    name: 'Фитбург Фулхаус',
    pictures: ['img/content/fitburg-fullhouse.jpg'],
    price: 200,
    weight: 280,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`

  },
  {
    id: 3,
    catalogSection: 1,
    name: 'Фитбург XXL',
    pictures: ['img/content/fitburg-xxl.jpg'],
    price: 260,
    weight: 380,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 4,
    catalogSection: 1,
    name: 'Фитбург Фитбосс',
    pictures: ['img/content/fitburg-fitboss.jpg'],
    price: 350,
    weight: 430,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 5,
    catalogSection: 1,
    name: 'Фитбург Францэ',
    pictures: ['img/content/fitburg-franse.jpg'],
    price: 220,
    weight: 240,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 6,
    catalogSection: 1,
    name: 'Фитбург Гриндэй',
    pictures: ['img/content/burger.jpg'],
    price: 210,
    weight: 280,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 7,
    catalogSection: 2,
    name: 'Раз',
    pictures: ['img/content/burger.jpg'],
    price: 240,
    weight: 470,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 8,
    catalogSection: 2,
    name: 'Два',
    pictures: ['img/content/burger.jpg'],
    price: 220,
    weight: 420,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 9,
    catalogSection: 2,
    name: '',
    pictures: ['img/content/burger.jpg'],
    price: 1246,
    weight: 384,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 10,
    catalogSection: 2,
    name: '',
    pictures: ['img/content/burger.jpg'],
    price: 1246,
    weight: 384,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  },
  {
    id: 11,
    catalogSection: 2,
    name: '',
    pictures: ['img/content/burger.jpg'],
    price: 1246,
    weight: 384,
    description: `Цельнозерновая бездрожжевая булка<br/>
      натуральная куриная котлета «EatFit»*2<br/>
      сыр «Сулугуни»*2<br/>
      йогуртовый соус<br/>
      пекинская капуста<br/>
      перец болгарский<br/>
      корнишон<br/>
      кетчуп<br/>
      лук маринованный<br/>
      зелень`
  }
];

export default goods;
