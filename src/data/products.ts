
export interface Product {
  id: string;
  name: string;
  category: string;
  // price: number;
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
    id: "amala",
    name: "Amala (Amla / Indian Gooseberry)",
    category: "Herbal Powders",
    image: "Amla.jpg",
    shortDescription: "Vitamin-C rich fruit used for immunity, hair and digestion.",
    description: "Amla is a traditional source of vitamin C and antioxidants used to support immunity, hair health, digestion and general vitality.",
    ingredients: [
      "Amla fruit powder or dried pieces"
    ],
    benefits: [
      "High in vitamin C and antioxidants",
      "Supports immunity, skin and hair"
    ],
    usage: "Take as powder with water or include in hair preparations; follow product directions.",
    featured: false
  },
  {
    id: "amrud",
    name: "Amrud (Guava)",
    category: "Seeds & Dried Fruits",
    image: "Amrud.jpg",
    shortDescription: "Dried guava pieces used for nutrition and flavor.",
    description: "Dried guava is rich in fiber and vitamin C and is used as a nutritious snack or ingredient in traditional recipes.",
    ingredients: [
      "Dried guava pieces/powder"
    ],
    benefits: [
      "High in fiber and vitamin C",
      "Supports digestion"
    ],
    usage: "Use as snack, in mixes or rehydrate for recipes.",
    featured: false
  },
  {
    id: "anar-dana-sookha",
    name: "Anar-Dana Sookha (Dried Pomegranate Seed)",
    category: "Seeds & Dried Fruits",
    image: "Anar-Dana_Sookha.jpg",
    shortDescription: "Tangy dried pomegranate seeds used as a digestive aid and spice.",
    description: "Dried pomegranate seeds are used in Indian cuisine and traditional remedies to stimulate digestion, add tangy flavor and improve appetite.",
    ingredients: [
      "Dried pomegranate seeds"
    ],
    benefits: [
      "Supports digestion",
      "Improves appetite",
      "Adds flavor to dishes"
    ],
    usage: "Use in chutneys, spice blends or chew a few after meals as a digestive aid.",
    featured: false
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha (Indian Ginseng)",
    category: "Health & Wellness",
    image: "Ashwagandha.jpg",
    shortDescription: "Ancient adaptogenic herb for stress relief and vitality.",
    description: "Ashwagandha is a classical adaptogenic herb used in Ayurveda to help the body adapt to physical and mental stress, promote restful sleep and support overall vitality.",
    ingredients: [
      "Pure Ashwagandha root powder/extract"
    ],
    benefits: [
      "Helps the body adapt to stress",
      "Supports restful sleep",
      "Supports immunity and stamina"
    ],
    usage: "Take 1–2 teaspoons with warm milk or water twice daily after meals. Use consistently for several weeks.",
    featured: true
  },
  {
    id: "atibala-panchang",
    name: "Atibala Panchang (Indian Mallow - Five Parts)",
    category: "Roots & Barks",
    image: "Atibala_Panchang.jpg",
    shortDescription: "Whole Indian mallow (five parts) used in traditional remedies.",
    description: "Atibala Panchang contains multiple parts of Indian mallow (roots, stems, leaves, flowers) used in Ayurveda for strength, respiratory support and recovery.",
    ingredients: [
      "Indian mallow plant parts"
    ],
    benefits: [
      "Supports strength and recovery",
      "Supports respiratory health"
    ],
    usage: "Prepare as decoction or powder per traditional recipes; consult a practitioner for dosing.",
    featured: false
  },
  {
    id: "baheda-chilka powder",
    name: "Baheda Chilka (Belleric Myrobalan Fruit Peel)",
    category: "Herbal Powders",
    image: "Baheda_Chilka.jpg",
    shortDescription: "Dried baheda peel used in digestion and cleansing formulations.",
    description: "Baheda (Terminalia bellirica) peel is commonly used in Ayurveda as part of Triphala and other formulations for digestive health and mild detoxification.",
    ingredients: [
      "Dried baheda peel"
    ],
    benefits: [
      "Supports digestion",
      "Promotes bowel regularity and cleansing"
    ],
    usage: "Use as part of Triphala or boil to make a decoction; follow traditional guidance.",
    featured: false
  },
  {
    id: "bakayan-phal powder",
    name: "Bakayan Phal (Persian Lilac Fruit)",
    category: "Herbal Powders",
    image: "Bakayan_Phal.jpg",
    shortDescription: "Dried Persian lilac fruit with tonic and digestive uses.",
    description: "Bakayan phal is used in folk remedies as a mild tonic and digestive aid.",
    ingredients: [
      "Dried Bakayan fruit"
    ],
    benefits: [
      "Supports digestion",
      "Acts as a mild tonic"
    ],
    usage: "Use in powdered form or as part of decoctions.",
    featured: false
  },
  {
    id: "balam-kheera",
    name: "Balam Kheera (Sausage Tree)",
    category: "Seeds & Dried Fruits",
    image: "Balam_Kheera.jpg",
    shortDescription: "Parts of the sausage tree used in folk remedies.",
    description: "Balam kheera (parts of the sausage tree) are used regionally in traditional medicine for strength and topical applications.",
    ingredients: [
      "Dried fruit/seed parts"
    ],
    benefits: [
      "Traditional vitality/support uses"
    ],
    usage: "Use only under practitioner guidance.",
    featured: false
  },
  {
    id: "bavchi-seeds",
    name: "Bavchi Seeds (Psoralea Seeds)",
    category: "Seeds & Dried Fruits",
    image: "Bavchi_Seeds.jpg",
    shortDescription: "Psoralea seeds used in skin formulations and Ayurvedic remedies.",
    description: "Bavchi (Psoralea) seeds are used in traditional formulations—especially for skin conditions like vitiligo—and for topical applications after proper processing.",
    ingredients: [
      "Psoralea seeds"
    ],
    benefits: [
      "Supports skin pigmentation",
      "Used in topical herbal formulations"
    ],
    usage: "Use in oils or topical pastes; follow practitioner directions.",
    featured: false
  },
  {
    id: "bel-ka-gudda",
    name: "Bel ka Gudda (Wood Apple Pulp)",
    category: "Seeds & Dried Fruits",
    image: "Bel_ka_Gudda.jpg",
    shortDescription: "Aromatic wood apple pulp used in beverages, chutneys and digestion remedies.",
    description: "Bel (wood apple) pulp is valued for its aroma and digestive benefits, used in chutneys, drinks and traditional medicines for gut health.",
    ingredients: [
      "Dried/processed wood apple pulp"
    ],
    benefits: [
      "Aids digestion",
      "Supports gut health",
      "Boosts appetite"
    ],
    usage: "Mix into drinks or chutneys; consume as per recipe.",
    featured: false
  },
  {
    id: "ber-leaves",
    name: "Ber Leaves (Jujube Leaves)",
    category: "Leaves & Flowers",
    image: "Ber_Leaves.jpg",
    shortDescription: "Dried jujube leaves used in herbal teas and remedies.",
    description: "Ber (jujube) leaves are used in teas and traditional remedies for calming and digestive properties.",
    ingredients: [
      "Dried ber (jujube) leaves"
    ],
    benefits: [
      "Used in herbal teas",
      "May support calming and digestion"
    ],
    usage: "Brew as tea or include in herbal blends.",
    featured: false
  },
  {
    id: "bhringraj",
    name: "Bhringraj (Eclipta alba)",
    category: "Leaves & Flowers",
    image: "Bhringraj.jpg",
    shortDescription: "Herb traditionally used for hair and liver support.",
    description: "Bhringraj is used in traditional medicine for hair health, to help with premature greying, and to support liver and skin health.",
    ingredients: [
      "Bhringraj leaves/whole herb"
    ],
    benefits: [
      "Promotes hair growth",
      "Supports liver health",
      "Improves skin condition"
    ],
    usage: "Apply as oil infusion or take as powder/decoction as per guidance.",
    featured: false
  },
  {
    id: "bor",
    name: "Bor (Dried Jujube Fruit)",
    category: "Seeds & Dried Fruits",
    image: "Bor.jpg",
    shortDescription: "Dried jujube fruit used in snacks and traditional remedies.",
    description: "Dried jujube (bor) is consumed as a nutritious snack and used in folk medicine for general health benefits.",
    ingredients: [
      "Dried jujube fruit"
    ],
    benefits: [
      "Nutritional snack",
      "Traditional uses for digestion and vitality"
    ],
    usage: "Consume as snack or include in recipes.",
    featured: false
  },
  {
    id: "brahmi",
    name: "Brahmi (Bacopa monnieri)",
    category: "Health & Wellness",
    image: "Brahmi.jpg",
    shortDescription: "Nootropic herb traditionally used to support memory and focus.",
    description: "Brahmi is a classical cognitive herb used in Ayurveda to enhance memory, learning and mental clarity and to reduce anxiety.",
    ingredients: [
      "Bacopa monnieri leaf powder"
    ],
    benefits: [
      "Enhances memory and concentration",
      "Calms the mind",
      "Supports nervous system health"
    ],
    usage: "Take 1 teaspoon powder with water or milk daily; use consistently for several weeks.",
    featured: false
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    category: "Seeds & Dried Fruits",
    image: "Chia_Seeds.jpg",
    shortDescription: "Tiny high-fiber seeds rich in omega-3 fatty acids and minerals.",
    description: "Chia seeds are nutrient-dense, providing fiber, plant-based omega-3s, and micronutrients; commonly used in smoothies, puddings and baking.",
    ingredients: [
      "100% chia seeds"
    ],
    benefits: [
      "High in fiber",
      "Source of plant omega-3s",
      "Supports satiety"
    ],
    usage: "Soak in water/milk for pudding, add to smoothies or sprinkle on yogurt.",
    featured: false
  },
  {
    id: "chirayita",
    name: "Chirayita (Swertia chirayita)",
    category: "Roots & Barks",
    image: "Chirayita.jpg",
    shortDescription: "Bitter herb used in digestive and metabolic support.",
    description: "Chirayita is a bitter medicinal herb used traditionally to stimulate digestion, support liver function and help metabolic balance.",
    ingredients: [
      "Dried Chirayita herb/root"
    ],
    benefits: [
      "Stimulates digestion",
      "Supports metabolic balance"
    ],
    usage: "Use as decoction or powdered herb in small doses per traditional guidance.",
    featured: false
  },
  {
    id: "choti-harad",
    name: "Choti Harad (Haritaki)",
    category: "Roots & Barks",
    image: "Choti_Harad.jpg",
    shortDescription: "Haritaki — a key Ayurvedic herb for digestion and cleansing.",
    description: "Haritaki is used in Ayurveda for digestive regulation, bowel health and cleansing; often a component of Triphala.",
    ingredients: [
      "Haritaki (dried fruit)"
    ],
    benefits: [
      "Promotes bowel regularity",
      "Supports digestive health"
    ],
    usage: "Use in powders or decoctions; consult traditional recipes.",
    featured: false
  },
  {
    id: "chukandar",
    name: "Chukandar (Beetroot)",
    category: "Herbal Powders",
    image: "Chukandar.jpg",
    shortDescription: "Dried beetroot powder used as a nutritional supplement and colorant.",
    description: "Beetroot powder provides natural nitrates, vitamins and minerals supporting endurance and cardiovascular health and is used as a food ingredient or supplement.",
    ingredients: [
      "Dried beetroot powder"
    ],
    benefits: [
      "Supports cardiovascular health and endurance",
      "Rich in vitamins and minerals"
    ],
    usage: "Add to smoothies, soups or drinks; 1–2 teaspoons per serving.",
    featured: false
  },
  {
    id: "curry-patta",
    name: "Curry Patta (Curry Leaves)",
    category: "Leaves & Flowers",
    image: "Curry_Patta.jpg",
    shortDescription: "Aromatic curry leaves used for flavor and digestion.",
    description: "Curry leaves are extensively used in Indian cuisine and traditional medicine for digestive support and flavoring.",
    ingredients: [
      "Dried curry leaves"
    ],
    benefits: [
      "Aromatic flavoring",
      "Supports digestion"
    ],
    usage: "Use fresh or dried in cooking or teas.",
    featured: false
  },
  {
    id: "dhaniya-pattee",
    name: "Dhaniya Pattee (Coriander Leaves)",
    category: "Leaves & Flowers",
    image: "Dhaniya_Pattee.jpg",
    shortDescription: "Dried coriander leaves for culinary and digestive use.",
    description: "Coriander leaves (dhaniya patta) are aromatic and used as a culinary herb and in traditional remedies for mild digestive support.",
    ingredients: [
      "Dried coriander leaves"
    ],
    benefits: [
      "Adds flavor to dishes",
      "Supports digestion"
    ],
    usage: "Use as garnish, in chutneys or cooking.",
    featured: false
  },
  {
    id: "genda-phool",
    name: "Genda Phool (Marigold Flower)",
    category: "Leaves & Flowers",
    image: "Genda_Phool.jpg",
    shortDescription: "Dried marigold petals used for color, fragrance and topical applications.",
    description: "Marigold flowers are used in cosmetics, topical preparations and as a natural colorant and mild anti-inflammatory agent in herbal remedies.",
    ingredients: [
      "Dried marigold petals"
    ],
    benefits: [
      "Used in topical formulations",
      "Aromatic and decorative uses"
    ],
    usage: "Use in infusions, salves or cosmetic preparations.",
    featured: false
  },
  {
    id: "gokharu",
    name: "Gokharu (Tribulus terrestris)",
    category: "Seeds & Dried Fruits",
    image: "Gokharu.jpg",
    shortDescription: "Puncture vine seeds traditionally used for urinary and reproductive support.",
    description: "Gokharu (tribulus) seeds are used in traditional medicine to support urinary tract health and reproductive function in certain systems.",
    ingredients: [
      "Tribulus seeds"
    ],
    benefits: [
      "Traditional urinary and reproductive support"
    ],
    usage: "Use as powder in formulations; follow practitioner guidance.",
    featured: false
  },
  {
    id: "gudhal-patti",
    name: "Gudhal Patti (Hibiscus Leaves)",
    category: "Leaves & Flowers",
    image: "Gudhal_Patti.jpg",
    shortDescription: "Hibiscus leaves used alongside flowers in traditional formulations.",
    description: "Hibiscus leaves are used in some traditional topical and herbal remedies together with hibiscus flowers.",
    ingredients: [
      "Dried hibiscus leaves"
    ],
    benefits: [
      "Supports topical and hair preparations"
    ],
    usage: "Use in poultices, pastes or infusions.",
    featured: false
  },
  {
    id: "gudhal-phool",
    name: "Gudhal Phool (Hibiscus Flower)",
    category: "Leaves & Flowers",
    image: "Gudhal_Phool.jpg",
    shortDescription: "Hibiscus flowers commonly used for hair and scalp care and teas.",
    description: "Hibiscus is widely used for hair care, scalp health, and in teas and topical preparations for conditioning and nourishment.",
    ingredients: [
      "Dried hibiscus flowers"
    ],
    benefits: [
      "Supports hair and scalp health",
      "Used in topical preparations and teas"
    ],
    usage: "Make oil infusions, pastes or teas with dried flowers.",
    featured: false
  },
  {
    id: "gudmar-patti",
    name: "Gudmar Patti (Gymnema sylvestre leaves)",
    category: "Leaves & Flowers",
    image: "Gudmar_Patti.jpg",
    shortDescription: "Gymnema leaf used traditionally for metabolic and sugar support.",
    description: "Gudmar leaves are traditionally used to support healthy blood sugar regulation and metabolic balance as part of Ayurvedic practice.",
    ingredients: [
      "Gymnema leaf (dried)"
    ],
    benefits: [
      "Supports metabolic balance",
      "Traditional use in sugar regulation"
    ],
    usage: "Brew as tea or use powder per guidance.",
    featured: false
  },
  {
    id: "gulaab-pattee",
    name: "Gulaab Pattee (Rose Petals)",
    category: "Leaves & Flowers",
    image: "Gulaab_Pattee.jpg",
    shortDescription: "Dried rose petals used for fragrance, culinary and skincare uses.",
    description: "Rose petals are widely used in cosmetics, teas and culinary preparations for soothing properties and aroma.",
    ingredients: [
      "Dried rose petals"
    ],
    benefits: [
      "Aromatic and soothing for skin",
      "Used in teas and cosmetics"
    ],
    usage: "Use in infusions, face packs or culinary recipes.",
    featured: false
  },
  {
    id: "harad-badi",
    name: "Harad Badi (Large Harad / Terminalia chebula)",
    category: "Roots & Barks",
    image: "Harad_Badi.jpg",
    shortDescription: "Larger harad fruit used in cleansing and digestive formulas.",
    description: "Harad (Terminalia chebula) is a principal herb in classical Ayurvedic formulations for digestion, cleansing and bowel health.",
    ingredients: [
      "Dried Harad (large)"
    ],
    benefits: [
      "Supports digestion and bowel regularity",
      "Used in detox formulas"
    ],
    usage: "Include in decoctions or powders as per traditional recipes.",
    featured: false
  },
  {
    id: "hingot",
    name: "Hingot (Desert Date)",
    category: "Seeds & Dried Fruits",
    image: "Hingot.jpg",
    shortDescription: "Desert date used in regional traditional remedies and foods.",
    description: "Hingot (desert date) parts are used in folk medicine and as a nutritive ingredient in some local recipes.",
    ingredients: [
      "Dried desert date"
    ],
    benefits: [
      "Traditional nutritional and medicinal uses"
    ],
    usage: "Use as per local recipes or practitioner guidance.",
    featured: false
  },
  {
    id: "imli-ki-guthli",
    name: "Imli ki Guthli (Tamarind Seed)",
    category: "Seeds & Dried Fruits",
    image: "Imli_ki_Guthli.jpg",
    shortDescription: "Tamarind seeds used for functional and traditional purposes.",
    description: "Tamarind seeds are used for their starch and functional properties in food and traditional preparations.",
    ingredients: [
      "Tamarind seeds"
    ],
    benefits: [
      "Used in functional foods and traditional remedies"
    ],
    usage: "Process or powder for use in recipes; follow specific formulations.",
    featured: false
  },
  {
    id: "indra-jau-kadwa",
    name: "Indra Jau Kadwa (Tellicherry / Kurchi Bark)",
    category: "Roots & Barks",
    image: "Indra_Jau_Kadwa.jpg",
    shortDescription: "Bark used in traditional herbal medicine.",
    description: "This bark (Tellicherry/Kurchi) is used in classical herbal systems for various medicinal formulations.",
    ingredients: [
      "Dried bark pieces"
    ],
    benefits: [
      "Traditional medicinal applications"
    ],
    usage: "Prepare as decoction or include in formulations with expert guidance.",
    featured: false
  },
  {
    id: "indrani-chhilka",
    name: "Indrani Chhilka (Colocynth / Bitter Apple)",
    category: "Roots & Barks",
    image: "Indrani_Chhilka.jpg",
    shortDescription: "Colocynth rind — strongly active traditional herb used with caution.",
    description: "Colocynth (bitter apple) is a potent herbal ingredient historically used for strong purgative and medicinal actions; should be used only under expert supervision.",
    ingredients: [
      "Dried colocynth rind"
    ],
    benefits: [
      "Powerful traditional actions — not for casual use"
    ],
    usage: "Use only under qualified practitioner supervision.",
    featured: false
  },
  {
    id: "jamun-beej",
    name: "Jamun Beej (Java Plum / Black Plum Seeds)",
    category: "Seeds & Dried Fruits",
    image: "Jamun_Beej.jpg",
    shortDescription: "Jamun seeds used in traditional remedies for metabolic support.",
    description: "Jamun seeds are used in Ayurvedic and traditional systems for digestive and metabolic health, often powdered and included in formulations.",
    ingredients: [
      "Dried jamun seeds"
    ],
    benefits: [
      "Supports metabolism and digestion in traditional use"
    ],
    usage: "Use as powder or per traditional formulations.",
    featured: false
  },
  {
    id: "kal-koch-bij",
    name: "Kal Koch Bij (Velvet Bean / Cowage)",
    category: "Seeds & Dried Fruits",
    image: "Kal_Koch_Bij.jpg",
    shortDescription: "Velvet bean seeds used in certain traditional preparations.",
    description: "Velvet bean seeds are included in traditional remedies; many varieties require processing before safe use.",
    ingredients: [
      "Velvet bean seeds"
    ],
    benefits: [
      "Traditional uses vary by species and processing"
    ],
    usage: "Process correctly and use per practitioner guidance.",
    featured: false
  },
  {
    id: "kala-gira",
    name: "Kala Gira (Black Cumin)",
    category: "Seeds & Dried Fruits",
    image: "Kala_Gira.jpg",
    shortDescription: "Black cumin seeds used as spice and for traditional wellness.",
    description: "Black cumin (Nigella/kalajira) is a popular spice with traditional applications for digestion and general wellness.",
    ingredients: [
      "Black cumin seeds"
    ],
    benefits: [
      "Culinary spice",
      "Traditional digestive benefits"
    ],
    usage: "Use as a spice or include in small amounts for herbal use.",
    featured: false
  },
  {
    id: "kalonji",
    name: "Kalonji (Nigella seeds)",
    category: "Seeds & Dried Fruits",
    image: "Kalonji.jpg",
    shortDescription: "Nigella seeds used as spice and in traditional remedies.",
    description: "Kalonji seeds are used in cooking, pickles and in traditional medicine for various supportive benefits.",
    ingredients: [
      "Nigella seeds"
    ],
    benefits: [
      "Culinary and traditional health uses"
    ],
    usage: "Use in cooking or as ingredient in herbal formulations.",
    featured: false
  },
  {
    id: "karela",
    name: "Karela (Bitter Gourd)",
    category: "Herbal Powders",
    image: "Karela.jpg",
    shortDescription: "Dried bitter gourd pieces/powder for metabolic support.",
    description: "Bitter gourd is used traditionally to support metabolic balance and digestion; powdered form is convenient for supplements and formulations.",
    ingredients: [
      "Dried bitter gourd powder/pieces"
    ],
    benefits: [
      "Supports metabolic health",
      "Aids digestion"
    ],
    usage: "Use in dishes or as powder per recipe or product directions.",
    featured: false
  },
  {
    id: "kasuri-methi",
    name: "Kasuri Methi (Fenugreek Leaves)",
    category: "Leaves & Flowers",
    image: "Kasuri_Methi.jpg",
    shortDescription: "Dried fenugreek leaves used for flavor and galactagogue properties.",
    description: "Kasuri methi adds aroma to dishes and is used traditionally for digestion and to support lactation in some systems.",
    ingredients: [
      "Dried fenugreek leaves"
    ],
    benefits: [
      "Adds flavor",
      "Traditional digestive and lactation support"
    ],
    usage: "Use in cooking or as seasoning.",
    featured: false
  },
  {
    id: "kaunch-beej",
    name: "Kaunch Beej (Velvet Bean)",
    category: "Seeds & Dried Fruits",
    image: "Kaunch_Beej.jpg",
    shortDescription: "Velvet bean seeds requiring processing before use in traditional remedies.",
    description: "Kaunch seeds (Mucuna) are used in traditional medicine but typically require processing to remove certain compounds before safe consumption.",
    ingredients: [
      "Velvet bean seeds"
    ],
    benefits: [
      "Traditional uses; processing-dependent"
    ],
    usage: "Process and use under expert guidance.",
    featured: false
  },
  {
    id: "kharbuja-bij",
    name: "Kharbuja Bij (Muskmelon Seeds)",
    category: "Seeds & Dried Fruits",
    image: "Kharbuja_Bij.jpg",
    shortDescription: "Muskmelon seeds used as snack or ingredient in traditional recipes.",
    description: "Muskmelon seeds are used as a nutritious snack and in certain traditional food preparations for their oil and protein content.",
    ingredients: [
      "Muskmelon seeds"
    ],
    benefits: [
      "Nutritional snacking and culinary uses"
    ],
    usage: "Roast or grind for pastes and culinary uses.",
    featured: false
  },
  {
    id: "khus-jad",
    name: "Khus Jad (Vetiver Root)",
    category: "Roots & Barks",
    image: "Khus_Jad.jpg",
    shortDescription: "Fragrant vetiver root used for cooling infusions and perfumery.",
    description: "Vetiver root is aromatic and prized for cooling beverages, calming infusions and use in perfumery and cosmetics.",
    ingredients: [
      "Dried vetiver (khus) root"
    ],
    benefits: [
      "Cooling and aromatic properties",
      "Used in perfumery and calming blends"
    ],
    usage: "Use in infusions, sachets or perfumery preparations.",
    featured: false
  },
  {
    id: "kurand-ghass",
    name: "Kurand Ghass (Corchorus / Jute Leaves)",
    category: "Leaves & Flowers",
    image: "Kurand_Ghass.jpg",
    shortDescription: "Corchorus leaves used as leafy vegetable and in traditional remedies.",
    description: "Kurand (jute) leaves are used as a green leafy vegetable and sometimes included in traditional remedies and diets.",
    ingredients: [
      "Dried corchorus leaves"
    ],
    benefits: [
      "Culinary leafy vegetable uses",
      "Rich in greens nutrients"
    ],
    usage: "Cook like greens or include in soups and curries.",
    featured: false
  },
  {
    id: "kutaj-chaal",
    name: "Kutaj Chaal (Conessi Bark)",
    category: "Roots & Barks",
    image: "Kutaj_Chaal.jpg",
    shortDescription: "Conessi bark used in traditional anti-diarrheal and digestive remedies.",
    description: "Kutaj bark has classical use in Ayurveda for digestive ailments and as an anti-diarrheal agent; use only in recommended doses.",
    ingredients: [
      "Kutaj (conessi) bark"
    ],
    benefits: [
      "Traditional digestive benefits",
      "Used in anti-diarrheal formulations"
    ],
    usage: "Use in decoctions under practitioner guidance.",
    featured: false
  },
  {
    id: "lahsun-powder",
    name: "Lahsun Powder (Garlic Powder)",
    category: "Herbal Powders",
    image: "Lahsun_Powder.jpg",
    shortDescription: "Dehydrated garlic powder for culinary use and wellness.",
    description: "Garlic powder provides the convenience of garlic for cooking and carries traditional cardiovascular and immune supporting properties.",
    ingredients: [
      "Dehydrated garlic powder"
    ],
    benefits: [
      "Culinary uses",
      "Traditionally supportive of heart and immunity"
    ],
    usage: "Use in rubs, cooking and seasoning blends.",
    featured: false
  },
  {
    id: "lal-chirmi-bij",
    name: "Lal Chirmi Bij (Rosary Pea)",
    category: "Seeds & Dried Fruits",
    image: "Lal_Chirmi_Bij.jpg",
    shortDescription: "Rosary pea seeds — highly toxic unless processed and used only under supervision.",
    description: "Lal chirmi (rosary pea) seeds contain toxic compounds and must be handled and processed by specialists; they are not for casual consumption.",
    ingredients: [
      "Processed rosary pea seeds (specialist use only)"
    ],
    benefits: [
      "Traditional uses in controlled contexts"
    ],
    usage: "Not for general consumption; only with specialist processing.",
    featured: false
  },
  {
    id: "laxman-booti",
    name: "Laxman Booti (Rose of Jericho)",
    category: "Leaves & Flowers",
    image: "Laxman_Booti.jpg",
    shortDescription: "Rose of Jericho — plant used in folk remedies and rituals.",
    description: "Laxman Booti (Rose of Jericho) has folkloric uses and is sometimes included in traditional remedies and ritual practices.",
    ingredients: [
      "Dried Rose of Jericho parts"
    ],
    benefits: [
      "Traditional and folkloric uses"
    ],
    usage: "Use in rituals or traditional recipes as directed.",
    featured: false
  },
  {
    id: "lemongrass",
    name: "Lemongrass",
    category: "Leaves & Flowers",
    image: "Lemongrass.jpg",
    shortDescription: "Aromatic grass used for teas, flavor and calming infusions.",
    description: "Lemongrass is commonly used for aromatic herbal teas, culinary flavoring and calming blends.",
    ingredients: [
      "Dried lemongrass stalks/leaves"
    ],
    benefits: [
      "Aromatic and calming",
      "Supports digestion"
    ],
    usage: "Brew as tea or use in cooking.",
    featured: false
  },
  {
    id: "mahua-seed",
    name: "Mahua Seed (Butter Tree)",
    category: "Seeds & Dried Fruits",
    image: "Mahua_Seed.jpg",
    shortDescription: "Seeds used for oil extraction and traditional foods.",
    description: "Mahua seeds are used for oil extraction and in some traditional food and medicinal preparations.",
    ingredients: [
      "Mahua seeds"
    ],
    benefits: [
      "Used for oil and traditional nutritive preparations"
    ],
    usage: "Process for oil extraction or use per recipe.",
    featured: false
  },
  {
    id: "mehandi-patta",
    name: "Mehandi Patta (Henna Leaves)",
    category: "Leaves & Flowers",
    image: "Mehandi_Patta.jpg",
    shortDescription: "Henna leaves used as a natural dye for hair and mehndi art.",
    description: "Henna (mehandi) leaf powder is used widely for hair dyes, mehndi designs and conditioning treatments.",
    ingredients: [
      "Henna leaf powder"
    ],
    benefits: [
      "Natural dye for hair and skin",
      "Conditioning properties"
    ],
    usage: "Make paste with water/lemon for hair or mehndi; patch test before use.",
    featured: false
  },
  {
    id: "metha-kharpatwar",
    name: "Metha Kharpatwar (Mint-like persistent herb)",
    category: "Leaves & Flowers",
    image: "Metha_Kharpatwar.jpg",
    shortDescription: "Minty herb used for flavor and mild digestive benefits.",
    description: "Metha Kharpatwar is a mint-like herb with aromatic properties used in teas and as a digestive aid in folk practices.",
    ingredients: [
      "Dried metha herb/root"
    ],
    benefits: [
      "Aromatic and digestive support"
    ],
    usage: "Brew as tea or include in blends.",
    featured: false
  },
  {
    id: "morinda",
    name: "Morinda (Indian Mulberry)",
    category: "Roots & Barks",
    image: "Morinda.jpg",
    shortDescription: "Indian mulberry parts used as tonic in traditional remedies.",
    description: "Morinda (noni/Indian mulberry family) parts are used as a traditional tonic and in regional herbal recipes.",
    ingredients: [
      "Morinda fruit/root parts"
    ],
    benefits: [
      "Used as tonic in traditional medicine"
    ],
    usage: "Use as per traditional formulations.",
    featured: false
  },
  {
    id: "morinda-seeds",
    name: "Morinda Seeds",
    category: "Seeds & Dried Fruits",
    image: "Morinda_Seeds.jpg",
    shortDescription: "Seeds of morinda used in regional remedies.",
    description: "Morinda seeds are used in some folk remedies and traditional preparations.",
    ingredients: [
      "Morinda seeds"
    ],
    benefits: [
      "Traditional uses vary by region"
    ],
    usage: "Use as per recipe guidance.",
    featured: false
  },
  {
    id: "musk-seeds",
    name: "Musk Seeds (Musk Mallow Seeds)",
    category: "Seeds & Dried Fruits",
    image: "Musk_Seeds.jpg",
    shortDescription: "Seeds used in traditional herbal recipes.",
    description: "Musk mallow seeds are included in various traditional formulations and folk uses.",
    ingredients: [
      "Musk mallow seeds"
    ],
    benefits: [
      "Traditional uses in recipes"
    ],
    usage: "Use as per formulations.",
    featured: false
  },
  {
    id: "nagarmotha-jad",
    name: "Nagarmotha Jad (Cyperus rotundus)",
    category: "Roots & Barks",
    image: "Nagarmotha_Jad.jpg",
    shortDescription: "Aromatic cyperus root used for digestion and perfumery.",
    description: "Nagarmotha (cyperus) root is used in perfumes, digestive formulations and for calming traditional remedies.",
    ingredients: [
      "Dried cyperus root"
    ],
    benefits: [
      "Aromatic and digestive support"
    ],
    usage: "Use in decoctions, powders or aromatic blends.",
    featured: false
  },
  {
    id: "neem-giloy",
    name: "Neem Giloy (Neem and Giloy parts)",
    category: "Health & Wellness",
    image: "Neem_Giloy.jpg",
    shortDescription: "Immune-supporting neem and giloy parts used traditionally.",
    description: "Neem and Giloy are classic Ayurvedic herbs known for immune-supporting and blood-purifying properties; used as decoctions, powders or topical formulations.",
    ingredients: [
      "Neem parts, Giloy stem/parts"
    ],
    benefits: [
      "Supports immune health",
      "Used in cleansing preparations"
    ],
    usage: "Prepare as decoction or powder per traditional guidance.",
    featured: false
  },
  {
    id: "neem-nimboli",
    name: "Neem Nimboli (Neem Fruit / Berries)",
    category: "Seeds & Dried Fruits",
    image: "Neem_Nimboli.jpg",
    shortDescription: "Neem fruits/berries used in topical and traditional cleansing formulations.",
    description: "Neem fruits and berries are used in traditional formulations for topical and cleansing uses; processed before use.",
    ingredients: [
      "Dried neem fruits/berries"
    ],
    benefits: [
      "Topical cleansing and traditional uses"
    ],
    usage: "Process and use as per recipes.",
    featured: false
  },
  {
    id: "neem-patta",
    name: "Neem Patta (Neem Leaf)",
    category: "Leaves & Flowers",
    image: "Neem_Patta.jpg",
    shortDescription: "Dried neem leaves — antiseptic and skin-supportive herb.",
    description: "Neem leaves are widely used for skin care, antiseptic washes and traditional remedies for skin and hygiene.",
    ingredients: [
      "Dried neem leaves"
    ],
    benefits: [
      "Antiseptic properties",
      "Supports skin health"
    ],
    usage: "Brew as decoction, use in pastes or topical washes.",
    featured: false
  },
  {
    id: "nimbu-chilka",
    name: "Nimbu Chilka (Lemon Peel)",
    category: "Seeds & Dried Fruits",
    image: "Nimbu_Chilka.jpg",
    shortDescription: "Dried lemon peel used for flavor, aroma and digestive blends.",
    description: "Dried lemon peel is aromatic and used in culinary, aromatic and digestive formulations.",
    ingredients: [
      "Dried lemon peel"
    ],
    benefits: [
      "Aromatic and digestive support"
    ],
    usage: "Use in teas, blends or seasoning.",
    featured: false
  },
  {
    id: "nirgudi-beej",
    name: "Nirgudi Beej (Vitex seeds)",
    category: "Seeds & Dried Fruits",
    image: "Nirgudi_Beej.jpg",
    shortDescription: "Seeds used in traditional herbal medicine.",
    description: "Nirgudi (vitex) seeds are used in some traditional systems; consult an expert for specific uses.",
    ingredients: [
      "Nirgudi seeds"
    ],
    benefits: [
      "Traditional herbal uses"
    ],
    usage: "Use as per practitioner guidance.",
    featured: false
  },
  {
    id: "palash-khakhra-phul",
    name: "Palash (Khakhra Phul)",
    category: "Leaves & Flowers",
    image: "Palash_Khakhra_Phool.jpg",
    shortDescription: "Palash flowers used for dye, ritual and certain traditional remedies.",
    description: "Palash flowers are used for natural dyes, rituals and regional traditional applications.",
    ingredients: [
      "Dried palash flowers"
    ],
    benefits: [
      "Natural dye and ritual uses"
    ],
    usage: "Use in dyeing, rituals or traditional recipes.",
    featured: false
  },
  {
    id: "paras-pipal",
    name: "Paras Pipal (Thespesia populnea)",
    category: "Roots & Barks",
    image: "Paras_Pipal.jpg",
    shortDescription: "Thespesia parts used in traditional medicines and topical applications.",
    description: "Thespesia (paras pipal) parts have traditional topical uses and are sometimes used in timber and folk remedies.",
    ingredients: [
      "Dried Thespesia parts"
    ],
    benefits: [
      "Topical and folk medicinal uses"
    ],
    usage: "Use in topical formulations or decoctions as directed.",
    featured: false
  },
  {
    id: "patharchatta-jad",
    name: "Patharchatta Jad (Stonewart)",
    category: "Roots & Barks",
    image: "Patharchatta_Jad.jpg",
    shortDescription: "Root used in traditional herbal preparations.",
    description: "Patharchatta root is used in regional traditional medicine; follow practitioner advice for dosing and use.",
    ingredients: [
      "Dried Patharchatta root"
    ],
    benefits: [
      "Traditional medicinal uses"
    ],
    usage: "Use in decoctions or powders per guidance.",
    featured: false
  },
  {
    id: "podina-patti",
    name: "Podina Patti (Mint Leaves)",
    category: "Leaves & Flowers",
    image: "Podina_Patti.jpg",
    shortDescription: "Mint leaves used for flavor, digestion and calming infusions.",
    description: "Mint is commonly used in cooking, teas and as a digestive aid and aromatic herb.",
    ingredients: [
      "Dried mint leaves"
    ],
    benefits: [
      "Supports digestion",
      "Aromatic flavoring"
    ],
    usage: "Brew as tea or use fresh/dried in cooking.",
    featured: false
  },
  {
    id: "punarnava-root",
    name: "Punarnava Root (Boerhavia diffusa)",
    category: "Health & Wellness",
    image: "Punarnava_Root.jpg",
    shortDescription: "Traditional root used for fluid balance and urinary support.",
    description: "Punarnava is used in Ayurveda for supporting healthy fluid balance, urinary system and as part of rejuvenative formulas.",
    ingredients: [
      "Punarnava root (dried)"
    ],
    benefits: [
      "Supports fluid balance and urinary health"
    ],
    usage: "Use as decoction or powder under guidance.",
    featured: false
  },
  {
    id: "quinoa-seeds",
    name: "Quinoa Seeds (Chenopodium quinoa)",
    category: "Seeds & Dried Fruits",
    image: "Quinoa_Seeds.jpg",
    shortDescription: "High-protein pseudo-cereal used as a gluten-free grain alternative.",
    description: "Quinoa is a nutrient-rich pseudo-cereal high in protein, fiber and minerals; used in salads, bowls and porridges.",
    ingredients: [
      "Quinoa seeds"
    ],
    benefits: [
      "High-quality plant protein",
      "Rich in fiber and micronutrients"
    ],
    usage: "Rinse and cook like a grain for salads or porridge.",
    featured: false
  },
  {
    id: "ratanjot",
    name: "Ratanjot (Alkanet Root)",
    category: "Roots & Barks",
    image: "Ratanjot.jpg",
    shortDescription: "Alkanet root used as a natural red dye and in topical products.",
    description: "Ratanjot (alkanet) root yields a red pigment and is used in cosmetics, topical remedies and dyeing.",
    ingredients: [
      "Dried alkanet root"
    ],
    benefits: [
      "Natural dye and cosmetic uses"
    ],
    usage: "Use in prepared formulations for color and topical application.",
    featured: false
  },
  {
    id: "sabut-baheda",
    name: "Sabut Baheda (Whole Belleric Myrobalan)",
    category: "Roots & Barks",
    image: "Sabut_Baheda.jpg",
    shortDescription: "Whole baheda fruit used in digestive and cleansing formulas.",
    description: "Whole baheda is used as part of Triphala and other classical herbal blends for digestive regulation and cleansing.",
    ingredients: [
      "Whole baheda fruit (dried)"
    ],
    benefits: [
      "Supports digestion and cleansing"
    ],
    usage: "Include in decoctions, powders and classical formulas.",
    featured: false
  },
  {
    id: "samal",
    name: "Samal (Silk Cotton Tree)",
    category: "Roots & Barks",
    image: "Samal.jpg",
    shortDescription: "Silk cotton tree parts used for fiber and traditional remedies.",
    description: "Samal (silk cotton) parts are used in traditional remedies and for fiber-related applications in craft and medicine.",
    ingredients: [
      "Samal tree parts"
    ],
    benefits: [
      "Traditional uses and fiber applications"
    ],
    usage: "Use per traditional recipes or craft use.",
    featured: false
  },
  {
    id: "santra-chilka",
    name: "Santra Chilka (Orange Peel)",
    category: "Seeds & Dried Fruits",
    image: "Santra_Chilka.jpg",
    shortDescription: "Dried orange peel for aroma, flavor and digestive infusions.",
    description: "Dried orange peel is used in teas, aromatics and digestive blends to impart citrus flavor and aroma.",
    ingredients: [
      "Dried orange peel"
    ],
    benefits: [
      "Aromatic and digestive support"
    ],
    usage: "Use in teas, potpourri or culinary blends.",
    featured: false
  },
  {
    id: "sarpagandha",
    name: "Sarpagandha (Rauwolfia serpentina)",
    category: "Roots & Barks",
    image: "Sarpagandha.jpg",
    shortDescription: "Potent root used in traditional medicine — requires professional supervision.",
    description: "Sarpagandha (Indian snakeroot) is a strong-acting herb historically used in nervous system and cardiovascular conditions; use only under professional guidance due to potent effects.",
    ingredients: [
      "Sarpagandha root (dried)"
    ],
    benefits: [
      "Powerful traditional actions for nervous/circulatory support"
    ],
    usage: "Only use under qualified practitioner supervision.",
    featured: false
  },
  {
    id: "shankhpushpi",
    name: "Shankhpushpi (Convolvulus)",
    category: "Health & Wellness",
    image: "Shankhpushpi.jpg",
    shortDescription: "Herb used to support memory and nervous system health.",
    description: "Shankhpushpi is a traditional herb used in Ayurveda to support cognitive function, memory and calmness of the mind.",
    ingredients: [
      "Shankhpushpi herb (dried)"
    ],
    benefits: [
      "Supports memory and calmness",
      "Used in cognitive formulations"
    ],
    usage: "Use as tea or powder per traditional practice.",
    featured: false
  },
  {
    id: "sharpunkha",
    name: "Sharpunkha (Purple Tephrosia)",
    category: "Roots & Barks",
    image: "Sharpunkha.jpg",
    shortDescription: "Tephrosia plant parts used in traditional remedies.",
    description: "Sharpunkha parts are used in some herbal remedies and traditional formulations.",
    ingredients: [
      "Tephrosia plant parts"
    ],
    benefits: [
      "Traditional medicinal uses"
    ],
    usage: "Use per recipes or practitioner guidance.",
    featured: false
  },
  {
    id: "shatavari",
    name: "Shatavari (Asparagus racemosus)",
    category: "Health & Wellness",
    image: "Shatavari.jpg",
    shortDescription: "Classical Ayurvedic herb supporting female reproductive health and vitality.",
    description: "Shatavari is used in Ayurveda as a rejuvenative herb for female reproductive health, hormonal balance and overall vitality.",
    ingredients: [
      "Shatavari root powder/extract"
    ],
    benefits: [
      "Supports female reproductive health",
      "Promotes vitality and hormonal balance"
    ],
    usage: "Often taken with warm milk; follow traditional dosage instructions.",
    featured: false
  },
  {
    id: "sinduri-beej",
    name: "Sinduri Beej (Annatto Seed)",
    category: "Seeds & Dried Fruits",
    image: "Sinduri_Beej.jpg",
    shortDescription: "Annatto seeds used primarily as a natural colorant and flavoring.",
    description: "Sinduri beej (annatto) yields orange-red pigments used in foods and cosmetics as a natural colorant and mild flavoring agent.",
    ingredients: [
      "Annatto/achote seeds"
    ],
    benefits: [
      "Natural coloring for foods and cosmetics"
    ],
    usage: "Use in small quantities for coloring and flavoring.",
    featured: false
  },
  {
    id: "sof-patta",
    name: "Sof Patta (Fennel)",
    category: "Seeds & Dried Fruits",
    image: "Sof_Patta.jpg",
    shortDescription: "Fennel seeds/leaves used as a digestive aid and flavoring.",
    description: "Fennel is commonly used to support digestion, reduce bloating and as a culinary spice/herb.",
    ingredients: [
      "Fennel seeds/leaves"
    ],
    benefits: [
      "Supports digestion",
      "Aromatic and culinary uses"
    ],
    usage: "Chew seeds after meals, brew as tea or use in cooking.",
    featured: false
  },
  {
    id: "sotha-adrak",
    name: "Sotha-Adrak (Dried Ginger)",
    category: "Herbal Powders",
    image: "Sotha_Adrak.jpg",
    shortDescription: "Dried ginger used for warming, digestion and respiratory comfort.",
    description: "Dried ginger is a common spice and remedy for digestive discomfort, cold symptoms and to add warmth to foods and drinks.",
    ingredients: [
      "Dried ginger powder/pieces"
    ],
    benefits: [
      "Supports digestion",
      "Relieves nausea and cold symptoms"
    ],
    usage: "Use in teas, cooking or as a powdered spice.",
    featured: false
  },
  {
    id: "tej-patta",
    name: "Tej Patta (Bay Leaf)",
    category: "Leaves & Flowers",
    image: "Tej_Patta.jpg",
    shortDescription: "Bay leaves used as an aromatic culinary spice.",
    description: "Bay leaves add aroma and depth to soups, stews and curries and are used widely in culinary traditions and some herbal remedies.",
    ingredients: [
      "Dried bay leaves"
    ],
    benefits: [
      "Aromatic culinary spice"
    ],
    usage: "Use whole in cooking and remove before serving.",
    featured: false
  },
  {
    id: "tulsi-beej",
    name: "Tulsi Beej (Holy Basil Seeds)",
    category: "Seeds & Dried Fruits",
    image: "Tulsi_Beej.jpg",
    shortDescription: "Basil seeds used in cooling drinks and desserts.",
    description: "Tulsi seeds swell in water and are used in cooling beverages, desserts and traditional drinks for soothing and digestive benefits.",
    ingredients: [
      "Tulsi seeds"
    ],
    benefits: [
      "Cooling in beverages",
      "Supports digestion"
    ],
    usage: "Soak in water to form gel and add to drinks or desserts.",
    featured: false
  },
  {
    id: "tulsi-panchang",
    name: "Tulsi Panchang (Five Parts of Holy Basil)",
    category: "Health & Wellness",
    image: "Tulsi_Panchang.jpg",
    shortDescription: "Multiple parts of tulsi used together for broader therapeutic effect.",
    description: "Tulsi panchang includes various parts of the holy basil plant (leaves, stems, roots, flowers) used together in traditional preparations for enhanced benefits.",
    ingredients: [
      "Various parts of Tulsi plant"
    ],
    benefits: [
      "Comprehensive tulsi benefits for respiratory and adaptogenic support"
    ],
    usage: "Use in decoctions, powders or herbal blends as per recipe.",
    featured: false
  },
  {
    id: "tulsi-patti",
    name: "Tulsi Patti (Holy Basil Leaves)",
    category: "Leaves & Flowers",
    image: "Tulsi_Patti.jpg",
    shortDescription: "Holy basil used for respiratory support and stress relief.",
    description: "Tulsi (holy basil) is an adaptogenic herb used for respiratory health, stress relief and immune support; commonly consumed as tea or decoction.",
    ingredients: [
      "Dried tulsi leaves"
    ],
    benefits: [
      "Supports respiratory health",
      "Adaptogenic and calming properties"
    ],
    usage: "Brew as tea or use in decoctions.",
    featured: false
  },
  {
    id: "ubla-amala",
    name: "Ubla Amala (Boiled Amla)",
    category: "Herbal Powders",
    image: "Ubla_Amala.jpg",
    shortDescription: "Boiled/processed amla prepared for tonics and syrups.",
    description: "Ubla amala (boiled amla) is processed to be more palatable and used in tonics, murabbas and syrups to harness amla's vitamin C benefits.",
    ingredients: [
      "Boiled/processed amla pieces"
    ],
    benefits: [
      "Easier-to-use form of amla for immunity and hair care"
    ],
    usage: "Use in tonics, murabbas or preparations per recipe.",
    featured: false
  },
  {
    id: "white-kaunch-beej",
    name: "White Kaunch Beej (White Velvet Bean)",
    category: "Seeds & Dried Fruits",
    image: "White_Kaunch_Beej.jpg",
    shortDescription: "White variety of velvet bean used like kaunch beej.",
    description: "White kaunch seeds are similar to velvet bean seeds and should be processed and used per traditional guidance.",
    ingredients: [
      "White velvet bean seeds"
    ],
    benefits: [
      "Traditional uses; consult practitioner"
    ],
    usage: "Use after proper processing.",
    featured: false
  }
];

export const featuredProducts = products.filter(p => p.featured);
