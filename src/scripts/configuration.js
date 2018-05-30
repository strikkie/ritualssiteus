module.exports = {
    applePay: {
        creditCardName: 'visa credit',
        creditCardNumber: '1234',
        creditCardAddress: '3199-3101 S Calumet Ave, Chicago, IL 60616, USA',
        customer: {
            title: 'Ms',
            firstName: 'Anna',
            lastName: 'Janssen',
            country: 'USA',
            zipCode: 'IL 60616',
            houseNumber: '',
            houseNumberExtension: '000',
            street: '3199-3101 S Calumet Ave',
            city: 'Chicago',
            phone: '00121236543',
            email: 'AnnaJanssen197@gmail.com',
            phone: '555-612345678',
        },
        shipping: {
            today: 0,
            threeDays: 0,
            pickUp: 0,
            address: '3199-3101 S Calumet Ave',
            address2: 'Chicago, IL 60616, USA',
            method: 'Standard Shipping'
        }
    },
    currency: '$',
    shippingPrice: 0,
    estimatedTaxPercentual: 0,
    defaultProductId: "0001",
    products: {
        '0001': {
            id: '0001',
            name: 'Meda - Night Blue',
            category: 'Yoga - Trousers',
            description: 'The Meda yoga trousers are made from a light, thin and breathable material which promotes freedom of movement during your yoga session. Due to the fold over waistband, the trousers have an extra comfortable fit.',
            details: [
                { type: 'Material', value: 'cotton mix' },
                { type: 'Fit', value: 'regular fit' },
                { type: 'Length', value: 'long pants' },
                { type: 'Waist', value: 'mid rise waist' },
                { type: 'Waistband', value: 'fold over waistband' },
                { type: 'Print', value: 'solid colour' },
                { type: 'Size model', value: 'the model is 1.67 m tall and wears a size S' }
            ],
            picture: 'https://s3.eu-west-2.amazonaws.com/pmmdemos-europe/rituals/1103005_MedaNightblueLP.jpg',
            price: '53.00',
            relatedProducts: [
                {
                    name: "The Ritual of Ayurveda Dry Oil",
                    picture: "https://s3.eu-west-2.amazonaws.com/pmmdemos-europe/rituals/017852_TheRitualofAyurvedaDryOil.jpg",
                    price: "29.00"
                },
                {
                    name: "Incense Fragrance Sticks",
                    picture: "https://s3.eu-west-2.amazonaws.com/pmmdemos-europe/rituals/1101635_IncenseFragranceSticks.jpg",
                    price: "59.50"
                },
                {
                    name: "The Ritual of Hammam Scented Candle",
                    picture: "https://s3.eu-west-2.amazonaws.com/pmmdemos-europe/rituals/1101653_TheRitualofHammamScentedCandle.jpg",
                    price: "35.00"
                },
                {
                    name: "Luni Off white LP",
                    picture: "https://s3.eu-west-2.amazonaws.com/pmmdemos-europe/rituals/1103000_LuniOffwhiteLP.jpg",
                    price: "46.00"
                },
            ]
        }
    },
    gift: {
        name: "Happy Buddha Shower Oil",
        picture: "https://s4.thcdn.com/productimg/600/600/11719778-1704568845166028.jpg"
    },
    premiumGift: {
        name: "Premium gift",
        picture: "https://images-na.ssl-images-amazon.com/images/I/61PvoqTM55L._SX342_.jpg"
    }
};
