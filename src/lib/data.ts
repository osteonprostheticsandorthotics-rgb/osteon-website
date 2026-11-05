/**
 * ============================================================
 *  OSTEON PROSTHETICS AND ORTHOTICS -- MASTER DATA FILE
 * ============================================================
 *  Source of Truth: osteon.pdf (Official Company Brochure)
 *  STRICT NO-FABRICATION RULE: All content is extracted
 *  directly from the verified brochure.
 *
 *  TABLE OF CONTENTS
 *  ---------------------------------------------------------
 *  1. COMPANY INFO           (line ~60)   Name, tagline, about,
 *                                         vision, mission, address, contact
 *
 *  2. PROSTHETICS DATA       (line ~135)  PROSTHETIC_CATEGORIES[]
 *     2a. Lower Extremity                 Partial-foot to Hemipelvectomy (7 levels)
 *     2b. Upper Extremity                 Partial-hand to Forequarter (7 levels)
 *     2c. Silicone Prostheses             Lower limb / Upper limb / Facial
 *
 *  3. ORTHOTICS DATA         (line ~550)  ORTHOTIC_CATEGORIES[]
 *     3a. Foot Orthoses (FO)
 *     3b. Ankle-Foot Orthoses (AFO)
 *     3c. Knee Orthoses (KO / KAFO)
 *     3d. Hip Orthoses (HO / HKAFO)
 *     3e. Spinal Orthoses & Scoliosis Braces
 *     3f. Upper-Limb Orthoses
 *
 *  4. SCOLIOSIS DETAILS      (line ~855)  Boston Brace info & 4-stage progression
 *
 *  5. PEDIATRIC SOLUTIONS    (line ~920)  Cranial helmet, Pavlik, Denis Browne, etc.
 *
 *  6. CARE COMMITMENTS       (line ~975)  Why patients trust us / Lifelong care
 *
 *  7. TRUST PILLARS          (line ~1015) 4 core clinical values (numbered cards)
 *
 *  8. CLINICAL PROCESS STEPS (line ~1060) 5-stage patient journey
 *                                         (used in the Patient Journey section)
 * ============================================================
 */

// ============================================================
// SECTION 1 -- COMPANY INFO
// Edit here: clinic name, tagline, about text, vision, mission,
//            address details, phone numbers, email, website
// ============================================================
export interface CompanyInfo {
  name: string;
  fullName: string;
  tagline: string;
  about: string;
  aboutSecondary: string;
  vision: string;
  mission: string;
  address: {
    street: string;
    buildingNumber: string;
    area: string;
    city: string;
    postalCode: string;
    full: string;
  };
  contact: {
    phones: string[];
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    website: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Osteon",
  fullName: "Osteon. Prosthetics and Orthotics",
  tagline: "Restoring Mobility, Independence, and Quality of Life",
  about:
    "Osteon is a trusted provider of advanced prosthetic and orthotic care, dedicated to restoring mobility, independence, and quality of life. By combining medical expertise with innovative technology, we design solutions that feel natural, comfortable, and precisely tailored to each individual.",
  aboutSecondary:
    "We support people of all ages, from children with congenital conditions to adults recovering from trauma or managing complex medical challenges. At every stage, our team offers personalized guidance, compassionate, patient-centered care, and unwavering support.",
  vision:
    "We empower people with mobility challenges. We restore comfort, confidence, and independence. Our solutions combine advanced technology with compassionate, patient-centered care.",
  mission:
    "Mobility challenges should never limit human potential. We aim to set new standards in prosthetic and orthotic care. We believe in dignity, confidence, and freedom of movement.",
  address: {
    street: "St. Vincent De Paul Convent Road",
    buildingNumber: "43/2374",
    area: "Palarivattom",
    city: "Cochin",
    postalCode: "682025",
    full: "St. Vincent De Paul Convent Road, 43/2374, Palarivattom, Cochin - 682025"
  },
  contact: {
    phones: ["+91 984 611 6481", "+91 984 611 6411"],
    primaryPhone: "+91 984 611 6481",
    secondaryPhone: "+91 984 611 6411",
    email: "osteonprostheticsandorthotics@gmail.com",
    website: "www.osteonprosthetics.com"
  }
};

// ============================================================
// SECTION 2 -- PROSTHETICS DATA
// Each entry in PROSTHETIC_CATEGORIES[] powers the
// Prosthetics modal / Solutions page cards.
//
//   id           -> used in URL / modal routing
//   name         -> heading shown to user
//   subType      -> subtitle under the heading
//   tagline      -> short descriptor line
//   heroImage    -> main card image (/public/images/...)
//   description  -> paragraph text in modal
//   levels[]     -> individual amputation level rows
//     .category        label (e.g. "Transtibial (BK)")
//     .use             short clinical indication text
//     .options         materials/options listed
//     .image           card image for that level
//     .anatomicalTarget badge label
//     .keyHighlights[] bullet points shown in modal
//   siliconeSections[] -> used only for the Silicone category
//   components[] -> breakdown cards ("What's inside")
//   features[]   -> bullet list in the specs panel
//   specs[]      -> label/value pairs in the specs table
// ============================================================

export interface ProstheticLevel {
  category: string;
  use: string;
  options: string;
  image: string;
  keyHighlights?: string[];
  anatomicalTarget?: string;
}

export interface SiliconeItem {
  name: string;
  indication: string;
  image: string;
  features: string[];
  options?: string[];
}

export interface SiliconeSection {
  title: string;
  tagline: string;
  items: SiliconeItem[];
}

export interface ProstheticCategory {
  id: string;
  name: string;
  subType: string;
  tagline: string;
  heroImage: string;
  description: string;
  levels?: ProstheticLevel[];
  siliconeSections?: SiliconeSection[];
  components: {
    name: string;
    description: string;
  }[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const PROSTHETIC_CATEGORIES: ProstheticCategory[] = [
  {
    id: "lower-extremity",
    name: "LOWER EXTREMITY PROSTHESES",
    subType: "Standing, Transfers, Walking & Recreational Systems",
    tagline: "Custom Clinical Configurations Selected for Functional Goals",
    heroImage: "/images/socket-engineering.jpg",
    description:
      "Designed to support standing, transfers, walking and selected recreational or sporting activities. The final configuration is selected according to the user's functional goals and clinical needs.",
    levels: [
      {
        category: "Partial-foot prosthesis",
        use: "Toe, transmetatarsal and selected midfoot amputations",
        options: "Custom partial-foot device, toe filler, silicone or cosmetic restoration, footwear accommodation",
        image: "/images/products/partial-foot-prosthesis.jpg",
        anatomicalTarget: "Forefoot & Metatarsals",
        keyHighlights: [
          "Dynamic forefoot leverage spring plate",
          "Custom anatomical toe filler",
          "Seamless footwear accommodation"
        ]
      },
      {
        category: "Ankle-disarticulation / Syme",
        use: "Amputation through the ankle joint",
        options: "Custom socket, suspension suited to limb shape, prosthetic foot; build height and footwear considered",
        image: "/images/products/symes-prosthesis.jpg",
        anatomicalTarget: "Ankle Joint & Distal Tibia",
        keyHighlights: [
          "Distal weight-bearing socket interface",
          "Low-profile dynamic energy-return foot",
          "Medial opening anatomical suspension"
        ]
      },
      {
        category: "Transtibial (BK)",
        use: "Below-knee amputation; knee retained",
        options: "PTB or total-surface-bearing socket as appropriate; liner and suspension options; pylon; prosthetic foot",
        image: "/images/prosthetics-lower.jpg",
        anatomicalTarget: "Transtibial Tibia & Fibula",
        keyHighlights: [
          "PTB & Total-Surface-Bearing (TSB) sockets",
          "Elevated vacuum & pin-lock suspension",
          "Multi-axial dynamic carbon foot"
        ]
      },
      {
        category: "Knee-disarticulation",
        use: "Through-knee amputation",
        options: "Custom socket and suspension; knee unit selected with attention to build height and stability; foot",
        image: "/images/products/knee-disarticulation.jpg",
        anatomicalTarget: "Femoral Condyles",
        keyHighlights: [
          "Full femoral condylar end-bearing",
          "Polycentric 4-bar linkage hydraulic knee",
          "Low build-height clearance geometry"
        ]
      },
      {
        category: "Transfemoral (AK)",
        use: "Above-knee amputation",
        options: "Custom socket; liner/suspension; mechanical, pneumatic, hydraulic or microprocessor knee as appropriate; foot",
        image: "/images/socket-engineering.jpg",
        anatomicalTarget: "Femoral Residual Limb",
        keyHighlights: [
          "Ischial containment / MAS contouring",
          "Microprocessor stance & swing damping",
          "Hydraulic stumble recovery systems"
        ]
      },
      {
        category: "Hip-disarticulation",
        use: "Through-hip amputation",
        options: "Pelvic socket/support, hip joint, knee unit, pylon and foot; specialised gait training",
        image: "/images/products/hip-disarticulation.jpg",
        anatomicalTarget: "Pelvic Girdle & Acetabulum",
        keyHighlights: [
          "Laminated carbon pelvic basket interface",
          "Polycentric hydraulic hip joint mechanism",
          "Integrated stance-stability geometry"
        ]
      },
      {
        category: "Hemipelvectomy",
        use: "Limb loss with part of pelvis removed",
        options: "Individualised pelvic interface and suspension; hip, knee and foot components as clinically appropriate",
        image: "/images/products/hemipelvectomy.jpg",
        anatomicalTarget: "Hemipelvic Abdominal Wall",
        keyHighlights: [
          "Anatomical pelvic-abdominal corset",
          "Lightweight composite chassis",
          "Multi-joint synchronized gait training"
        ]
      }
    ],
    components: [
      {
        name: "Custom Socket Interface",
        description: "PTB, total-surface-bearing, or individualized pelvic support engineered to residual anatomy."
      },
      {
        name: "Liner & Suspension Systems",
        description: "Pin-lock, suction, vacuum, and suspension suited to limb shape for secure connection."
      },
      {
        name: "Prosthetic Knee Joint",
        description: "Mechanical, pneumatic, hydraulic, or microprocessor knee units selected for stability."
      },
      {
        name: "Load-Bearing Pylon",
        description: "Rigid pylon shaft calibrated for build height, alignment, and dynamic weight transfer."
      },
      {
        name: "Prosthetic Foot & Adaptors",
        description: "Energy-returning dynamic prosthetic feet accommodating daily footwear and recreational goals."
      }
    ],
    features: [
      "7 amputation level configurations from partial-foot to hemipelvectomy",
      "Individualized socket fabrication (PTB, total-surface-bearing, pelvic support)",
      "Liner & suspension options tailored to user activity level",
      "Mechanical, pneumatic, hydraulic, and microprocessor knee options",
      "Specialised gait training and footwear accommodation"
    ],
    specs: [
      { label: "Amputation Range", value: "Partial-Foot to Hemipelvectomy (7 Levels)" },
      { label: "Socket Designs", value: "PTB, Total-Surface-Bearing, Custom Pelvic" },
      { label: "Knee Control", value: "Mechanical, Pneumatic, Hydraulic, Microprocessor" },
      { label: "Clinical Goal", value: "Standing, transfers, walking & sports" }
    ]
  },
  {
    id: "upper-extremity",
    name: "UPPER EXTREMITY PROSTHESES",
    subType: "Appearance, Stabilisation, Grasping & Task-Specific Systems",
    tagline: "Priorities, Occupation, Comfort & Control Method",
    heroImage: "/images/bionic-arm-prosthesis.jpg",
    description:
      "Designed to assist with appearance, stabilisation, grasping, manipulation and task-specific activities. A successful prescription considers the user's priorities, occupation, comfort, control method and training needs.",
    levels: [
      {
        category: "Partial-hand prosthesis",
        use: "Loss of one or more fingers or part of the hand",
        options: "Passive silicone or cosmetic digits; functional partial-hand devices; task-specific attachments",
        image: "/images/products/partial-hand.jpg",
        anatomicalTarget: "Phalanges & Metacarpals",
        keyHighlights: [
          "Functional articulated titanium digits",
          "Passive silicone cosmetic digits",
          "Opposition post and task-specific grip"
        ]
      },
      {
        category: "Wrist disarticulation / transcarpal",
        use: "Amputation through wrist or carpal region",
        options: "Custom socket; wrist/terminal device selected around available build space and residual anatomy",
        image: "/images/products/wrist-disarticulation.jpg",
        anatomicalTarget: "Carpal & Styloid Region",
        keyHighlights: [
          "Preserves natural forearm pronation/supination",
          "Low-profile quick-disconnect wrist unit",
          "Myoelectric or body-powered control"
        ]
      },
      {
        category: "Transradial (BE)",
        use: "Below-elbow amputation; elbow retained",
        options: "Socket and suspension; body-powered hook/hand or externally powered hand; wrist unit where indicated",
        image: "/images/bionic-arm-prosthesis.jpg",
        anatomicalTarget: "Radius & Ulna Forearm",
        keyHighlights: [
          "Multi-channel EMG surface sensors",
          "Multi-articulating bionic hand integration",
          "Lightweight carbon composite socket"
        ]
      },
      {
        category: "Elbow disarticulation",
        use: "Through-elbow amputation",
        options: "Custom socket; elbow and terminal device selected with attention to residual-limb length and build height",
        image: "/images/products/elbow-disarticulation.jpg",
        anatomicalTarget: "Humeral Epicondyles",
        keyHighlights: [
          "Condylar self-suspending anatomically shaped socket",
          "External side-hinge positive mechanical lock",
          "Terminal device matched to limb length"
        ]
      },
      {
        category: "Transhumeral (AE)",
        use: "Above-elbow amputation",
        options: "Socket; mechanical or powered elbow where appropriate; wrist unit and hook/hand",
        image: "/images/products/transhumeral.jpg",
        anatomicalTarget: "Humeral Residual Limb",
        keyHighlights: [
          "Sequential dual-site EMG or body-powered harness",
          "Motorized microprocessor elbow unit",
          "Rotational wrist with functional terminal device"
        ]
      },
      {
        category: "Shoulder disarticulation",
        use: "Arm removed through shoulder joint",
        options: "Custom shoulder/chest interface; shoulder and elbow units; terminal device according to goals",
        image: "/images/products/shoulder-disarticulation.jpg",
        anatomicalTarget: "Glenohumeral Joint & Chest",
        keyHighlights: [
          "Custom carbon thoracic chest interface",
          "Multi-axis lockable prosthetic shoulder unit",
          "Integrated powered elbow and bionic hand"
        ]
      },
      {
        category: "Forequarter",
        use: "Upper limb and part of shoulder girdle removed",
        options: "Highly individualised suspension/interface and component configuration",
        image: "/images/products/forequarter.jpg",
        anatomicalTarget: "Shoulder Girdle & Ribcage",
        keyHighlights: [
          "Anatomical contouring chest corset interface",
          "Weight-redistributing supportive suspension",
          "Customized bionic terminal configuration"
        ]
      }
    ],
    components: [
      {
        name: "Custom Socket & Chest Interface",
        description: "Anatomically contoured socket or shoulder/chest harness designed around available build space."
      },
      {
        name: "Control & Power Systems",
        description: "Passive cosmetic, body-powered harness cable, or externally powered myoelectric circuits."
      },
      {
        name: "Elbow & Wrist Units",
        description: "Mechanical or powered elbow units and rotational wrist units selected for residual limb length."
      },
      {
        name: "Terminal Devices",
        description: "Cosmetic hands, body-powered hooks, multi-articulating bionic hands, or task-specific attachments."
      }
    ],
    features: [
      "7 amputation level configurations from partial-hand to forequarter",
      "Body-powered and externally powered (myoelectric) options",
      "Task-specific attachments for occupation, sports, and hobbies",
      "Rotational wrist units and mechanical/powered elbow integration",
      "Comfort-first suspension and individualized training needs"
    ],
    specs: [
      { label: "Amputation Range", value: "Partial-Hand to Forequarter (7 Levels)" },
      { label: "Control Methods", value: "Passive, Body-Powered, Externally Powered" },
      { label: "Terminal Devices", value: "Silicone Digits, Functional Hooks, Bionic Hands" },
      { label: "Clinical Goal", value: "Appearance, stabilization, grasping & tasks" }
    ]
  },
  {
    id: "silicone",
    name: "SILICONE PROSTHESIS CATALOGUE",
    subType: "Restoring Appearance. Supporting Confidence. Improving Lives.",
    tagline: "Custom | Realistic | High Quality | Patient Focused",
    heroImage: "/images/silicone-restorations.jpg",
    description:
      "At Osteon Prosthetics & Orthotics, we provide high-quality, custom-made silicone prostheses designed to restore natural appearance, body contour and confidence after limb loss or trauma. Because every detail matters.",
    siliconeSections: [
      {
        title: "Lower Limb Silicone Prostheses",
        tagline: "Natural appearance. Better mobility. Greater confidence.",
        items: [
          {
            name: "Toe Prosthesis",
            indication: "Restores the natural look and contour of the foot.",
            image: "/images/products/silicone-toe.jpg",
            features: [
              "Single or multiple toes restoration",
              "Custom colour, pores, and nail detailing",
              "Soft, flexible, and medical-grade durable",
              "Engineered for comfortable footwear fit"
            ],
            options: ["Single Toe", "Multiple Toes", "Custom Nails"]
          },
          {
            name: "Midfoot / Partial Foot Prosthesis",
            indication: "Restores the contour and appearance of the forefoot.",
            image: "/images/products/silicone-midfoot.jpg",
            features: [
              "Transmetatarsal and partial foot loss solutions",
              "Custom anatomical shape and skin tone match",
              "Can be combined seamlessly with footwear",
              "Improves cosmetic appearance and walking balance"
            ],
            options: ["Transmetatarsal", "Footwear Accommodation"]
          },
          {
            name: "Syme's Prosthesis",
            indication: "Designed for ankle disarticulation (Syme's amputation).",
            image: "/images/products/silicone-symes.jpg",
            features: [
              "Custom socket contour and lifelike shape",
              "Realistic skin tone, veins, and texture",
              "Durable, lightweight medical silicone",
              "Compatible with standard everyday footwear"
            ],
            options: ["Front View Profile", "Side View Profile", "In-Shoe Fit"]
          }
        ]
      },
      {
        title: "Upper Limb Silicone Prostheses",
        tagline: "Restore appearance. Support function. Rebuild confidence.",
        items: [
          {
            name: "Finger Prosthesis",
            indication: "Recreates the natural look and contour of missing fingers.",
            image: "/images/products/silicone-finger.jpg",
            features: [
              "Single or multiple fingers restoration",
              "Custom skin tone, knuckle creases, and acrylic nail detailing",
              "Flexible and durable biocompatible silicone",
              "Multiple anatomical retention options"
            ],
            options: ["Single Finger", "Multiple Fingers", "Ring / Suction Retention"]
          },
          {
            name: "Partial Hand / Palm Prosthesis",
            indication: "Restores hand shape and appearance after partial hand loss.",
            image: "/images/products/silicone-palm.jpg",
            features: [
              "Custom anatomical design for individual needs",
              "Exact skin tone, epidermal texture, and vascular matching",
              "Passive cosmetic or functional stabilization options",
              "Accommodates and protects remaining fingers"
            ],
            options: ["Partial Hand Restoration", "Palm Prosthesis Base"]
          }
        ]
      },
      {
        title: "Facial Silicone Prostheses",
        tagline: "Specialist solutions for facial reconstruction.",
        items: [
          {
            name: "Nose Prosthesis",
            indication: "Natural shape and colour, lightweight and durable.",
            image: "/images/products/silicone-nose.jpg",
            features: [
              "Natural nasal shape and skin tone pigmentation matching",
              "Lightweight and durable medical-grade silicone",
              "Skin-safe adhesive or osseointegrated implant interface"
            ],
            options: ["Nasal Prosthesis", "Adhesive or Implant-Retained"]
          },
          {
            name: "Ear Prosthesis",
            indication: "Custom sculpted, realistic detail and texture.",
            image: "/images/products/silicone-ear.jpg",
            features: [
              "Custom sculpted anatomical cartilage convolutions",
              "Realistic detail, pores, and color gradient",
              "Skin-safe adhesive or implant-retained interface"
            ],
            options: ["Custom Ear Sculpt", "Skin-Safe Attachment"]
          },
          {
            name: "Facial & Orbital Prostheses",
            indication: "Specialist service restoring natural facial contours and harmony.",
            image: "/images/products/silicone-orbital.jpg",
            features: [
              "Specialist orbital and facial reconstruction",
              "Restores natural facial contours, symmetry, and balance",
              "Individually fitted with feather-thin skin-safe margins"
            ],
            options: ["Orbital Service", "Facial Harmony Restoration"]
          }
        ]
      }
    ],
    components: [
      {
        name: "Medical-Grade Biocompatible Silicone",
        description: "Durable, skin-safe, flexible silicone formulation mimicking human tissue texture."
      },
      {
        name: "Artistic Colour & Nail Matching",
        description: "Meticulous color layering to duplicate individual skin tones, veins, freckles, and nails."
      },
      {
        name: "Multiple Retention Options",
        description: "Anatomical suction, silicone rings, medical adhesives, or implant-retained fixtures."
      },
      {
        name: "4-Stage Clinical Protocol",
        description: "1. Assessment & Measurement; 2. Colour Fabrication; 3. Follow-up; 4. Cleaning & Care."
      }
    ],
    features: [
      "Medical-grade silicone with realistic skin texture",
      "Custom color matching & nail detailing",
      "Lightweight, flexible & comfortable for daily wear",
      "Breathable, durable & skin-safe hypoallergenic material",
      "Individually fitted to restore natural body contour & confidence"
    ],
    specs: [
      { label: "Material", value: "Medical-Grade Biocompatible Silicone" },
      { label: "Customization", value: "Custom Skin Tone, Texture & Nail Matching" },
      { label: "Retention", value: "Suction, Ring, Medical Adhesive, or Implant" },
      { label: "Clinical Protocol", value: "4-Stage Fitting, Care & Maintenance" }
    ]
  }
];

// ============================================================
// SECTION 3 -- ORTHOTICS DATA
// Each entry in ORTHOTIC_CATEGORIES[] powers the
// Orthotics section cards and modal.
//
//   id           -> used in routing / modal
//   title        -> full display name (e.g. "Ankle-Foot Orthoses (AFO)")
//   category     -> short uppercase label on card badge
//   tag          -> "01 / SOLUTIONS" style tag
//   image        -> card hero image (/public/images/...)
//   description  -> one-line summary shown on the card
//   items[]      -> individual orthotic products in this category
//     .name           product name
//     .description    clinical description paragraph
//     .image          product image
//     .clinicalTag    badge text
//   keyBenefit   -> highlighted bottom-line benefit sentence
// ============================================================

export interface OrthoticItem {
  name: string;
  description: string;
  image: string;
  clinicalTag?: string;
}

export interface OrthoticCategory {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  items: OrthoticItem[];
  keyBenefit: string;
}

export const ORTHOTIC_CATEGORIES: OrthoticCategory[] = [
  {
    id: "foot-orthoses-fo",
    title: "Foot Orthoses (FO)",
    category: "FOOT (FO)",
    tag: "01 / SOLUTIONS",
    image: "/images/foot-ankle-crow-walker.jpg",
    description:
      "Orthoses designed to support, align, or redistribute pressure across the foot.",
    items: [
      {
        name: "Custom foot orthoses and insoles",
        description:
          "Precision-molded total-contact foot orthoses designed to support arches, absorb shock, and optimize plantar pressure distribution.",
        image: "/images/products/orthotic-insole.jpg",
        clinicalTag: "Biomechanical Custom Insole"
      },
      {
        name: "Flat-foot and high-arch orthoses",
        description:
          "Targeted arch-correcting orthoses providing anatomical support and realignment for pes planus (flat foot) and pes cavus (high arch).",
        image: "/images/products/insole-ucbl-system.jpg",
        clinicalTag: "Arch Alignment & Strain Relief"
      },
      {
        name: "Metatarsal pads and forefoot orthoses",
        description:
          "Anatomical metatarsal domes and forefoot supports that offload pressure from painful metatarsal heads and relieve forefoot stress.",
        image: "/images/foot-ankle-crow-walker.jpg",
        clinicalTag: "Metatarsal Offloading"
      },
      {
        name: "Diabetic and pressure-relieving insoles",
        description:
          "Multi-layered, friction-reducing diabetic footbeds engineered to alleviate peak pressures and protect sensitive neuropathic skin.",
        image: "/images/products/orthotic-insole.jpg",
        clinicalTag: "Diabetic Ulcer Prevention"
      },
      {
        name: "UCBL",
        description:
          "University of California Biomechanics Laboratory deep-heel-cup orthosis providing triplanar control over the subtalar joint and foot arch.",
        image: "/images/products/orthotic-ucbl.jpg",
        clinicalTag: "Triplanar Hindfoot Control"
      }
    ],
    keyBenefit: "Even pressure redistribution, arch realignment, and plantar wound protection."
  },
  {
    id: "ankle-foot-orthoses-afo",
    title: "Ankle-Foot Orthoses (AFO)",
    category: "ANKLE-FOOT (AFO)",
    tag: "02 / SOLUTIONS",
    image: "/images/carbon-fibre-afo.jpg",
    description:
      "Support the ankle and foot and help control foot position during standing and walking.",
    items: [
      {
        name: "Solid AFO",
        description:
          "Rigid one-piece thermoplastic or carbon ankle-foot orthosis providing full ankle immobilization and maximum stability for severe foot drop.",
        image: "/images/products/orthotic-afo.jpg",
        clinicalTag: "Rigid Ankle Lock & Stability"
      },
      {
        name: "Articulated or hinged AFO",
        description:
          "Jointed ankle-foot orthosis permitting controlled, natural ankle motion while resisting unwanted plantarflexion or inversion.",
        image: "/images/carbon-fibre-afo.jpg",
        clinicalTag: "Articulated Motion Control"
      },
      {
        name: "Ground-reaction AFO",
        description:
          "Specialized anterior-shell orthosis utilizing ground reaction forces during stance phase to prevent knee buckling and assist knee extension.",
        image: "/images/carbon-fibre-afo.jpg",
        clinicalTag: "Knee Extension Ground Force"
      },
      {
        name: "Supramalleolar orthosis (SMO)",
        description:
          "Low-profile orthosis terminating just above the malleoli to stabilize the hindfoot and midfoot while allowing free ankle dorsiflexion.",
        image: "/images/products/orthotic-smo.jpg",
        clinicalTag: "Subtalar & Coronal Control"
      }
    ],
    keyBenefit: "Dynamic foot-drop clearance, gait progression, and subtalar joint stabilization."
  },
  {
    id: "knee-orthoses-ko-kafo",
    title: "Knee Orthoses (KO) and Knee-Ankle-Foot Orthoses (KAFO)",
    category: "KNEE & KAFO",
    tag: "03 / SOLUTIONS",
    image: "/images/unloader-knee-brace.jpg",
    description:
      "Support, stabilize, and align the knee joint and lower limb during standing, walking, and rehabilitation.",
    items: [
      {
        name: "Functional and ligament knee braces",
        description:
          "Rigid-frame 4-point leverage braces safeguarding ACL, PCL, and collateral ligaments against rotary instability and hyperextension.",
        image: "/images/products/orthotic-ligament-brace.jpg",
        clinicalTag: "Ligament & ACL Protection"
      },
      {
        name: "Unloader knee orthoses",
        description:
          "Clinically proven 3-point dynamic leverage braces designed to decompress affected osteoarthritic compartments and relieve chronic knee pain.",
        image: "/images/unloader-knee-brace.jpg",
        clinicalTag: "OA Joint Decompression"
      },
      {
        name: "Post-operative knee orthoses",
        description:
          "Adjustable range-of-motion (ROM) dial-lock braces providing controlled flexion/extension settings for post-surgical joint healing.",
        image: "/images/products/orthotic-rebound-brace.jpg",
        clinicalTag: "Post-Op ROM Motion Control"
      },
      {
        name: "KAFO with locking knee joint",
        description:
          "Structural knee-ankle-foot orthosis with drop-lock or pawl-lock knee hinges offering reliable stability for quadriceps weakness.",
        image: "/images/products/orthotic-kafo.jpg",
        clinicalTag: "Positive Knee Joint Lock"
      },
      {
        name: "Stance-control KAFO",
        description:
          "Advanced dynamic KAFO joint that locks securely during weight-bearing stance phase and unlocks freely during swing phase for natural walking.",
        image: "/images/lower-extremity-kafo.jpg",
        clinicalTag: "Dynamic Free-Swing Stance Control"
      }
    ],
    keyBenefit: "Joint unweighting, multi-ligament stabilization, and secure stance-phase mobility."
  },
  {
    id: "hip-orthoses-ho-hkafo",
    title: "Hip Orthoses (HO) and Hip-Knee-Ankle-Foot Orthoses (HKAFO)",
    category: "HIP & HKAFO",
    tag: "04 / SOLUTIONS",
    image: "/images/products/orthotic-hkafo.jpg",
    description:
      "Comprehensive pelvic and lower-limb stabilization to control hip movement and facilitate upright mobility.",
    items: [
      {
        name: "Hip abduction orthosis",
        description:
          "Rigid pelvic band and thigh cuff with adjustable multi-axis hip joint to prevent hip dislocation and control abduction angle post-surgery.",
        image: "/images/products/orthotic-hkafo.jpg",
        clinicalTag: "Post-Surgical Dislocation Prevention"
      },
      {
        name: "Hip stabilisation orthosis",
        description:
          "Pelvic girdle and proximal thigh orthosis offering positional stabilization, rotational control, and soft tissue compression.",
        image: "/images/products/hkafo-thkafo-system.jpg",
        clinicalTag: "Pelvic & Rotational Alignment"
      },
      {
        name: "HKAFO",
        description:
          "Full lower-limb orthotic system extending from pelvis to foot, coordinating hip, knee, and ankle joints for complex neurological conditions.",
        image: "/images/products/orthotic-hkafo.jpg",
        clinicalTag: "Full Lower-Limb Alignment"
      },
      {
        name: "Reciprocating gait orthosis (RGO)",
        description:
          "Specialized bilateral HKAFO connected by reciprocal cables that translate hip extension on one side into hip flexion on the opposite side.",
        image: "/images/products/orthotic-thkafo.jpg",
        clinicalTag: "Reciprocating Gait Coupling"
      }
    ],
    keyBenefit: "Pelvic control, dislocation protection, and reciprocal stepping for complex lower-limb needs."
  },
  {
    id: "spinal-orthoses",
    title: "Spinal Orthoses",
    category: "SPINE & SCOLIOSIS",
    tag: "05 / SOLUTIONS",
    image: "/images/boston-brace-scoliosis.jpg",
    description:
      "Spinal stabilization, immobilization, and curvature correction across cervical, thoracic, and lumbar regions.",
    items: [
      {
        name: "Cervical orthoses (CO)",
        description:
          "Precision cervical collars providing rigid immobilization for cervical spine trauma, stable fractures, and severe radiculopathy.",
        image: "/images/products/orthotic-miami-j.jpg",
        clinicalTag: "Cervical Immobilization"
      },
      {
        name: "Cervicothoracic orthoses (CTO)",
        description:
          "Extended cervical orthosis with sternal and thoracic attachments providing increased stabilization for junctional spine injuries.",
        image: "/images/cervical-miami-j-tlso.jpg",
        clinicalTag: "Cervicothoracic Junction Support"
      },
      {
        name: "Thoracolumbosacral orthoses (TLSO)",
        description:
          "Custom-molded full torso orthosis delivering rigid triplanar immobilization for fractures, spinal fusions, and post-surgical protection.",
        image: "/images/products/orthotic-miami-tlso.jpg",
        clinicalTag: "Rigid Multi-Plane Torso Lock"
      },
      {
        name: "Lumbosacral orthoses (LSO)",
        description:
          "Rigid lumbar brace providing targeted intracavitary pressure and motion restriction for lower lumbar disc injuries and spondylolisthesis.",
        image: "/images/products/miami-cervical-tlso.jpg",
        clinicalTag: "Lumbar Disc Decompression"
      },
      {
        name: "Thoracolumbar orthoses (TLO)",
        description:
          "Specialized thoracic and lumbar hyperextension brace designed to unload vertebral compression fractures and correct kyphotic posture.",
        image: "/images/products/orthotic-miami-tlso.jpg",
        clinicalTag: "Thoracolumbar Unloading"
      },
      {
        name: "Scoliosis braces",
        description:
          "Custom-fabricated 3D Boston Brace engineered to apply gentle, continuous corrective pressure to arrest spinal curvature progression during growth.",
        image: "/images/boston-brace-scoliosis.jpg",
        clinicalTag: "3D Scoliosis Curve Arrest"
      }
    ],
    keyBenefit: "Rigid spinal immobilization, fracture healing, and non-surgical 3D scoliosis correction."
  },
  {
    id: "upper-limb-orthoses",
    title: "Upper-Limb Orthoses",
    category: "UPPER LIMB",
    tag: "06 / SOLUTIONS",
    image: "/images/upper-limb-orthotics.jpg",
    description:
      "Support, immobilize, or enhance function for the shoulder, arm, wrist, and hand.",
    items: [
      {
        name: "Shoulder orthoses",
        description:
          "Supportive abduction braces and stabilizers for rotator cuff injuries, glenohumeral subluxation, and post-traumatic recovery.",
        image: "/images/products/orthotic-elbow-shoulder.jpg",
        clinicalTag: "Shoulder Subluxation & Rotator Cuff"
      },
      {
        name: "Elbow orthoses",
        description:
          "Hinged and static elbow braces providing range-of-motion restriction, tendonitis relief, and contracture management.",
        image: "/images/products/orthotic-elbow-shoulder.jpg",
        clinicalTag: "Elbow ROM Control"
      },
      {
        name: "Wrist-hand orthoses (WHO)",
        description:
          "Anatomically contoured wrist and hand orthoses stabilizing carpal joints for carpal tunnel syndrome, arthritis, and post-fracture healing.",
        image: "/images/upper-limb-orthotics.jpg",
        clinicalTag: "Carpal & Wrist Stabilization"
      },
      {
        name: "Hand orthoses",
        description:
          "Functional palmar and thumb spica splints maintaining optimal joint positioning and supporting daily gripping tasks.",
        image: "/images/products/orthotic-wrist-hand.jpg",
        clinicalTag: "Functional Palm & Thumb Positioning"
      },
      {
        name: "Finger orthoses",
        description:
          "Targeted finger splints for Boutonnière, Swan Neck deformities, mallet finger, and interphalangeal joint stabilization.",
        image: "/images/products/silicone-finger.jpg",
        clinicalTag: "Interphalangeal Correction"
      },
      {
        name: "Shoulder-elbow-wrist-hand orthoses (SEWHO)",
        description:
          "Comprehensive kinetic chain orthosis providing complete multi-joint alignment from the shoulder girdle to fingertips.",
        image: "/images/products/upper-limb-splints.jpg",
        clinicalTag: "Full Arm Kinetic Chain Support"
      },
      {
        name: "Elbow-wrist-hand orthoses (EWHO)",
        description:
          "Multi-joint arm orthosis designed for post-burn rehabilitation, severe spasticity control, and contracture prevention.",
        image: "/images/products/upper-limb-splints.jpg",
        clinicalTag: "Multi-Joint Contracture Control"
      }
    ],
    keyBenefit: "Joint stabilization, contracture prevention, and functional recovery of the upper extremity."
  }
];

// ============================================================
// SECTION 4 -- SCOLIOSIS DETAILS
// Used exclusively by the Scoliosis section (06_Scoliosis.tsx).
//
//   title            -> "BOSTON BRACE"
//   tagline          -> displayed under the title
//   description      -> main paragraph
//   features[]       -> bullet list of brace features
//   benefits[]       -> bullet list of patient benefits
//   progressionSteps[] -> 4-stage visual journey
//     .stage    "01", "02", etc.
//     .title    stage name
//     .points[] bullet points for that stage
// ============================================================

export interface ScoliosisInfo {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  progressionSteps: {
    stage: string;
    title: string;
    points: string[];
  }[];
}

export const SCOLIOSIS_DETAILS: ScoliosisInfo = {
  title: "BOSTON BRACE",
  tagline: "GUIDING THE SPINE. PROTECTING THE FUTURE.",
  description:
    "The Boston Brace is a custom-made spinal orthosis designed to support and stabilize the spine in individuals diagnosed with scoliosis. Carefully fitted to each patient's body, it applies precise corrective pressure to prevent the spinal curve from progressing during growth. It is worn discreetly under clothing, allowing patients to continue their daily routines with confidence.",
  features: [
    "Lightweight, durable medical-grade material",
    "Custom-fabricated for precise fit and effectiveness",
    "Low-profile design for discreet wear under clothing",
    "Adjustable for growth and long-term use",
    "Easy to wear and remove"
  ],
  benefits: [
    "Controls and prevents worsening of spinal curvature",
    "Supports healthy spinal alignment during growth",
    "Reduces the need for surgical intervention",
    "Promotes balanced posture and physical stability",
    "Enables safe, active, and independent daily life"
  ],
  progressionSteps: [
    {
      stage: "01",
      title: "Scoliosis",
      points: [
        "Abnormal S-shaped curvature of the spine.",
        "Causes back pain, uneven shoulders and hips.",
        "Imaging confirms scoliosis diagnosis."
      ]
    },
    {
      stage: "02",
      title: "Scoliosis Brace",
      points: [
        "Custom-fitted rigid brace is applied.",
        "Brace corrects spinal curvature over time.",
        "Brace worn for most of the day, as prescribed."
      ]
    },
    {
      stage: "03",
      title: "Improving",
      points: [
        "Regular brace wear gradually reduces spinal curve.",
        "Spine begins to straighten with brace support.",
        "Follow-up visits to monitor progress."
      ]
    },
    {
      stage: "04",
      title: "Healthy",
      points: [
        "Spine is corrected to a normal, straight alignment.",
        "Brace is no longer needed as spine is stable.",
        "Regular check-ups ensure long-term results."
      ]
    }
  ]
};

// ============================================================
// SECTION 5 -- PEDIATRIC SOLUTIONS
// Used by the Osteon Kids section (07_OsteonKids.tsx).
// Each card represents one pediatric device/programme.
//
//   id          -> routing key
//   title       -> device name (ALL CAPS)
//   subtitle    -> optional extra line (e.g. DDH note)
//   tagline     -> short descriptor
//   description -> one-paragraph summary
//   image       -> card image (/public/images/...)
// ============================================================

export interface PediatricSolution {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  description: string;
  image: string;
}

export const PEDIATRIC_SOLUTIONS: PediatricSolution[] = [
  {
    id: "cranial-orthoses",
    title: "CRANIAL ORTHOSES",
    tagline: "Early Head Shape Guidance",
    description:
      "Custom-made helmets designed to guide head shape safely and comfortably during early development.",
    image: "/images/pediatric-cranial-helmet.jpg"
  },
  {
    id: "pavlik-harness",
    title: "PAVLIK HARNESS",
    subtitle: "For Developmental Dysplasia of the Hip (DDH)",
    tagline: "Infant Hip Development Support",
    description:
      "Supports proper hip positioning to aid healthy hip development in infants.",
    image: "/images/pediatric-pavlik-harness.jpg"
  },
  {
    id: "denis-browne",
    title: "DENIS BROWNE SPLINT",
    tagline: "Foot & Leg Alignment Support",
    description:
      "Helps maintain corrected foot and leg alignment during early growth stages.",
    image: "/images/brochure/page_19_img_1_59.jpeg"
  },
  {
    id: "hip-abduction",
    title: "HIP ABDUCTION BRACE",
    tagline: "Stable Hip Positioning",
    description:
      "Hip abduction braces provide stable hip support for safe positioning and improved comfort.",
    image: "/images/brochure/page_19_img_1_59.jpeg"
  },
  {
    id: "night-splints",
    title: "NIGHT SPLINTS",
    tagline: "Nocturnal Flexibility & Alignment",
    description:
      "Supports correct positioning during sleep to improve flexibility and alignment.",
    image: "/images/brochure/page_19_img_1_59.jpeg"
  }
];

// ============================================================
// SECTION 6 -- CARE COMMITMENTS
// Used in the "Why patients trust us" carousel/panel.
// Each card is a commitment pillar with a quote + description.
//
//   id          -> key
//   title       -> heading (e.g. "WHY PATIENTS TRUST US")
//   subtitle    -> sub-heading
//   quote       -> large italic pull-quote
//   description -> supporting paragraph
//   image       -> background or side image
// ============================================================

export interface CareCommitment {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  image: string;
}

export const CARE_COMMITMENTS: CareCommitment[] = [
  {
    id: "trust-care",
    title: "WHY PATIENTS TRUST US",
    subtitle: "Care That Goes Beyond the Device",
    quote:
      "At Osteon, trust is built through understanding, listening, and ongoing support. We take the time to know each patient's challenges, goals, and daily realities before designing a solution.",
    description:
      "What we deliver is not just a device, but lasting comfort, reliable performance, and renewed confidence to move freely. By standing beside our patients at every step, we help them achieve independence and a better quality of life today and in the years ahead.",
    image: "/images/brochure/page_3_img_1_24.jpeg"
  },
  {
    id: "lifelong-care",
    title: "LIFELONG SUPPORT",
    subtitle: "Ongoing Care & Device Evolution",
    quote:
      "Your needs evolve over time, and your device should evolve with you. Through regular check-ups, we fine-tune the fit, alignment, and comfort to ensure optimal performance as your body adapts.",
    description:
      "Our dedicated service team is always available to provide adjustments, upgrades, and repairs, minimizing downtime and maximizing reliability. At Osteon, our commitment goes beyond delivery. We stand by you throughout your journey, every step of the way.",
    image: "/images/brochure/page_4_img_1_26.jpeg"
  },
  {
    id: "value-care",
    title: "VALUE-BASED CARE",
    subtitle: "Empowering Patients with Lasting Quality",
    quote:
      "We are committed to providing the right solution at the right cost without compromising quality or outcomes. Every recommendation is made with careful consideration of effectiveness, comfort, durability, and long-term sustainability.",
    description:
      "Our goal is to deliver solutions that are not only clinically sound, but also practical, affordable, and built to reliably support you for years to come.",
    image: "/images/brochure/page_5_img_1_28.jpeg"
  }
];

// ============================================================
// SECTION 7 -- TRUST PILLARS
// The 4 numbered value cards shown in the Trust & Credibility
// section (10_TrustCredibility.tsx).
//
//   id          -> key
//   number      -> "01", "02", "03", "04"
//   title       -> pillar name (ALL CAPS)
//   description -> 2-3 sentence description
// ============================================================

export interface TrustPillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "clinical-expertise",
    number: "01",
    title: "CLINICAL EXPERTISE",
    description:
      "Combining medical expertise with innovative technology to design prosthetic and orthotic solutions that feel natural, comfortable, and precisely tailored to each individual."
  },
  {
    id: "patient-centered",
    number: "02",
    title: "PATIENT-CENTERED CARE",
    description:
      "We take the time to know each patient's challenges, goals, and daily realities before designing a solution, offering personalized guidance and compassionate care."
  },
  {
    id: "value-based",
    number: "03",
    title: "VALUE-BASED CARE",
    description:
      "Providing the right solution at the right cost without compromising quality, durability, or clinical outcomes for long-term sustainability."
  },
  {
    id: "lifelong-support",
    number: "04",
    title: "LIFELONG SUPPORT",
    description:
      "Dedicated service team providing regular check-ups, fit and alignment fine-tuning, adjustments, upgrades, and repairs throughout your journey."
  }
];

// ============================================================
// SECTION 8 -- CLINICAL PROCESS STEPS
// The 5-step animated timeline in the Patient Journey section
// (08_PatientJourney.tsx). Each step is one stage card.
//
//   step        -> "01" to "05"
//   title       -> stage name (ALL CAPS)
//   subtitle    -> secondary heading
//   tag         -> small pill label (e.g. "Intake & Evaluation")
//   badge       -> "STAGE 01 - CLINICAL INTAKE" style label
//   image       -> side image (/public/images/...)
//   description -> paragraph
//   highlights[] -> 3 bullet points
//   metric      -> { label, value } stat shown as a badge
// ============================================================

export interface ClinicalProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  badge?: string;
  image?: string;
  highlights?: string[];
  metric?: { label: string; value: string };
}

export const CLINICAL_PROCESS_STEPS: ClinicalProcessStep[] = [
  {
    step: "01",
    title: "UNDERSTANDING & LISTENING",
    subtitle: "Care That Goes Beyond the Device",
    tag: "Intake & Evaluation",
    badge: "STAGE 01 • CLINICAL INTAKE",
    image: "/images/about-clinician-hero.jpg",
    description:
      "We take the time to know each patient's challenges, goals, daily realities, and emotional journey before designing a solution, offering compassionate guidance.",
    highlights: [
      "In-depth lifestyle and mobility goal assessment",
      "Compassionate patient & family counseling",
      "Zero-rush consultation focused on your daily routine"
    ],
    metric: { label: "Patient Focus", value: "100% Tailored" }
  },
  {
    step: "02",
    title: "INDIVIDUAL ASSESSMENT",
    subtitle: "Medical Expertise & Evaluation",
    tag: "Biomechanical Analysis",
    badge: "STAGE 02 • BIOMECHANICAL EVALUATION",
    image: "/images/process-step-2.jpg",
    description:
      "Evaluating individual anatomy, residual limb morphology, and functional needs to plan solutions precisely tailored to each individual patient of any age.",
    highlights: [
      "Precision 3D anatomical and residual limb mapping",
      "Biomechanical motion and gait kinematics analysis",
      "Custom component selection matched to mobility grade"
    ],
    metric: { label: "Measurement Tolerance", value: "Sub-Millimeter" }
  },
  {
    step: "03",
    title: "PRECISE TAILORING & DESIGN",
    subtitle: "Innovative Technology & Materials",
    tag: "Custom Fabrication",
    badge: "STAGE 03 • COMPOSITE CRAFTSMANSHIP",
    image: "/images/process-step-3.jpg",
    description:
      "Crafting custom carbon fibre sockets, custom-molded interfaces, and specialized braces using high-performance, medical-grade materials and aerospace-grade layups.",
    highlights: [
      "Aerospace-grade lightweight carbon fibre socket layup",
      "Skin-protective, washable medical liner interfaces",
      "Dynamic pylon alignment and stress distribution"
    ],
    metric: { label: "Socket Material", value: "Carbon Matrix" }
  },
  {
    step: "04",
    title: "FITTING & COMFORT TUNING",
    subtitle: "Optimal Alignment & Performance",
    tag: "Gait Alignment",
    badge: "STAGE 04 • DYNAMIC TUNING",
    image: "/images/process-step-4.jpg",
    description:
      "Carefully fitting each device to ensure it feels natural, provides lasting comfort, eliminates pressure hotspots, and restores complete freedom of movement.",
    highlights: [
      "Dynamic trial walking and real-time pressure relief",
      "Micro-alignment adjustments for symmetrical gait cadence",
      "Secure zero-slip suspension calibration"
    ],
    metric: { label: "Fit Precision", value: "Zero Hotspots" }
  },
  {
    step: "05",
    title: "LIFELONG SUPPORT & ONGOING CARE",
    subtitle: "Adjustments, Upgrades & Repairs",
    tag: "Continuous Care",
    badge: "STAGE 05 • LIFELONG PARTNERSHIP",
    image: "/images/process-step-5.jpg",
    description:
      "Regular check-ups to fine-tune fit, alignment, and comfort as your body adapts over time, with dedicated service minimizing downtime and maximizing mobility.",
    highlights: [
      "Scheduled preventative bi-annual clinical check-ups",
      "Rapid socket relining, component tune-ups & repairs",
      "Continuous access to next-generation prosthetic upgrades"
    ],
    metric: { label: "Clinical Commitment", value: "Lifetime Support" }
  }
];
