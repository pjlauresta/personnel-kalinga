// src/pages/Online/LessonDetails.jsx
import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Footer from "../../components/Footer";
import courseContent from "../../data/courseContent";
import "../../styles/lessonDetails.css";

/**
 * slugify - matches the slugify used in CourseDetails so links are consistent
 */
const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "-and-")
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function LessonDetails() {
  const { id, activitySlug } = useParams(); // route: /modules/:id/activity/:activitySlug
  const navigate = useNavigate();

  const course = courseContent[id];
  if (!course) {
    return (
      <Layout>
        <div className="lesson-center">
          <h2>Course not found</h2>
          <p>We could not find the course you requested.</p>
        </div>
        <Footer />
      </Layout>
    );
  }

  // Build activities list from the course.sections (each string becomes an activity)
  const activities = useMemo(
    () =>
      (course.sections || []).map((title) => ({
        title,
        slug: slugify(title),
      })),
    [course]
  );

  // If activitySlug provided, find it; otherwise default to first
  const idx = activitySlug ? activities.findIndex((a) => a.slug === activitySlug) : -1;
  const activeIndex = idx === -1 ? 0 : idx;
  const current = activities[activeIndex];

  // PDF url convention: public/assets/lessons/<courseId>/<activitySlug>.pdf
  // — place your PDFs there (see instructions below)
  const pdfUrl = `/assets/lessons/${id}/${current.slug}.pdf`;

  const handlePrev = () => {
    if (activeIndex > 0) navigate(`/modules/${id}/activity/${activities[activeIndex - 1].slug}`);
  };
  const handleNext = () => {
    if (activeIndex < activities.length - 1)
      navigate(`/modules/${id}/activity/${activities[activeIndex + 1].slug}`);
  };

  const handleJump = (e) => {
    const slug = e.target.value;
    if (!slug) return;
    navigate(`/modules/${id}/activity/${slug}`);
  };

  return (
    <Layout>
      <div className="lesson-page">
        {/* Breadcrumbs */}
        <div className="lesson-breadcrumbs">
          <Link to="/modules">Home</Link>
          <span>/</span>
          <Link to={`/modules/${id}`}>Modules</Link>
          <span>/</span>
          <span className="muted">{course.title}</span>
          <span>/</span>
          <span className="muted">{current.title}</span>
        </div>

        {/* Title area */}
        <div className="lesson-header">
          <h1 className="lesson-course-title">{course.title}</h1>
          <h3 className="lesson-activity-title">{current.title}</h3>
        </div>

        {/* PDF / resource viewer */}
        <div className="pdf-wrapper">
          {/* iframe used for PDF viewer. If file does not exist, browser will show "404" - you can provide a fallback link below */}
          <iframe
            title={`${current.title} - ${course.title}`}
            src={pdfUrl}
            className="pdf-iframe"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* If the file cannot be displayed by the browser, provide a download/open link */}
        <div className="pdf-fallback">
          <a href={pdfUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
            Open lesson resource in a new tab / download
          </a>
        </div>

        {/* Controls: Prev / Jump-to / Next */}
        <div className="lesson-controls">
          <button onClick={handlePrev} className="btn btn-light" disabled={activeIndex === 0}>
            Back
          </button>

          <div className="jump-wrapper">
            <select className="jump-select" value={current.slug} onChange={handleJump}>
              {activities.map((a, i) => (
                <option key={a.slug} value={a.slug}>
                  {i + 1}. {a.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleNext}
            className="btn btn-light"
            disabled={activeIndex === activities.length - 1}
          >
            Next 
          </button>
        </div>

        {/* Small list of all activities on the right (optional) */}
        <div className="lesson-activity-list">
          <h4>All Lessons </h4>
          <ul>
            {activities.map((a, i) => (
              <li key={a.slug} className={i === activeIndex ? "active" : ""}>
                <Link to={`/modules/${id}/activity/${a.slug}`}>
                  {i + 1}. {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
