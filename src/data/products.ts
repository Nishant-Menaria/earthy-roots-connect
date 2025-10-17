import ashwagandhaImg from "@/assets/products/ashwagandha.jpg";
import anarDanaImg from "@/assets/products/anar-dana.jpg";
import herbalPowderImg from "@/assets/products/herbal-powder.jpg";
import bhringrajImg from "@/assets/products/bhringraj.jpg";
import amlaImg from "@/assets/products/amla.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  featured?: boolean;
}

export const categories = [
  "All Products",
  "Herbal Powders",
  "Seeds & Dried Fruits",
  "Leaves & Flowers",
  "Roots & Barks",
  "Health & Wellness"
];

export const products: Product[] = [
  {
    id: "ashwagandha",
    name: "Ashwagandha (Indian Ginseng)",
    category: "Herbal Powders",
    price: 299,
    image: ashwagandhaImg,
    shortDescription: "Ancient adaptogenic herb for stress relief and vitality",
    description: "Ashwagandha is a renowned Ayurvedic herb used for centuries to enhance physical and mental health. Known as Indian Ginseng, it helps the body adapt to stress and promotes overall wellness.",
    ingredients: ["Pure Ashwagandha Root Extract", "Natural Adaptogenic Compounds"],
    benefits: [
      "Reduces stress and anxiety by balancing cortisol levels",
      "Improves sleep quality and relieves insomnia",
      "Strengthens immune system and disease resistance",
      "Enhances memory, concentration, and mental clarity",
      "Supports heart health by regulating blood pressure and cholesterol",
      "Boosts testosterone levels and improves male vitality",
      "Improves sperm quality and reproductive health"
    ],
    usage: "Take 1-2 teaspoons with warm milk or water twice daily, preferably after meals. For best results, use consistently for at least 3 months.",
    featured: true
  },
  {
    id: "anar-dana",
    name: "Anar-Dana Sookha (Pomegranate Seeds)",
    category: "Seeds & Dried Fruits",
    price: 249,
    image: anarDanaImg,
    shortDescription: "Antioxidant-rich dried pomegranate seeds for heart health",
    description: "Dried pomegranate seeds are packed with antioxidants and fiber, making them excellent for cardiovascular health and digestion. These nutrient-dense seeds support overall wellness.",
    ingredients: ["100% Pure Dried Pomegranate Seeds", "Natural Antioxidants"],
    benefits: [
      "Prevents LDL cholesterol oxidation and plaque formation",
      "Reduces risk of heart disease and improves circulation",
      "Rich in fiber for better digestion and reduced inflammation",
      "Low in calories, high in fiber for weight management",
      "Antibacterial properties protect against infections",
      "Polyphenolic antioxidants fight oxidative stress",
      "Helps regulate blood sugar levels",
      "Promotes healthy hair growth and glowing skin"
    ],
    usage: "Consume 1-2 tablespoons daily as a snack, in salads, or sprinkled over yogurt. Can also be brewed as tea.",
    featured: true
  },
  {
    id: "atibala",
    name: "Atibala Panchang",
    category: "Herbal Powders",
    price: 199,
    image: herbalPowderImg,
    shortDescription: "Complete herb for strength, vitality, and respiratory wellness",
    description: "Atibala Panchang is a powerful Ayurvedic herb known for enhancing physical strength and stamina. It supports respiratory health and rejuvenates the entire body system.",
    ingredients: ["Atibala Whole Plant Extract", "Natural Phytonutrients"],
    benefits: [
      "Increases body strength and energy levels significantly",
      "Provides horse-like vigor and stamina",
      "Excellent for respiratory issues like asthma, bronchitis, and cough",
      "Helps clear mucus and improve breathing",
      "Enhances skin moisture and reduces wrinkles",
      "Treats acne and other skin problems effectively",
      "Relieves constipation and digestive issues",
      "Supports joint health and female reproductive wellness"
    ],
    usage: "Mix 1 teaspoon with honey or warm water, take twice daily before meals for best results."
  },
  {
    id: "baheda",
    name: "Baheda Chilka (Belleric Myrobalan Peel)",
    category: "Roots & Barks",
    price: 179,
    image: herbalPowderImg,
    shortDescription: "Powerful detoxifier for digestion and hair health",
    description: "Baheda Chilka is one of the three fruits in Triphala, renowned for its detoxifying and rejuvenating properties. It promotes healthy digestion and beautiful hair.",
    ingredients: ["Pure Baheda Fruit Peel", "Natural Tannins and Antioxidants"],
    benefits: [
      "Improves digestive function and relieves constipation",
      "Promotes healthy bowel movements naturally",
      "Prevents hair fall and strengthens hair roots",
      "Makes hair thick, lustrous, and healthy",
      "Fights dandruff and scalp itching",
      "Purifies blood and removes toxins from the body",
      "Antimicrobial properties relieve cough and cold symptoms",
      "Soothes sore throat effectively",
      "Treats acne with antibacterial action",
      "Strengthens immune system when taken with honey"
    ],
    usage: "Take 1 teaspoon powder with warm water at bedtime, or apply hair paste to scalp for hair benefits.",
    featured: true
  },
  {
    id: "bakayan",
    name: "Bakayan Phal (Persian Lilac Fruit)",
    category: "Seeds & Dried Fruits",
    price: 159,
    image: herbalPowderImg,
    shortDescription: "Blood purifier and natural remedy for skin conditions",
    description: "Bakayan Phal is a potent Ayurvedic remedy known for its blood-purifying and antimicrobial properties. It effectively treats various skin and digestive disorders.",
    ingredients: ["Pure Bakayan Fruit Extract", "Natural Alkaloids"],
    benefits: [
      "Powerful blood purification properties",
      "Relieves intestinal worms and infections",
      "Treats indigestion and constipation",
      "Effective for ringworm, eczema, itching, and acne",
      "Highly beneficial for treating hemorrhoids",
      "Heals mouth ulcers and gum problems",
      "Treats eye redness, itching, and weakness",
      "Reduces joint pain and inflammation",
      "Helps cure chronic fever",
      "Treats heavy menstruation and vaginal infections"
    ],
    usage: "Take 500mg to 1g powder twice daily with water after meals. For external use, make a paste and apply to affected areas."
  },
  {
    id: "bhringraj",
    name: "Bhringraj (False Daisy)",
    category: "Leaves & Flowers",
    price: 229,
    image: bhringrajImg,
    shortDescription: "King of herbs for luxurious hair and liver health",
    description: "Bhringraj is revered in Ayurveda as the ultimate herb for hair health. It nourishes hair follicles, prevents premature graying, and supports liver function.",
    ingredients: ["Pure Bhringraj Leaf Extract", "Natural Minerals and Vitamins"],
    benefits: [
      "Promotes rapid hair growth by nourishing roots",
      "Prevents and reverses premature graying",
      "Stimulates hair follicles and reduces hair fall",
      "Anti-aging properties reduce fine lines and wrinkles",
      "Antimicrobial action controls skin infections and allergies",
      "Accelerates wound healing naturally",
      "Protects liver from toxins and aids detoxification",
      "Strengthens digestive system and relieves stomach pain",
      "Reduces bloating and gas problems",
      "Anti-stress properties reduce anxiety",
      "Strengthens immune system",
      "Helps control cholesterol levels"
    ],
    usage: "For hair: Apply Bhringraj oil to scalp and massage. For internal use: Take 1 teaspoon powder with water twice daily."
  },
  {
    id: "amla",
    name: "Amla (Indian Gooseberry)",
    category: "Seeds & Dried Fruits",
    price: 189,
    image: amlaImg,
    shortDescription: "Vitamin C powerhouse for immunity and vitality",
    description: "Amla is one of the richest natural sources of Vitamin C and a cornerstone of Ayurvedic medicine. It rejuvenates the body, boosts immunity, and promotes longevity.",
    ingredients: ["Pure Dried Amla Fruit", "Natural Vitamin C", "Antioxidants"],
    benefits: [
      "Extremely rich in Vitamin C for strong immunity",
      "Powerful antioxidant that fights free radicals",
      "Improves digestion and relieves constipation",
      "Promotes healthy, glowing skin and reduces aging",
      "Strengthens hair roots and prevents hair loss",
      "Reduces dandruff and promotes hair growth",
      "Supports eye health and improves vision",
      "Helps manage blood sugar levels",
      "Improves heart health and circulation",
      "Detoxifies liver and purifies blood"
    ],
    usage: "Take 1-2 teaspoons of Amla powder with water or honey on empty stomach, or consume as candy/pickle.",
    featured: true
  },
  {
    id: "brahmi",
    name: "Brahmi (Bacopa Monnieri)",
    category: "Herbal Powders",
    price: 219,
    image: herbalPowderImg,
    shortDescription: "Brain tonic for memory, focus, and mental clarity",
    description: "Brahmi is a revered herb for enhancing cognitive function and mental performance. Known as a brain tonic, it improves memory, concentration, and overall brain health.",
    ingredients: ["Pure Brahmi Leaf Extract", "Natural Bacosides"],
    benefits: [
      "Significantly improves memory and learning ability",
      "Enhances focus, concentration, and mental clarity",
      "Reduces anxiety, stress, and mental fatigue",
      "Neuroprotective properties support brain health",
      "Improves information processing speed",
      "Supports healthy sleep patterns",
      "Antioxidant properties protect brain cells",
      "Helps with ADHD and cognitive disorders"
    ],
    usage: "Take 1 teaspoon powder with milk or water twice daily. Can also be consumed as tea or in capsule form."
  },
  {
    id: "karela",
    name: "Karela (Bitter Gourd)",
    category: "Health & Wellness",
    price: 169,
    image: herbalPowderImg,
    shortDescription: "Natural blood sugar regulator and detoxifier",
    description: "Karela powder is a powerful natural remedy for managing blood sugar levels and promoting metabolic health. Its bitter compounds offer numerous therapeutic benefits.",
    ingredients: ["Pure Dried Bitter Gourd", "Natural Charantin"],
    benefits: [
      "Effectively regulates blood sugar levels",
      "Improves insulin sensitivity naturally",
      "Purifies blood and removes toxins",
      "Aids in weight management and metabolism",
      "Supports liver function and health",
      "Boosts immune system strength",
      "Improves skin health and complexion"
    ],
    usage: "Mix 1 teaspoon powder in water and drink on empty stomach daily. Can also be consumed as juice."
  },
  {
    id: "shatavari",
    name: "Shatavari (Asparagus Racemosus)",
    category: "Herbal Powders",
    price: 259,
    image: herbalPowderImg,
    shortDescription: "Queen of herbs for female health and vitality",
    description: "Shatavari is the premier Ayurvedic herb for women's health, supporting reproductive wellness, hormonal balance, and overall vitality. It nourishes and strengthens the female system.",
    ingredients: ["Pure Shatavari Root Extract", "Natural Phytoestrogens"],
    benefits: [
      "Balances female hormones naturally",
      "Supports reproductive health and fertility",
      "Relieves menopausal symptoms",
      "Improves lactation in nursing mothers",
      "Enhances female vitality and energy",
      "Supports digestive health",
      "Boosts immunity and overall wellness",
      "Promotes healthy skin and complexion"
    ],
    usage: "Take 1-2 teaspoons with warm milk twice daily. For best results, use consistently for 2-3 months."
  },
  {
    id: "tulsi",
    name: "Tulsi (Holy Basil)",
    category: "Leaves & Flowers",
    price: 149,
    image: herbalPowderImg,
    shortDescription: "Sacred herb for immunity and respiratory health",
    description: "Tulsi is revered as a sacred plant in India with powerful medicinal properties. It strengthens immunity, relieves stress, and supports respiratory wellness.",
    ingredients: ["Pure Tulsi Leaves", "Essential Oils", "Natural Antioxidants"],
    benefits: [
      "Powerful immune system booster",
      "Excellent for respiratory health and cough relief",
      "Reduces stress and promotes mental clarity",
      "Natural antibacterial and antiviral properties",
      "Supports healthy metabolism",
      "Purifies blood and detoxifies body",
      "Promotes healthy skin",
      "Regulates blood sugar levels"
    ],
    usage: "Consume 5-7 fresh leaves daily or take 1 teaspoon powder with water. Can be brewed as herbal tea."
  },
  {
    id: "neem",
    name: "Neem Leaves",
    category: "Leaves & Flowers",
    price: 139,
    image: herbalPowderImg,
    shortDescription: "Nature's pharmacy for skin and blood purification",
    description: "Neem is known as the 'village pharmacy' in India for its wide range of medicinal properties. It purifies blood, heals skin conditions, and boosts immunity.",
    ingredients: ["Pure Neem Leaves", "Natural Nimbidin", "Azadirachtin"],
    benefits: [
      "Powerful blood purifier and detoxifier",
      "Treats various skin conditions like acne, eczema",
      "Strong antibacterial and antifungal properties",
      "Boosts immune system function",
      "Supports oral health and hygiene",
      "Helps manage blood sugar levels",
      "Promotes wound healing",
      "Natural insect repellent"
    ],
    usage: "Take 1 teaspoon powder with water before breakfast. For skin issues, apply neem paste externally."
  }
];

export const featuredProducts = products.filter(p => p.featured);
