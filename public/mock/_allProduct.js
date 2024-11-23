const ALLPRODUCTDATA = [
    {
        "id": 11,
        "discountperson": "0",
        "name": "Gaming Remote",
        "description": "Take your gaming experience to the next level with our wireless gaming remote. Featuring an ergonomic design, responsive buttons, and customizable controls, this remote provides the ultimate comfort and precision during intense gaming sessions. Compatible with multiple platforms and equipped with a long-lasting battery, it’s a must-have for serious gamers.",
        "price": 59.99,
        "category": "Gaming",
        "stock": 100,
        "image": "/img/game.png"
    },
    {
        "id": 1,
        "discountperson": "5",
        "name": "Winter Jacket",
        "description": "Stay warm and stylish this winter with our premium winter jacket. Made from high-quality materials, it offers exceptional insulation while maintaining breathability. The sleek design features a detachable hood, multiple pockets, and a windproof zipper, making it perfect for both casual outings and outdoor adventures.",
        "price": 79.99,
        "category": "Clothing",
        "stock": 50,
        "image": "/img/jeket.png"
    },
    {
        "id": 2,
        "discountperson": "0",
        "name": "Keyboard",
        "description": "Enhance your typing experience with our ergonomic keyboard, designed for comfort and efficiency. With quiet keys, responsive touch, and customizable backlighting, this keyboard is perfect for both professional and gaming use. Durable and sleek, it’s the ideal addition to any workstation.",
        "price": 49.99,
        "category": "Electronics",
        "stock": 120,
        "image": "/img/keyboard.png"
    },
    {
        "id": 13,
        "discountperson": "4",
        "name": "LED TV",
        "description": "Experience stunning visuals with our state-of-the-art LED TV. Featuring a high-definition display, vibrant colors, and crystal-clear sound, this TV is perfect for watching your favorite shows, movies, and sports. With multiple connectivity options and a sleek, modern design, it’s a great addition to any living room or entertainment space.",
        "price": 399.99,
        "category": "Electronics",
        "stock": 75,
        "image": "/img/led.png"
    },
    {
        "id": 3,
        "discountperson": "5",
        "name": "Girls' Handbag",
        "description": "This chic girls' handbag is the perfect accessory for every young fashionista. Crafted from high-quality faux leather, it features a spacious interior with multiple compartments to keep all essentials organized. The elegant design is complemented by a vibrant color palette, making it a must-have for every stylish girl.",
        "price": 29.99,
        "category": "Accessories",
        "stock": 75,
        "image": "/img/handbeg.png"
    },
    {
        "id": 3,
        "discountperson": "5",
        "name": "Laptop Bag",
        "description": "This chic girls' handbag is the perfect accessory for every young fashionista. Crafted from high-quality faux leather, it features a spacious interior with multiple compartments to keep all essentials organized. The elegant design is complemented by a vibrant color palette, making it a must-have for every stylish girl.",
        "price": 29.99,
        "category": "Accessories",
        "stock": 75,
        "image": "/img/laptopbagred.webp"
    },
    {
        "id": 3,
        "discountperson": "5",
        "name": "Laptop bag",
        "description": "Empiron Laptop Backpack With USB Connectivity For 15.6 Laptop ELB-02",
        "price": 129.99,
        "category": "Accessories",
        "stock": 75,
        "image": "/img/laptopbag.webp"
    },
    {
        "id": 4,
        "discountperson": "0",
        "name": "Speaker",
        "description": "Experience crystal-clear sound with our portable Bluetooth speaker. Compact yet powerful, it delivers deep bass and rich audio quality, perfect for any occasion. With a long-lasting battery, wireless connectivity, and a sleek design, this speaker is your ideal music companion.",
        "price": 59.99,
        "category": "Electronics",
        "stock": 200,
        "image": "/img/speaker.png"
    },
    {
        "id": 5,
        "discountperson": "3",
        "name": "Book Box Decoration (Wood in Wall)",
        "description": "Add a touch of rustic charm to your home with our wooden book box decoration. Perfect for wall mounting, this handcrafted piece serves as both a functional storage solution and a decorative accent. Its vintage design and natural wood finish make it a great addition to any living space.",
        "price": 39.99,
        "category": "Home Decor",
        "stock": 30,
        "image": "/img/rag.png"
    },
    {
        "id": 6,
        "discountperson": "5",
        "name": "Laptop",
        "description": "Get the power and performance you need with our latest laptop model. Equipped with a fast processor, ample storage, and a high-definition display, this laptop is perfect for both work and play. Sleek, lightweight, and portable, it’s designed to keep up with your busy lifestyle.",
        "price": 999.99,
        "category": "Computers",
        "stock": 25,
        "image": "/img/laptop2.png"
    },
    {
        "id": 7,
        "discountperson": "3",
        "name": "Camera",
        "description": "Capture life's moments in stunning detail with our range of high-quality cameras. Whether you’re a professional photographer or a hobbyist, our cameras offer superior image resolution, versatile shooting modes, and user-friendly features. Perfect for capturing both photos and videos.",
        "price": 499.99,
        "category": "Electronics",
        "stock": 40,
        "image": "/img/camara.png"
    },
    {
        "id": 8,
        "discountperson": "0",
        "name": "Shoes",
        "description": "Step out in style with our latest collection of shoes. Designed for comfort and durability, these shoes are perfect for everyday wear. Available in a variety of styles and sizes, they’re made from premium materials to ensure long-lasting comfort and support.",
        "price": 69.99,
        "category": "Footwear",
        "stock": 100,
        "image": "/img/led.png"
    },
    {
        "id": 9,
        "discountperson": "2",
        "name": "Mobile Phone",
        "description": "Stay connected with our sleek and powerful mobile phone. Featuring a high-resolution display, advanced camera system, and long-lasting battery, this phone is designed to meet all your needs. Its intuitive interface and cutting-edge technology make it a must-have device.",
        "price": 699.99,
        "category": "Electronics",
        "stock": 60,
        "image": "/img/iphoneBlueColor.jpg"
    },
    {
        "id": 10,
        "discountperson": "0",
        "name": "Kids' Remote Car",
        "description": "Bring joy to your little one with our exciting kids' remote car. This toy offers hours of entertainment with its fast speeds, responsive controls, and durable build. The vibrant colors and realistic design make it a favorite among children, encouraging imaginative play.",
        "price": 29.99,
        "category": "Toys",
        "stock": 150,
        "image": "/img/remotecar.png"
    }

]

const bestSellingProduct = [
    {
        "id": 11,
        "discountperson": "0",
        "name": "Gaming Remote",
        "description": "Take your gaming experience to the next level with our wireless gaming remote. Featuring an ergonomic design, responsive buttons, and customizable controls, this remote provides the ultimate comfort and precision during intense gaming sessions. Compatible with multiple platforms and equipped with a long-lasting battery, it’s a must-have for serious gamers.",
        "price": 59.99,
        "category": "Gaming",
        "stock": 100,
        "image": "/img/game.png"
    },
    {
        "id": 1,
        "discountperson": "4",
        "name": "Winter Jacket",
        "description": "Stay warm and stylish this winter with our premium winter jacket. Made from high-quality materials, it offers exceptional insulation while maintaining breathability. The sleek design features a detachable hood, multiple pockets, and a windproof zipper, making it perfect for both casual outings and outdoor adventures.",
        "price": 79.99,
        "category": "Clothing",
        "stock": 50,
        "image": "/img/jeket.png"
    },
    {
        "id": 2,
        "discountperson": "2",
        "name": "Keyboard",
        "description": "Enhance your typing experience with our ergonomic keyboard, designed for comfort and efficiency. With quiet keys, responsive touch, and customizable backlighting, this keyboard is perfect for both professional and gaming use. Durable and sleek, it’s the ideal addition to any workstation.",
        "price": 49.99,
        "category": "Electronics",
        "stock": 120,
        "image": "/img/keyboard.png"
    },
    {
        "id": 13,
        "discountperson": "2",
        "name": "LED TV",
        "description": "Experience stunning visuals with our state-of-the-art LED TV. Featuring a high-definition display, vibrant colors, and crystal-clear sound, this TV is perfect for watching your favorite shows, movies, and sports. With multiple connectivity options and a sleek, modern design, it’s a great addition to any living room or entertainment space.",
        "price": 399.99,
        "category": "Electronics",
        "stock": 75,
        "image": "/img/led.png"
    },
    {
        "id": 3,
        "discountperson": "8",
        "name": "Girls' Handbag",
        "description": "This chic girls' handbag is the perfect accessory for every young fashionista. Crafted from high-quality faux leather, it features a spacious interior with multiple compartments to keep all essentials organized. The elegant design is complemented by a vibrant color palette, making it a must-have for every stylish girl.",
        "price": 29.99,
        "category": "Accessories",
        "stock": 75,
        "image": "/img/handbeg.png"
    },
    {
        "id": 4,
        "discountperson": "0",
        "name": "Speaker",
        "description": "Experience crystal-clear sound with our portable Bluetooth speaker. Compact yet powerful, it delivers deep bass and rich audio quality, perfect for any occasion. With a long-lasting battery, wireless connectivity, and a sleek design, this speaker is your ideal music companion.",
        "price": 59.99,
        "category": "Electronics",
        "stock": 200,
        "image": "/img/speaker.png"
    },
    {
        "id": 5,
        "discountperson": "12",
        "name": "Book Box Decoration (Wood in Wall)",
        "description": "Add a touch of rustic charm to your home with our wooden book box decoration. Perfect for wall mounting, this handcrafted piece serves as both a functional storage solution and a decorative accent. Its vintage design and natural wood finish make it a great addition to any living space.",
        "price": 39.99,
        "category": "Home Decor",
        "stock": 30,
        "image": "/img/rag.png"
    },
    {
        "id": 6,
        "discountperson": "0",
        "name": "Laptop",
        "description": "Get the power and performance you need with our latest laptop model. Equipped with a fast processor, ample storage, and a high-definition display, this laptop is perfect for both work and play. Sleek, lightweight, and portable, it’s designed to keep up with your busy lifestyle.",
        "price": 999.99,
        "category": "Computers",
        "stock": 25,
        "image": "/img/laptop2.png"
    },
    {
        "id": 7,
        "discountperson": "0",
        "name": "Camera",
        "description": "Capture life's moments in stunning detail with our range of high-quality cameras. Whether you’re a professional photographer or a hobbyist, our cameras offer superior image resolution, versatile shooting modes, and user-friendly features. Perfect for capturing both photos and videos.",
        "price": 499.99,
        "category": "Electronics",
        "stock": 40,
        "image": "/img/camara.png"
    },
    {
        "id": 8,
        "discountperson": "0",
        "name": "Shoes",
        "description": "Step out in style with our latest collection of shoes. Designed for comfort and durability, these shoes are perfect for everyday wear. Available in a variety of styles and sizes, they’re made from premium materials to ensure long-lasting comfort and support.",
        "price": 69.99,
        "category": "Footwear",
        "stock": 100,
        "image": "/img/led.png"
    },
    {
        "id": 9,
        "discountperson": "0",
        "name": "Mobile Phone",
        "description": "Stay connected with our sleek and powerful mobile phone. Featuring a high-resolution display, advanced camera system, and long-lasting battery, this phone is designed to meet all your needs. Its intuitive interface and cutting-edge technology make it a must-have device.",
        "price": 699.99,
        "category": "Electronics",
        "stock": 60,
        "image": "/img/iphoneBlueColor.jpg"
    },
    {
        "id": 10,
        "discountperson": "3",
        "name": "Kids' Remote Car",
        "description": "Bring joy to your little one with our exciting kids' remote car. This toy offers hours of entertainment with its fast speeds, responsive controls, and durable build. The vibrant colors and realistic design make it a favorite among children, encouraging imaginative play.",
        "price": 29.99,
        "category": "Toys",
        "stock": 150,
        "image": "/img/remotecar.png"
    }

]

export { bestSellingProduct, ALLPRODUCTDATA };