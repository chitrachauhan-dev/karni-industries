/**
 * Karni Industries - Product Catalog Database
 * Formulations for Industrial, Commercial, and Institutional Applications
 */
const PRODUCTS_DATA = [
  // 1. INDUSTRIAL & HEAVY DUTY DEGREASERS
  {
    id: "karni-k-clean-hd-degreaser",
    name: "Karni K-Clean HD Citrus Degreaser",
    sku: "KI-DEG-01",
    category: "degreasers",
    categoryName: "Industrial & Heavy Degreasers",
    badge: "Best Seller",
    isFeatured: true,
    shortDesc: "Heavy-duty citrus terpene solvent degreaser engineered for rapid breakdown of petroleum grease, tar, and industrial oils.",
    fullDesc: "Karni K-Clean HD Citrus Degreaser is a premium industrial strength solvent emulsifier formulated with natural citrus d-limonene and advanced surfactants. It penetrates dense grease layers, asphalt, tar, carbon deposits, and machining coolants on heavy equipment, engine bays, factory concrete floors, and workshop tools. Rinses cleanly with water without leaving an oily residue.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters HDPE Drum", "200 Liters Barrel"],
    dilutionRatio: "1:10 (Heavy Grease) to 1:40 (General Maintenance)",
    dilutionRatioMin: 10,
    dilutionRatioMax: 40,
    ph: "10.5 - 11.5 (Alkaline)",
    phType: "alkaline",
    appearance: "Vibrant Amber Orange Liquid",
    fragrance: "Fresh Citrus Lemon",
    activeIngredients: "Natural D-Limonene, Non-ionic Emulsifiers, Potassium Hydroxide (<3%)",
    applications: [
      "Machining Workshops & CNC Equipment",
      "Automotive Engine Bays & Transmissions",
      "Industrial Factory Floors & Heavy Grease Pits",
      "Mining & Earthmoving Machinery",
      "Printing Press Rollers and Ink Residue"
    ],
    keyFeatures: [
      "Rapidly breaks down petroleum grease and oxidized engine oils",
      "Formulated with biodegradable natural citrus terpenes",
      "Safe on ferrous metals, steel, and cured concrete",
      "Water-soluble formula rinses spot-free without sticky residue",
      "Concentrated formula provides superior dilution economy"
    ],
    safetyPrecautions: [
      "Wear chemical splash goggles and nitrile safety gloves",
      "Avoid contact with unpainted aluminum or soft plastics for prolonged periods",
      "Store in a cool, ventilated area away from direct sunlight",
      "Keep container tightly closed when not in use"
    ],
    ghsPictograms: ["flammable", "corrosive", "warning"],
    image: "assets/images/products/k-clean-degreaser.svg"
  },
  {
    id: "karni-superstrip-alkaline-degreaser",
    name: "Karni SuperStrip Industrial Floor & Equipment Degreaser",
    sku: "KI-DEG-02",
    category: "degreasers",
    categoryName: "Industrial & Heavy Degreasers",
    badge: "Heavy Duty",
    isFeatured: true,
    shortDesc: "Ultra-concentrated caustic alkaline degreaser for baked-on grease, carbon soot, and rubber tire marks.",
    fullDesc: "Karni SuperStrip is formulated for extreme industrial environments requiring severe cleaning power. It saponifies animal fats, synthetic lubricants, heavy carbon crust, and stubborn warehouse forklift tire marks on epoxy and hard concrete floors.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters Drum", "200 Liters Barrel"],
    dilutionRatio: "1:20 (Scrubber Dryers) to 1:5 (Heavy Strip)",
    dilutionRatioMin: 5,
    dilutionRatioMax: 20,
    ph: "12.5 - 13.5 (Strong Alkaline)",
    phType: "alkaline",
    appearance: "Deep Blue Transparent Liquid",
    fragrance: "Low Odor / Technical",
    activeIngredients: "Sodium Hydroxide, Sodium Metasilicate, Surfactant Complex",
    applications: [
      "Logistics Warehouses & Forklift Runways",
      "Steel Fabrication Units & Foundries",
      "Food Processing Exhausts & Heavy Grease Traps",
      "Airport Hangars & Fleet Maintenance Depots"
    ],
    keyFeatures: [
      "Low foaming formulation optimized for automatic floor scrubbers",
      "Cuts through baked carbon and heavy petroleum sludge",
      "Penetrates deep porous concrete surfaces",
      "Inhibited to protect industrial pump seals and hoses"
    ],
    safetyPrecautions: [
      "Corrosive! Always wear neoprene gloves, face shield, and chemical apron",
      "Do NOT use on aluminum, galvanized zinc, or tin",
      "In case of contact, flush immediately with copious clean water for 15 minutes"
    ],
    ghsPictograms: ["corrosive", "warning"],
    image: "assets/images/products/superstrip-degreaser.svg"
  },
  {
    id: "karni-rust-off-metal-conditioner",
    name: "Karni Rust-Off Acidic Rust Remover & Metal Prep",
    sku: "KI-DEG-03",
    category: "degreasers",
    categoryName: "Industrial & Heavy Degreasers",
    badge: "Metal Care",
    isFeatured: false,
    shortDesc: "Phosphoric acid based rust converter, descaling wash, and surface passivation wash before painting.",
    fullDesc: "Karni Rust-Off chemically transforms iron oxide (rust) into an insoluble, corrosion-resistant iron phosphate coating. It effectively deoxidizes rusted metal parts, pipes, storage tanks, and vehicle chassis, while providing an ideal anchor profile for primer and paint adherence.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters Drum"],
    dilutionRatio: "Ready to Use (Deep Rust) or 1:3 with water (Dip Tanks)",
    dilutionRatioMin: 1,
    dilutionRatioMax: 3,
    ph: "1.5 - 2.2 (Strong Acidic)",
    phType: "acidic",
    appearance: "Clear Water-White Liquid",
    fragrance: "Characteristic Acidic",
    activeIngredients: "Phosphoric Acid (38%), Zinc Phosphate Activators, Acid Inhibitors",
    applications: [
      "Pre-paint metal preparation and degreasing",
      "Structural steel beams and pipeline refurbishment",
      "Nuts, bolts, and rusted tooling dip tank restoration",
      "Storage tank exterior derusting"
    ],
    keyFeatures: [
      "Eliminates sandblasting for light-to-moderate rust profiles",
      "Forms a protective microscopic phosphate conversion coating",
      "Contains organic inhibitors preventing attack on virgin base steel",
      "Can be applied by brushing, spraying, or dip tank immersion"
    ],
    safetyPrecautions: [
      "Strong acid! Wear acid-resistant rubber gloves and full eye protection",
      "Never mix with bleach or chlorine-based compounds (generates toxic gas)",
      "Use only in well-ventilated outdoor or exhaust-equipped areas"
    ],
    ghsPictograms: ["corrosive", "health-hazard"],
    image: "assets/images/products/rust-off.svg"
  },

  // 2. INSTITUTIONAL HOUSEKEEPING & SURFACE CARE
  {
    id: "karni-klear-glass-cleaner",
    name: "Karni Klear Glass & Multi-Surface Cleaner",
    sku: "KI-HSK-01",
    category: "housekeeping",
    categoryName: "Housekeeping & Surface Care",
    badge: "Streak Free",
    isFeatured: true,
    shortDesc: "Professional optical glass and reflective surface cleaner with anti-dust and anti-fog technology.",
    fullDesc: "Karni Klear is an ammonia-free, fast-evaporating surface cleaner formulated for architectural glass facades, commercial mirrors, display cases, stainless steel elevators, and touchscreens. It dissolves fingerprints, light oil mist, and atmospheric film instantly, leaving sparkling streak-free clarity.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy"],
    dilutionRatio: "Ready to Use (Spray & Wipe) or 1:4 for large facade squeegeeing",
    dilutionRatioMin: 1,
    dilutionRatioMax: 4,
    ph: "7.0 - 8.0 (Neutral to Mild)",
    phType: "neutral",
    appearance: "Vibrant Ocean Blue Clear Liquid",
    fragrance: "Crisp Mountain Breeze",
    activeIngredients: "Isopropanol, Deionized Water, Glycol Ether, Anti-static Silicones",
    applications: [
      "Commercial Building Glass Facades & Windows",
      "Hotel & Corporate Lobbies, Elevators & Mirrors",
      "Retail Display Counters and Vitrines",
      "Electronics Displays and Control Panels"
    ],
    keyFeatures: [
      "Guaranteed zero streak, rainbow sheen, or hazy film",
      "Anti-static additive repels airborne dust particles for days",
      "Quick-drying flash evaporation formula saves labor time",
      "Safe on tinted window films and polycarbonate plastics"
    ],
    safetyPrecautions: [
      "Keep away from open ignition sources or hot operating halogen bulbs",
      "Do not spray directly into eyes; flush with water if contact occurs"
    ],
    ghsPictograms: ["flammable", "warning"],
    image: "assets/images/products/karni-klear-glass.svg"
  },
  {
    id: "karni-floral-fresh-floor-cleaner",
    name: "Karni Floral Fresh Neutral Floor Cleaner Concentrate",
    sku: "KI-HSK-02",
    category: "housekeeping",
    categoryName: "Housekeeping & Surface Care",
    badge: "Eco Safe",
    isFeatured: true,
    shortDesc: "pH-neutral floor cleaner and gloss enhancer safe for marble, granite, epoxy, and polished vitrified tiles.",
    fullDesc: "Karni Floral Fresh Neutral Floor Cleaner is specially developed for daily mopping and maintenance of luxury stone and polished architectural floors. Its gentle pH-neutral chemistry effectively cleans grime without stripping floor polishes or dulling sensitive marble crystals, leaving a pleasant long-lasting floral fragrance.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters Drum"],
    dilutionRatio: "1:50 (Daily Mopping: 20ml per 1L water) to 1:100 (Light Maintenance)",
    dilutionRatioMin: 50,
    dilutionRatioMax: 100,
    ph: "6.8 - 7.5 (Exact Neutral)",
    phType: "neutral",
    appearance: "Emerald Green Translucent Liquid",
    fragrance: "Fresh Lavender & Jasmine Floral",
    activeIngredients: "Bio-based Alkyl Polyglucosides, Optical Brighteners, Natural Perfume Oils",
    applications: [
      "Italian Marble & Travertine High-Gloss Floors",
      "Granite, Vitrified Tiles & Terrazzo Flooring",
      "Commercial Offices, Hospitals, and Shopping Malls",
      "Hotels, Banquets, and Educational Institutions"
    ],
    keyFeatures: [
      "100% pH neutral: preserves natural sheen and floor sealers",
      "No rinsing required: leaves zero sticky residue or slip hazard",
      "Long-lasting deodorizing aromatics neutralize ambient odors",
      "Hypoallergenic and environmentally biodegradable"
    ],
    safetyPrecautions: [
      "Non-corrosive and skin friendly when diluted as instructed",
      "Keep out of reach of children; avoid direct ingestion"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/floral-fresh-floor.svg"
  },
  {
    id: "karni-shine-stainless-polish",
    name: "Karni Shine Stainless Steel & Chrome Polish",
    sku: "KI-HSK-03",
    category: "housekeeping",
    categoryName: "Housekeeping & Surface Care",
    badge: "Gloss Finish",
    isFeatured: false,
    shortDesc: "Protective cleaner and luster polish for architectural metal, elevators, handrails, and kitchen hoods.",
    fullDesc: "Karni Shine forms an invisible microscopic barrier on stainless steel, brass, chrome, and aluminum fixtures that resists fingerprints, water spotting, and atmospheric oxidation. Restores factory luster with effortless buffing.",
    packagingSizes: ["1 Liter Spray Bottle", "5 Liters Canister"],
    dilutionRatio: "Ready to Use (Wipe with micro-fiber cloth)",
    dilutionRatioMin: 1,
    dilutionRatioMax: 1,
    ph: "7.0 (Neutral)",
    phType: "neutral",
    appearance: "Milky White Emulsion",
    fragrance: "Fresh Clean Linen",
    activeIngredients: "Technical Grade White Mineral Oil, Silicon Emulsion, Polishing Agents",
    applications: [
      "Stainless Steel Elevator Doors and Cab Interiors",
      "Commercial Kitchen Hood Exteriors and Stainless Tables",
      "Escalator Balustrades and Architectural Handrails",
      "Hotel Bathroom Chrome Fixtures & Dispenser Enclosures"
    ],
    keyFeatures: [
      "Leaves high-gloss luster without greasy or tacky buildup",
      "Resists recurrent fingerprints and water splash marks",
      "Contains no harsh abrasives; will not scratch polished finishes"
    ],
    safetyPrecautions: [
      "Do not apply to floor surfaces (may cause severe slip hazard)",
      "Buff dry with clean microfiber towel"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/karni-shine-polish.svg"
  },

  // 3. KITCHEN HYGIENE & FOOD SERVICE
  {
    id: "karni-ovenpro-carbon-remover",
    name: "Karni OvenPro & Grill Carbon Remover",
    sku: "KI-KIT-01",
    category: "kitchen",
    categoryName: "Kitchen Hygiene & Food Service",
    badge: "Heavy Duty",
    isFeatured: true,
    shortDesc: "High-cling gel formulation for dissolving burnt-on grease, caramel, and baked carbon in commercial ovens.",
    fullDesc: "Karni OvenPro is an industrial-strength viscous gel designed specifically for hot and warm commercial cooking appliances. Its thick consistency clings to vertical oven walls, griddles, rotisseries, and salamanders, breaking down carbonized fats into easily rinsable soap compounds within minutes.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy"],
    dilutionRatio: "Ready to Use (Apply undiluted on 50°C - 60°C warm surface)",
    dilutionRatioMin: 1,
    dilutionRatioMax: 1,
    ph: "13.0 - 14.0 (Extreme Alkaline)",
    phType: "alkaline",
    appearance: "Amber Thick Gel",
    fragrance: "Unscented / Chemical",
    activeIngredients: "Potassium Hydroxide, Sodium Gluconate, Viscosity Stabilizers",
    applications: [
      "Commercial Pizza Ovens & Convection Ovens",
      "Cast Iron Griddles, Flat Tops, and Char-broilers",
      "Commercial Fryer Boil-Out Cleaning",
      "Deep Fat Fryer Exterior and Exhaust Hood Filters"
    ],
    keyFeatures: [
      "Thick clinging gel stays on vertical surfaces without dripping",
      "Penetrates multi-layer baked-on carbon and grease slag",
      "Works rapidly on warm surfaces (50°C - 60°C)",
      "Easily wiped off and rinsed with clean water"
    ],
    safetyPrecautions: [
      "Corrosive! Causes severe burns. Wear heat-resistant chemical gloves and eye shield",
      "Never use on aluminum, teflon, copper, or painted surfaces",
      "Ensure food items are completely removed prior to application"
    ],
    ghsPictograms: ["corrosive", "health-hazard"],
    image: "assets/images/products/ovenpro-degreaser.svg"
  },
  {
    id: "karni-dishpro-manual-detergent",
    name: "Karni DishPro Concentrated Manual Pot Detergent",
    sku: "KI-KIT-02",
    category: "kitchen",
    categoryName: "Kitchen Hygiene & Food Service",
    badge: "Food Safe",
    isFeatured: false,
    shortDesc: "Ultra-concentrated grease-cutting dishwashing detergent with skin-moisturizing conditioners.",
    fullDesc: "Karni DishPro is formulated for high-volume 3-compartment sink washing in commercial kitchens, bakeries, and catering operations. Its rich, dense suds dissolve tough grease, gravies, and dried egg residues while remaining exceptionally gentle on staff hands.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters Drum"],
    dilutionRatio: "1:200 (Sink Wash: 5ml per 1L water) to 1:100 (Heavy Pots)",
    dilutionRatioMin: 100,
    dilutionRatioMax: 200,
    ph: "6.5 - 7.5 (Balanced Neutral)",
    phType: "neutral",
    appearance: "Golden Amber Viscous Liquid",
    fragrance: "Fresh Sparkling Lime",
    activeIngredients: "Sodium Lauryl Ether Sulfate, Cocamidopropyl Betaine, Glycerine",
    applications: [
      "Commercial Kitchen 3-Compartment Sink Washing",
      "Pots, Pans, Baking Sheets, and Woks",
      "Glassware, Cutlery, and Crockery",
      "Food Preparation Counters and Stainless Sinks"
    ],
    keyFeatures: [
      "High active matter (22%+) yields immense foaming economy",
      "Instant grease emulsion even in lukewarm or cold water",
      "Neutral pH with aloe conditioners protects kitchen staff hands",
      "Rinses easily without soapy perfume residue on tableware"
    ],
    safetyPrecautions: [
      "Avoid contact with eyes; rinse immediately if irritation occurs",
      "Store at room temperature above 5°C to avoid clouding"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/dishpro-detergent.svg"
  },
  {
    id: "karni-sanit-plus-food-sanitizer",
    name: "Karni Sanit-Plus No-Rinse Food Contact Surface Sanitizer",
    sku: "KI-KIT-03",
    category: "kitchen",
    categoryName: "Kitchen Hygiene & Food Service",
    badge: "No-Rinse",
    isFeatured: true,
    shortDesc: "Food-contact safe quaternary ammonium surface sanitizer requiring zero water rinsing when diluted.",
    fullDesc: "Karni Sanit-Plus is an EPA-compliant disinfectant sanitizer formulated for food preparation areas, slicing machines, cutting boards, and dairy equipment. Kills 99.999% of foodborne pathogens including Listeria, Salmonella, and E. Coli within 60 seconds of contact time.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy"],
    dilutionRatio: "1:128 (No-Rinse: 8ml per 1L water = 200 ppm active QAC)",
    dilutionRatioMin: 128,
    dilutionRatioMax: 128,
    ph: "7.0 - 7.5 (Neutral)",
    phType: "neutral",
    appearance: "Clear Colorless Liquid",
    fragrance: "Unscented / Odorless",
    activeIngredients: "Didecyl Dimethyl Ammonium Chloride (DDAC), Water",
    applications: [
      "Food Prep Tables, Chopping Boards, and Utensils",
      "Meat Slicers, Dough Mixers, and Conveyor Belts",
      "Ice Machine Chutes and Beverage Dispenser Nozzles",
      "Dining Tables and Service Counters"
    ],
    keyFeatures: [
      "Certified no-rinse formula at 200ppm dilution: saves water & labor",
      "Kills 99.999% of Listeria, Salmonella, and Norovirus",
      "100% odorless and colorless: cannot taint food flavor or aroma",
      "Non-corrosive to stainless steel, nylon, and rubber gaskets"
    ],
    safetyPrecautions: [
      "Do not mix with anionic detergents or soaps",
      "Verify dilution ratio using Quat test strips regularly"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/sanit-plus.svg"
  },

  // 4. DISINFECTION & HEALTHCARE GRADE
  {
    id: "karni-med-guard-disinfectant",
    name: "Karni Med-Guard QAC Hospital Grade Disinfectant",
    sku: "KI-DIS-01",
    category: "disinfectants",
    categoryName: "Disinfection & Healthcare",
    badge: "Hospital Grade",
    isFeatured: true,
    shortDesc: "Broad spectrum virucidal and bactericidal fifth-generation Quat disinfectant for medical and sterile zones.",
    fullDesc: "Karni Med-Guard is an advanced healthcare-grade disinfectant concentrate formulated with twin-chain quaternary ammonium compounds. Validated against enveloped viruses, MRSA, fungal spores, and pathogenic bacteria. Designed for operating theaters, ICUs, clinics, and cleanrooms.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters Drum"],
    dilutionRatio: "1:64 (Terminal Disinfection) to 1:128 (Routine Mopping)",
    dilutionRatioMin: 64,
    dilutionRatioMax: 128,
    ph: "7.5 - 8.5 (Mild Alkaline)",
    phType: "neutral",
    appearance: "Clear Aqua Marine Liquid",
    fragrance: "Mild Clinical Clean",
    activeIngredients: "Twin Chain Dimethyl Ammonium Chloride (10%), Benzalkonium Chloride",
    applications: [
      "Hospital Operating Theatres, Wards, and ICU Flooring",
      "Dental Chairs, Clinic Examination Couches, and Trays",
      "Pharmaceutical Cleanrooms and Sterilization Antechambers",
      "Ambulances, Diagnostics Labs, and Quarantine Areas"
    ],
    keyFeatures: [
      "Proven 99.999% pathogen kill log reduction in 5 minutes",
      "Broad efficacy against MRSA, HBV, HCV, Coronavirus, and Candida",
      "Non-corrosive to titanium, medical plastics, and monitor screens",
      "Leaves antimicrobial residual barrier inhibiting bacterial regrowth"
    ],
    safetyPrecautions: [
      "Concentrate causes eye irritation: wear safety goggles during dilution",
      "Allow recommended 5-minute wet dwell time for full virucidal efficacy"
    ],
    ghsPictograms: ["corrosive", "warning"],
    image: "assets/images/products/med-guard-disinfectant.svg"
  },
  {
    id: "karni-stericlenz-pine-disinfectant",
    name: "Karni SteriClenz Pine Disinfectant Fluid (Black/White)",
    sku: "KI-DIS-02",
    category: "disinfectants",
    categoryName: "Disinfection & Healthcare",
    badge: "High Phenolic",
    isFeatured: false,
    shortDesc: "Traditional high-grade pine coal-tar disinfectant fluid with powerful germicidal and deodorizing action.",
    fullDesc: "Karni SteriClenz is a high-phenolic coefficient disinfectant fluid engineered for municipal, institutional, and agricultural hygiene. Emulsifies into a thick milky white solution upon contact with water, masking foul odors and sterilizing drains, sewers, public restrooms, and livestock facilities.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "200 Liters Barrel"],
    dilutionRatio: "1:30 (Heavily Soiled Drains) to 1:80 (General Restroom Mopping)",
    dilutionRatioMin: 30,
    dilutionRatioMax: 80,
    ph: "8.5 - 9.5 (Alkaline)",
    phType: "alkaline",
    appearance: "Dark Brown Viscous Liquid (Milky White in Water)",
    fragrance: "Strong Natural Pine / Phenolic",
    activeIngredients: "High Boiling Tar Acids, Pine Oil Extract, Rosin Soap",
    applications: [
      "Municipal Drains, Gutters, and Waste Compactor Areas",
      "Public Toilets, Urinals, and Railway Station Sanitation",
      "Veterinary Clinics, Kennels, and Animal Housing",
      "Industrial Waste Storage Facilities"
    ],
    keyFeatures: [
      "Powerful RWC (Rideal-Walker Coefficient) germicidal rating",
      "Unique bloom emulsion provides visible proof of active sanitization",
      "Penetrates heavy organic matter and mud where normal bleach fails",
      "Natural insect and pest deterrent properties"
    ],
    safetyPrecautions: [
      "Harmful if swallowed or absorbed through skin. Use heavy rubber gloves",
      "Toxic to aquatic life: do not release untreated concentrate into waterways"
    ],
    ghsPictograms: ["corrosive", "environmental", "toxic"],
    image: "assets/images/products/stericlenz-pine.svg"
  },
  {
    id: "karni-dermasil-hand-wash",
    name: "Karni Dermasil Antibacterial Foaming Hand Wash",
    sku: "KI-DIS-03",
    category: "disinfectants",
    categoryName: "Disinfection & Healthcare",
    badge: "Gentle Care",
    isFeatured: false,
    shortDesc: "Dermatologically tested antibacterial hand wash enriched with moisturizers for frequent industrial use.",
    fullDesc: "Karni Dermasil is formulated for staff hygiene in pharmaceutical factories, healthcare facilities, and food plants. Contains broad-spectrum chloroxylenol to eliminate cross-contamination while preserving natural skin lipid moisture.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy"],
    dilutionRatio: "Ready to Use (Pour into automated or manual dispensers)",
    dilutionRatioMin: 1,
    dilutionRatioMax: 1,
    ph: "5.5 - 6.5 (Skin Balanced)",
    phType: "neutral",
    appearance: "Translucent Pearlescent Rose Liquid",
    fragrance: "Gentle Botanical Aloe",
    activeIngredients: "Chloroxylenol (PCMX), Sodium Laureth Sulfate, Aloe Vera Extract, Glycerin",
    applications: [
      "Commercial Restroom Soap Dispensers",
      "Food Processing Staff Hygiene Sinks",
      "Hospital Scrub Rooms and Clinic Handwash Stations",
      "Industrial Plant Lockers and Staff Canteens"
    ],
    keyFeatures: [
      "Eliminates 99.9% of transient bacteria within 20 seconds",
      "pH 5.5 balanced: prevents dermatitis even with 30+ washes per shift",
      "Formulated for compatibility with bulk liquid and foaming dispensers"
    ],
    safetyPrecautions: [
      "For external topical hand washing only",
      "In case of contact with eyes, rinse thoroughly with fresh water"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/dermasil-handwash.svg"
  },

  // 5. COMMERCIAL LAUNDRY SYSTEMS
  {
    id: "karni-oxywash-liquid-detergent",
    name: "Karni OxyWash Commercial Liquid Laundry Detergent",
    sku: "KI-LND-01",
    category: "laundry",
    categoryName: "Commercial Laundry Systems",
    badge: "Low Temp",
    isFeatured: false,
    shortDesc: "High-efficiency commercial laundry liquid detergent with enzyme boost for hotel and hospital linens.",
    fullDesc: "Karni OxyWash is formulated for tunnel washers and automated commercial extractors. Contains a synergistic blend of protease, amylase, and optical brighteners that lift stubborn protein stains, makeup, massage oils, and blood spots at temperatures as low as 35°C.",
    packagingSizes: ["20 Liters Carboy", "50 Liters Drum", "200 Liters Barrel"],
    dilutionRatio: "4ml to 8ml per 1kg dry laundry load",
    dilutionRatioMin: 125,
    dilutionRatioMax: 250,
    ph: "8.5 - 9.5 (Alkaline)",
    phType: "alkaline",
    appearance: "Vibrant Fluorescent Blue Liquid",
    fragrance: "Alpine Fresh Linen",
    activeIngredients: "Multi-enzyme Complex, Non-ionic Surfactants, Optical Brighteners",
    applications: [
      "Hotel Bed Linens, Duvets, and Bath Towels",
      "Hospital Scrubs, Patient Gowns, and Bed Sheets",
      "Commercial Industrial Workwear and Overalls",
      "Restaurant Tablecloths and Napkins"
    ],
    keyFeatures: [
      "Active enzyme blend dissolves biological stains at low wash temperatures",
      "Low foam profile protects commercial washing drum bearings and drainage",
      "Compatible with automated peristaltic dosing injection pumps",
      "Imparts brilliant white reflectance under natural lighting"
    ],
    safetyPrecautions: [
      "Avoid contact with eyes; wear safety glasses when replacing drum feed lances",
      "Do not pour directly on wool or silk without prior testing"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/oxywash-laundry.svg"
  },
  {
    id: "karni-brighten-oxygen-bleach",
    name: "Karni Brighten Oxygen Bleach Concentrate",
    sku: "KI-LND-02",
    category: "laundry",
    categoryName: "Commercial Laundry Systems",
    badge: "Color Safe",
    isFeatured: false,
    shortDesc: "Color-safe stabilized hydrogen peroxide bleach destainer for delicate linens and colored uniforms.",
    fullDesc: "Karni Brighten delivers powerful oxidative stain removal without the fiber degradation associated with sodium hypochlorite (chlorine) bleach. Safely removes coffee, wine, tea, and curcumins from colored fabrics, extending linen tensile life significantly.",
    packagingSizes: ["20 Liters Carboy", "50 Liters Drum"],
    dilutionRatio: "2ml to 5ml per 1kg dry laundry load at 60°C",
    dilutionRatioMin: 200,
    dilutionRatioMax: 500,
    ph: "3.0 - 4.0 (Stabilized Acidic)",
    phType: "acidic",
    appearance: "Clear Colorless Liquid",
    fragrance: "Odorless",
    activeIngredients: "Hydrogen Peroxide (35%), Phosphonate Stabilizers",
    applications: [
      "Commercial Laundry Destaining Cycle",
      "Hotel Colored Uniforms and Spa Robes",
      "Healthcare Bedding Decontamination",
      "Yellowing Stain Remediation on Premium Cottons"
    ],
    keyFeatures: [
      "100% color-safe: zero fabric fading or fiber yellowing",
      "Breaks down into water and oxygen; leaves zero toxic chemical residues",
      "Dual action: stain destainer and fabric sanitizing enhancer"
    ],
    safetyPrecautions: [
      "Strong oxidizer! Keep away from flammable materials and heavy metal salts",
      "Wear vented safety goggles and nitrile gloves; store in upright vented drums"
    ],
    ghsPictograms: ["corrosive", "warning"],
    image: "assets/images/products/brighten-bleach.svg"
  },
  {
    id: "karni-softfabric-softener",
    name: "Karni SoftFabric Antistatic Fabric Softener & Sour",
    sku: "KI-LND-03",
    category: "laundry",
    categoryName: "Commercial Laundry Systems",
    badge: "Silky Feel",
    isFeatured: false,
    shortDesc: "Dual-action cationic fabric conditioner and alkaline neutralizing sour for luxury hospitality linens.",
    fullDesc: "Karni SoftFabric neutralizes residual wash water alkalinity, preventing fabric stiffness and skin irritation, while coating cotton fibers with a microscopic softening veil. Reduces ironer friction, minimizes static cling, and cuts drying cycle times.",
    packagingSizes: ["20 Liters Carboy", "50 Liters Drum"],
    dilutionRatio: "3ml to 6ml per 1kg dry laundry in final rinse",
    dilutionRatioMin: 160,
    dilutionRatioMax: 330,
    ph: "2.5 - 3.5 (Mild Sour Acidic)",
    phType: "acidic",
    appearance: "Soft Opaque Pink Emulsion",
    fragrance: "Sensual Floral Blossom",
    activeIngredients: "Esterquat Cationic Softening Agent, Organic Neutralizing Acids",
    applications: [
      "Hotel Bath Towels, Bathrobes, and Bed Linens",
      "Healthcare Linens Requiring Neutral Skin pH",
      "Dry Cleaning Laundromats and Coin-Op Facilities"
    ],
    keyFeatures: [
      "Dual function: fabric softener plus alkaline neutralizer sour in one step",
      "Restores natural pH (5.5 - 6.5) to washed linens preventing skin itching",
      "Speeds up flatwork ironer throughput and reduces lint shedding"
    ],
    safetyPrecautions: [
      "Do not combine with chlorine bleach or detergent in the same dosing flush",
      "Store above 4°C to avoid irreversible emulsion separation"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/softfabric-softener.svg"
  },

  // 6. AUTOMOTIVE & FLEET CLEANING
  {
    id: "karni-autowash-foaming-shampoo",
    name: "Karni AutoWash High Foaming Vehicle Shampoo",
    sku: "KI-AUT-01",
    category: "automotive",
    categoryName: "Automotive & Fleet Cleaning",
    badge: "Dense Foam",
    isFeatured: true,
    shortDesc: "pH-neutral snow foam car and truck shampoo engineered for touchless pressure washer foam cannons.",
    fullDesc: "Karni AutoWash creates an ultra-thick, clinging snow foam blanket that encapsulates abrasive road grit, bug splatter, and brake dust before it touches the vehicle paint. Formulated with gloss-enhancing polymers that leave a streak-free, mirror-like wax shine.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy", "50 Liters Drum", "200 Liters Barrel"],
    dilutionRatio: "1:10 (Foam Cannon) or 1:100 (Bucket Hand Wash)",
    dilutionRatioMin: 10,
    dilutionRatioMax: 100,
    ph: "7.0 - 7.5 (Paint-Safe Neutral)",
    phType: "neutral",
    appearance: "Vibrant Cherry Red Pearlescent Gel",
    fragrance: "Sweet Wild Cherry",
    activeIngredients: "High-Lather Alkyl Sulfates, Carnauba Wax Emulsion, Chelating Agents",
    applications: [
      "Commercial Car Wash Tunnels and Detailing Studios",
      "Automobile Showroom Pre-Delivery Detailing",
      "Corporate Fleet Maintenance Depots and Bus Stations",
      "Motorcycle and High-End Luxury Vehicle Washes"
    ],
    keyFeatures: [
      "Clinging shaving-cream foam density suspends grit away from clear coats",
      "100% safe on ceramic coatings, paint protection film (PPF), and waxes",
      "Formulated with water softening agents to prevent hard water spots",
      "Easily rinses away cleanly with high-pressure water wand"
    ],
    safetyPrecautions: [
      "Wash vehicle in the shade when paint surfaces are cool to touch",
      "Avoid eye contact; wash thoroughly with water if contact occurs"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/autowash-shampoo.svg"
  },
  {
    id: "karni-fleetclean-heavy-wash",
    name: "Karni FleetClean Heavy Commercial Vehicle Wash",
    sku: "KI-AUT-02",
    category: "automotive",
    categoryName: "Automotive & Fleet Cleaning",
    badge: "Road Film",
    isFeatured: false,
    shortDesc: "Two-stage touchless traffic film remover (TFR) for commercial trucks, tankers, buses, and trains.",
    fullDesc: "Karni FleetClean is formulated for severe road grime, diesel exhaust soot, salt crust, and red mud on logistics fleets and public transit vehicles. Works exceptionally well in automated rollover bus-wash gantries and high-pressure steam washers.",
    packagingSizes: ["20 Liters Carboy", "50 Liters Drum", "200 Liters Barrel"],
    dilutionRatio: "1:30 (Pressure Wash TFR) to 1:60 (Automated Gantry)",
    dilutionRatioMin: 30,
    dilutionRatioMax: 60,
    ph: "11.5 - 12.5 (Alkaline)",
    phType: "alkaline",
    appearance: "Fluorescent Chartreuse Yellow Liquid",
    fragrance: "Clean Citrus",
    activeIngredients: "Nitrilotriacetic Acid Salts, Potassium Hydroxide, Anionic Surfactants",
    applications: [
      "Logistics Freight Fleets, Tankers, and Semi-Trucks",
      "Intercity Buses and Municipal Transit Fleets",
      "Railways Coaches, Wagons, and Metros",
      "Agricultural Tractors, Combines, and Construction Dumpers"
    ],
    keyFeatures: [
      "Touchless cleaning power: eliminates brush swirl marks on fleet vinyls",
      "Cuts through sticky diesel soot and road tar film effortlessly",
      "Safe on anodized aluminum trailer sides and glass when rinsed promptly"
    ],
    safetyPrecautions: [
      "Wear nitrile gloves and protective eyewear during spray application",
      "Never allow product to dry on automotive paint under direct sun"
    ],
    ghsPictograms: ["corrosive", "warning"],
    image: "assets/images/products/fleetclean-wash.svg"
  },
  {
    id: "karni-tyreshine-silicone-dressing",
    name: "Karni TyreShine Long-Lasting Silicone Dressing",
    sku: "KI-AUT-03",
    category: "automotive",
    categoryName: "Automotive & Fleet Cleaning",
    badge: "Deep Gloss",
    isFeatured: false,
    shortDesc: "Hydrophobic polymer tyre and trim dressing providing deep wet-look shine and ozone UV protection.",
    fullDesc: "Karni TyreShine restores dull, browning automotive rubber tyres and vinyl bumpers to an ultra-black wet showroom luster. Its solvent-free silicone emulsion penetrates rubber pores to protect against ozone cracking, UV fading, and dry rot for weeks.",
    packagingSizes: ["5 Liters Canister", "20 Liters Carboy"],
    dilutionRatio: "Ready to Use (Apply with tyre sponge or applicator pad)",
    dilutionRatioMin: 1,
    dilutionRatioMax: 1,
    ph: "7.0 (Neutral)",
    phType: "neutral",
    appearance: "Rich Creamy White Emulsion",
    fragrance: "Vanilla Almond",
    activeIngredients: "High-Viscosity Polydimethylsiloxane, UV Blockers, Wetting Agents",
    applications: [
      "Automotive Tyre Sidewalls and Rubber Mats",
      "Exterior Unpainted Plastic Trim and Bumper Moldings",
      "Commercial Bus and Truck Tyre Dressing",
      "Car Detailing Centers and Showrooms"
    ],
    keyFeatures: [
      "Zero sling formula: does not splatter onto car doors when driving off",
      "Dries to touch: repels road dust and water splashes",
      "Infused with UV inhibitors to prevent rubber browning and sidewall dry rot"
    ],
    safetyPrecautions: [
      "Never apply to tyre tread contact patches, brake discs, or motorcycle tyres",
      "Wipe off excess with dry microfiber applicator"
    ],
    ghsPictograms: ["warning"],
    image: "assets/images/products/tyreshine-dressing.svg"
  }
];

// Product Category Metadata
const PRODUCT_CATEGORIES = [
  {
    id: "all",
    name: "All Formulations",
    icon: "grid",
    count: PRODUCTS_DATA.length,
    description: "Browse our complete catalog of industrial, institutional, and commercial chemical solutions."
  },
  {
    id: "degreasers",
    name: "Industrial Degreasers",
    icon: "cog",
    count: PRODUCTS_DATA.filter(p => p.category === "degreasers").length,
    description: "Heavy-duty citrus & alkaline degreasers, rust removers, and metal prep cleaners for factories."
  },
  {
    id: "housekeeping",
    name: "Housekeeping & Surface",
    icon: "sparkles",
    count: PRODUCTS_DATA.filter(p => p.category === "housekeeping").length,
    description: "Streak-free glass cleaners, pH-neutral marble floor cleaners, and stainless steel polishes."
  },
  {
    id: "kitchen",
    name: "Kitchen Hygiene",
    icon: "utensils",
    count: PRODUCTS_DATA.filter(p => p.category === "kitchen").length,
    description: "High-cling oven carbon removers, food-safe surface sanitizers, and heavy pot detergents."
  },
  {
    id: "disinfectants",
    name: "Healthcare & Disinfection",
    icon: "shield-check",
    count: PRODUCTS_DATA.filter(p => p.category === "disinfectants").length,
    description: "Hospital grade QAC disinfectants, phenolic pine fluids, and antimicrobial hand washes."
  },
  {
    id: "laundry",
    name: "Commercial Laundry",
    icon: "tshirt",
    count: PRODUCTS_DATA.filter(p => p.category === "laundry").length,
    description: "Enzyme boosted liquid detergents, color-safe oxygen bleaches, and antistatic sour softeners."
  },
  {
    id: "automotive",
    name: "Automotive & Fleet",
    icon: "truck",
    count: PRODUCTS_DATA.filter(p => p.category === "automotive").length,
    description: "High-foaming vehicle shampoos, touchless traffic film removers, and silicone tyre dressings."
  }
];

// Helper functions for easy querying
const ProductsDB = {
  getAll: () => PRODUCTS_DATA,
  getFeatured: () => PRODUCTS_DATA.filter(p => p.isFeatured),
  getById: (id) => PRODUCTS_DATA.find(p => p.id === id),
  getByCategory: (category) => category === 'all' ? PRODUCTS_DATA : PRODUCTS_DATA.filter(p => p.category === category),
  getCategories: () => PRODUCT_CATEGORIES,
  search: (query, category = 'all') => {
    let list = category === 'all' ? PRODUCTS_DATA : PRODUCTS_DATA.filter(p => p.category === category);
    if (!query || !query.trim()) return list;
    const q = query.toLowerCase().trim();
    return list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.applications.some(app => app.toLowerCase().includes(q))
    );
  }
};
