import React from "react";
import { FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-6 md:px-40 py-24 text-white">

     {/* Glow Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative w-full grid md:grid-cols-2 gap-16 items-start">

        {/* Left Side - About Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            About Me
          </h2>

          <h4 className="text-lg text-purple-300 mb-8 font-medium">
            Frontend Developer
          </h4>

          <p className="text-purple-100 mb-5 leading-relaxed">
            I am a Software Development Engineer with 2+ years of professional
            experience. I specialize in transforming requirements into
            real-world solutions through modern web applications.
          </p>

          <p className="text-purple-100 mb-5 leading-relaxed">
            I have worked on multiple real-world client projects and solved
            500+ programming problems which strengthened my analytical and
            problem-solving skills.
          </p>

          <p className="text-purple-100 leading-relaxed">
            Currently pursuing BSc in Computer Science & Engineering with
            strong interest in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Right Side - Skills Card */}
        <div className="space-y-8">

          <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500">

            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-purple-200">
              <FaGlobe className="text-purple-400" />
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
                  className="px-4 py-1 text-sm bg-white/10 text-purple-100 rounded-full border border-white/20 hover:bg-white/20 transition"
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