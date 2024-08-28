import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experienceList = [
    {
      position: 'Machine Learning  Intern',
      company: 'Dartmouth and Hitchcock',
      duration: 'April 2024 - Present',
      description: [
        'Conducted thorough testing of various Python-based open-source tools for Federated Learning, evaluating performance metrics such as model accuracy, training time, and resource utilization.',
        'Assisted in the development and enhancement of Federated Learning processes, resulting in a 20% improvement in model convergence speed.',
        'Set up federated learning across Dartmouth collaborators to implement privacy-preserving federated learning, successfully coordinating multiple nodes and ensuring data privacy compliance across all participants, achieving a compliance rate of 100%',
      ],
    },
    {
      position: 'IT Service Management',
      company: 'California State University, Dominguez Hills',
      duration: 'March 2023 - December 2023',
      description: [
        'Aiding campus identity and access management using OneLogin and serving as an MFA Duo Administrator..',
        'Provided training and assistance to over 500 staff and faculty members, enhancing technical proficiency and reducing support requests by 15%..',
        'Executed detailed simulations, benchmarked the RL approach against predefined metrics, and documented the performance and progress of the algorithms over time to ensure convergence towards the optimal solution.',
      ],
    },
    {
        position: 'Research Assistant',
        company: 'California State University, Dominguez Hills',
        duration: 'June 2022 - February 2023',
        description: [
          'Analyzed the convergence of Reinforcement Learning (RL) solutions towards optimal solutions by conducting detailed benchmarking against predefined metrics, resulting in a 25% improvement in algorithm accuracy and a 20% reduction in convergence time.',
          'Achieved a 30% reduction in computational time and recorded a 90% success rate in finding feasible paths under probabilistic constraints.',
          'Participated in code reviews and contributed to improving code quality.',
        ],
      },
      {
        position: 'Digital Devices Associate',
        company: ' Amazon',
        duration: 'February 2020 - October 2021',
        description: [
          'Provided technical support for a range of digital devices, resolving 95% of customer issues on the first call by utilizing in-depth product knowledge and diagnostic tools, thereby improving customer satisfaction.',
          'Assisted over 100 customers daily with troubleshooting and setup of digital devices, achieving a 95% customer satisfaction rate through effective problem resolution and clear communication..',
          'Collaborate with product management and engineering teams to suggest improvements based on testing outcomes and customer feedback.',
        ],
      },
    // Add more experience as needed
  ];

  return (
    <section className="experience">
      <h1>My Experience</h1>
      <div className="experience-list">
        {experienceList.map((experience, index) => (
          <div key={index} className="experience-item">
            <h2>{experience.position}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.duration}</p>
            <ul>
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
