
import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Backend Software Engineer',
    company: 'Conduit Commerce',
    location: 'Bellevue, WA',
    period: 'Sep. 2024 – Dec. 2024',
    achievements: [
      'Architected a pub-sub system with Python & Docker, reducing API latency by 37% via batching & rate limiting, enabling seamless data exchange for 20+ clients.',
      'Integrated Shopify\'s GraphQL API for real-time inventory of 80K+ products, boosting client efficiency by 24%',
      'Built a low latency event driven system with FastAPI & Asyncio, handling 50K+ product status messages daily',
      'Designed a multi-threaded client manager in Python, optimizing memory usage & increasing throughput by 26%.'
    ]
  },
  {
    role: 'Data Scientist',
    company: 'Onlia Insurance (Fairfax)',
    location: 'Toronto, ON',
    period: 'Jan. 2024 – Apr. 2024',
    achievements: [
      'Developed classification models using parallelization & ensemble techniques with scikit-learn, TensorFlow & SQL, cutting expenses by $2M.',
      'Estimated savings of $1M by engineering regression models with scikit-learn & pandas to forecast claim severity.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Planworth',
    location: 'Toronto, ON',
    period: 'May. 2023 – Sep. 2023',
    achievements: [
      'Increased pipeline success rate by 57%, cut build time by 32%, & raised test coverage by 20% by automating UI tests & creating snapshot/unit tests with Cypress, Jest, & JavaScript.',
      'Enabled seamless client data synchronization between two web apps using Go, TypeScript, & SQL.',
      'Saved users 10+ minutes per interaction by creating custom UI components & shortcuts with React & TypeScript'
    ]
  },
  {
    role: 'Wi-Fi Software Testing Intern',
    company: 'Ford Motor Company of Canada Limited',
    location: 'Oakville, ON',
    period: 'Sep. 2022 – Dec. 2022',
    achievements: [
      'Automated 200+ network performance tests for vehicle communication hardware with Python pytest.',
      'Diagnosed errors using 150+ manual tests with IPerf3 & cURL for various bandwidths/auth methods.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-bold">{exp.role}</h3>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 my-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Building size={16} className="mr-1" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="mt-3 space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-700 text-sm pl-4 relative">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-gray-300 rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-5 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Achievements</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span className="text-gray-700">T&T Scholarship Winner: Awarded to the top 0.05% of eligible students - worth $300k CAD.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span className="text-gray-700">2021 International Chemistry Olympiad: Part of the Trinidad and Tobago quartet that competed in Japan.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
