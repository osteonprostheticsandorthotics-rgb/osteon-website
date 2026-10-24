/**
 * OSTEON PROSTHETICS AND ORTHOTICS — OFFICIAL VERIFIED BROCHURE DATA
 * Source of Truth: osteon.pdf (Official Company Brochure)
 * STRICT NO-FABRICATION RULE: All content is extracted directly from the verified brochure.
 */

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
    email: "support@osteonprosthetics.com",
    website: "www.osteonprosthetics.com"
  }
};

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
    id: "premium-carbon-fibre",
    title: "PREMIUM CARBON FIBRE ORTHOTICS",
    category: "CARBON FIBRE",
    tag: "01 / SOLUTIONS",
    image: "/images/carbon-fibre-afo.jpg",
    description:
      "Premium carbon fibre orthotics engineered with high-performance carbon fibre, providing superior strength, elasticity, and energy return. They enhance stability, alignment, and overall mobility with a dynamic response that aids natural movement patterns.",
    items: [
      {
        name: "Dynamic Energy Return",
        description: "Provides a dynamic response aiding natural movement patterns and reducing effort in daily routines.",
        image: "/images/carbon-fibre-afo.jpg",
        clinicalTag: "Dynamic Gait Response"
      },
      {
        name: "Lightweight & Long-Term Reliability",
        description: "Lightweight construction ensures the device remains reliable over the long term.",
        image: "/images/tech-composite-matrix.jpg",
        clinicalTag: "Composite Durability"
      },
      {
        name: "Complex Conditions Support",
        description: "Suitable for individuals with lower-limb conditions involving the nervous system, muscles, or complex medical challenges.",
        image: "/images/lower-extremity-kafo.jpg",
        clinicalTag: "Neurological Stability"
      }
    ],
    keyBenefit: "Superior strength, elasticity, and energy return for efficient gait and independence."
  },
  {
    id: "lower-extremity-supports",
    title: "LOWER EXTREMITY ORTHOTICS & SUPPORTS",
    category: "LOWER LIMB",
    tag: "02 / SOLUTIONS",
    image: "/images/lower-extremity-kafo.jpg",
    description:
      "Supportive leg braces designed to provide stability and proper alignment, helping people move safely, making walking and standing more comfortable, and giving greater confidence.",
    items: [
      {
        name: "AFO (Ankle-Foot Orthosis)",
        description: "Supports the ankle and foot to improve walking stability. Helps manage foot drop and promote smoother movement.",
        image: "/images/products/orthotic-afo.jpg",
        clinicalTag: "Foot Drop & Gait Stability"
      },
      {
        name: "KAFO (Knee-Ankle-Foot Orthosis)",
        description: "Provides support to the knee, ankle, and foot for better control and balance. Helps reduce knee instability during walking.",
        image: "/images/products/orthotic-kafo.jpg",
        clinicalTag: "Knee Stance Control"
      },
      {
        name: "HKAFO (Hip-Knee-Ankle-Foot Orthosis)",
        description: "Supports the hip, knee, ankle, and foot for improved posture and mobility. Offers stronger stability for complex conditions.",
        image: "/images/products/orthotic-hkafo.jpg",
        clinicalTag: "Pelvic & Hip Alignment"
      },
      {
        name: "THKAFO (Trunk-Hip-Knee-Ankle-Foot Orthosis)",
        description: "Provides full lower-limb and trunk support for maximum stability, improving standing balance and assisted walking.",
        image: "/images/products/orthotic-thkafo.jpg",
        clinicalTag: "Full Trunk Stability"
      }
    ],
    keyBenefit: "Comprehensive lower-limb stability and alignment from foot to trunk."
  },
  {
    id: "foot-ankle",
    title: "FOOT & ANKLE ORTHOTICS",
    category: "FOOT & ANKLE",
    tag: "03 / SOLUTIONS",
    image: "/images/foot-ankle-crow-walker.jpg",
    description:
      "Foot and ankle orthotics designed to improve support, alignment, and stability during walking and standing, reducing pain and making daily movement more comfortable.",
    items: [
      {
        name: "Insole",
        description: "Provides cushioned support and helps distribute pressure evenly across the foot, reducing strain during daily activities.",
        image: "/images/products/orthotic-insole.jpg",
        clinicalTag: "Plantar Pressure Offload"
      },
      {
        name: "University of California Biomechanics Laboratory (UCBL)",
        description: "Controls foot alignment and provides strong arch and heel support, improving stability and reducing inward rolling.",
        image: "/images/products/orthotic-ucbl.jpg",
        clinicalTag: "Deep Heel-Cup Triplanar Control"
      },
      {
        name: "Supramalleolar Orthosis (SMO)",
        description: "Provides gentle ankle support while improving foot positioning and balance. Lightweight and ideal for walking control.",
        image: "/images/products/orthotic-smo.jpg",
        clinicalTag: "Coronal Plane Balance"
      },
      {
        name: "Charcot Restraint Orthotic Walker (CROW)",
        description: "Offers maximum support and protection for the foot and ankle, reducing pressure and helping in safe healing.",
        image: "/images/products/orthotic-crow.jpg",
        clinicalTag: "Complete Neuropathic Offloading"
      }
    ],
    keyBenefit: "Even pressure distribution, arch support, and safe healing protection."
  },
  {
    id: "knee-braces",
    title: "KNEE BRACES & UNLOADER ONE",
    category: "KNEE",
    tag: "04 / SOLUTIONS",
    image: "/images/unloader-knee-brace.jpg",
    description:
      "Comprehensive knee solutions including the clinically proven Unloader One OA knee brace using dual Dynamic Force Straps (DFS) with 3-Point Leverage System, ACL/PCL ligament braces, and Össur Rebound rehabilitative braces.",
    items: [
      {
        name: "Unloader One OA Knee Brace",
        description: "Uses dual Dynamic Force Straps (DFS) with a 3-Point Leverage System to reduce pressure on sensitive bony surfaces and relieve pain.",
        image: "/images/products/orthotic-unloader-one.jpg",
        clinicalTag: "Dual DFS 3-Point Leverage"
      },
      {
        name: "OA (Osteoarthritis) Brace",
        description: "Reduces pressure on the affected side of the knee and helps ease pain while walking.",
        image: "/images/unloader-knee-brace.jpg",
        clinicalTag: "Unicompartmental Decompression"
      },
      {
        name: "ACL Brace",
        description: "Provides support for the knee after injury or surgery, improving stability and protecting the joint.",
        image: "/images/products/orthotic-ligament-brace.jpg",
        clinicalTag: "Anterior Cruciate Protection"
      },
      {
        name: "PCL Brace",
        description: "Supports the knee and helps control backward movement of the tibia, promoting safer walking and recovery.",
        image: "/images/products/ligament-rebound-system.jpg",
        clinicalTag: "Posterior Drawer Control"
      },
      {
        name: "Össur Rebound Rehabilitative Braces",
        description: "Premium-quality post-operative knee and elbow braces engineered to be durable, versatile, adjustable, and easy to apply.",
        image: "/images/products/orthotic-rebound-brace.jpg",
        clinicalTag: "Post-Op Motion Control"
      }
    ],
    keyBenefit: "Clinically proven 3-point leverage joint decompression and ligament stabilization."
  },
  {
    id: "upper-extremity-orthotics",
    title: "UPPER EXTREMITY ORTHOTICS",
    category: "UPPER LIMB",
    tag: "05 / SOLUTIONS",
    image: "/images/upper-limb-orthotics.jpg",
    description:
      "Support for hand, wrist, elbow, and shoulder to improve function, reduce pain, stabilize joints, improve movement control, and support recovery in daily activities.",
    items: [
      {
        name: "Finger Orthoses",
        description: "Supports injured or weak fingers and helps maintain proper alignment.",
        image: "/images/products/silicone-finger.jpg",
        clinicalTag: "Phalangeal Alignment"
      },
      {
        name: "Cock-up Splint",
        description: "Provides support and positioning to improve hand function and comfort.",
        image: "/images/products/orthotic-wrist-hand.jpg",
        clinicalTag: "Functional Wrist Positioning"
      },
      {
        name: "Wrist & Hand Orthoses (WHO)",
        description: "Stabilizes the wrist and hand to reduce pain and improve control.",
        image: "/images/upper-limb-orthotics.jpg",
        clinicalTag: "Carpal & Palmar Stabilization"
      },
      {
        name: "Thumb Orthoses",
        description: "Supports the thumb joint and reduces pain during gripping and pinching.",
        image: "/images/products/orthotic-wrist-hand.jpg",
        clinicalTag: "CMC & MCP Joint Relief"
      },
      {
        name: "Elbow Orthoses",
        description: "Provides support and controlled movement for the elbow joint.",
        image: "/images/products/orthotic-elbow-shoulder.jpg",
        clinicalTag: "Range-of-Motion Control"
      },
      {
        name: "Shoulder Orthoses",
        description: "Stabilizes the shoulder and supports proper positioning.",
        image: "/images/products/orthotic-elbow-shoulder.jpg",
        clinicalTag: "Glenohumeral Subluxation Support"
      }
    ],
    keyBenefit: "Joint stabilization, positioning, and functional grip assistance."
  },
  {
    id: "cervical-spine-supports",
    title: "BACK, NECK & CERVICAL SUPPORTS",
    category: "SPINE & CERVICAL",
    tag: "06 / SOLUTIONS",
    image: "/images/cervical-miami-j-tlso.jpg",
    description:
      "Advanced back, neck, and cervical support technologies including Miami J Cervical Collars, Philadelphia collars, Miami Lumbar Posteo, Miami JTO Thoracic Extensions, and Miami TLSO 456/464 systems.",
    items: [
      {
        name: "Miami J Cervical Collar & Miami J Select",
        description: "Scientifically designed for superior cervical immobilization for post-trauma, stable fractures, and spondylosis.",
        image: "/images/products/orthotic-miami-j.jpg",
        clinicalTag: "Bioengineered Cervical Immobilization"
      },
      {
        name: "Philadelphia Collars",
        description: "Tracheotomy and adjustable collars for post-trauma, herniated cervical discs, and post-operative immobilization.",
        image: "/images/cervical-miami-j-tlso.jpg",
        clinicalTag: "Tracheotomy & Disc Decompression"
      },
      {
        name: "Miami Lumbar Posteo",
        description: "Relieves back pain caused by stable vertebral compression fractures (VCF).",
        image: "/images/products/miami-cervical-tlso.jpg",
        clinicalTag: "Vertebral Compression Relief"
      },
      {
        name: "Miami JTO Thoracic Extension",
        description: "Provides increased stability over collar alone for lower and upper cervical spine disruptions.",
        image: "/images/products/orthotic-miami-j.jpg",
        clinicalTag: "Cervicothoracic Joint Extension"
      },
      {
        name: "Miami TLSO 456 & 464",
        description: "Lumbar belt with added rigid panels and TLSO attachment for post-surgical immobilization, herniated discs, and compression fractures.",
        image: "/images/products/orthotic-miami-tlso.jpg",
        clinicalTag: "Rigid Multi-Plane Spinal Lock"
      }
    ],
    keyBenefit: "Superior scientific cervical immobilization and rigid spinal stabilization."
  }
];

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
    image: "/images/tech-gait-kinematics.jpg",
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
    image: "/images/socket-engineering.jpg",
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
    image: "/images/prosthetics-lower.jpg",
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
    image: "/images/about-runner-hero.jpg",
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
