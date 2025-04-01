
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CanYouDraw',
    description: 'A scribble.io inspired digital blackboard allowing users to chat with one another & draw in shared sessions, with brushes of various sizes/colors.',
    tech: ['React', 'Node.js', 'TypeScript', 'Socket.io', 'Canvas'],
    hackathon: 'Hack The North 2021 Submission',
    github: 'https://github.com/AidenAR/CanYouDraw',
    demo: '#'
  },
  {
    title: 'Pitta-Patta',
    description: 'A voice-to-text web app using an OpenAI-powered model to translate dialects (Trinidadian Creole/Jamaican Patois) to/from English.',
    tech: ['Python', 'Streamlit', 'OpenAI API', 'TensorFlow', 'JavaScript'],
    hackathon: 'Hack the Valley 2024 Submission (Winner - Best Diversity Themed Hack & Best Streamlit App)',
    github: 'https://github.com/AidenAR/PittaPatta',
    demo: '#'
  },
  {
    title: 'Pokédex API',
    description: 'A RESTful Pokédex API in Rust using the Axum framework to manage Pokémon data. Implemented CRUD operations with a local JSON database and concurrency-driven fetching.',
    tech: ['Rust', 'Axum'],
    github: 'https://github.com/AidenAR/PokedexAPI',
    demo: '#'
  },
  {
    title: 'SubBrain',
    description: 'A RAG web chatbot using Google\'s Gemini Pro LLM, OpenAI API, FastAPI, and React to provide real-time insights/advice from training on 1000+ scraped Reddit posts.',
    tech: ['Python', 'React', 'Gemini Pro LLM', 'OpenAI API'],
    hackathon: 'GDSC Hack with AI 2024 Submission',
    github: 'https://github.com/AidenAR/SubBrain',
    demo: '#'
  },
  {
    title: 'LecSum',
    description: 'A website that quickly produces textual summaries of inputted video lectures, using the AssemblyAI API. Developed the front-end with React and Figma.',
    tech: ['JavaScript', 'React', 'AssemblyAI API', 'Figma'],
    hackathon: 'Hack The North 2022 Submission',
    github: 'https://github.com/AidenAR/LecSum',
    demo: '#'
  },
  {
    title: 'Watopoly',
    description: 'A Monopoly spin-off of the UWaterloo Campus in C++. Utilized Observer & Visitor Design Patterns to enhance code efficiency & created a UML & Design Doc.',
    tech: ['C++', 'Observer Pattern', 'Visitor Pattern'],
    github: 'https://github.com/AidenAR/Watopoly',
    demo: '#'
  },
  {
    title: 'WLP4 Compiler',
    description: 'A compiler for WLP4 (a subset of C++). Implemented scanning via Maximal Munch Algorithm, SLR(1) parsing, context-sensitive analysis, and MIPS assembly code generation.',
    tech: ['C++', 'Compiler Design', 'MIPS Assembly'],
    github: 'https://github.com/AidenAR/WLP4Compiler',
    demo: '#'
  },
  {
    title: 'CPL Data Analysis',
    description: 'Scraped and preprocessed 230+ CPL cricket games to produce 30+ Pivot Tables, Bar/Pie Charts, Strip plots, visualizing relevant statistics.',
    tech: ['Python', 'pandas', 'seaborn', 'NumPy', 'Matplotlib', 'JupyterLab', 'Selenium'],
    github: 'https://github.com/AidenAR/CPL-Analysis',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card h-full flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                {project.hackathon && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-primary bg-primary/10">
                      {project.hackathon}
                    </span>
                  </div>
                )}
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/AidenAR" target="_blank" rel="noopener noreferrer" className="btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
