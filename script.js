// ── MENU DATA ──────────────────────────────────────────────────────────────
const menuItems = [
  // BURGERS
  {
    category: 'Burgers',
    name: "Smokin' Burg Classic",
    desc: 'Double smash patty, chipotle aioli, aged cheddar, caramelised onions, brioche bun.',
    price: '₹349',
    priceNote: 'onwards',
    badge: '⭐ Signature',
    badgeClass: '',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Smokin Burg Classic'
  },
  {
    category: 'Burgers',
    name: 'Double Trouble Smash',
    desc: 'Two beef smash patties, american cheese melt, pickled jalapeños, secret sauce, potato bun.',
    price: '₹399',
    badge: '🔥 Best Seller',
    badgeClass: 'sea',
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Double Trouble Smash Burger'
  },
  {
    category: 'Burgers',
    name: 'Crispy Chicken Royale',
    desc: 'Buttermilk fried chicken, slaw, honey mustard, pickles — stacked tall in a toasted brioche.',
    price: '₹329',
    img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Crispy Chicken Royale Burger'
  },
  // STARTERS
  {
    category: 'Starters',
    name: 'Nashville Chicken Strips',
    desc: 'Crunchy fried chicken tossed in Nashville hot sauce. Guests call them addictive.',
    price: '₹249',
    badge: '🔥 Must Try',
    badgeClass: 'sea',
    img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Nashville Chicken Strips'
  },
  {
    category: 'Starters',
    name: 'Calamari Fritti',
    desc: 'Golden-fried squid rings with lemon aioli and chilli flakes. A perfect starter with a sea view.',
    price: '₹299',
    img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Calamari Fritti'
  },
  {
    category: 'Starters',
    name: 'Loaded Nachos',
    desc: 'Crispy tortillas, three-cheese blend, jalapeños, sour cream, pico de gallo, guacamole.',
    price: '₹229',
    img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Loaded Nachos'
  },
  {
    category: 'Starters',
    name: 'Pepper Beef Bites',
    desc: 'Tenderloin cubes tossed in cracked pepper sauce, served with chimichurri dipping sauce.',
    price: '₹349',
    badge: '⭐ Signature',
    badgeClass: '',
    img: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Pepper Beef Bites'
  },

  // GRILLS
  {
    category: 'Grills',
    name: 'Beef Tenderloin Steak',
    desc: 'Slow-cooked to your preference, herb butter, garlic mash. Guests rate it 10/10.',
    price: '₹549',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Beef Tenderloin Steak'
  },
  {
    category: 'Grills',
    name: 'BBQ Baby Back Ribs',
    desc: 'Fall-off-the-bone pork ribs glazed in house-made BBQ sauce, coleslaw, corn on the cob.',
    price: '₹649',
    badge: '⭐ Signature',
    badgeClass: '',
    img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'BBQ Baby Back Ribs'
  },
  {
    category: 'Grills',
    name: 'Grilled Sea Bass',
    desc: 'Whole sea bass butterflied and chargrilled with lemon, herbs and a peppercorn beurre blanc.',
    price: '₹499',
    // badge: '🌊 Catch of Day',
    badgeClass: 'sea',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Grilled Sea Bass'
  },
  {
    category: 'Grills',
    name: 'Mixed Grill Platter',
    desc: 'Chicken tikka, seekh kebab, grilled prawns and beef skewers — sharing platter for two.',
    price: '₹799',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Mixed Grill Platter'
  },

  // PASTA
  {
    category: 'Pasta',
    name: 'Chicken Alfredo Pasta',
    desc: 'Creamy Alfredo sauce, grilled chicken, fresh parmesan. A crowd favourite every day.',
    price: '₹299',
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Chicken Alfredo Pasta'
  },
  {
    category: 'Pasta',
    name: 'Arrabiata Diavola',
    desc: 'Rigatoni in a fiery San Marzano tomato sauce with nduja, capers and burrata on top.',
    price: '₹279',
    badge: '🔥 Spicy',
    badgeClass: 'sea',
    img: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Arrabiata Diavola Pasta'
  },
  {
    category: 'Pasta',
    name: 'Truffle Mushroom Linguine',
    desc: 'Wild mushroom medley, truffle oil, aged parmesan, fresh thyme. Earthy and luxurious.',
    price: '₹319',
    badge: '⭐ Signature',
    badgeClass: '',
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Truffle Mushroom Linguine'
  },
  {
    category: 'Pasta',
    name: 'Prawn Aglio Olio',
    desc: 'Spaghetti, sautéed tiger prawns, garlic chips, lemon zest, white wine, fresh parsley.',
    price: '₹349',
    img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Prawn Aglio Olio'
  },

  // DRINKS
  {
    category: 'Drinks',
    name: 'Iced Latte',
    desc: 'Rich espresso, cold milk, hint of vanilla. Best on our open terrace with a sea view.',
    price: '₹149',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Iced Latte'
  },
  {
    category: 'Drinks',
    name: 'Mango Basil Cooler',
    desc: 'Fresh Alphonso mango, holy basil, lime, soda — a Kerala summer in a glass.',
    price: '₹169',
    badge: '🌅 Seasonal',
    badgeClass: 'gold',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Mango Basil Cooler'
  },
  {
    category: 'Drinks',
    name: 'Cold Brew Float',
    desc: '24-hour cold brew, vanilla bean ice cream, sea salt — rich, bold and dangerously smooth.',
    price: '₹199',
    badge: '⭐ Favourite',
    badgeClass: '',
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Cold Brew Float'
  },
  {
    category: 'Drinks',
    name: 'Watermelon Mint Slush',
    desc: 'Blended watermelon, fresh mint, pink salt and a squeeze of lime. Zero-degree refreshment.',
    price: '₹139',
    img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80&auto=format&fit=crop&crop=center',
    alt: 'Watermelon Mint Slush'
  }
];

// ── RENDER MENU ─────────────────────────────────────────────────────────────
function renderMenu(filter) {
  const grid = document.getElementById('menuGrid');
  const items = filter === 'All' ? menuItems : menuItems.filter(i => i.category === filter);

  grid.innerHTML = items.map(item => `
    <div class="menu-card" data-cat="${item.category}">
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.alt}" loading="lazy">
      </div>
      <div class="menu-card-body">
        <div>
          <div class="menu-cat">${item.category}</div>
          <div class="menu-name">${item.name}</div>
          <div class="menu-desc">${item.desc}</div>
        </div>
        <div class="menu-card-foot">
          <div class="menu-price">${item.price}${item.priceNote ? ` <small>${item.priceNote}</small>` : ''}</div>
          ${item.badge ? `<span class="menu-badge-tag ${item.badgeClass || ''}">${item.badge}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // stagger-animate cards in
  grid.querySelectorAll('.menu-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(14px)';
    card.style.transition = 'opacity 0.32s ease, transform 0.32s ease';
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 55);
    });
  });
}

// ── MENU TABS ───────────────────────────────────────────────────────────────
const tabs = document.querySelectorAll('.menu-tabs .tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.textContent.trim());
  });
});

// Initial render — show all
renderMenu('All');

// ── HAMBURGER ───────────────────────────────────────────────────────────────
const ham = document.getElementById('ham'), mob = document.getElementById('mobMenu');
ham.addEventListener('click', () => mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

// ── SMOOTH SCROLL ────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── WA FLOAT ─────────────────────────────────────────────────────────────────
const waBtn = document.querySelector('.wa-float');
const heroSec = document.getElementById('hero');
const waObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      waBtn.classList.remove('wa-visible');
    } else {
      waBtn.classList.add('wa-visible');
    }
  },
  { threshold: 0.1 }
);
waObserver.observe(heroSec);

// ── DRAG-SCROLL REVIEWS ──────────────────────────────────────────────────────
const rs = document.getElementById('revScroll');
let isDown = false, startX, scrollLeft;
rs.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - rs.offsetLeft; scrollLeft = rs.scrollLeft; });
rs.addEventListener('mouseleave', () => isDown = false);
rs.addEventListener('mouseup', () => isDown = false);
rs.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  rs.scrollLeft = scrollLeft - (e.pageX - rs.offsetLeft - startX) * 1.2;
});



// ── HERO BG SLOW ZOOM ────────────────────────────────────────────────────────
document.querySelectorAll('.hero-bg-img img').forEach(img => {
  img.style.transform = 'scale(1.05)';
  setTimeout(() => { img.style.transition = 'transform 9s ease'; img.style.transform = 'scale(1)'; }, 100);
});