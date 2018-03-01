const deliveryTypes = [
  {
    id: 'pickup',
    name: 'Заберу самостоятельно',
    tariff: {
      basePrice: 0
    }
  },
  {
    id: 'delivery_fast',
    name: 'Доставка по Краснодару',
    tariff: {
      basePrice: 250
    },
    fields: [
      {
        name: 'address',
        title: 'Адрес',
        type: 'text',
        required: true
      }
    ]
  }
];

export default deliveryTypes;
