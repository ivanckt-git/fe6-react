import tour1 from "./src/assets/shoe1.png"
import tour2 from "./src/assets/shoe2.png"
import tour3 from "./src/assets/shoe3.png"


export const pageLinks =[
    {id:1, href:"#home", text: "home"},
    {id:2, href:"#about", text: "about"},
    {id:3, href:"#services", text: "services"},
    {id:4, href:"#tours", text: "tours"}
]

export const socialLinks =[
    {id:1, href:"https://www.facebook.com", iconClass:"fa-brands fa-facebook"},
    {id:2, href:"https://www.threads.com", iconClass:"fa-brands fa-threads", className:"threads"},
    {id:3, href:"https://www.twitter.com", iconClass:"fa-brands fa-x-twitter", className:"twitter"}
]

export const services =[
    {id:1, icon:"fa-solid fa-wallet", title:"Saving Money", info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temp"},
    {id:2, icon:"fa-solid fa-tree", title:"Endless Hiking", info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temp"},
    {id:3, icon:"fa-solid fa-socks", title:"Amazing Comfort", info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temp"},

]


export const tours =[
    {
        id:1,
        image: tour1,
        date:"sep 25th 2025",
        title:"Mount Everest",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
        location:"China",
        duration:"3",
        price:"2100"
    },
    {
        id:2,
        image:tour2,
        date:"oct 25th 2025",
        title:"Mount Everest",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
        location:"China",
        duration:"4",
        price:"2200"
    },
    {
        id:3,
        image: tour3,
        date:"nov 25th 2025",
        title:"Mount Everest",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
        location:"China",
        duration:"5",
        price:"2300"
    },
    {
        id:4,
        image: tour1,
        date:"dec 25th 2025",
        title:"Mount Everest",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
        location:"China",
        duration:"6",
        price:"2400"
    },
]