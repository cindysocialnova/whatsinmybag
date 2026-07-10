// ==========================================================================
// 1. DATA REPOSITORIES
// ==========================================================================
const navData = {
  logoText: "Cindy.R",
  links: [
    { label: "Book A Call", url: "https://cindyrmarketing.setmore.com/cindyr" },
    { label: "About", url: "#split-sections-target" },
    { label: "Featured", url: "#work-four-target" }
  ]
};

const heroData = {
  title: " Get Seen",
  services: "Get the Insights & Branding You Need",
  ctaText: "Let's Chat",
  ctaLink: "https://cindyrmarketing.setmore.com/cindyr"
};

const splitData = [
  {
    type: 'left',
    image: ' /Users/noname/vs code -landing website html js css/images/email mockup.png',
    alt: 'Beauty Statute Product',
    title: 'About Me!',
    description: 'Marketing professional with experience in social media marketing, analytics, and search optimization. I love combine data and branding to create a unipe and dythimic marketing campging .',
    buttonText: 'See My Work',
    buttonLink: '#work-four-target'
  },
  {
    type: 'right',
    image: 'images/email mockup1.png',
    alt: 'Product Image',
    title: 'Services',
    description: 'I bridge the gap between creative strategy and data analytics to build high-converting content pipelines, ensuring compelling visual storytelling and a cohesive brand presence across Instagram, Facebook, LinkedIn, and TikTok.',
    buttonText: 'Book Me',
    buttonLink: ' https://cindyrmarketing.setmore.com/cindyr'
  }
];
const featuredSectionTitle = "Featured";
const workFourData = [
  { 
    title: 'Pixe Vintage ', 
    desc: 'Design & Social Media ', 
    img: 'images/WORK COVER/10.png',
    link: 'https://cafelovelatte.my.canva.site/portfolio-girls-' 
  },
  { 
    title: 'Luxe & Co', 
    desc: 'Design & Social Media', 
    img: 'images/WORK COVER/3.png',
    link: 'https://theedit.my.canva.site/luxeandco' 
  },
  { 
    title: 'Social Nova', 
    desc: 'Data Analaytics', 
    img: 'images/WORK COVER/9.png',
    link: 'https://datastudio.google.com/s/hg9OTuedWmI'
  },
  { 
    title: 'Luxe & Co', 
    desc: 'Data Analaytics.', 
    img: 'images/WORK COVER/2.png',
    link: 'https://medium.com/@Cindy.R/case-study-luxe-co-facebook-follower-retention-analysis-4ddaad2d37a3' 
  }
];


const whatInMyBagData = {
  title: "What's In My Tool Bag?",
  bagImage: 'images/whatinmypurseanimation/Bag.png',
  items: [
    { src: 'images/whats in my bag/1.png', alt: 'Item 2' }, // Fixed local path
    { src: 'images/whats in my bag/2.png', alt: 'Item 3' }, // Fixed local path
    { src: 'images/whatinmypurseanimation/4.png', alt: 'Item 4' },
    { src: 'images/whats in my bag/4.png', alt: 'Item 5' },
    { src: 'images/whatinmypurseanimation/3.png', alt: 'Item 6' }
  ]
};

const footerData = {
  copyright: `&copy; ${new Date().getFullYear()} Cindy R. All rights reserved.`,
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/cindy-r-0257b4350/" },
    { name: "Instagram", url: "https://www.instagram.com/socialnovasociety/"}
  ]
};

// ==========================================================================
// 2. THE ABSTRACT DOM GENERATION HELPER
// ==========================================================================
function createNode(tag, properties = {}, text = '') {
  const element = document.createElement(tag);
  Object.assign(element, properties);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// ==========================================================================
// 3. ARCHITECTURE COMPONENT INJECTIONS
// ==========================================================================

// --- Navigation Header ---
const headerTarget = document.getElementById('global-header-target');
const header = createNode('header', { className: 'site-header' });
const headerContainer = createNode('div', { className: 'header-container' });
const logo = createNode('div', { className: 'logo' }, navData.logoText);
const navMenu = createNode('nav', { className: 'nav-menu' });

navData.links.forEach(link => {
  const navLink = createNode('a', { href: link.url }, link.label);
  navMenu.appendChild(navLink);
});

headerContainer.appendChild(logo);
headerContainer.appendChild(navMenu);
header.appendChild(headerContainer);
headerTarget.appendChild(header);

// --- Hero Section ---
const heroTarget = document.getElementById('hero-target');
const heroSection = createNode('section', { className: 'hero-section' });
const heroContent = createNode('div', { className: 'hero-content' });
const heroH1 = createNode('h1', {}, heroData.title);
const heroP = createNode('p', {}, heroData.services);
const heroCta = createNode('a', { href: heroData.ctaLink, className: 'hero-cta' }, heroData.ctaText);

heroContent.appendChild(heroH1);
heroContent.appendChild(heroP);
heroContent.appendChild(heroCta);
heroSection.appendChild(heroContent);
heroTarget.appendChild(heroSection);



// --- What's in My Bag Animation Section ---
const whatinmybagTarget = document.getElementById('whatinmybag-target');
const whatinmybagSection = createNode('section', { className: 'whatinmybag-section' });
const whatinmybagContainer = createNode('div', { className: 'whatinmybag-container' });
const whatinmybagTitle = createNode('h2', { className: 'whatinmybag-title' });

whatinmybagContainer.appendChild(whatinmybagTitle);
const bagWrapper = createNode('div', { className: 'bag-wrapper' });
const bagImg = createNode('img', { src: whatInMyBagData.bagImage, alt: 'My Bag' });
bagWrapper.appendChild(bagImg);
whatinmybagContainer.appendChild(bagWrapper);

const itemsContainer = createNode('div', { className: 'items-container' });
whatInMyBagData.items.forEach(item => {
  const itemImg = createNode('img', { src: item.src, alt: item.alt, className: 'bag-item' });
  itemsContainer.appendChild(itemImg);
});

whatinmybagContainer.appendChild(itemsContainer);
whatinmybagSection.appendChild(whatinmybagContainer);
whatinmybagTarget.appendChild(whatinmybagSection);

// Scroll-based bidirectional animation loop
function animateBagItemsOnScroll() {
  const section = whatinmybagSection;
  const items = section.querySelectorAll('.bag-item');
  const isMobile = window.innerWidth < 768; // Check layout mode
  
  // ==========================================
  // SEPARATE OFFSETS FOR MOBILE VS DESKTOP
  // ==========================================
  const mobileOffsets = [
    { x: -75,  y: -100, r: -10 }, // Item 1 (Tighter X spacing for narrow mobile screens)
    { x: 75,   y: -100, r: 12 },  // Item 2
    { x: -50,  y: -50,  r: -6 },  // Item 3
    { x: 50,   y: -50,  r: 8 },   // Item 4
    { x: 0,    y: -120, r: 0 }    // Item 5
  ];

  const desktopOffsets = [
    { x: -180, y: -130, r: -12 }, // Item 1
    { x: 180,  y: -130, r: 15 },  // Item 2
    { x: -100, y: -100, r: -10 }, // Item 3
    { x: 100,  y: -100, r: 10 },  // Item 4
    { x: 0,    y: -160, r: 0 }    // Item 5
  ];

  // Assign the correct array based on viewport
  const itemOffsets = isMobile ? mobileOffsets : desktopOffsets;
  
  function updateItemPositions() {
  const sectionRect = section.getBoundingClientRect();
  const sectionTop = sectionRect.top;
  const sectionHeight = sectionRect.height;
  const viewportHeight = window.innerHeight;
  
  // 1. CHANGE: Start the animation when the section enters the bottom 80% of the screen
  const scrollStart = viewportHeight * 0.8; 
  
  // 2. CHANGE: Calculate progress based on how far it has moved past that earlier trigger point
  // We use (scrollStart - sectionTop) / (scrollStart + sectionHeight) so progress scales nicely
  const totalScrollDistance = scrollStart + sectionHeight;
  const scrollProgress = Math.max(0, Math.min(1, (scrollStart - sectionTop) / totalScrollDistance));
  
  items.forEach((item, index) => {
    const offset = itemOffsets[index] || { x: 0, y: -100, r: 0 };
    
    const itemDelay = index * 0.05;
    const itemProgress = Math.max(0, scrollProgress - itemDelay);
    
    // 3. OPTIONAL: Boost the speed multiplier (e.g., from 1.3 to 2.0) if you want it to finish faster once it starts
    const eased = Math.min(1, itemProgress * 2.0); 
    
    let currentX = 0;
    let currentY = 0;
    let currentRotation = 0;
  
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
      
      // Separate base displacement math for mobile vs desktop
      // Mobile clears a smaller bag flap (-90px vs -130px)
      const baseHeightClearance = isMobile ? -90 : -130;

      if (eased <= 0.35) {
        const initialLiftFactor = eased / 0.35;
        currentY = baseHeightClearance * initialLiftFactor;
      } else {
        const secondaryFactor = (eased - 0.35) / 0.65;
        currentX = offset.x * secondaryFactor;
        currentY = baseHeightClearance + (offset.y - baseHeightClearance) * secondaryFactor;
        currentRotation = offset.r * secondaryFactor;
      }
      
      // Scale down items slightly more on mobile to prevent overlap
      const baseScale = isMobile ? 0.35 : 0.5;
      const scaleMultiplier = isMobile ? 0.45 : 0.5;
      const scale = baseScale + (eased * scaleMultiplier); 
      
      item.style.opacity = Math.min(1, eased * 2.5);
      
      item.style.zIndex = eased < 0.15 ? "10" : "60";
      
      item.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) scale(${scale}) rotate(${currentRotation}deg)`;
    });
  }
  
  window.addEventListener('scroll', updateItemPositions);
  // Recalculate offsets if phone shifts from portrait to landscape
  window.addEventListener('resize', () => {
    animateBagItemsOnScroll(); 
  });

  updateItemPositions();
}

animateBagItemsOnScroll();



// --- Split Container Modules ---
const splitTarget = document.getElementById('split-sections-target');
splitData.forEach(item => {
  const section = createNode('section', { className: `split-${item.type}` });
  const textBlock = createNode('div', { className: 'text-block' });
  const h2 = createNode('h2', {}, item.title);
  const p = createNode('p', {}, item.description);
  
  textBlock.appendChild(h2);
  textBlock.appendChild(p);
  
  if (item.buttonText && item.buttonLink) {
    const button = createNode('a', { href: item.buttonLink, className: 'split-button' }, item.buttonText);
    textBlock.appendChild(button);
  }
  
  const imgBlock = createNode('div', { className: 'image-block' });
  const img = createNode('img', { src: item.image, alt: item.alt });
  imgBlock.appendChild(img);
  
  if (item.type === 'left') {
    section.appendChild(textBlock);
    section.appendChild(imgBlock);
  } else {
    section.appendChild(imgBlock);
    section.appendChild(textBlock);
  }
  
  splitTarget.appendChild(section);
});

// --- Reusable Work Grid Generator Component ---
function renderNativeGrid(targetId, sectionClass, containerClass, sectionTitle, dataArray) {
  const target = document.getElementById(targetId);
  const section = createNode('section', { className: sectionClass });
  const heading = createNode('h2', {}, sectionTitle);
  const gridContainer = createNode('div', { className: containerClass });
  
  section.appendChild(heading);
  section.appendChild(gridContainer);
  
  dataArray.forEach(project => {
    const card = createNode('a', { href: project.link, target: '_blank', className: 'project-card' });
    const img = createNode('img', { src: project.img, alt: project.title });
    const h3 = createNode('h3', {}, project.title);
    const p = createNode('p', {}, project.desc);
    
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    
    gridContainer.appendChild(card);
  });
  
  target.appendChild(section);
}

 renderNativeGrid('work-four-target', 'work-section-four', 'grid-container-4', featuredSectionTitle, workFourData);
 
// --- Global Footer ---
const footerTarget = document.getElementById('global-footer-target');
const footer = createNode('footer', { className: 'site-footer' });
const footerContainer = createNode('div', { className: 'footer-container' });

const copyrightText = `${String.fromCharCode(169)} ${new Date().getFullYear()} Cindy R. All rights reserved.`;
const pFooter = createNode('p', {}, copyrightText);
const footerSocials = createNode('div', { className: 'footer-socials' });

footerData.socials.forEach(soc => {
  const socLink = createNode('a', { href: soc.url, target: '_blank' }, soc.name);
  footerSocials.appendChild(socLink);
});

footerContainer.appendChild(pFooter);
footerContainer.appendChild(footerSocials);
footer.appendChild(footerContainer);
footerTarget.appendChild(footer);