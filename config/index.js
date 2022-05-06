module.exports = {

    author: "@xiz-kak",
    siteTitle: "xiz-kak portfolio",
    siteShortTitle: "S Kakimoto", // Used as logo text in header, footer, and splash screen
    siteDescription: "Portfolio site of Shizuka Kakimoto,",
    siteUrl: "https://xiz-kak.com",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Github",
            url: "https://github.com/xiz-kak/"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/shizuka.kakimoto.9/"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/xiz_kak/"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/shizuka-kakimoto-361a9664/"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Interests",
                url: "/#interests",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "©️ 2022 S Kakimoto",
            url: ""
        },
    ]
}
