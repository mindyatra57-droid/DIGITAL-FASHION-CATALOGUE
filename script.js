/* =========================================================
   DIGITAL FASHION CATALOGUE — FINAL POLISH
========================================================= */

const SHOP_WHATSAPP = "919999999999";

/* =========================================================
   IMAGE LIBRARY — 10 VISUALS PER CATEGORY
========================================================= */
const fashionImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1766193234442-29b43c9fb7c3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85&sat=-10",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85&sat=10"
];

const categoryImages = {
    "Men's": [
        "https://imagescdn.peterengland.com/img/app/product/9/949632-18971557.jpg?auto=format&w=900",
        "https://images.unsplash.com/photo-1627776880991-808c5996527b?auto=format&fit=crop&w=900&q=85",
        "https://my.sacoorbrothers.com/cdn/shop/files/8e9ef51f20a87ab53ca98000f5fd3ad9.jpg?crop=center&height=1200&v=1751032001&width=1200",
        "https://givalli-lifestyle.com/cdn/shop/files/BoldDenimBuiltfortheRoadDenimbikerjeansdesignedforruggedstyleandeverydaycomfort.TheDenimBikerJeansarecraftedformenwhowantastrong_modernlookwithpracticaldurability._95.png?v=1775371393",
        "https://images.wehkamp.nl/i/wehkamp/17439874_eb_06/state-of-art-regular-casual-overhemd-blauw-blauw-8720829493457.jpg?fit=contain&h=1536&qlt=75&w=1024",
        "https://img.tatacliq.com/images/i22/437Wx649H/MP000000025154131_437Wx649H_202501271802321.jpeg",
        "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1762914395034-67c2f8c73c59?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=85"
    ],
    "Women's": [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85",
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/7/a76f414US010051_1.jpg?rnd=20200526195200&tr=w-900",
        "https://i5.walmartimages.com/asr/a697d92f-0b29-4b65-949d-ad3de88ff75e.a00c3c99670716bdfa4414696b644aa3.jpeg?odnBg=FFFFFF&odnHeight=900&odnWidth=900"
    ],
    "Sarees": [
        "https://cdn.shopify.com/s/files/1/0528/5163/8441/products/DRJQSAR005SP9A2806N7AAS_2_2048x.jpg?v=1665379287",
        "https://www.bharatsthali.com/cdn/shop/products/2_5445e0c7-d815-40ad-9137-7f76a5ebb87b.jpg?v=1641891200&width=1080",
        "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/r/e/red-silk-woven-zari-indian-designer-saree-sarv119238-1.jpg",
        "https://assets2.andaazfashion.com/media/catalog/product/p/u/purple-silk-woven-zari-saree-sarv127554-1.jpg",
        "https://www.bollywoodtrends.com.au/images/products/FullImage/BT-930562401-8203-F.jpg",
        "https://i.pinimg.com/originals/21/1b/6e/211b6e6096bdafb58a55a87047428749.jpg",
        "https://www.sharanya.net.in/cdn/shop/files/Artboard5_7d17e7fc-b2da-4765-a48c-707d1130a608.png?v=1747819050&width=800",
        "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/SAUS0040824_BLACK_5_800x800.jpg?v=1756447109",
        "https://goswadeshi.in/cdn/shop/files/as-238ct2073n_1.jpg?v=1698991177",
        "https://cdn.shopify.com/s/files/1/1762/5129/files/diwali-saree-style_04642a75-9c46-4b30-b0b7-040386619e86.jpg?v=1758932084"
    ],
    "Western": [
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwmt2ersca6q32",
        "https://i5.walmartimages.cl/asr/ee67ec16-68a5-4b68-833a-568b0f1b13dc.22d01b979aa5483e599742e98ecfc69e.jpeg?odnBg=FFFFFF&odnHeight=900&odnWidth=900",
        "https://i1.momoshop.com.tw/1703059773/goodsimg/0012/242/248/12242248_R_m.webp",
        "https://www.flannels.com/images/imgzoom/66/66142403_xxl_a2.jpg",
        "https://cdn.shopify.com/s/files/1/0293/9277/products/02-01-23Studio1_ID_AP_12-15-07_30_N20317_Black_10031_SG.jpg?crop=center&height=900&v=1675715215&width=900",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1766193234442-29b43c9fb7c3?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85"
    ],
    "Traditional": [
        "https://media.landmarkshops.in/cdn-cgi/image/h%3D900%2Cw%3D700%2Cq%3D85%2Cfit%3Dcover/lifestyle/1000015986536-Blue-Blue-1000015986536_01-2100.jpg",
        "https://suvidhafashion.com/cdn/shop/files/SONIYA.jpg?v=1729506169",
        "https://essasclub.in/cdn/shop/files/JKT-2575F_1.jpg?v=1740681709&width=1090",
        "https://img.tatacliq.com/images/i18/437Wx649H/MP000000022873323_437Wx649H_202407110059081.jpeg",
        "https://resources.indianclothstore.com/productimages/1596-263207112023-Cream-Art-Silk-Achkan-Style-Sherwani.webp",
        "https://images.unsplash.com/photo-1667665970118-f55705003914?auto=format&fit=crop&w=900&q=85",
        "https://desilooklifestyle.com/cdn/shop/files/SB61_3676_8502_03f17166-75bf-4bfb-b8fb-1b97d3502c5e.jpg?v=1716809836&width=900",
        "https://miravan.in/cdn/shop/files/CREAM_DUPATTASET_3__11zon.jpg?v=1740551841&width=900",
        "https://www.mohanlalsons.com/cdn/shop/files/RIDE-KPCO-MLS-11157-WHITE_4499_1_399x.jpg?v=1755750793",
        "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/M6AAAOSwfDtmt~mt/%24_57.JPG?set_id=880000500F"
    ]
};

/* =========================================================
   PRODUCT DATA — 10 PER CATEGORY
========================================================= */
const productTemplates = {
    "Men's": [
        ["Classic Linen Shirt",1499], ["Relaxed Oxford Shirt",1599], ["Premium Cotton Shirt",1399], ["Everyday Overshirt",1699],
        ["Smart Casual Shirt",1799], ["Textured Resort Shirt",1899], ["Classic Polo Shirt",1199], ["Straight Fit Jeans",1899],
        ["Classic Chino Trouser",1799], ["Urban Denim Jacket",2299]
    ],
    "Women's": [
        ["Elegant Everyday Kurti",1299], ["Soft Draped Co-ord",1899], ["Minimal Printed Kurti",1399], ["Modern Cotton Dress",1799],
        ["Flowy Day Dress",1699], ["Classic Layered Top",1199], ["Textured Tunic",1499], ["Premium Co-ord Set",2199],
        ["Relaxed Wide-Leg Set",1999], ["Statement Midi Dress",2299]
    ],
    "Sarees": [
        ["Heritage Silk Saree",3499], ["Soft Banarasi Edit",3999], ["Festive Tissue Saree",4299], ["Classic Woven Saree",3199],
        ["Elegant Organza Saree",2899], ["Contemporary Silk Saree",3699], ["Traditional Weave Saree",3399], ["Festive Draped Saree",4599],
        ["Minimal Handloom Saree",2999], ["Statement Occasion Saree",4999]
    ],
    "Western": [
        ["Urban Oversized Tee",999], ["Olive Bomber Jacket",2499], ["Utility Cargo Pants",1599], ["Relaxed Hoodie",1699],
        ["Graphic Street Tee",1099], ["Casual Street Jacket",2299], ["Modern Denim Layer",2299], ["Everyday Denim Look",1799],
        ["Relaxed Streetwear Set",1899], ["Weekend Casual Tee",1099]
    ],
    "Traditional": [
        ["Royal Kurta Set",2199], ["Festive Designer Set",2799], ["Classic Nehru Set",2999], ["Embroidered Kurta",1899],
        ["Heritage Bandhgala",3999], ["Festive Sharara Set",3299], ["Elegant Anarkali",2899], ["Traditional Chikankari Set",2499],
        ["Occasion Kurta",2299], ["Premium Wedding Set",4499]
    ]
};

const accessoryProducts = [
    ["Classic Leather Watch",2499,"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"],
    ["Everyday Sneakers",1899,"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"],
    ["Minimal Sunglasses",1299,"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"],
    ["Structured Handbag",2299,"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"],
    ["Classic Belt",799,"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85"],
    ["Leather Loafers",2199,"https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?auto=format&fit=crop&w=900&q=85"],
    ["Statement Watch",2999,"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85"],
    ["Classic Tote Bag",1999,"https://images.unsplash.com/photo-1594223274512-ad4803739b7c7?auto=format&fit=crop&w=900&q=85"],
    ["Premium Sunglasses",1499,"https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=85"],
    ["Casual Crossbody Bag",1699,"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85"]
];

const categoryBadges = {
    "Men's": ["NEW", "TRENDING", "FEATURED", "NEW", "POPULAR", "NEW", "TRENDING", "FEATURED", "NEW", "LIMITED"],
    "Women's": ["NEW", "NEW", "TRENDING", "FEATURED", "POPULAR", "NEW", "TRENDING", "FEATURED", "NEW", "LIMITED"],
    "Sarees": ["FEATURED", "NEW", "FESTIVE", "POPULAR", "NEW", "FEATURED", "FESTIVE", "NEW", "LIMITED", "FESTIVE"],
    "Western": ["TRENDING", "TRENDING", "NEW", "NEW", "POPULAR", "FEATURED", "TRENDING", "NEW", "POPULAR", "LIMITED"],
    "Traditional": ["NEW", "FESTIVE", "FEATURED", "POPULAR", "PREMIUM", "FESTIVE", "NEW", "FEATURED", "FESTIVE", "LIMITED"]
};

const products = [];
let productId = 1;

Object.entries(productTemplates).forEach(([category, items]) => {
    items.forEach(([title, price], index) => {
        products.push({
            id: productId++,
            title,
            category,
            price,
            badge: categoryBadges[category][index],
            image: categoryImages[category][index],
            description: `${title} curated for a premium ${category.toLowerCase()} collection. Explore the style and discover matching pieces for a complete outfit.`,
            sizes: category === "Sarees" ? ["Free Size"] : ["S", "M", "L", "XL"],
            colours: ["Black", "Cream", "Beige"]
        });
    });
});

accessoryProducts.forEach(([title, price, image], index) => {
    products.push({
        id: productId++,
        title,
        category: "Accessories",
        price,
        badge: index < 3 ? "TRENDING" : "FEATURED",
        image,
        description: `${title} selected to finish and coordinate with the main outfit.`,
        sizes: ["One Size"],
        colours: ["Black", "Brown", "Gold"]
    });
});

/* =========================================================
   HERO SLIDES — 01/05 TO 05/05
========================================================= */
const heroSlides = [
    [fashionImages[0], "Everyday Edit"],
    [fashionImages[10], "Modern Muse"],
    [fashionImages[7], "Heritage Edit"],
    [fashionImages[2], "Urban Lines"],
    [fashionImages[14], "New Season"]
];
let heroSlideIndex = 0;
let heroTimer = null;

/* =========================================================
   DOM
========================================================= */
const loader = document.getElementById("loader");
const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const catalogueCount = document.getElementById("catalogueCount");
const filterButtons = document.querySelectorAll(".filter-btn");
const collectionCards = document.querySelectorAll(".collection-card");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalVisual = document.getElementById("modalVisual");
const modalBadge = document.getElementById("modalBadge");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const sizeOptions = document.getElementById("sizeOptions");
const colourOptions = document.getElementById("colourOptions");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalShare = document.getElementById("modalShare");
const modalCompleteLook = document.getElementById("modalCompleteLook");
const newArrivalsBtn = document.getElementById("newArrivalsBtn");
const copyCatalogueBtn = document.getElementById("copyCatalogueBtn");
const heroShareBtn = document.getElementById("heroShareBtn");
const storeWhatsappBtn = document.getElementById("storeWhatsappBtn");
const footerWhatsappBtn = document.getElementById("footerWhatsappBtn");
const mobileWhatsappBtn = document.getElementById("mobileWhatsappBtn");
const scrollProgress = document.getElementById("scrollProgress");
const scrollTop = document.getElementById("scrollTop");
const toast = document.getElementById("toast");
const year = document.getElementById("year");
const heroVisual = document.querySelector(".visual-hero");
const heroSlideNumber = document.querySelector(".hero-card-top span:last-child");
const heroSlideTitle = document.querySelector(".hero-card-bottom strong");

let currentFilter = "All";
let currentProduct = null;
let selectedSize = "";
let selectedColour = "";
let toastTimer = null;

/* =========================================================
   INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    year.textContent = new Date().getFullYear();
    renderProducts("All");
    setupFilters();
    setupCollections();
    setupModal();
    setupMobileMenu();
    setupScrollEffects();
    setupRevealAnimations();
    setupNavigation();
    setupWhatsAppButtons();
    setupSharing();
    setupNewArrivals();
    setupCatalogueCopy();
    setupKeyboardControls();
    setupHeroSlider();
});

/* =========================================================
   FAST LOADER
========================================================= */
window.addEventListener("load", () => {
    setTimeout(() => {
        if (!loader) return;
        loader.classList.add("hidden");
        setTimeout(() => loader.remove(), 500);
    }, 350);
});

/* =========================================================
   HERO SLIDER
========================================================= */
function setupHeroSlider() {
    if (!heroVisual) return;
    applyHeroSlide();
    heroTimer = setInterval(() => {
        heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
        applyHeroSlide();
    }, 3000);
}

function applyHeroSlide() {
    const [image, title] = heroSlides[heroSlideIndex];
    heroVisual.classList.add("hero-slide-changing");

    setTimeout(() => {
        heroVisual.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.18)), url("${image}")`;
        if (heroSlideNumber) heroSlideNumber.textContent = `0${heroSlideIndex + 1} / 05`;
        if (heroSlideTitle) heroSlideTitle.textContent = title;
        heroVisual.classList.remove("hero-slide-changing");
    }, 220);
}

/* =========================================================
   PRODUCTS
========================================================= */
function renderProducts(filter = "All") {
    currentFilter = filter;
    let filteredProducts = products;

    if (filter === "New") {
        filteredProducts = products.filter(product => ["NEW", "TRENDING", "FEATURED", "FESTIVE", "PREMIUM"].includes(product.badge)).slice(0, 10);
    } else if (filter !== "All") {
        filteredProducts = products.filter(product => product.category === filter);
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card reveal visible" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${escapeHtml(product.title)}" loading="lazy">
                <span class="product-badge">${escapeHtml(product.badge)}</span>
            </div>
            <div class="product-info">
                <span class="product-category">${escapeHtml(product.category)}</span>
                <h3>${escapeHtml(product.title)}</h3>
                <div class="product-meta">
                    <strong class="product-price">₹${product.price.toLocaleString("en-IN")}</strong>
                    <span class="product-arrow">↗</span>
                </div>
            </div>
        </article>
    `).join("");

    productGrid.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => openProductModal(card.dataset.productId));
    });

    catalogueCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? "style" : "styles"}`;
    emptyState.classList.toggle("show", filteredProducts.length === 0);
}

/* =========================================================
   FILTERS / COLLECTIONS
========================================================= */
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            setActiveFilter(button.dataset.filter);
            document.getElementById("catalogue").scrollIntoView({behavior:"smooth", block:"start"});
        });
    });
}

function setActiveFilter(filter) {
    filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
    renderProducts(filter);
}

function setupCollections() {
    collectionCards.forEach(card => {
        card.addEventListener("click", () => {
            setActiveFilter(card.dataset.category);
            document.getElementById("catalogue").scrollIntoView({behavior:"smooth"});
        });
    });
}

/* =========================================================
   PRODUCT MODAL
========================================================= */
function openProductModal(productId) {
    const product = products.find(item => item.id === Number(productId));
    if (!product) return;

    currentProduct = product;
    selectedSize = product.sizes[0];
    selectedColour = product.colours[0];

    modalBadge.textContent = product.badge;
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.title;
    modalPrice.textContent = `₹${product.price.toLocaleString("en-IN")}`;
    modalDescription.textContent = product.description;
    modalVisual.className = "modal-visual";
    modalVisual.innerHTML = `<img src="${product.image}" alt="${escapeHtml(product.title)}">`;

    renderOptions();
    hideMatchPanel();

    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => modalClose.focus(), 100);
}

function closeProductModal() {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentProduct = null;
    hideMatchPanel();
}

function setupModal() {
    modalClose.addEventListener("click", closeProductModal);
    productModal.addEventListener("click", event => {
        if (event.target === productModal) closeProductModal();
    });

    setupOptionGroup(sizeOptions, value => selectedSize = value);
    setupOptionGroup(colourOptions, value => selectedColour = value);
    modalWhatsapp.addEventListener("click", sendProductWhatsApp);
    modalShare.addEventListener("click", shareCurrentProduct);
    modalCompleteLook.addEventListener("click", showMatchingProducts);
}

function setupOptionGroup(container, callback) {
    container.addEventListener("click", event => {
        const button = event.target.closest("button");
        if (!button) return;
        container.querySelectorAll("button").forEach(item => item.classList.remove("selected"));
        button.classList.add("selected");
        callback(button.textContent.trim());
    });
}

function renderOptions() {
    sizeOptions.innerHTML = currentProduct.sizes.map((size, index) => `<button class="${index === 0 ? "selected" : ""}">${escapeHtml(size)}</button>`).join("");
    colourOptions.innerHTML = currentProduct.colours.map((colour, index) => `<button class="${index === 0 ? "selected" : ""}">${escapeHtml(colour)}</button>`).join("");
}

/* =========================================================
   COMPLETE LOOK — CODE-BUILT MATCHING SYSTEM
========================================================= */

function getProductType(product) {

    const title = product.title.toLowerCase();

    if (product.category === "Accessories") {

        if (
            title.includes("watch")
        ) return "watch";

        if (
            title.includes("shoe") ||
            title.includes("loafer") ||
            title.includes("sneaker")
        ) return "footwear";

        if (
            title.includes("sunglass")
        ) return "sunglasses";

        if (
            title.includes("belt")
        ) return "belt";

        if (
            title.includes("handbag") ||
            title.includes("tote") ||
            title.includes("crossbody")
        ) return "bag";

        return "accessory";
    }

    if (
        title.includes("shirt") ||
        title.includes("oxford") ||
        title.includes("linen shirt") ||
        title.includes("cotton shirt") ||
        title.includes("overshirt") ||
        title.includes("polo")
    ) return "shirt";

    if (
        title.includes("tee") ||
        title.includes("t-shirt") ||
        title.includes("hoodie")
    ) return "top";

    if (
        title.includes("jeans") ||
        title.includes("trouser") ||
        title.includes("cargo") ||
        title.includes("wide-leg")
    ) return "bottom";

    if (
        title.includes("dress") ||
        title.includes("midi")
    ) return "dress";

    if (
        title.includes("kurti") ||
        title.includes("kurta") ||
        title.includes("anarkali") ||
        title.includes("chikankari") ||
        title.includes("tunic")
    ) return "ethnic";

    if (
        title.includes("saree")
    ) return "saree";

    if (
        title.includes("jacket") ||
        title.includes("bomber") ||
        title.includes("bandhgala") ||
        title.includes("nehru")
    ) return "layer";

    if (
        title.includes("co-ord") ||
        title.includes("set") ||
        title.includes("resort") ||
        title.includes("streetwear")
    ) return "set";

    return "other";
}


/* =========================================================
   MATCHING RULES
========================================================= */

function getMatchingRules(product) {

    const type = getProductType(product);
    const category = product.category;

    /* MEN'S */

    if (category === "Men's") {

        if (type === "shirt" || type === "top") {
            return {
                categories: ["Men's", "Accessories"],
                types: [
                    "bottom",
                    "footwear",
                    "watch",
                    "belt",
                    "sunglasses"
                ]
            };
        }

        if (type === "bottom") {
            return {
                categories: ["Men's", "Western", "Accessories"],
                types: [
                    "shirt",
                    "top",
                    "footwear",
                    "watch",
                    "belt",
                    "sunglasses"
                ]
            };
        }

        if (type === "layer") {
            return {
                categories: ["Men's", "Western", "Accessories"],
                types: [
                    "shirt",
                    "top",
                    "bottom",
                    "footwear",
                    "watch"
                ]
            };
        }
    }


    /* WOMEN'S */

    if (category === "Women's") {

        if (type === "dress") {
            return {
                categories: ["Women's", "Accessories"],
                types: [
                    "bag",
                    "footwear",
                    "sunglasses",
                    "watch"
                ]
            };
        }

        if (type === "ethnic") {
            return {
                categories: ["Women's", "Sarees", "Traditional", "Accessories"],
                types: [
                    "bottom",
                    "bag",
                    "footwear",
                    "sunglasses",
                    "accessory"
                ]
            };
        }

        if (type === "top") {
            return {
                categories: ["Women's", "Western", "Accessories"],
                types: [
                    "bottom",
                    "bag",
                    "footwear",
                    "sunglasses"
                ]
            };
        }

        if (type === "bottom") {
            return {
                categories: ["Women's", "Western", "Accessories"],
                types: [
                    "top",
                    "dress",
                    "bag",
                    "footwear",
                    "sunglasses"
                ]
            };
        }

        if (type === "set") {
            return {
                categories: ["Women's", "Accessories"],
                types: [
                    "bag",
                    "footwear",
                    "sunglasses",
                    "watch"
                ]
            };
        }
    }


    /* SAREES */

    if (category === "Sarees") {

        return {
            categories: ["Sarees", "Women's", "Traditional", "Accessories"],
            types: [
                "ethnic",
                "saree",
                "bag",
                "footwear",
                "sunglasses",
                "accessory"
            ]
        };
    }


    /* WESTERN */

    if (category === "Western") {

        if (type === "top" || type === "shirt") {
            return {
                categories: ["Western", "Men's", "Women's", "Accessories"],
                types: [
                    "bottom",
                    "footwear",
                    "watch",
                    "sunglasses",
                    "bag"
                ]
            };
        }

        if (type === "bottom") {
            return {
                categories: ["Western", "Men's", "Women's", "Accessories"],
                types: [
                    "shirt",
                    "top",
                    "footwear",
                    "watch",
                    "sunglasses"
                ]
            };
        }

        if (type === "layer") {
            return {
                categories: ["Western", "Men's", "Women's", "Accessories"],
                types: [
                    "top",
                    "shirt",
                    "bottom",
                    "footwear",
                    "watch",
                    "sunglasses"
                ]
            };
        }

        if (type === "set") {
            return {
                categories: ["Western", "Accessories"],
                types: [
                    "footwear",
                    "watch",
                    "sunglasses",
                    "bag"
                ]
            };
        }
    }


    /* TRADITIONAL */

    if (category === "Traditional") {

        return {
            categories: ["Traditional", "Men's", "Women's", "Sarees", "Accessories"],
            types: [
                "ethnic",
                "layer",
                "set",
                "saree",
                "bag",
                "footwear",
                "watch",
                "sunglasses",
                "accessory"
            ]
        };
    }


    /* ACCESSORIES */

    if (category === "Accessories") {

        if (type === "watch") {
            return {
                categories: ["Men's", "Women's", "Western", "Traditional"],
                types: [
                    "shirt",
                    "top",
                    "bottom",
                    "dress",
                    "ethnic",
                    "layer",
                    "set"
                ]
            };
        }

        if (type === "footwear") {
            return {
                categories: ["Men's", "Women's", "Western", "Traditional", "Sarees"],
                types: [
                    "shirt",
                    "top",
                    "bottom",
                    "dress",
                    "ethnic",
                    "saree",
                    "set"
                ]
            };
        }

        if (type === "bag") {
            return {
                categories: ["Women's", "Western", "Traditional", "Sarees"],
                types: [
                    "dress",
                    "top",
                    "bottom",
                    "ethnic",
                    "saree",
                    "set"
                ]
            };
        }

        if (type === "sunglasses") {
            return {
                categories: ["Men's", "Women's", "Western", "Traditional"],
                types: [
                    "shirt",
                    "top",
                    "bottom",
                    "dress",
                    "ethnic",
                    "layer",
                    "set"
                ]
            };
        }

        if (type === "belt") {
            return {
                categories: ["Men's", "Western"],
                types: [
                    "shirt",
                    "top",
                    "bottom",
                    "layer"
                ]
            };
        }
    }

    return {
        categories: [product.category],
        types: []
    };
}


/* =========================================================
   FIND MATCHING PRODUCTS
========================================================= */

function getMatchingProducts(product) {

    const rules = getMatchingRules(product);
    const currentType = getProductType(product);

    const candidates = products.filter(item => {

        if (item.id === product.id) return false;

        if (!rules.categories.includes(item.category)) {
            return false;
        }

        const itemType = getProductType(item);

        return rules.types.includes(itemType);
    });


    /* Remove duplicate products */

    const uniqueProducts =
        [...new Map(
            candidates.map(item => [item.id, item])
        ).values()];


    /*
       Try to keep the recommendations balanced.
       Example:
       Shirt → bottom + footwear + watch + belt + sunglasses
    */

    const selected = [];

    rules.types.forEach(type => {

        const item = uniqueProducts.find(productItem =>
            getProductType(productItem) === type
        );

        if (item && !selected.some(x => x.id === item.id)) {
            selected.push(item);
        }
    });


    /*
       If fewer than 6 matches exist,
       fill remaining spaces with valid
       matching products only.
    */

    uniqueProducts.forEach(item => {

        if (selected.length >= 6) return;

        if (!selected.some(x => x.id === item.id)) {
            selected.push(item);
        }
    });


    return selected.slice(0, 6);
}


/* =========================================================
   SHOW COMPLETE LOOK
========================================================= */

function showMatchingProducts() {

    if (!currentProduct) return;

    let panel = document.getElementById("matchPanel");

    if (!panel) {

        panel = document.createElement("div");

        panel.id = "matchPanel";

        panel.className = "match-panel";

        modalCompleteLook.insertAdjacentElement(
            "afterend",
            panel
        );
    }


    const matches =
        getMatchingProducts(currentProduct);


    if (!matches.length) {

        panel.innerHTML = `
            <div class="match-panel-head">
                <div>
                    <small>STYLE MATCH</small>
                    <h3>Complete This Look</h3>
                </div>
            </div>

            <p class="match-intro">
                Explore more pieces from this collection.
            </p>
        `;

        return;
    }


    panel.innerHTML = `

        <div class="match-panel-head">

            <div>
                <small>STYLE MATCH</small>

                <h3>
                    Complete This Look
                </h3>
            </div>

            <span>
                ${matches.length} matches
            </span>

        </div>


        <p class="match-intro">
            Picked to coordinate with
            <strong>
                ${escapeHtml(currentProduct.title)}
            </strong>.
        </p>


        <div class="match-grid">

            ${matches.map(item => `

                <button
                    class="match-card"
                    data-match-id="${item.id}"
                >

                    <img
                        src="${item.image}"
                        alt="${escapeHtml(item.title)}"
                        loading="lazy"
                    >

                    <span>
                        ${escapeHtml(item.title)}
                    </span>

                    <strong>
                        ₹${item.price.toLocaleString("en-IN")}
                    </strong>

                </button>

            `).join("")}

        </div>
    `;


    panel.querySelectorAll(".match-card").forEach(card => {

        card.addEventListener("click", () => {

            openProductModal(
                card.dataset.matchId
            );

        });

    });


    panel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================================
   HIDE COMPLETE LOOK
========================================================= */

function hideMatchPanel() {

    const panel =
        document.getElementById("matchPanel");

    if (panel) {
        panel.remove();
    }
}

/* =========================================================
   WHATSAPP
========================================================= */
function buildWhatsAppUrl(message) {
    return `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

function sendProductWhatsApp() {
    if (!currentProduct) return;
    openWhatsApp(`Hi! I'm interested in this product:\n\n${currentProduct.title}\nCategory: ${currentProduct.category}\nPrice: ₹${currentProduct.price.toLocaleString("en-IN")}\nSize: ${selectedSize}\nColour: ${selectedColour}\n\nPlease share more details.`);
    showToast("WhatsApp enquiry opened");
}

function setupWhatsAppButtons() {
    const generalMessage = "Hi! I found your Digital Fashion Catalogue and would like to know more about your collection.";
    [storeWhatsappBtn, footerWhatsappBtn, mobileWhatsappBtn].forEach(button => {
        if (button) button.addEventListener("click", () => openWhatsApp(generalMessage));
    });
}

/* =========================================================
   SHARING
========================================================= */
function setupSharing() {
    if (heroShareBtn) heroShareBtn.addEventListener("click", shareCatalogue);
}

async function shareCatalogue() {
    const shareData = {title:"Digital Fashion Catalogue", text:"Explore this digital fashion catalogue.", url:window.location.href};
    if (navigator.share) {
        try { await navigator.share(shareData); showToast("Catalogue shared"); return; }
        catch (error) { if (error.name === "AbortError") return; }
    }
    await copyText(window.location.href);
    showToast("Catalogue link copied");
}

async function shareCurrentProduct() {
    if (!currentProduct) return;
    const shareData = {title:currentProduct.title, text:`${currentProduct.title} — ₹${currentProduct.price.toLocaleString("en-IN")}`, url:window.location.href};
    if (navigator.share) {
        try { await navigator.share(shareData); showToast("Product shared"); return; }
        catch (error) { if (error.name === "AbortError") return; }
    }
    await copyText(`${currentProduct.title} — ₹${currentProduct.price.toLocaleString("en-IN")}\n${window.location.href}`);
    showToast("Product details copied");
}

/* =========================================================
   NEW ARRIVALS / COPY
========================================================= */
function setupNewArrivals() {
    if (!newArrivalsBtn) return;
    newArrivalsBtn.addEventListener("click", () => {
        setActiveFilter("New");
        document.getElementById("catalogue").scrollIntoView({behavior:"smooth"});
    });
}

function setupCatalogueCopy() {
    if (!copyCatalogueBtn) return;
    copyCatalogueBtn.addEventListener("click", async () => {
        const copied = await copyText(window.location.href);
        showToast(copied ? "Catalogue link copied" : "Copy failed — copy the URL from your browser");
    });
}

async function copyText(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch (error) {}

    try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand("copy");
        textarea.remove();
        return success;
    } catch (error) {
        return false;
    }
}

/* =========================================================
   MOBILE MENU
========================================================= */
function setupMobileMenu() {
    if (!menuToggle || !navMenu) return;
    menuToggle.addEventListener("click", () => {
        const open = navMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
    });
    navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));
    document.addEventListener("click", event => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMobileMenu();
    });
}

function closeMobileMenu() {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

/* =========================================================
   NAVIGATION
========================================================= */
function setupNavigation() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("[data-nav]");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => link.classList.toggle("active", link.dataset.nav === entry.target.id));
        });
    }, {rootMargin:"-30% 0px -55% 0px"});
    sections.forEach(section => observer.observe(section));
}

/* =========================================================
   REVEAL
========================================================= */
function setupRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:.12});
    elements.forEach(element => observer.observe(element));
}

/* =========================================================
   SCROLL
========================================================= */
function setupScrollEffects() {
    const handleScroll = () => {
        const scrollTopValue = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pageHeight > 0 ? (scrollTopValue / pageHeight) * 100 : 0;
        if (scrollProgress) scrollProgress.style.width = `${progress}%`;
        if (siteHeader) siteHeader.classList.toggle("scrolled", scrollTopValue > 30);
        if (scrollTop) scrollTop.classList.toggle("show", scrollTopValue > 600);
    };
    window.addEventListener("scroll", handleScroll, {passive:true});
    handleScroll();
    if (scrollTop) scrollTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

/* =========================================================
   KEYBOARD
========================================================= */
function setupKeyboardControls() {
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            if (productModal.classList.contains("open")) closeProductModal();
            closeMobileMenu();
        }
    });
}

/* =========================================================
   TOAST
========================================================= */
function showToast(message) {
    if (!toast) return;
    const text = toast.querySelector("p");
    text.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* =========================================================
   HTML ESCAPE
========================================================= */
function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
