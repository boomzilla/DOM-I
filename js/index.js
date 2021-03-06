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
    "h1": "DOM Is Awesome",
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

let codesnip = document.getElementById("cta-img");
codesnip.setAttribute('src', siteContent["cta"]["img-src"])

let midPageAccent = document.getElementById("middle-img");
midPageAccent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//anchor tags in the top nav
let topLinks = document.getElementsByTagName("a");
for (let n = 0; n < topLinks.length; n++) {
  let elem = topLinks[n];
  let thisNavItem = "nav-item-"+(n+1);
  elem.textContent = siteContent["nav"][`${thisNavItem}`];
}

//cta tags
let bigHeaders = document.getElementsByTagName("h1");
bigHeaders[0].textContent = siteContent["cta"]["h1"];
let buttons = document.getElementsByTagName("button");
let wutTest = "cta";
buttons[0].textContent = siteContent[wutTest]["button"];

//main content, contact, and footer
let smallHeaders = document.getElementsByTagName("h4");
for (let n = 0; n < smallHeaders.length; n++){
  let elem = smallHeaders[n];
  let thisHeaderItem;
  let thisSection;

  //my strategy here is so stupid, but I just want to get it done
  if (n == 0){
    thisHeaderItem = "features-h4";
  } else if (n == 1) {
    thisHeaderItem = "about-h4";
  } else if (n == 2) {
    thisHeaderItem = "services-h4";
  } else if (n == 3) {
    thisHeaderItem = "product-h4";
  } else if (n == 4) {
    thisHeaderItem = "vision-h4";
  } else {
    thisHeaderItem = "contact-h4";
    thisSection = "contact";
  }

  if (n < 5) {
    thisSection = "main-content";
  }

  elem.textContent = siteContent[thisSection][thisHeaderItem];
}

let paragraphs = document.getElementsByTagName("p");
for (let n = 0; n < paragraphs.length; n++){
  let elem = paragraphs[n];
  let thisParaItem;
  let thisSection;

  let paraMap = ["features-content","about-content","services-content","product-content","vision-content","address","phone","email","copyright"];
  let paraSectionMap = ["main-content","main-content","main-content","main-content","main-content","contact","contact","contact","footer"];

  thisParaItem = paraMap[n];
  thisSection = paraSectionMap[n];

  elem.textContent = siteContent[thisSection][thisParaItem];
}