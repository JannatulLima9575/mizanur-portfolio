import React from "react";
import { FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-6 md:px-40 py-24 overflow-hidden">

      {/* Glow Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative w-full grid md:grid-cols-2 gap-16 items-start">

        {/* Left Side - About Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-3">
            About Me
          </h2>
          <h4 className="text-lg text-purple-600 mb-8 font-medium">
            Frontend Developer
          </h4>

          <p className="text-gray-700 mb-5 leading-relaxed">
            I am a Software Development Engineer with 2+ years of professional
            experience. I specialize in transforming people’s requirements into
            real-world solutions whether through intelligent machines, AI systems,
            or modern web applications.
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed">
            My strong foundation in web development comes from working on numerous
            real-world projects, including building professional websites for clients.
            Alongside that, I have solved 500+ problems across different platforms,
            which has sharpened my problem-solving skills.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I graduated from Sylhet Government Polytechnic Institute with a Diploma
            in Computer Science & Engineering. Currently, I am pursuing my BSc in
            Computer Science & Engineering at Sylhet International University,
            with a strong focus on Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Right Side - Skills Card */}
        <div className="space-y-8">

          <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-purple-200 hover:shadow-purple-300 transition-all duration-300">
            
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-purple-800">
              <FaGlobe className="text-purple-600" />
              Web Development
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Firebase",
                "MongoDB",
                "Express",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;