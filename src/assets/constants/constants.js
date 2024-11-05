import socialLinksProject from '../images/social-links.png';
import adviceGeneratorProject from '../images/advice-generator.png';
import scAvatar from '../images/avatar-jessica.jpeg';

// constants for projects on homepage
const homepageProjects = [
    {
        prjtLevel: "NEWBIE",
        prjt: [
            {
                prjtPath: "/social-links",
                prjtImage: socialLinksProject,
                prjtDescrip: [
                    {
                        name: "Social Links Profile",
                        descrption: "Challenge to build social link-sharing profile",
                        tools: ["#react", "#scss"]
                    }
                ]
            },
        ],
    },
    {
        prjtLevel: "JUNIOR",
        prjt: [
            {
                prjtPath: "/advice-generator",
                prjtImage: adviceGeneratorProject,
                prjtDescrip: [
                    {
                        name: "Advice Generator App",
                        descrption: "Challenge to build advice generator using API to generate random quotes",
                        tools: ["#react", "#scss", "#api", "#axios"]
                    }
                ]
            },
        ]
    },
    // {
    //     prjtLevel: "INTERMEDIATE",
    //     prjt: [
    //         {
    //             prjtPath: "/social-links",
    //             prjtImage: socialLinksProject,
    //             prjtDescrip: [
    //                 {
    //                     name: "Social Links Profile",
    //                     descrption: "Challenge to build social link-sharing profile",
    //                     tools: ["#react", "#scss"]
    //                 }
    //             ]
    //         },
    //     ]
    // }
]

// constants for social profile challenge
const socialProfileContent = [
    {
        profile: scAvatar,
        name: "Jessica Randall",
        location: "London, United Kingdom",
        description: '"Front-end developer and avid reader."',
        links: [
            {
                anchorName: "GitHub",
                anchorRef: "https://github.com/",
            },
            {
                anchorName: "Frontend Mentor",
                anchorRef: "https://www.frontendmentor.io/",
            },
            {
                anchorName: "LinkedIn",
                anchorRef: "https://www.linkedin.com/",
            },
            {
                anchorName: "Twitter",
                anchorRef: "https://twitter.com/",
            },
            {
                anchorName: "Instagram",
                anchorRef: "https://www.instagram.com/",
            },
        ]
    }
];

// constants for recipe page challenge
const recipeConstants = [
    {
        title: "Simple Omelette Recipe",
        description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
        prepSection: [
            {
                title: "Preparation time",
                list: [
                    {
                        item: `${<span className='list--spacing'><span>Total:</span> Approximately 10 minutes</span>}`,
                    },
                    {
                        item: `${<span className='list--spacing'><span>Total:</span> Approximately 10 minutes</span>}`,
                    },
                    {
                        item: `${<span className='list--spacing'><span>Total:</span> Approximately 10 minutes</span>}`,
                    }
                ]
            }
        ],
        ingredients: [
            {
                title: "Ingredients",
                list: [
                    {
                        item: `${<span className='list--spacing'>2-3 large eggs</span>}`,
                    },
                    {
                        item: `${<span className='list--spacing'>Salt, to taste</span>}`,
                    },
                    {
                        item: `${<span className='list--spacing'>Pepper, to taste</span>}`,
                    },
                    {
                        item: `${<span className='list--spacing'>1 tablespoon of butter or oil</span>}`,
                    },
                    {
                        item: `${<span className='list--spacing'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>}`,
                    }
                ]
            }
        ],
        instructions: [
            {
                title: "Instructions",
                list: [
                    {
                        item: <span className='list--spacing'><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span>,
                    },
                    {
                        item: <span className='list--spacing'><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</span>,
                    },
                    {
                        item: <span className='list--spacing'><span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span>,
                    },
                    {
                        item: <span className='list--spacing'><span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span>,
                    },
                    {
                        item: <span className='list--spacing'><span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span>,
                    }
                    ,
                    {
                        item: <span className='list--spacing'><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</span>,
                    }
                ]
            }
        ]
    }
]

export { homepageProjects, socialProfileContent, recipeConstants };