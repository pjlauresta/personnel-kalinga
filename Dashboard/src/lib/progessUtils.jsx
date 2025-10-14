const handleMarkComplete = () => {
  markLessonComplete("trainingMaterials", current.slug); // change section as needed
  setCompletedLessons((prev) => {
    if (!prev.includes(current.slug)) {
      const updated = [...prev, current.slug];
      alert(`✅ You have completed: ${current.title}`);

      // if all lessons are done, redirect to assessment
      if (updated.length === activities.length) {
        setTimeout(() => {
          navigate(`/assessment/${id}`);
        }, 600);
      }
      return updated;
    }
    return prev;
  });
};
