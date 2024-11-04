import socialLinksProject from '../images/social-links.png';
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
    // {
    //     prjtLevel: "JUNIOR",
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
    // },
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

export { homepageProjects, socialProfileContent };