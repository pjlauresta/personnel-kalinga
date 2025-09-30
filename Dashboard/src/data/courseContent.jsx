// src/data/courseContent.js
const courseContent = {
  "1": {
    title: "Professional Development Training Certificate (PDTC)",
    sections: [
      "Introduction to Professional Development",
      "Workplace Communication",
      "Time Management Strategies",
      "Networking and Career Growth",
      "Workplace Ethics and Standards",
      "Practical Exercises",
    ],
    assessments: {
      pretest: [
        { q: "What is professional development?", options: ["One-time seminar", "Lifelong learning process", "School subject", "Government requirement"], answer: 1 },
        { q: "Which is a soft skill?", options: ["Welding", "Time management", "Coding", "Driving"], answer: 1 },
        { q: "Professional growth requires?", options: ["Continuous learning", "No effort", "Luck", "Skipping training"], answer: 0 },
        { q: "Networking means?", options: ["Building professional ties", "Playing online", "Cooking events", "Driving"], answer: 0 },
        { q: "Workplace ethics are?", options: ["Rules guiding behavior", "Optional habits", "Random acts", "Ignoring policies"], answer: 0 },
      ],
      quiz: [
        { q: "Time management helps in?", options: ["Wasting time", "Productivity", "Confusion", "Isolation"], answer: 1 },
        { q: "Effective communication avoids?", options: ["Clarity", "Confusion", "Teamwork", "Progress"], answer: 1 },
        { q: "Networking builds?", options: ["Hobbies", "Professional relationships", "Silence", "Games"], answer: 1 },
        { q: "Career growth involves?", options: ["Continuous learning", "Sleeping", "Isolation", "Procrastination"], answer: 0 },
        { q: "Workplace ethics support?", options: ["Trust", "Cheating", "Laziness", "Ignoring"], answer: 0 },
      ],
      final: [
        { q: "Professional development importance?", options: ["Growth & improvement", "Wasting time", "No benefits", "Only for students"], answer: 0 },
        { q: "Ethics guide?", options: ["Behavior", "Cooking", "Sleeping", "Driving"], answer: 0 },
        { q: "Communication increases?", options: ["Productivity", "Isolation", "Confusion", "Silence"], answer: 0 },
        { q: "Networking is key for?", options: ["Relationships", "Entertainment", "Driving", "Random acts"], answer: 0 },
        { q: "Time management improves?", options: ["Efficiency", "Wasting", "Confusion", "Stress"], answer: 0 },
      ],
    },
  },

  "2": {
    title: "Emergency Management Certificate Program",
    sections: [
      "Disaster Risk Reduction Management",
      "Crisis Communication",
      "Emergency Planning",
      "Disaster Simulation",
      "Recovery and Resilience",
      "Capstone Project",
    ],
    assessments: {
      pretest: [
        { q: "Emergency management involves?", options: ["Preparedness", "Ignoring risks", "Relaxation", "None"], answer: 0 },
        { q: "Crisis communication is for?", options: ["Misinformation", "Clear messaging", "Silence", "Rumors"], answer: 1 },
        { q: "Planning prevents?", options: ["Chaos", "Order", "Safety", "Calm"], answer: 0 },
        { q: "Resilience means?", options: ["Recovering quickly", "Giving up", "Weakness", "Ignoring"], answer: 0 },
        { q: "Simulations help?", options: ["Practice", "Confusion", "Wasting time", "None"], answer: 0 },
      ],
      quiz: [
        { q: "Disaster planning includes?", options: ["Risk assessment", "Ignoring risks", "Chaos", "Rumors"], answer: 0 },
        { q: "Crisis comms ensure?", options: ["Clear info", "Rumors", "Confusion", "None"], answer: 0 },
        { q: "Recovery ensures?", options: ["Normalcy", "Permanent damage", "Chaos", "Weakness"], answer: 0 },
        { q: "Simulation is?", options: ["Practice drill", "Game", "Ignore risks", "Sleep"], answer: 0 },
        { q: "Preparedness is?", options: ["Being ready", "Ignoring", "Confused", "Lazy"], answer: 0 },
      ],
      final: [
        { q: "Emergency management is?", options: ["Process of safety planning", "Ignoring disasters", "Rumors", "Chaos"], answer: 0 },
        { q: "Resilience helps?", options: ["Recovery", "Failure", "Weakness", "Chaos"], answer: 0 },
        { q: "Planning avoids?", options: ["Confusion", "Safety", "Calm", "Clarity"], answer: 0 },
        { q: "Simulations prepare?", options: ["Responders", "Sleepers", "None", "Chaos"], answer: 0 },
        { q: "Crisis communication prevents?", options: ["Rumors", "Clarity", "Preparedness", "Calm"], answer: 0 },
      ],
    },
  },

  "3": {
    title: "Basic Life Support/Emergency Medical Responder (EMR)",
    sections: [
      "Introduction to Basic Life Support",
      "Emergency Medical Systems",
      "CPR Techniques",
      "First Response in Emergencies",
      "Patient Transport",
      "Simulation Drills",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "4": {
    title: "Psychological First Aid Basics",
    sections: [
      "Introduction to Psychological First Aid",
      "Stress and Trauma Awareness",
      "Crisis Communication",
      "Supporting Survivors",
      "Referral Systems",
      "Community Exercises",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "5": {
    title: "Hazardous Materials Awareness Training",
    sections: [
      "Introduction to Hazards",
      "Chemical Safety",
      "Personal Protective Equipment",
      "Emergency Decontamination",
      "Incident Reporting",
      "Simulation Exercise",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "6": {
    title: "Emergency Shelter Management & Logistics",
    sections: [
      "Shelter Setup Basics",
      "Logistics Planning",
      "Food & Resource Management",
      "Health & Sanitation",
      "Community Safety",
      "Simulation & Evaluation",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "7": {
    title: "First Aid and CPR Certification",
    sections: [
      "Introduction to First Aid",
      "CPR for Adults",
      "CPR for Children",
      "Choking Emergencies",
      "Wound Management",
      "Simulation Practice",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "8": {
    title: "Pediatric Advanced Life Support (PALS)",
    sections: [
      "Pediatric Assessment",
      "Basic Life Support for Children",
      "Respiratory Emergencies",
      "Cardiac Emergencies",
      "Shock Management",
      "Pediatric Simulation",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "9": {
    title: "Infections Disease Control Essentials",
    sections: [
      "Introduction to Infection Control",
      "Hand Hygiene Practices",
      "Personal Protective Equipment",
      "Isolation Precautions",
      "Outbreak Management",
      "Monitoring & Evaluation",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "10": {
    title: "Telemedicine Practices in Modern Healthcare",
    sections: [
      "Introduction to Telemedicine",
      "Technology in Telehealth",
      "Patient Communication",
      "Data Privacy and Security",
      "Remote Diagnosis",
      "Case Studies",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "11": {
    title: "Nursing Care for Post-Operative Patients",
    sections: [
      "Introduction to Post-Op Nursing",
      "Pain Management",
      "Wound Care",
      "Monitoring Vital Signs",
      "Preventing Complications",
      "Case Simulations",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },

  "12": {
    title: "Ethics & Legal Issues in Clinical Practice",
    sections: [
      "Introduction to Medical Ethics",
      "Patient Rights",
      "Confidentiality",
      "Informed Consent",
      "Legal Responsibilities of Healthcare Workers",
      "Case Analysis",
    ],
    assessments: { pretest: [], quiz: [], final: [] },
  },
};

export default courseContent;
