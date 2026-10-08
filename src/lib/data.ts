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

export interface ProstheticCategory {
  id: string;
  name: string;
  subType: string;
  tagline: string;
  heroImage: string;
  description: string;
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
    name: "LOWER EXTREMITY",
    subType: "Transtibial (TT) & Transfemoral (TF)",
    tagline: "Below-Knee & Above-Knee Prosthetic Systems",
    heroImage: "/images/socket-engineering.jpg",
    description:
      "Custom-designed lower extremity prosthetics engineered with carbon fibre sockets, advanced suspension systems, rigid pylon shafts, and energy-returning feet to restore stability, natural walking patterns, and daily independence.",
    components: [
      {
        name: "Custom-Made Carbon Fibre Socket",
        description: "Grips the residual limb, redistributes load, and provides a base for component attachment."
      },
      {
        name: "Removable, Washable Inner Liner",
        description: "Acts as an interface and protects the residual limb and skin."
      },
      {
        name: "Pin-Lock & Vacuum Suspension",
        description: "Advanced suspension systems that securely attach the prosthesis to the residual limb."
      },
      {
        name: "Prosthetic Knee Joint",
        description: "Replaces knee function by providing mobility and safety according to user requirements."
      },
      {
        name: "Pylon Tube",
        description: "Acts as a rigid, load-bearing shaft between the socket and the foot to support walking."
      },
      {
        name: "Prosthetic Foot",
        description: "Provides a base of support while standing. Absorbs shock, returns energy, and allows a natural walking pattern."
      },
      {
        name: "Functional Adaptors",
        description: "Assist in daily life activities, such as cross-legged sitting."
      }
    ],
    features: [
      "Custom carbon fibre socket fabrication",
      "Removable washable skin-protecting inner liner",
      "Pin-lock and vacuum-based suspension options",
      "Energy-absorbing dynamic prosthetic foot",
      "Functional adaptors for cross-legged sitting"
    ],
    specs: [
      { label: "Socket Material", value: "Custom-made carbon fibre" },
      { label: "Suspension", value: "Pin-lock / Vacuum system" },
      { label: "Limb Levels", value: "Below-Knee (TT) & Above-Knee (TF)" },
      { label: "Interface", value: "Washable protective liner" }
    ]
  },
  {
    id: "upper-extremity",
    name: "UPPER EXTREMITY",
    subType: "Transradial (TR) & Transhumeral (TH)",
    tagline: "Below-Elbow & Above-Elbow Prosthetic Systems",
    heroImage: "/images/bionic-arm-prosthesis.jpg",
    description:
      "Upper extremity prosthetic solutions ranging from myoelectric below-elbow devices to coordinated above-elbow bionic systems equipped with muscle-signal electrodes, electric motors, friction wrists, and functional grasping terminal devices.",
    components: [
      {
        name: "Electrode Sensors",
        description: "Sensors that capture muscle signals to trigger mechanical motion."
      },
      {
        name: "Custom-Molded Socket",
        description: "The custom-molded interface engineered for a secure and comfortable fit."
      },
      {
        name: "Electric Motor & Circuits",
        description: "The power source and electronic system coordinating elbow and hand movement."
      },
      {
        name: "Friction Wrist",
        description: "Enables rotation to position the hand for specific daily tasks."
      },
      {
        name: "Bionic Hand / Terminal Device",
        description: "The functional device designed for grasping, manipulating, and holding objects."
      },
      {
        name: "Protective Shell",
        description: "A durable protective outer layer housing internal electronics."
      },
      {
        name: "Battery System",
        description: "Provides reliable power for all-day daily performance."
      }
    ],
    features: [
      "Muscle-signal capturing electrodes",
      "Custom-molded secure socket interface",
      "Coordinated elbow and hand electronic circuit",
      "Rotational friction wrist positioning",
      "Functional bionic grasping terminal device"
    ],
    specs: [
      { label: "Control System", value: "Myoelectric electrode sensors" },
      { label: "Socket Fit", value: "Custom-molded interface" },
      { label: "Limb Levels", value: "Below-Elbow (TR) & Above-Elbow (TH)" },
      { label: "Terminal Device", value: "Functional bionic hand unit" }
    ]
  },
  {
    id: "silicone",
    name: "SILICONE PROSTHETICS",
    subType: "Aesthetic & Anatomical Restoration",
    tagline: "Lifelike Facial & Extremity Restorations",
    heroImage: "/images/silicone-restorations.jpg",
    description:
      "Custom-made medical silicone restorations meticulously crafted to match natural skin tone, facial harmony, and anatomical contours for the nose, ear, arm, feet, and fingers.",
    components: [
      {
        name: "Silicone Nose",
        description: "Restores natural shape and facial harmony. Custom-made for a lifelike look and comfortable fit."
      },
      {
        name: "Silicone Ear",
        description: "Recreates natural contours and skin tone. Designed for realism, comfort, and secure wear."
      },
      {
        name: "Silicone Arm",
        description: "Provides a natural appearance with smooth skin texture. Crafted for comfort, confidence, and daily use."
      },
      {
        name: "Silicone Feet",
        description: "Restores shape and balance with a realistic finish. Designed for comfort, stability, and natural movement."
      },
      {
        name: "Silicone Finger",
        description: "Custom-made to match natural skin tone and texture. Restores appearance and confidence with a comfortable fit."
      }
    ],
    features: [
      "Custom matched to natural skin tone and texture",
      "Restores natural contours, facial harmony, and balance",
      "Smooth skin texture designed for daily confidence",
      "Secure, comfortable fit across all restorations"
    ],
    specs: [
      { label: "Material", value: "Medical-grade silicone" },
      { label: "Matching", value: "Custom natural skin tone & texture" },
      { label: "Restorations", value: "Nose, Ear, Arm, Feet, Finger" },
      { label: "Wear Type", value: "Comfortable, secure daily wear" }
    ]
  }
];

export interface OrthoticCategory {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  items: {
    name: string;
    description: string;
  }[];
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
        description: "Provides a dynamic response aiding natural movement patterns and reducing effort in daily routines."
      },
      {
        name: "Lightweight & Long-Term Reliability",
        description: "Lightweight construction ensures the device remains reliable over the long term."
      },
      {
        name: "Complex Conditions Support",
        description: "Suitable for individuals with lower-limb conditions involving the nervous system, muscles, or complex medical challenges."
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
        description: "Supports the ankle and foot to improve walking stability. Helps manage foot drop and promote smoother movement."
      },
      {
        name: "KAFO (Knee-Ankle-Foot Orthosis)",
        description: "Provides support to the knee, ankle, and foot for better control and balance. Helps reduce knee instability during walking."
      },
      {
        name: "HKAFO (Hip-Knee-Ankle-Foot Orthosis)",
        description: "Supports the hip, knee, ankle, and foot for improved posture and mobility. Offers stronger stability for complex conditions."
      },
      {
        name: "THKAFO (Trunk-Hip-Knee-Ankle-Foot Orthosis)",
        description: "Provides full lower-limb and trunk support for maximum stability, improving standing balance and assisted walking."
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
        description: "Provides cushioned support and helps distribute pressure evenly across the foot, reducing strain during daily activities."
      },
      {
        name: "University of California Biomechanics Laboratory (UCBL)",
        description: "Controls foot alignment and provides strong arch and heel support, improving stability and reducing inward rolling."
      },
      {
        name: "Supramalleolar Orthosis (SMO)",
        description: "Provides gentle ankle support while improving foot positioning and balance. Lightweight and ideal for walking control."
      },
      {
        name: "Charcot Restraint Orthotic Walker (CROW)",
        description: "Offers maximum support and protection for the foot and ankle, reducing pressure and helping in safe healing."
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
        description: "Uses dual Dynamic Force Straps (DFS) with a 3-Point Leverage System to reduce pressure on sensitive bony surfaces and relieve pain."
      },
      {
        name: "OA (Osteoarthritis) Brace",
        description: "Reduces pressure on the affected side of the knee and helps ease pain while walking."
      },
      {
        name: "ACL Brace",
        description: "Provides support for the knee after injury or surgery, improving stability and protecting the joint."
      },
      {
        name: "PCL Brace",
        description: "Supports the knee and helps control backward movement of the tibia, promoting safer walking and recovery."
      },
      {
        name: "Össur Rebound Rehabilitative Braces",
        description: "Premium-quality post-operative knee and elbow braces engineered to be durable, versatile, adjustable, and easy to apply."
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
        description: "Supports injured or weak fingers and helps maintain proper alignment."
      },
      {
        name: "Cock-up Splint",
        description: "Provides support and positioning to improve hand function and comfort."
      },
      {
        name: "Wrist & Hand Orthoses (WHO)",
        description: "Stabilizes the wrist and hand to reduce pain and improve control."
      },
      {
        name: "Thumb Orthoses",
        description: "Supports the thumb joint and reduces pain during gripping and pinching."
      },
      {
        name: "Elbow Orthoses",
        description: "Provides support and controlled movement for the elbow joint."
      },
      {
        name: "Shoulder Orthoses",
        description: "Stabilizes the shoulder and supports proper positioning."
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
        description: "Scientifically designed for superior cervical immobilization for post-trauma, stable fractures, and spondylosis."
      },
      {
        name: "Philadelphia Collars",
        description: "Tracheotomy and adjustable collars for post-trauma, herniated cervical discs, and post-operative immobilization."
      },
      {
        name: "Miami Lumbar Posteo",
        description: "Relieves back pain caused by stable vertebral compression fractures (VCF)."
      },
      {
        name: "Miami JTO Thoracic Extension",
        description: "Provides increased stability over collar alone for lower and upper cervical spine disruptions."
      },
      {
        name: "Miami TLSO 456 & 464",
        description: "Lumbar belt with added rigid panels and TLSO attachment for post-surgical immobilization, herniated discs, and compression fractures."
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
