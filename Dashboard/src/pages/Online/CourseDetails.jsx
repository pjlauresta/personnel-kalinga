// src/pages/Online/CourseDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Footer from "../../components/Footer";
import {
  FaInfoCircle,
  FaBook,
  FaClipboardList,
  FaPlayCircle,
} from "react-icons/fa";
import "../../styles/courseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();

  // -----------------------
  // All 12 courses content
  // -----------------------
  const courseData = {
    "1": {
      title: "Professional Development Training Certificate (PDTC)",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Course Outline & Objectives", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["References", "Recommended Reading", "Templates & Forms"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Introduction to Professional Growth",
            "Lesson 1: Career Pathways",
            "Lesson 2: Skill Development",
            "Lesson 3: Time Management",
            "Lesson 4: Leadership Essentials",
            "Quiz",
            "Module 2: Advanced Professional Development",
            "Lesson 1: Networking Strategies",
            "Lesson 2: Conflict Resolution",
            "Lesson 3: Communication Skills",
            "Lesson 4: Workplace Ethics",
            "Final Assessment",
          ],
        },
      ],
    },

    "2": {
      title: "Emergency Management Certificate Program",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Learning Goals", "Course Overview"],
        },
        {
          heading: "Helpful Material",
          items: ["Reference Guide", "Incident Command (ICS) Cheatsheet"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Basics of Emergency Preparedness",
            "Lesson 1: Risk Assessment",
            "Lesson 2: Disaster Readiness",
            "Lesson 3: Evacuation Protocols",
            "Lesson 4: Crisis Communication",
            "Quiz",
            "Module 2: Advanced Emergency Management",
            "Lesson 1: Incident Command System (ICS)",
            "Lesson 2: Community Resilience",
            "Lesson 3: Emergency Logistics",
            "Lesson 4: Recovery Strategies",
            "Final Assessment",
          ],
        },
      ],
    },

    "3": {
      title: "Basic Life Support / Emergency Medical Responder (EMR)",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Course Requirements", "Safety Protocols"],
        },
        {
          heading: "Helpful Material",
          items: ["Training Manual", "First Aid Quick Reference Cards"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: CPR & Basic Life Support",
            "Lesson 1: Adult CPR",
            "Lesson 2: Child & Infant CPR",
            "Lesson 3: Use of AED",
            "Lesson 4: Airway Management",
            "Quiz",
            "Module 2: Emergency Response Essentials",
            "Lesson 1: Patient Assessment (Primary Survey)",
            "Lesson 2: First Aid for Trauma",
            "Lesson 3: Shock Management",
            "Lesson 4: Scene Safety & PPE",
            "Final Assessment",
          ],
        },
      ],
    },

    "4": {
      title: "Psychological First Aid Basics",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Overview of PFA", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["Reference Articles", "PFA Handouts", "Referral Resources"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Foundations of Psychological First Aid",
            "Lesson 1: Understanding Stress Reactions",
            "Lesson 2: Immediate Psychological Needs",
            "Lesson 3: Building Rapport & Safety",
            "Lesson 4: Active Listening Skills",
            "Quiz",
            "Module 2: PFA in Practice",
            "Lesson 1: Supporting Survivors & Families",
            "Lesson 2: Cultural Sensitivity in PFA",
            "Lesson 3: Referral & Follow-up",
            "Lesson 4: Self-care for Providers",
            "Final Assessment",
          ],
        },
      ],
    },

    "5": {
      title: "Hazardous Materials Awareness Training",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Hazmat Basics", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["Safety Data Sheets (SDS) Guide", "Labeling & Placard Resources"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: HazMat Identification",
            "Lesson 1: Recognizing Hazardous Substances",
            "Lesson 2: Labeling Standards & Placards",
            "Lesson 3: Safety Signs & Symbols",
            "Lesson 4: Initial Response & Isolation",
            "Quiz",
            "Module 2: HazMat Response & Decontamination",
            "Lesson 1: Protective Equipment Selection",
            "Lesson 2: Containment Procedures",
            "Lesson 3: Emergency Decontamination",
            "Lesson 4: Reporting & Documentation",
            "Final Assessment",
          ],
        },
      ],
    },

    "6": {
      title: "Emergency Shelter Management & Logistics",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Shelter Operating Principles", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["Shelter Checklists", "Supply & Inventory Templates"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Shelter Setup & Operations",
            "Lesson 1: Site Selection & Layout",
            "Lesson 2: Registration & Intake Procedures",
            "Lesson 3: Shelter Health & Sanitation",
            "Lesson 4: Security & Protection",
            "Quiz",
            "Module 2: Logistics & Coordination",
            "Lesson 1: Resource Allocation",
            "Lesson 2: Volunteer Management",
            "Lesson 3: Supply Chain Basics",
            "Lesson 4: Reporting & Handover",
            "Final Assessment",
          ],
        },
      ],
    },

    "7": {
      title: "First Aid and CPR Certification",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Importance of CPR", "Certification Requirements"],
        },
        {
          heading: "Helpful Material",
          items: ["CPR Pocket Guide", "Wound Care Quick Reference"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Basic First Aid",
            "Lesson 1: CPR Techniques",
            "Lesson 2: Wound Care & Bandaging",
            "Lesson 3: Bleeding Control",
            "Lesson 4: Burn Management",
            "Quiz",
            "Module 2: Emergency Scenarios",
            "Lesson 1: Choking Management",
            "Lesson 2: Heart Attack Recognition",
            "Lesson 3: Stroke Recognition",
            "Lesson 4: Fractures & Splinting",
            "Final Assessment",
          ],
        },
      ],
    },

    "8": {
      title: "Pediatric Advanced Life Support (PALS)",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Course Overview", "Pediatric Resuscitation Guidelines"],
        },
        {
          heading: "Helpful Material",
          items: ["PALS Algorithms", "Pediatric Drug Dosing Chart"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Pediatric Respiratory & Airway Management",
            "Lesson 1: Infant Airway Basics",
            "Lesson 2: Child Airway Considerations",
            "Lesson 3: AED & Defibrillation in Pediatrics",
            "Lesson 4: Ventilation Strategies",
            "Quiz",
            "Module 2: Pediatric Cardiac Arrest & Shock",
            "Lesson 1: Recognition of Shock",
            "Lesson 2: Pediatric Cardiac Arrest Algorithms",
            "Lesson 3: Post-resuscitation Care",
            "Lesson 4: Team Resuscitation Roles",
            "Final Assessment",
          ],
        },
      ],
    },

    "9": {
      title: "Infectious Disease Control Essentials",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Disease Prevention", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["WHO/Local Guidelines", "PPE & Isolation Protocols"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Basics of Infection Control",
            "Lesson 1: Hand Hygiene Practices",
            "Lesson 2: Proper PPE Use",
            "Lesson 3: Isolation & Cohorting Procedures",
            "Lesson 4: Waste & Linen Management",
            "Quiz",
            "Module 2: Outbreak Detection & Response",
            "Lesson 1: Surveillance Basics",
            "Lesson 2: Case Investigation",
            "Lesson 3: Vaccination Protocols",
            "Lesson 4: Community Measures & Communication",
            "Final Assessment",
          ],
        },
      ],
    },

    "10": {
      title: "Telemedicine Practices in Modern Healthcare",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Overview of Telemedicine", "Scope & Use Cases"],
        },
        {
          heading: "Helpful Material",
          items: ["Telehealth Best Practices", "Data Privacy Checklist"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Telemedicine Foundations",
            "Lesson 1: Virtual Consultation Workflow",
            "Lesson 2: Patient Communication Online",
            "Lesson 3: Technology & Equipment Requirements",
            "Lesson 4: Clinical Limitations & Triage",
            "Quiz",
            "Module 2: Advanced Telehealth",
            "Lesson 1: Remote Monitoring Tools",
            "Lesson 2: Data Privacy & Consent",
            "Lesson 3: Integration with EHR",
            "Lesson 4: Billing & Legal Considerations",
            "Final Assessment",
          ],
        },
      ],
    },

    "11": {
      title: "Nursing Care for Post-Operative Patients",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Post-Op Care Basics", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["Care Plans", "Pain Management Protocols", "Discharge Checklists"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Immediate Post-Op Care",
            "Lesson 1: Wound Care & Dressing Changes",
            "Lesson 2: Monitoring Vitals Post-Op",
            "Lesson 3: Pain Management Principles",
            "Lesson 4: Preventing Post-Op Complications",
            "Quiz",
            "Module 2: Rehabilitation & Follow-up",
            "Lesson 1: Mobilization & PT Coordination",
            "Lesson 2: Medication Management",
            "Lesson 3: Patient Education for Home Care",
            "Lesson 4: When to Escalate Care",
            "Final Assessment",
          ],
        },
      ],
    },

    "12": {
      title: "Ethics & Legal Issues in Clinical Practice",
      sections: [
        {
          heading: "General Information",
          items: ["Welcome", "Ethical Principles", "Revision History"],
        },
        {
          heading: "Helpful Material",
          items: ["Case Studies", "Legal References", "Consent Forms"],
        },
        {
          heading: "Training Material",
          items: [
            "Pre-Test",
            "Module 1: Foundations of Medical Ethics",
            "Lesson 1: Autonomy & Informed Consent",
            "Lesson 2: Beneficence & Non-maleficence",
            "Lesson 3: Confidentiality & Privacy",
            "Lesson 4: Professional Boundaries",
            "Quiz",
            "Module 2: Legal Issues in Practice",
            "Lesson 1: Documentation & Records",
            "Lesson 2: Liability & Malpractice Basics",
            "Lesson 3: Consent & Capacity",
            "Lesson 4: Regulatory Compliance",
            "Final Assessment",
          ],
        },
      ],
    },
  };

  // --------------------------------------
  // Helpers
  // --------------------------------------
  const getIcon = (sectionHeading) => {
    if (sectionHeading.includes("General"))
      return <FaInfoCircle className="text-green-700 text-2xl" />;
    if (sectionHeading.includes("Helpful"))
      return <FaBook className="text-green-700 text-2xl" />;
    if (sectionHeading.includes("Training"))
      return <FaPlayCircle className="text-green-700 text-2xl" />;
    return <FaClipboardList className="text-green-700 text-2xl" />;
  };

  const isPretest = (item) => /pre-?test/i.test(item);
  const isQuiz = (item) => /\bquiz\b/i.test(item);
  const isFinal = (item) =>
    /final\s*assessment/i.test(item) || /\bfinal\b/i.test(item);

  const getItemClass = (item) => {
    const lower = item.toLowerCase();
    if (lower.startsWith("module")) return "course-subitem course-module";
    if (lower.startsWith("lesson")) return "course-subitem course-lesson";
    if (isQuiz(item)) return "course-subitem course-quiz";
    if (isFinal(item)) return "course-subitem course-final";
    if (isPretest(item)) return "course-subitem course-pretest";
    return "course-subitem";
  };

  // ✅ Slugify items for clean URLs
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // fetch course by id
  const course = courseData[id];
  if (!course) return <p className="p-6 text-red-500">Course not found.</p>;

  // --------------------------------------
  // Render
  // --------------------------------------
  return (
    <Layout>
      <div className="course-wrapper">
        {/* Title + Breadcrumbs */}
        <h1 className="course-title">{course.title}</h1>
        <p className="course-breadcrumb">Home / Modules / {course.title}</p>

        {/* Sections */}
        <div className="space-y-6">
          {course.sections.map((section, idx) => (
            <div key={idx} className="course-card open">
              {/* Section Header */}
              <div className="flex items-center gap-3 p-5 bg-white shadow-md rounded-lg border border-green-700">
                {getIcon(section.heading)}
                <span className="course-heading-text">{section.heading}</span>
              </div>

              {/* Section Content */}
              <div className="course-items">
                {section.items.map((item, i) => {
                  // Pre-test link
                  if (isPretest(item)) {
                    return (
                      <div key={i} className={getItemClass(item)}>
                        <Link
                          to={`/modules/${id}/assessment/pretest`}
                          className="text-green-700 hover:underline font-semibold"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  }

                  // Quiz link
                  if (isQuiz(item)) {
                    return (
                      <div key={i} className={getItemClass(item)}>
                        <Link
                          to={`/modules/${id}/assessment/quiz`}
                          className="text-green-700 hover:underline font-semibold"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  }

                  // Final assessment link
                  if (isFinal(item)) {
                    return (
                      <div key={i} className={getItemClass(item)}>
                        <Link
                          to={`/modules/${id}/assessment/final`}
                          className="text-green-900 hover:underline font-bold"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  }

                  // ✅ Default: send all other items to /activity/:slug
                  return (
                    <div key={i} className={getItemClass(item)}>
                      <Link
                        to={`/modules/${id}/activity/${slugify(item)}`}
                        className="hover:underline"
                      >
                        {item}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default CourseDetails;
