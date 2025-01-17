const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navs = document.querySelector('nav').children;
navs [0].textContent = siteContent['nav']['nav-item-1'];
navs [1].textContent = siteContent['nav']['nav-item-2'];
navs [2].textContent = siteContent['nav']['nav-item-3'];
navs [3].textContent = siteContent['nav']['nav-item-4'];
navs [4].textContent = siteContent['nav']['nav-item-5'];
navs [5].textContent = siteContent['nav']['nav-item-6'];

const navsAll = document.querySelectorAll('nav a');
navsAll.forEach((link) => {
  link.style.color = 'green';
})

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const headings = document.querySelectorAll('.main-content .text-content h4');
const actualContent = document.querySelectorAll('.main-content .text-content p')

actualContent [0].textContent = siteContent['main-content']['features-content'];
actualContent [1].textContent = siteContent['main-content']['about-content'];
actualContent [2].textContent = siteContent['main-content']['services-content'];
actualContent [3].textContent = siteContent['main-content']['product-content'];
actualContent [4].textContent = siteContent['main-content']['vision-content'];

headings [0].textContent = siteContent['main-content']['features-h4'];
headings [1].textContent = siteContent['main-content']['about-h4'];
headings [2].textContent = siteContent['main-content']['services-h4'];
headings [3].textContent = siteContent['main-content']['product-h4'];
headings [4].textContent = siteContent['main-content']['vision-h4'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// let featuresHeader = document.querySelector('.text-content h4');
// featuresHeader.innerHTML = siteContent['main-content']['features-h4'];

// let featuresContent = document.querySelector('.text-content p');
// featuresContent.innerHTML = siteContent['main-content']['features-content'];

// let aboutHeader = document.querySelector('.text-content h4');
// aboutHeader.innerHTML = siteContent['main-content']['about-h4'];

// let aboutContent = document.querySelector('.text-content p');
// aboutContent.innerHTML = siteContent['main-content']['about-content'];


