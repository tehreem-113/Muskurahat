// All mock/demo data lives here so components stay clean.
// In a real build, these would come from the Flask/REST API in /backend.

export const clinics = [
  {
    id: 1,
    name: 'Smile Care Dental Clinic',
    city: 'Karachi',
    area: 'Clifton',
    rating: 4.8,
    distanceKm: 1.2,
    pmdcVerified: true,
    services: ['Scaling', 'RCT', 'Extraction', 'Whitening'],
    nextSlot: 'Today, 4:30 PM',
  },
  {
    id: 2,
    name: 'Aga Khan Dental OPD',
    city: 'Karachi',
    area: 'Stadium Road',
    rating: 4.9,
    distanceKm: 3.5,
    pmdcVerified: true,
    services: ['RCT', 'Braces', 'Pediatric Dentistry'],
    nextSlot: 'Tomorrow, 10:00 AM',
  },
  {
    id: 3,
    name: 'Bright Smiles Lahore',
    city: 'Lahore',
    area: 'Gulberg',
    rating: 4.6,
    distanceKm: 5.1,
    pmdcVerified: true,
    services: ['Scaling', 'Whitening', 'Implants'],
    nextSlot: 'Today, 6:00 PM',
  },
  {
    id: 4,
    name: 'Gilgit Community Dental Camp',
    city: 'Gilgit-Baltistan',
    area: 'Gilgit City',
    rating: 4.7,
    distanceKm: 0.8,
    pmdcVerified: true,
    services: ['Free Checkups', 'Extraction', 'Awareness Sessions'],
    nextSlot: 'Sat, 9:00 AM',
  },
  {
    id: 5,
    name: 'Hunza Valley Health & Dental Unit',
    city: 'Gilgit-Baltistan',
    area: 'Hunza',
    rating: 4.5,
    distanceKm: 2.4,
    pmdcVerified: false,
    services: ['Scaling', 'First Aid', 'Referrals'],
    nextSlot: 'Mon, 11:00 AM',
  },
  {
    id: 6,
    name: 'Islamabad Dental Studio',
    city: 'Islamabad',
    area: 'F-7 Markaz',
    rating: 4.9,
    distanceKm: 4.0,
    pmdcVerified: true,
    services: ['RCT', 'Implants', 'Cosmetic Dentistry'],
    nextSlot: 'Today, 3:00 PM',
  },
]

export const articles = [
  {
    id: 1,
    tag: 'Procedure',
    titleEn: 'Root Canal Treatment (RCT): What Really Happens',
    titleUr: 'روٹ کینال ٹریٹمنٹ: اصل میں کیا ہوتا ہے',
    bodyEn: 'A step-by-step look at why dentists recommend RCT, what the procedure involves, and how to manage recovery without fear.',
    bodyUr: 'ڈاکٹر روٹ کینال کیوں تجویز کرتے ہیں، طریقہ کار کیا ہے، اور صحتیابی کو بغیر خوف کے کیسے سنبھالا جائے، اس کا مکمل جائزہ۔',
    readMins: 4,
  },
  {
    id: 2,
    tag: 'Prevention',
    titleEn: 'Scaling & Polishing: Myths vs Facts',
    titleUr: 'اسکیلنگ اور پالشنگ: افسانے اور حقیقت',
    bodyEn: 'Does scaling weaken your teeth? We break down the science behind this common dental myth in Pakistan.',
    bodyUr: 'کیا اسکیلنگ سے دانت کمزور ہوتے ہیں؟ اس عام غلط فہمی کے پیچھے کی سائنس کو سمجھیں۔',
    readMins: 3,
  },
  {
    id: 3,
    tag: 'Procedure',
    titleEn: 'Tooth Extraction: Before, During & After Care',
    titleUr: 'دانت نکلوانا: پہلے، دوران اور بعد کی دیکھ بھال',
    bodyEn: 'A practical guide covering pain management, dietary precautions, and healing timelines after an extraction.',
    bodyUr: 'دانت نکلوانے کے بعد درد کا انتظام، خوراک کی احتیاطیں اور شفا یابی کا دورانیہ۔',
    readMins: 5,
  },
  {
    id: 4,
    tag: 'Awareness',
    titleEn: 'Chaalia & Gutka: The Hidden Cost to Your Mouth',
    titleUr: 'چھالیہ اور گٹکا: آپ کے منہ کی پوشیدہ قیمت',
    bodyEn: 'An honest look at oral submucous fibrosis, gum disease, and oral cancer risk linked to chaalia and gutka use — and how to seek help.',
    bodyUr: 'چھالیہ اور گٹکا کے استعمال سے منہ کے کینسر اور مسوڑھوں کی بیماری کے خطرات، اور مدد کہاں سے حاصل کی جائے۔',
    readMins: 6,
    highlight: true,
  },
  {
    id: 5,
    tag: 'Kids',
    titleEn: 'Teaching Children to Love Brushing',
    titleUr: 'بچوں کو برش کرنے کی عادت کیسے سکھائیں',
    bodyEn: 'Simple games and routines to turn the two-minute brush into the best part of a child\u2019s day.',
    bodyUr: 'آسان کھیل اور معمولات جو دو منٹ کے برش کو بچوں کے دن کا بہترین حصہ بنا دیں۔',
    readMins: 3,
  },
  {
    id: 6,
    tag: 'Prevention',
    titleEn: 'Diet & Cavities: What Pakistani Households Should Know',
    titleUr: 'خوراک اور دانتوں کی خرابی: پاکستانی گھرانوں کے لیے رہنمائی',
    bodyEn: 'From sugary chai to dried fruit, a look at everyday foods that affect cavity risk and how to balance them.',
    bodyUr: 'میٹھی چائے سے لے کر خشک میوہ جات تک، روزمرہ کی خوراک دانتوں کی خرابی پر کیسے اثر انداز ہوتی ہے۔',
    readMins: 4,
  },
]

// Very small canned-response "AI" for the chatbot mockup.
// A real deployment would call the Flask backend, which would call an LLM API.
export const chatbotKnowledge = [
  {
    keywords: ['bleed', 'gum', 'khoon', 'mausoray'],
    reply: "Bleeding gums are often an early sign of gingivitis. Try brushing gently twice a day and flossing once daily. If bleeding continues for more than a week, please book a scaling appointment with a PMDC-certified dentist near you.",
  },
  {
    keywords: ['pain', 'dard', 'ache', 'hurt'],
    reply: "Sorry to hear you're in pain. For now: rinse with warm salt water and avoid very hot/cold food. If the pain is severe or swelling appears, please book an urgent consultation \u2014 don't wait it out.",
  },
  {
    keywords: ['gutka', 'chaalia', 'chalia', 'paan', 'naswar'],
    reply: "Chaalia, gutka and naswar are strongly linked to oral cancer, gum disease and white patches inside the mouth (leukoplakia). Quitting is the single best thing you can do for your oral health \u2014 would you like resources on how to start?",
  },
  {
    keywords: ['brush', 'brushing', 'kitni dair', 'how long'],
    reply: "Brush for a full 2 minutes, twice a day, using a soft-bristled brush and fluoride toothpaste. Try our built-in Brushing Timer on this page to make sure you hit the full 2 minutes!",
  },
  {
    keywords: ['whiten', 'white', 'yellow', 'zard'],
    reply: "Yellowing can come from staining (chai, paan, smoking) or natural enamel thinning. Professional scaling and polishing is the safest first step \u2014 avoid unverified home whitening kits, they can damage enamel.",
  },
  {
    keywords: ['appointment', 'book', 'clinic', 'doctor', 'dentist'],
    reply: "I can help with that! Scroll down to the Clinic Locator to find a PMDC-certified dentist near you, or use the \"Book an Appointment\" button at the top of the page.",
  },
  {
    keywords: ['child', 'kid', 'bacha', 'baby teeth'],
    reply: "For children, the first dental visit is recommended around age 1, or within 6 months of the first tooth appearing. Supervise brushing until age 7-8 and limit sugary snacks between meals.",
  },
]

export const defaultBotReply = "That's a great question. I'm a prototype assistant for general guidance only \u2014 for anything specific to you, please book a consultation with one of our PMDC-certified dentists. You can also ask me about brushing, gum pain, gutka/chaalia risks, or booking a clinic."
