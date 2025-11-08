export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "REST APIs",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
