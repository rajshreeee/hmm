let naruto_stand = document.getElementById('naruto_sprite');
let sakura_stand = document.getElementById('sakura_sprite');
let naruto_jutsu1 = document.getElementById('naruto_jutsu1');
let naruto_rasengan = document.getElementById('naruto-rasengan');
let sasuke_stand = document.getElementById('sasuke_sprite');

let sasuke_chidori = document.getElementById('sasuke-chidori');
let sasuke_genjutsu = document.getElementById('sasuke-genjutsu');

let sakura_superChakra = document.getElementById('sakura-superStrength');
let sakura_jutsu2 = document.getElementById('sakura-jutsu2');

let naruto_block = document.getElementById('naruto-block');
let sasuke_block = document.getElementById('sasuke-block');
let sakura_block = document.getElementById('sakura-block');

let sakura_dead = document.getElementById('sakura-dead');

let rasengan = document.getElementById("rasengan");
let shadowClone = document.getElementById("shadowClone");

let genjutsu = document.getElementById("genjutsu");
let chidori = document.getElementById("chidori");

let superStrength = document.getElementById("superStrength");
let superChakra = document.getElementById("superChakra");

let waterBurstImage = document.getElementById('water-burst');


let NinjaData = [
    {
        name: "Sasuke",
        health: 100,
        chakra: 100,
        defense: 3,
        speed: 3,
        imageArray: [{
                image: sasuke_stand,
                width: 46,
                length: 3
        },
            {
                image: sasuke_genjutsu,
                width: 56,
                length: 2
            },
            {
                image: sasuke_chidori,
                width: 55,
                length: 4
            }, {
                image: sasuke_genjutsu,
                width: 56,
                length: 2
            },
            {
                image: sasuke_chidori,
                width: 55,
                length: 4
            }, {
                image: sasuke_genjutsu,
                width: 56,
                length: 2
            },
            {
                image: sasuke_chidori,
                width: 55,
                length: 4
            },
            {
                image: sasuke_block,
                width: 44,
                length: 2
                     }
                    ],
        jutsu: [{
                name: "chidori",
                power: 25,
                chakraLoss: 30,
                accuracy: .90,
                image: chidori,
                count: 0
                },
            {
                name: "genjutsu",
                power: 20,
                chakraLoss: 10,
                accuracy: .7,
                image: genjutsu,
                count: 0
        },
            {
                name: "fat-arm",
                power: 20,
                chakraLoss: 10,
                accuracy: .7,
                image: genjutsu,
                count: 0
        },
            {
                name: "star-attack",
                power: 20,
                chakraLoss: 10,
                accuracy: .7,
                image: genjutsu,
                count: 0
        },
            {
                name: "sword-mullet",
                power: 20,
                chakraLoss: 10,
                accuracy: .7,
                image: genjutsu,
                count: 0

        },
            {
                name: "high-kick",
                power: 20,
                chakraLoss: 10,
                accuracy: .7,
                image: genjutsu,
                count: 0

        }

               ]
    },

    {
        name: "Naruto",
        health: 5,
        chakra: 100,
        defense: 2,
        speed: 2,
        imageArray: [{
                image: naruto_stand,
                width: 47,
                length: 3

        },
            {
                image: naruto_jutsu1,
                width: 46,
                length: 3

            },
            {
                image: naruto_rasengan,
                width: 48,
                length: 3
            }, {
                image: naruto_jutsu1,
                width: 46,
                length: 3

            },
            {
                image: naruto_rasengan,
                width: 48,
                length: 3
            }, {
                image: naruto_jutsu1,
                width: 46,
                length: 3

            },
            {
                image: naruto_rasengan,
                width: 48,
                length: 3
            },
            {
                image: naruto_block,
                width: 51,
                length: 2
            }

                    ],
        jutsu: [{
                name: "rasengan",
                power: 20,
                chakraLoss: 90,
                accuracy: .85,
                image: rasengan,
                count: 0

                },
            {
                name: "shadowClone",
                power: 15,
                chakraLoss: 30,
                accuracy: .9,
                image: shadowClone,
                count: 0

        },
            {
                name: "fly-kick",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: shadowClone,
                count: 0

        },
            {
                name: "taijutsu",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: shadowClone,
                count: 0

        }, {
                name: "chakra-focus",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: shadowClone,
                count: 0

        }
             , {
                name: "lightning",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: shadowClone,
                count: 0

        }


               ]
    },

    {
        name: "Sakura",
        health: 5,
        chakra: 100,
        defense: 2,
        speed: 1.5,
        imageArray: [{
                image: sakura_stand,
                width: 37,
                length: 3
        },
            {
                image: sakura_jutsu2,
                width: 39,
                length: 3
            },
            {
                image: sakura_superChakra,
                width: 47,
                length: 2
            }, {
                image: sakura_superChakra,
                width: 47,
                length: 2
            }, {
                image: sakura_superChakra,
                width: 47,
                length: 2
            }, {
                image: sakura_superChakra,
                width: 47,
                length: 2
            }, {
                image: sakura_superChakra,
                width: 47,
                length: 2
            },
            {
                image: sakura_dead,
                width: 60,
                length: 1
            },


            {
                image: sakura_block,
                width: 40,
                length: 2
            }],
        jutsu: [{
                name: "superStrength",
                power: 30,
                chakraLoss: 25,
                accuracy: .85,
                image: superStrength,
                count: 0

                },
            {
                name: "superChakra",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: superChakra,
                count: 0

        }, {
                name: "rage-attack",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: superChakra,
                count: 0

        }, {
                name: "strong-arm",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: superChakra,
                count: 0

        }, {
                name: "gold-glove",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: superChakra,
                count: 0

        }, {
                name: "double-wind",
                power: 15,
                chakraLoss: 10,
                accuracy: .9,
                image: superChakra,
                count: 0

        }
               ]
    }

];


let trainingJutsu = [
    {
        name: "waterBurst",
        power: 30,
        chakraLoss: 25,
        accuracy: .85,
        image: superStrength,
        count: 0,
        renderDetailImage: false,
        selected: false,
        detailImage: waterBurstImage
                },
    {
        name: "superChakra",
        power: 15,
        chakraLoss: 10,
        accuracy: .9,
        image: superChakra,
        count: 0,
        renderDetailImage: false,
        selected: false,
        detailImage: waterBurstImage


        }, {
        name: "rage-attack",
        power: 15,
        chakraLoss: 10,
        accuracy: .9,
        image: superChakra,
        count: 0,
        renderDetailImage: false,
        selected: false,
        detailImage: waterBurstImage


        }, {
        name: "strong-arm",
        power: 15,
        chakraLoss: 10,
        accuracy: .9,
        image: superChakra,
        count: 0,
        renderDetailImage: false,
        selected: false,
        detailImage: waterBurstImage


        }, {
        name: "gold-glove",
        power: 15,
        chakraLoss: 10,
        accuracy: .9,
        image: superChakra,
        count: 0,
        renderDetailImage: false,
        selected: false,
        detailImage: waterBurstImage


        }
];