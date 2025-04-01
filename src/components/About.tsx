
import React from 'react';

const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'C/C++', 'JavaScript', 'Kotlin', 'Go', 'R', 'SQL', 'Java', 'Rust', 'C#'] },
  { category: 'Libraries & Frameworks', items: ['React', 'Node', 'Pandas', 'NumPy', 'TensorFlow', 'Scikit-learn', 'GraphQL', 'Cypress', 'Jest'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Jira', 'Jenkins', 'CircleCI', 'Figma', 'JupyterLab', 'Power BI', 'Redis'] }
];

const interests = [
  { name: 'Rock Climbing', icon: '🧗‍♂️' },
  { name: 'Powerlifting', icon: '🏋️‍♂️' },
  { name: 'Nature & Beaches', icon: '🏝️' },
  { name: 'Movies', icon: '🎬' },
  { name: 'Travelling', icon: '✈️' },
  { name: 'Food', icon: '🍲' },
  { name: 'Soca Music', icon: '🎵' }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a 4A Computer Science student at the University of Waterloo with a passion for data science, AI, and software engineering. 
              Originally from Trinidad and Tobago, I bring a unique perspective to problem-solving and innovation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My technical journey has led me through roles at companies like Conduit Commerce, Onlia Insurance, Planworth, and Ford,
              where I've developed a diverse skill set spanning backend and frontend development, data science, and software testing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me rock climbing, powerlifting, exploring nature trails, or planning my next beach trip.
              I'm also a big fan of Caribbean cuisine and love to listen to Soca music to stay connected to my roots.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    <span>{interest.icon}</span>
                    <span>{interest.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            
            {skills.map((skillGroup, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-primary">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h5 className="font-medium">University of Waterloo</h5>
                <p className="text-sm text-gray-600">Bachelor of Computer Science (Co-op)</p>
                <p className="text-sm text-gray-500 mt-1">Aug. 2021 – Apr. 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
