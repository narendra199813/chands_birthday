/* ========================================
   BIRTHDAY SURPRISE — MAIN SCRIPT
   ======================================== */

// ==========================================
// CONFIGURATION — Personalize everything here
// ==========================================
const CONFIG = {
    // Basic Info
    name: "Misbiii",
    birthdate: new Date(1998, 4, 13), 
    unlockDate: new Date(2026, 4, 13, 0, 0, 0),

    // --- SELLABLE TEMPLATE TEXT ---
    ui: {
        hero: {
            title: "Happy Birthday,",
            nameHighlight: "Chand",
            subtitle: "Another year more radiant and incredible than the last ✨",
            tagline: "🌸 A special surprise just for you 🌸",
            buttonText: "Start the Surprise →"
        },
        ageSection: {
            badge: "🎉 Milestone Birthday 🎉",
            preNumber: "You turned",
            postNumber: "today 🎂",
            counterLabel: "You've been shining for",
            compliment: "Radiant, stunning, and the most incredible soul I know 🌸",
            sweetWords: [
                "Every year you only get more beautiful 🦋",
                "Inside and out, you're absolutely radiant ✨",
                "The world is a better place because you're in it 🌍💖"
            ]
        },
        letterSection: {
            title: "A Letter for you… 💌",
            envelopeHint: "Tap to open your letter ❤️"
        },
        finalSection: {
            title: "Happiest Birthday, Chand! ❤️",
            subtitle: "You make every single day of my life feel like a gift. Here's to us and many more birthdays together. 🌸",
            quote: "\"You are the best thing that ever happened to me.\"",
            buttonText: "Replay from the top 🔄"
        }
    },

    // Memory card messages
    memories: [
        { icon: "💬", title: "The first time we talked", message: "I still remember how nervous I was, and how your smile made everything feel easy. That moment changed everything for me." },
        { icon: "😂", title: "Your funniest habit", message: "The way you laugh at your own jokes before even finishing them — it's the most adorable thing in the world." },
        { icon: "🥺", title: "Your cutest moment", message: "When you scrunch your nose while thinking hard about something. You don't even realize how cute you are." },
        { icon: "✨", title: "The best thing about you", message: "Your heart. The way you care so deeply about everyone around you makes you truly special." },
        { icon: "🎵", title: "Your favorite song moment", message: "When you sing along to your favorite songs without a care in the world — pure magic." },
        { icon: "🌙", title: "Late night conversations", message: "Those 3 AM talks where we shared our deepest thoughts. Those are the moments I treasure most." },
        { icon: "☀️", title: "Morning energy", message: "Your morning texts always brighten my day. You're like my personal sunshine." },
        { icon: "🎨", title: "Your creative side", message: "The way you see beauty in everything and create art from the simplest things never stops amazing me." }
    ],

    letter: [
        "Sukkon ,",
        "",
        "I don't know if you realize how much brighter things get just because you're in them. The way you laugh, the little things you do without thinking — they all somehow become my favorite things.",
        "",
        "I find myself smiling randomly throughout the day, and it's almost always because of you. You've made ordinary moments feel worth remembering.",
        "",
        "I just wanted you to know that loving you feels like the easiest, most natural thing in the world. You are so deeply appreciated — not just for what you do, but for who you are.",
        "",
        "Always yours, 💛",
        "",
        "Naren"
    ],

    // 12 Reasons
    reasons: [
        "The way your eyes light up when you're excited ✨",
        "How you make even the smallest moments feel special 💖",
        "Your kindness that makes me want to be a better person 🌸",
        "The way you laugh at my silly jokes (even when they're not funny) 😂",
        "Your incredible strength and how you handle everything with grace 💪",
        "The way you care for me in a way nobody else ever has 🧸",
        "How stunning you look, even when you're just waking up ☀️",
        "Your passion for the things you love—it's so inspiring 🚀",
        "The way your hand feels so perfect in mine 🤝",
        "How you always know exactly how to make me smile 🌙",
        "Your beautiful soul that shines brighter than any star 🌟",
        "Simply because you're mine, and I'm the luckiest to have you ❤️"
    ],

    // Surprise messages
    surpriseMessages: [
        "You mean the world to me ❤️",
        "Every moment with you is a gift 🎁",
        "I'm the luckiest person to have you 🍀",
        "You make my life a fairytale ✨"
    ],


    // Wish wall notes
    wishNotes: [
        { text: "My forever favorite ✨", theme: "love", icon: "✨", color: "#FFE0EC" },
        { text: "You're my Sukoon ❤️", theme: "love", icon: "❤️", color: "#E0E8FF" },
        { text: "Keep being amazing 😊", theme: "love", icon: "😊", color: "#FFF3D4" },
        { text: "So proud of you ❤️", theme: "love", icon: "❤️", color: "#E0FFE8" },
        { text: "You're my sunshine ☀️", theme: "love", icon: "☀️", color: "#FFE0FF" },
        { text: "Purest soul ever 🌸", theme: "love", icon: "🌸", color: "#FFFDE0" },
        { text: "Beauty with Brains 💖", theme: "love", icon: "💖", color: "#FFE0E8" },
        { text: "Stay mine forever 💝", theme: "love", icon: "💝", color: "#F0E0FF" },
        { text: "Dream big, my gorgeous  🚀", theme: "love", icon: "🚀", color: "#E0F0FF" },
        { text: "One in a million ⭐", theme: "love", icon: "⭐", color: "#FFE8D4" },
        { text: "Keep shining bright 🤩", theme: "love", icon: "🤩", color: "#FFFFE0" },
        { text: "Lucky to have you 💍", theme: "love", icon: "💍", color: "#E8FFE0" }
    ]
};

// ==========================================
// GLOBAL STATE
// ==========================================
let isUnlocked = false;
let confettiInterval = null;
let countdownInterval = null;

// ==========================================
// CONFIG-TO-UI SYSTEM (For Customizability)
// ==========================================
function applyConfigToUI() {
    const ui = CONFIG.ui;
    if (!ui) return;

    // Hero Section
    if (ui.hero) {
        const titleEl = $('#heroTitle');
        if (titleEl) {
            titleEl.innerHTML = `${ui.hero.title} <span class="highlight-name">${ui.hero.nameHighlight}</span> <span class="emoji-bounce">❤️🎉</span>`;
        }
        if ($('.hero-subtitle')) $('.hero-subtitle').textContent = ui.hero.subtitle;
        if ($('.hero-tagline')) $('.hero-tagline').textContent = ui.hero.tagline;
        if ($('#startSurprise')) $('#startSurprise').innerHTML = `<span class="btn-shimmer"></span>${ui.hero.buttonText} <span class="arrow">→</span>`;
    }

    // Age Section
    if (ui.ageSection) {
        if ($('.milestone-badge')) $('.milestone-badge').textContent = ui.ageSection.badge;
        const headings = $$('.age-heading');
        if (headings[0]) headings[0].textContent = ui.ageSection.preNumber;
        if (headings[1]) headings[1].textContent = ui.ageSection.postNumber;
        if ($('.age-counter p')) $('.age-counter p').textContent = ui.ageSection.counterLabel;
        if ($('.compliment-text')) $('.compliment-text').textContent = ui.ageSection.compliment;

        const sweetLines = $$('.sweet-line');
        ui.ageSection.sweetWords.forEach((word, i) => {
            if (sweetLines[i]) sweetLines[i].textContent = word;
        });
    }

    // Letter Section
    if (ui.letterSection) {
        if ($('#letterSection .section-title')) $('#letterSection .section-title').textContent = ui.letterSection.title;
        if ($('#envelopeHint')) $('#envelopeHint').innerHTML = `<span class="hint-icon"></span> ${ui.letterSection.envelopeHint}`;
    }

    // Final Section
    if (ui.finalSection) {
        if ($('.final-title')) $('.final-title').textContent = ui.finalSection.title;
        if ($('.final-subtitle')) $('.final-subtitle').textContent = ui.finalSection.subtitle;
        if ($('.final-quote')) $('.final-quote').textContent = ui.finalSection.quote;
        if ($('#replayBtn')) $('#replayBtn').textContent = ui.finalSection.buttonText;
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) age--;
    return age;
}

function calculateDaysAlive(birthdate) {
    const now = new Date();
    const diff = now - birthdate;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// ==========================================
// CONFETTI SYSTEM
// ==========================================
class ConfettiSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle(x, y) {
        const colors = ['#FFB3D9', '#E0BBE4', '#FFD4A3', '#FF9A76', '#87CEEB', '#98FB98', '#FFD700', '#FF69B4'];
        return {
            x: x || Math.random() * this.canvas.width,
            y: y || -10,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * 4 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1,
            gravity: 0.08
        };
    }

    burst(x, y, count = 80) {
        for (let i = 0; i < count; i++) {
            const p = this.createParticle(x || this.canvas.width / 2, y || this.canvas.height / 3);
            p.vx = (Math.random() - 0.5) * 16;
            p.vy = Math.random() * -12 - 2;
            this.particles.push(p);
        }
        this.animate();
    }

    rain(duration = 3000) {
        const startTime = Date.now();
        const addParticles = () => {
            if (Date.now() - startTime < duration) {
                for (let i = 0; i < 5; i++) {
                    this.particles.push(this.createParticle());
                }
                requestAnimationFrame(addParticles);
            }
        };
        addParticles();
        this.animate();
    }

    animate() {
        if (this.animating) return;
        this.animating = true;
        const loop = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles = this.particles.filter(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.rotation += p.rotationSpeed;
                p.opacity -= 0.003;
                if (p.opacity <= 0 || p.y > this.canvas.height + 20) return false;
                this.ctx.save();
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate((p.rotation * Math.PI) / 180);
                this.ctx.globalAlpha = p.opacity;
                this.ctx.fillStyle = p.color;
                this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                this.ctx.restore();
                return true;
            });
            if (this.particles.length > 0) {
                requestAnimationFrame(loop);
            } else {
                this.animating = false;
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        };
        loop();
    }
}

// ==========================================
// LOCK SCREEN & COUNTDOWN
// ==========================================
function initLockScreen() {
    const lockScreen = $('#lockScreen');
    const mainContent = $('#mainContent');
    const now = new Date();

    // 1. If date hasn't arrived yet: FORCE LOCK
    if (now < CONFIG.unlockDate) {
        // Clear any previous unlock state so it locks again
        localStorage.removeItem('birthdayUnlocked');

        // Setup lock screen elements
        createLockHearts();
        updateCountdown();
        // Clear any existing interval first to be safe
        if (countdownInterval) clearInterval(countdownInterval);
        countdownInterval = setInterval(updateCountdown, 1000);
        return; // Stop here! Do not unlock.
    }

    // 2. Date has arrived! Check if already unlocked previously
    if (localStorage.getItem('birthdayUnlocked') === 'true') {
        lockScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        isUnlocked = true;
        initMainSite();
        return;
    }

    // 3. First time unlocking on/after the date
    unlockSite();
}

function createLockHearts() {
    const container = $('#lockHeartsBg');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.className = 'lock-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 8) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(heart);
    }
}

function updateCountdown() {
    const now = new Date();
    const diff = CONFIG.unlockDate - now;

    if (diff <= 0) {
        if (countdownInterval) clearInterval(countdownInterval);
        unlockSite();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $('#days').textContent = String(days).padStart(2, '0');
    $('#hours').textContent = String(hours).padStart(2, '0');
    $('#minutes').textContent = String(minutes).padStart(2, '0');
    $('#seconds').textContent = String(seconds).padStart(2, '0');
}

function unlockSite() {
    const lockScreen = $('#lockScreen');
    const mainContent = $('#mainContent');

    lockScreen.classList.add('unlocking');

    setTimeout(() => {
        lockScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        isUnlocked = true;
        localStorage.setItem('birthdayUnlocked', 'true');

        // Confetti burst on unlock
        const confetti = new ConfettiSystem($('#confettiCanvas'));
        confetti.burst();
        confetti.rain(2000);

        initMainSite();
    }, 1200);
}

// ==========================================
// MAIN SITE INITIALIZATION
// ==========================================
function initMainSite() {
    applyConfigToUI(); // Fill in customizable text
    createFloatingHearts('heroHearts', 15);
    createFloatingHearts('finalHearts', 10);
    createParticleGlow();
    createBalloons();
    createSparkles();
    initPhotoGallery();
    initLetter();
    initReasons();
    initWishWall();
    initScrollAnimations();
    initHeroButton();
    initFinalSection();
    initEasterEggs();
}

// ==========================================
// FLOATING HEARTS
// ==========================================
function createFloatingHearts(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '🩷'];
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 18 + 12) + 'px';
        heart.style.animationDuration = (Math.random() * 12 + 8) + 's';
        heart.style.animationDelay = (Math.random() * 8) + 's';
        container.appendChild(heart);
    }
}

// ==========================================
// PARTICLE GLOW
// ==========================================
function createParticleGlow() {
    const container = document.getElementById('particleGlow');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.className = 'glow-dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDelay = (Math.random() * 4) + 's';
        dot.style.animationDuration = (Math.random() * 3 + 3) + 's';
        const colors = ['#FFB3D9', '#E0BBE4', '#FFD4A3', '#87CEEB'];
        dot.style.background = colors[Math.floor(Math.random() * colors.length)];
        dot.style.width = (Math.random() * 6 + 3) + 'px';
        dot.style.height = dot.style.width;
        container.appendChild(dot);
    }
}

// ==========================================
// BALLOONS
// ==========================================
function createBalloons() {
    const container = document.getElementById('balloonsContainer');
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6B9D', '#C77DFF'];
    for (let i = 0; i < 6; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloonEmojis[i];
        balloon.style.left = (10 + Math.random() * 80) + '%';
        balloon.style.animationDuration = (Math.random() * 25 + 20) + 's';
        balloon.style.animationDelay = (Math.random() * 15) + 's';
        balloon.style.fontSize = (Math.random() * 15 + 30) + 'px';
        container.appendChild(balloon);
    }
}

// ==========================================
// SPARKLES (Age Section)
// ==========================================
function createSparkles() {
    const container = document.getElementById('ageSparkles');
    if (!container) return;
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = (Math.random() * 2) + 's';
        sparkle.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
        const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#FFD4A3'];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(sparkle);
    }
}

// ==========================================
// HERO BUTTON
// ==========================================
function initHeroButton() {
    const btn = document.getElementById('startSurprise');
    btn.addEventListener('click', () => {
        const confetti = new ConfettiSystem($('#confettiCanvas'));
        confetti.burst();
        document.getElementById('ageCelebration').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ==========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Age number animation
                if (entry.target.id === 'ageCelebration') {
                    animateAge();
                }
            }
        });
    }, { threshold: 0.2 });

    // Observe section titles
    $$('.section-title').forEach(el => observer.observe(el));

    // Observe gallery subtitle
    const gallerySub = $('.gallery-subtitle');
    if (gallerySub) observer.observe(gallerySub);

    // Observe age section
    const ageSection = document.getElementById('ageCelebration');
    if (ageSection) observer.observe(ageSection);

    // Observe gallery items with stagger
    $$('.gallery-item').forEach((item, i) => {
        item.style.transitionDelay = (i * 0.1) + 's';
        observer.observe(item);
    });

    // Observe section GIFs
    $$('.section-gif').forEach(gif => observer.observe(gif));

    // Observe final section
    const finalTitle = $('.final-title');
    const finalSubtitle = $('.final-subtitle');
    if (finalTitle) observer.observe(finalTitle);
    if (finalSubtitle) observer.observe(finalSubtitle);

    // Observe compliment card
    const complimentCard = document.getElementById('complimentCard');
    if (complimentCard) observer.observe(complimentCard);

    // Observe sweet words
    const sweetWords = document.getElementById('sweetWords');
    if (sweetWords) observer.observe(sweetWords);
}

// ==========================================
// AGE COUNTER ANIMATION
// ==========================================
let ageAnimated = false;
function animateAge() {
    if (ageAnimated) return;
    ageAnimated = true;

    const age = calculateAge(CONFIG.birthdate);
    const days = calculateDaysAlive(CONFIG.birthdate);

    animateNumber('ageNumber', age, 1500);
    animateNumber('daysAlive', days, 2500);
}

function animateNumber(elementId, target, duration) {
    const el = document.getElementById(elementId);
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(start + (target - start) * eased);
        el.textContent = current.toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// ==========================================
// PHOTO GALLERY & LIGHTBOX
// ==========================================
function initPhotoGallery() {
    // Just handle the float-in animation
    const galleryItems = $$('.gallery-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    galleryItems.forEach((item, index) => {
        // Stagger delay based on index
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);

        // Disable pointer events since there's no lightbox
        item.style.cursor = 'default';
        item.style.pointerEvents = 'none';
    });
}

// ==========================================
// LETTER — ENVELOPE INTERACTION
// ==========================================
let envelopeOpened = false;

function initLetter() {
    const container = document.getElementById('letterText');
    const lines = CONFIG.letter;

    // Build letter HTML (same as before)
    lines.forEach((line, i) => {
        if (line === '') {
            const br = document.createElement('br');
            container.appendChild(br);
        } else {
            const p = document.createElement('p');
            p.className = 'letter-line';
            p.textContent = line;
            container.appendChild(p);
        }
    });

    // Set up envelope click
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    if (envelopeWrapper) {
        envelopeWrapper.addEventListener('click', openEnvelope);
    }
}

function openEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;

    const wrapper = document.getElementById('envelopeWrapper');
    const heartsBurst = document.getElementById('heartsBurst');
    const letterReveal = document.getElementById('letterReveal');

    // Step 1: Open the flap (CSS transition — 0.9s)
    wrapper.classList.add('opened');

    // Step 2: First wave of hearts burst from envelope (after flap starts opening)
    setTimeout(() => {
        createHeartsBurst(heartsBurst, 25);
    }, 350);

    // Step 3: Second wave of hearts (more, slightly delayed for fullness)
    setTimeout(() => {
        createHeartsBurst(heartsBurst, 18);
    }, 700);

    // Step 4: Third small wave for lingering effect
    setTimeout(() => {
        createHeartsBurst(heartsBurst, 10);
    }, 1100);

    // Step 5: Hide envelope (after hearts have been flying ~2s)
    setTimeout(() => {
        wrapper.classList.add('hidden-away');
        // Hide the stage to remove empty space
        document.getElementById('letterStage').style.display = 'none';
        document.getElementById('letterStage').style.minHeight = '0'; // Ensure no residual height
    }, 2200);

    // Step 6: Reveal letter (after ~3s total)
    setTimeout(() => {
        letterReveal.classList.add('visible');

        // Step 7: Start typing animation after letter is visible
        setTimeout(() => {
            animateLetterLines();
        }, 500);
    }, 2800);
}

function createHeartsBurst(container, count = 60) {
    const pinkColors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#F4C2C2', '#E8989D', '#DB7093'];

    // Find the envelope to get its center position
    const envelope = document.getElementById('envelope');
    const stageRect = container.getBoundingClientRect();
    const envelopeRect = envelope.getBoundingClientRect();

    // Starting point: center-top of envelope (where the opening is), relative to the stage
    const startX = (envelopeRect.left + envelopeRect.width / 2) - stageRect.left;
    const startY = (envelopeRect.top + envelopeRect.height * 0.3) - stageRect.top;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'burst-heart-custom'; // New class for custom hearts

        // Create scalable SVG heart
        const color = pinkColors[Math.floor(Math.random() * pinkColors.length)];
        heart.innerHTML = `<svg viewBox="0 0 32 29.6" style="fill:${color}; width:100%; height:100%; filter:drop-shadow(0 2px 4px rgba(200,100,100,0.2));">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-11.8,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>`;

        // Random size
        const size = 20 + Math.random() * 30; // 20px to 50px as requested
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.position = 'absolute';

        // Position at the start point
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        heart.style.marginLeft = `-${size / 2}px`;
        heart.style.marginTop = `-${size / 2}px`;

        container.appendChild(heart);

        // HUGE spread: cover more screen area
        const spreadX = (Math.random() - 0.5) * 1200; // Much wider X spread
        const endY = -(200 + Math.random() * 600);   // Much higher Y flight
        const rot = (Math.random() - 0.5) * 180;     // More rotation
        const scale = 0.5 + Math.random() * 1.0;

        // Web Animation
        heart.animate([
            { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 0 },
            { transform: `translate(${spreadX * 0.2}px, -80px) scale(1.2) rotate(${rot * 0.3}deg)`, opacity: 1, offset: 0.15 },
            { transform: `translate(${spreadX * 0.6}px, ${endY * 0.6}px) scale(${scale}) rotate(${rot * 0.6}deg)`, opacity: 0.9, offset: 0.6 },
            { transform: `translate(${spreadX}px, ${endY}px) scale(0) rotate(${rot}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.1, 0.9, 0.4, 1)',
            fill: 'forwards'
        }).onfinish = () => heart.remove();
    }
}

function animateLetterLines() {
    const lines = $$('.letter-line');
    lines.forEach((line, i) => {
        setTimeout(() => {
            line.classList.add('typed');
        }, i * 300);
    });
}

// ==========================================
// REASONS SECTION
// ==========================================
// ==========================================
// REASONS SECTION — INTERACTIVE
// ==========================================
function initReasons() {
    const grid = document.getElementById('reasonsGrid');
    const revealNextBtn = document.getElementById('revealNextBtn');
    const revealAllBtn = document.getElementById('revealAllBtn');
    const resetBtn = document.getElementById('resetReasonsBtn');
    const counterEl = document.getElementById('reasonsCounter');
    const successEl = document.getElementById('reasonsSuccess');

    // Specific icons for each reason (matching the 12 reasons)
    const reasonIcons = ["✨", "💖", "🌸", "😂", "💪", "🧸", "☀️", "🚀", "🤝", "🌙", "🌟", "❤️"];

    let revealedCount = 0;

    // Clear grid first
    grid.innerHTML = '';

    // Render Cards
    CONFIG.reasons.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Reveal Reason ${i + 1}`);
        card.dataset.index = i;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span class="card-icon-front">${reasonIcons[i]}</span>
                    <span class="card-title">Reason #${i + 1}</span>
                    <span class="tap-hint">Tap to flip ↻</span>
                </div>
                <div class="card-back">
                    <span class="reason-content">${reason}</span>
                    <div class="card-corner-icon">${reasonIcons[i]}</div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => revealReason(i));
        grid.appendChild(card);
    });

    // Reveal Logic
    function revealReason(index) {
        const cards = grid.children;
        const card = cards[index];

        if (card.classList.contains('flipped')) return;

        card.classList.add('flipped');
        revealedCount++;
        updateCounter();

        // Check completion
        if (revealedCount === CONFIG.reasons.length) {
            triggerSuccess();
        }
    }

    // Button: Reveal Next
    revealNextBtn.addEventListener('click', () => {
        const cards = Array.from(grid.children);
        const nextCardIndex = cards.findIndex(c => !c.classList.contains('flipped'));

        if (nextCardIndex !== -1) {
            revealReason(nextCardIndex);
            // Smooth scroll to card if needed
            // cards[nextCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // Button: Reveal All
    revealAllBtn.addEventListener('click', () => {
        const cards = Array.from(grid.children);

        cards.forEach((card, i) => {
            if (!card.classList.contains('flipped')) {
                setTimeout(() => {
                    revealReason(i);
                }, i * 150); // Staggered reveal
            }
        });
    });

    // Button: Reset
    resetBtn.addEventListener('click', () => {
        const cards = Array.from(grid.children);
        cards.forEach(card => card.classList.remove('flipped'));
        revealedCount = 0;
        updateCounter();
        successEl.classList.add('hidden');

        // Reset button animation
        resetBtn.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-360deg)' }
        ], { duration: 600 });
    });

    function updateCounter() {
        counterEl.textContent = revealedCount;

        // Pulse animation on counter
        counterEl.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.5)', color: '#FF69B4' },
            { transform: 'scale(1)' }
        ], { duration: 300 });
    }

    function triggerSuccess() {
        successEl.classList.remove('hidden');
        successEl.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 600 });

        // Confetti explosion
        const confetti = new ConfettiSystem(document.getElementById('confettiCanvas'));
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 100);
        confetti.rain(3000);
    }
}

// ==========================================
// WISH WALL
// ==========================================
function initWishWall() {
    const container = document.getElementById('wishWallContainer');
    const shuffleBtn = document.getElementById('shuffleWishes');

    function renderWishes() {
        container.innerHTML = '';
        const notes = [...CONFIG.wishNotes];

        notes.forEach((note, i) => {
            const noteEl = document.createElement('div');
            noteEl.className = `wish-note-card theme-${note.theme}`;

            // Staggered entrance animation
            noteEl.style.animationDelay = (i * 0.1) + 's';

            noteEl.innerHTML = `
                <div class="wish-card-inner">
                    <div class="wish-card-header">
                         <div class="wish-card-icon">${note.icon}</div>
                         <div class="wish-card-theme-tag">${note.theme}</div>
                    </div>
                    <div class="wish-card-text">${note.text}</div>
                    <div class="wish-card-footer">
                        <div class="wish-card-actions">
                            <button class="wish-action-btn heart" title="Save Favorite">❤️</button>
                            <button class="wish-action-btn share" title="Share Message">📤</button>
                        </div>
                    </div>
                </div>
            `;

            // Interactive Features
            const heartBtn = noteEl.querySelector('.wish-action-btn.heart');
            heartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                heartBtn.classList.toggle('active');
                if (heartBtn.classList.contains('active')) {
                    const confetti = new ConfettiSystem($('#confettiCanvas'));
                    confetti.burst(e.clientX, e.clientY, 15);
                }
            });

            const shareBtn = noteEl.querySelector('.wish-action-btn.share');
            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (navigator.share) {
                    navigator.share({
                        title: 'A Message for You 💝',
                        text: note.text,
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(note.text);
                    const originalText = shareBtn.textContent;
                    shareBtn.textContent = '✅';
                    setTimeout(() => shareBtn.textContent = originalText, 2000);
                }
            });

            noteEl.addEventListener('click', () => {
                if (noteEl.classList.contains('active')) {
                    noteEl.classList.remove('active');
                } else {
                    $$('.wish-note-card.active').forEach(n => n.classList.remove('active'));
                    noteEl.classList.add('active');
                }
            });

            container.appendChild(noteEl);
        });
    }

    shuffleBtn.addEventListener('click', () => {
        CONFIG.wishNotes.sort(() => Math.random() - 0.5);
        renderWishes();
        const confetti = new ConfettiSystem($('#confettiCanvas'));
        confetti.rain(1000);
    });

    renderWishes();
}

// ==========================================
// FINAL SECTION
// ==========================================
function initFinalSection() {
    const shareBtn = document.getElementById('shareBtn');
    const replayBtn = document.getElementById('replayBtn');

    // Confetti on final section view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const confetti = new ConfettiSystem($('#confettiCanvas'));
                confetti.rain(3000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const finalSection = document.getElementById('finalSection');
    if (finalSection) observer.observe(finalSection);

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Happy Birthday! 🎂❤️',
                    text: 'Check out this birthday surprise!',
                    url: window.location.href
                }).catch(() => { });
            } else {
                // Copy link
                navigator.clipboard.writeText(window.location.href).then(() => {
                    shareBtn.textContent = 'Link Copied! ✅';
                    setTimeout(() => {
                        shareBtn.textContent = 'Send me a screenshot! 😭💖';
                    }, 2000);
                }).catch(() => {
                    alert('Unable to copy link. Please share manually!');
                });
            }
        });
    }

    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}



// ==========================================
// EASTER EGGS
// ==========================================
function initEasterEggs() {
    // Console message
    console.log('%c🎂 Happy Birthday! 🎂', 'font-size: 24px; color: #FFB3D9; font-weight: bold;');
    console.log('%cThis was made with love, just for you ❤️', 'font-size: 14px; color: #E0BBE4;');
    console.log('%c— Made with all my heart 💖', 'font-size: 12px; color: #FFD4A3;');

    // Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
    let konamiProgress = 0;
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiProgress]) {
            konamiProgress++;
            if (konamiProgress === konamiCode.length) {
                konamiProgress = 0;
                // Bonus animation!
                const confetti = new ConfettiSystem($('#confettiCanvas'));
                confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 200);
                confetti.rain(5000);

                // Flash rainbow
                document.body.style.animation = 'rainbowFlash 2s ease';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        } else {
            konamiProgress = 0;
        }
    });

    // Add rainbow flash animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbowFlash {
            0% { filter: hue-rotate(0deg); }
            25% { filter: hue-rotate(90deg); }
            50% { filter: hue-rotate(180deg); }
            75% { filter: hue-rotate(270deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Hidden clickable hearts that burst
    document.addEventListener('dblclick', (e) => {
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('span');
            heart.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                font-size: ${Math.random() * 16 + 12}px;
                pointer-events: none;
                z-index: 99999;
                animation: burstHeart 1s ease forwards;
                --angle: ${(Math.PI * 2 * i) / 8}rad;
            `;
            heart.textContent = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }
    });

    // Add burst heart animation
    const burstStyle = document.createElement('style');
    burstStyle.textContent = `
        @keyframes burstHeart {
            0% { transform: translate(0, 0) scale(0); opacity: 1; }
            100% { transform: translate(calc(cos(var(--angle)) * 80px), calc(sin(var(--angle)) * 80px)) scale(1); opacity: 0; }
        }
    `;
    document.head.appendChild(burstStyle);
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initLockScreen();

    // GLOBAL AUDIO HANDLER
    // Browsers block autoplay unless there's a user interaction.
    // This global listener ensures that music starts as soon as any interaction occurs.
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        const handleFirstInteraction = () => {
            // Only attempt to play if not already playing
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    console.log("Music started via user interaction");
                    cleanup();
                }).catch(err => {
                    console.log("Playback failed:", err);
                });
            } else {
                cleanup();
            }
        };

        const cleanup = () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);

        // Also attempt immediately for browsers with less strict policies
        bgMusic.play().catch(() => {
            console.log("Initial autoplay blocked. Waiting for user interaction...");
        });
    }
});

/* ===== INSTAGRAM SLIDER ===== */
(function () {
    const TOTAL = 28;
    const track = document.getElementById('instaPhotoTrack');
    const dotsRow = document.getElementById('instaDots');
    const counter = document.getElementById('instaSlideCounter');
    const prevBtn = document.getElementById('instaArrowPrev');
    const nextBtn = document.getElementById('instaArrowNext');
    const heartBtn = document.getElementById('instaHeartBtn');

    if (!track) return;

    let current = 0;
    let liked = false;

    const emojis = ['🌸','✨','💕','🎀','🦋','🌷','💖','🌺','🩷','⭐','🎂','🌼'];

    // Build slides with real photos
    for (let i = 0; i < TOTAL; i++) {
        const slide = document.createElement('div');
        slide.className = 'insta-slide';
        slide.innerHTML = `
            <img src="${i + 1}.jpg" alt="Memory ${i + 1}" loading="lazy" />
            <div class="insta-slide-number">${i + 1} / ${TOTAL}</div>
        `;
        track.appendChild(slide);

        // dot (show max 7 dots)
        if (i < 7) {
            const dot = document.createElement('div');
            dot.className = 'insta-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goTo(i));
            dotsRow.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = dotsRow.querySelectorAll('.insta-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === Math.min(current, 6)));
    }

    function goTo(index) {
        current = Math.max(0, Math.min(index, TOTAL - 1));
        track.style.transform = `translateX(-${current * 100}%)`;
        counter.textContent = `${current + 1} / ${TOTAL}`;
        updateDots();
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Touch/swipe support
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    });

    // Heart button
    heartBtn.addEventListener('click', () => {
        liked = !liked;
        heartBtn.textContent = liked ? '❤️' : '🤍';
        heartBtn.classList.add('liked');
        setTimeout(() => heartBtn.classList.remove('liked'), 350);
    });

    // Keyboard arrows
    document.addEventListener('keydown', e => {
        const gallery = document.getElementById('photoGallery');
        if (!gallery) return;
        const rect = gallery.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (e.key === 'ArrowRight') goTo(current + 1);
            if (e.key === 'ArrowLeft') goTo(current - 1);
        }
    });

    goTo(0);
})();
