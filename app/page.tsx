export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">
          Software Developer Portfolio
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Building modern web applications with passion
        </p>
        <div className="max-w-4xl mx-auto">
          <section
            id="about"
            className="py-12 mb-8 bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a passionate software developer with a focus on creating
              clean, efficient, and user-friendly applications.
            </p>
          </section>
          <section
            id="skills"
            className="py-12 mb-8 bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section
            id="projects"
            className="py-12 mb-8 bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-600">
                  A full-stack e-commerce application
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Task Management App
                </h3>
                <p className="text-gray-600">
                  A collaborative task management tool
                </p>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="py-12 bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact</h2>
            <p className="text-lg text-gray-600 mb-4">
              Get in touch with me for opportunities and collaborations.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:your.email@example.com"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Email Me
              </a>
              <a
                href="https://github.com"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
              >
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
