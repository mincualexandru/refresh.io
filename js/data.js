let products = [
    {
        name: "Maqui Mint Mango",
        tag: "maqui-mint-mango",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Cashews",
                quantity: "15 gr",
                price: 0.7
            },
            {
                name: "Mango",
                quantity: "60 gr",
                price: 0.5
            },
            {
                name: "Mint",
                quantity: "3 sprigs",
                price: 0.5
            },
            {
                name: "Maqui Berry",
                quantity: "20 gr",
                price: 0.8
            },
            {
                name: "Pear",
                quantity: "30 gr",
                price: 0.4
            }
        ],
        inCart: 0,
        stock: 5,
        hueColorDeg: 0,
        type: "weightLossSmoothie",
        description:
            "The Maqui Mint Mango will make you go “Mmm!”. Blackberries and mangos may come from two totally different places, but they’re both full of antioxidants and natural sweetness.",
    },
    {
        name: "Kabocha Squash",
        tag: "kabocha-squash",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Banana",
                quantity: "120 gr",
                price: 1
            },
            {
                name: "Cinnamon",
                quantity: "15 gr",
                price: 0.1
            },
            {
                name: "Almond Milk",
                quantity: "120 ml",
                price: 0.7
            },
            {
                name: "Kabocha Squash",
                quantity: "100 gr",
                price: 2
            },
            {
                name: "Almond Butter",
                quantity: "37 gr",
                price: 0.2
            }
        ],
        inCart: 0,
        stock: 10,
        hueColorDeg: 270,
        type: "weightLossSmoothie",
        description:
            "Cozy fall flavors meet tropical sweetness. One serving of mango provides three grams of fiber, as well as 100 percent of the daily amount of vitamin C we all need. Mangos also provide a good dose of vitamin A and folate.",
    },
    {
        name: "Green Island",
        tag: "green-island",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Strawberries",
                quantity: "35 gr",
                price: 0.2
            },
            {
                name: "Pineapple",
                quantity: "60 gr",
                price: 0.7
            },
            {
                name: "Mango",
                quantity: "80 gr",
                price: 0.8
            },
            {
                name: "Banana",
                quantity: "120 gr",
                price: 1
            },
            {
                name: "Spinach",
                quantity: "20 gr",
                price: 0.3
            },
            {
                name: "Lime Juice",
                quantity: "40 ml",
                price: 0.1
            },
            {
                name: "Coconut Milk",
                quantity: "60 ml",
                price: 0.3
            }
        ],
        inCart: 0,
        stock: 11,
        hueColorDeg: 324,
        type: "proteinSmoothie",
        description:
            "Wheatgrass has been a health food staple for centuries, and has been labeled a potent detoxifier for most of that time. High in protein, fiber, vitamin C and Chlorophyll, wheatgrass assists the thyroid gland.",
    },
    {
        name: "Coconut Pineapple",
        tag: "coconut-pineapple",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Pineapple",
                quantity: "60 gr",
                price: 0.7
            },
            {
                name: "Vanilla",
                quantity: "20 gr",
                price: 0.2
            },
            {
                name: "Yogurt",
                quantity: "120 gr",
                price: 1
            },
            {
                name: "Coconut milk",
                quantity: "60 ml",
                price: 0.3
            },
            {
                name: "Almond Milk",
                quantity: "120 ml",
                price: 0.8
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 114,
        type: "weightLossSmoothie",
        description:
            "Nothing says “tropical” quite like an ice cold coconut drink, and not only can Bai’s Molokai Coconut transport you to a tropical island, it’s also packed with the antioxidants and electrolytes Bai is known for.",
    },
    {
        name: "Persimmon Pineapple",
        tag: "persimmom-pineapple",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Pineapple",
                quantity: "100 gr",
                price: 0.9
            },
            {
                name: "Persimmon",
                quantity: "50 gr",
                price: 0.6
            },
            {
                name: "Cinnamon",
                quantity: "15 gr",
                price: 0.1
            },
            {
                name: "Flaxseed",
                quantity: "15 gr",
                price: 0.3
            },
            {
                name: "Peach",
                quantity: "120 ml",
                price: 0.5
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 200,
        type: "proteinSmoothie",
        description:
            "Originally native to China, persimmons are now grown all over the world. Known as “nature’s candy,” persimmons have a sweet, almost honey-like flavor, and are full of vitamin C. Flax is one of the oldest cultivated crops in the world.",
    },
    {
        name: "Pineapple Parsnip",
        tag: "pineapple-parsnip",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Pineapple",
                quantity: "100 gr",
                price: 0.9
            },
            {
                name: "Coconut Oil",
                quantity: "25 ml",
                price: 0.6
            },
            {
                name: "Lime",
                quantity: "35 gr",
                price: 0.2
            },
            {
                name: "Almond Milk",
                quantity: "100 ml",
                price: 0.6
            },
            {
                name: "Frozen Banana",
                quantity: "120 gr",
                price: 0.8
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 65,
        type: "weightLossSmoothie",
        description:
            "Parsnips are a starchy, high fiber, low calorie vegetable, making them a perfect base for a smoothie, and a great substitute for potatoes in many recipes. They’re also a good source of folate and vitamin C.",
    },
    {
        name: "Creamy Cauliflower",
        tag: "creamy-cauliflower",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Strawberries",
                quantity: "100 gr",
                price: 0.9
            },
            {
                name: "Mango",
                quantity: "25 ml",
                price: 0.6
            },
            {
                name: "Cauliflower",
                quantity: "35 gr",
                price: 0.4
            },
            {
                name: "Cucumber",
                quantity: "100 ml",
                price: 0.2
            },
            {
                name: "Lemon Juice",
                quantity: "120 gr",
                price: 0.2
            },
            {
                name: "Coconut Water",
                quantity: "120 gr",
                price: 0.1
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 150,
        type: "weightLossSmoothie",
        description:
            "Rarely is creamy a term we hear when dieting. And rarely is cauliflower used in the same sentence as pina colada. But, much like the interesting juxtaposition of these words, this smoothie will surprise you.",
    },
    {
        name: "Kiwi Pear",
        tag: "kiwi-pear",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Yogurt",
                quantity: "100 gr",
                price: 0.9
            },
            {
                name: "Pear",
                quantity: "120 gr",
                price: 1
            },
            {
                name: "Banana",
                quantity: "80 gr",
                price: 0.4
            },
            {
                name: "Honey",
                quantity: "25 ml",
                price: 0.3
            },
            {
                name: "Kiwi",
                quantity: "120 gr",
                price: 1.2
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 343,
        type: "weightLossSmoothie",
        description:
            "Reishi mushrooms, which are native to Asia, have been used for centuries to help increase lifespan. The polysaccharide molecules in reishi have been scientifically proven to boost immunity and fight cancerous tumors.",
    },
    {
        name: "Kumquat Kiwi",
        tag: "kumquat-kiwi",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Kumquat",
                quantity: "25 gr",
                price: 0.5
            },
            {
                name: "Flaxseed",
                quantity: "20 gr",
                price: 1
            },
            {
                name: "Apple",
                quantity: "80 gr",
                price: 0.4
            },
            {
                name: "Kiwi",
                quantity: "65 gr",
                price: 0.5
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 392,
        type: "proteinSmoothie",
        description:
            "Kumquats are a small tart citrus fruit native to south Asia and the Asia Pacific region. The rind of these olive-sized fruits can be eaten. Kumquats are a source of calcium, antioxidants, and fiber. They aid digestive health and have a tart, floral flavor. ",
    },
    {
        name: "Superfruit Refresh",
        tag: "superfruit-refresh",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Pear",
                quantity: "65 gr",
                price: 0.7
            },
            {
                name: "Cashews",
                quantity: "30 gr",
                price: 1
            },
            {
                name: "Orange",
                quantity: "80 gr",
                price: 0.5
            },
            {
                name: "Banana",
                quantity: "120 gr",
                price: 1
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 360,
        type: "proteinSmoothie",
        description:
            "The fruit contains both anti-inflammatory and antiseptic properties (making it a great immune-boosting ingredient), and may even help lower cholesterol and regulate sleep patterns. Flaxseed is a great vegan source of Omega-3s.",
    },
    {
        name: "Green Coconut Energizer",
        tag: "green-coconut-energizer",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Orange",
                quantity: "65 gr",
                price: 0.8
            },
            {
                name: "Chia Seeds",
                quantity: "30 gr",
                price: 0.3
            },
            {
                name: "Pineapple",
                quantity: "50 gr",
                price: 0.3
            },
            {
                name: "Coconut",
                quantity: "30 gr",
                price: 0.3
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 210,
        type: "proteinSmoothie",
        description:
            "This green smoothie will keep you going and going and going. All thanks to chia seeds. Aztec warriors credited this superfood with giving them high energy and endurance, believing that a serving could sustain them for 24 hours.",
    },
    {
        name: "Hibiscus Peach",
        tag: "hibiscus-peach",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Banana",
                quantity: "150 gr",
                price: 1.2
            },
            {
                name: "Flaxseed",
                quantity: "30 gr",
                price: 0.3
            },
            {
                name: "Peach",
                quantity: "90 gr",
                price: 0.8
            },
            {
                name: "Hibiscus",
                quantity: "55 gr",
                price: 0.8
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 55,
        type: "proteinSmoothie",
        description:
            " Another super healthy food you might not know too much about, Hibiscus has been used for its anti-inflammatory properties for centuries. Besides their floral, calming taste, hibiscus flowers have been shown to lower blood pressure and cholesterol.",
    },
    {
        name: "Tropical Recharger",
        tag: "tropical-recharger",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Banana",
                quantity: "85 gr",
                price: 0.9
            },
            {
                name: "Lime",
                quantity: "30 gr",
                price: 0.3
            },
            {
                name: "Ginger",
                quantity: "60 gr",
                price: 0.7
            },
            {
                name: "Mint",
                quantity: "60 gr",
                price: 0.2
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 240,
        type: "proteinSmoothie",
        description:
            "The key to a healthy, sustainable way of exercising means choosing workouts that not only are good for your body, but that you actually enjoy. The same reasoning applies to what you put into your body via your mouth.",
    },
    {
        name: "Peach Blueberry",
        tag: "peach-blueberry",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Frozen Peaches",
                quantity: "85 gr",
                price: 0.4
            },
            {
                name: "Frozen Blueberries",
                quantity: "30 gr",
                price: 0.6
            },
            {
                name: "Chia Seeds",
                quantity: "20 gr",
                price: 0.3
            },
            {
                name: "Orange",
                quantity: "80 gr",
                price: 0.8
            },
            {
                name: "Milk",
                quantity: "90 gr",
                price: 0.5
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 0,
        type: "proteinSmoothie",
        description:
            "A healthy smoothie that's also Whole30-approved? Yes, please! This sweet smoothie will have you feeling like it's summertime in the dead of winter with blueberries and peaches. Plus, you'll get your daily dose of greens with nutrient-rich kale.",
    },
    {
        name: "Apple Crisp",
        tag: "apple-crisp",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Fat Milk",
                quantity: "85 ml",
                price: 0.6
            },
            {
                name: "Vanilla",
                quantity: "30 gr",
                price: 0.2
            },
            {
                name: "Greek Yogurt",
                quantity: "100 gr",
                price: 0.7
            },
            {
                name: "Apple",
                quantity: "100 gr",
                price: 0.4
            },
            {
                name: "Cinnamon",
                quantity: "30 gr",
                price: 0.2
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 280,
        type: "proteinSmoothie",
        description:
            "Savor the taste of fall with this delicious smoothie, which features apple cider vinegar, Greek yogurt, rolled oats, pecans, and warming spices, such as cinnamon and nutmeg. This delicious smoothie is also rich in protein and beta-glucan.",
    },
    {
        name: "Stawberry Kiwi",
        tag: "strawberry-kiwi",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Banana",
                quantity: "100 gr",
                price: 1
            },
            {
                name: "Kiwi",
                quantity: "100 gr",
                price: 1.2
            },
            {
                name: "Greek Yogurt",
                quantity: "100 gr",
                price: 0.7
            },
            {
                name: "Pineapple",
                quantity: "50 gr",
                price: 0.8
            },
            {
                name: "Strawberries",
                quantity: "70 gr",
                price: 0.9
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 465,
        type: "proteinSmoothie",
        description:
            "Stay full and fight disease. This high-fiber smoothie recipe becomes even healthier when you use organic kiwis, which contain higher levels of heart-healthy polyphenols and vitamin C. ",
    },
    {
        name: "Cranberry Citrus",
        tag: "cranberry-citrus",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Pear",
                quantity: "1",
                price: 0.5
            },
            {
                name: "Mango",
                quantity: "60 gr",
                price: 0.9
            },
            {
                name: "Blackberries",
                quantity: "30 gr",
                price: 1.1
            },
            {
                name: "Maqui Berry",
                quantity: "20 gr",
                price: 0.5
            },
            {
                name: "Apple",
                quantity: "60 gr",
                price: 0.2
            },
            {
                name: "Milk",
                quantity: "80 ml",
                price: 0.4
            }
        ],
        inCart: 0,
        stock: 18,
        hueColorDeg: 496,
        type: "proteinSmoothie",
        description:
            "This heavenly citrus drink provides a burst of vitamin C and refreshing tart flavor from a blend of cranberries and oranges. Frozen bananas and a hint of vanilla extract add balance, with a base of plain Greek yogurt for extra protein.",
    },
    {
        name: "Pumpkin Coconut",
        tag: "pumpkin-coconut",
        set setPrice(newPrice) {
            this.price = newPrice;
        },
        price: 0,
        ingredients: [
            {
                name: "Pear",
                quantity: "1",
                price: 0.5
            },
            {
                name: "Mango",
                quantity: "60 gr",
                price: 0.9
            },
            {
                name: "Blackberries",
                quantity: "30 gr",
                price: 1.1
            },
            {
                name: "Maqui Berry",
                quantity: "20 gr",
                price: 0.5
            }
        ],
        inCart: 0,
        stock: 50,
        hueColorDeg: 663,
        type: "proteinSmoothie",
        description:
            "With no added sugar, you can feel good about sipping on this rich and creamy smoothie. What's more, it's compliant with many diets, including gluten-free, Paleo, vegan, and vegetarian. ",
    },
];