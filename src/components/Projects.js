import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Genetics SNP data simulation: Predicting a binary outcome in simulated genomic data',
      description: 'Collaboration with Cedars-Sinai Medical Center, Los Angeles, CA',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
      link: 'https://github.com/santoshguntuka/masters_finalProject',
      details: [
        'Contributed to a Cedars Sinai Medical Center research project, applying predictive modelling to genomic datasets to uncover complex genetic patterns.',
        'Utilized machine learning, feature analysis, and statistical methods to improve the accuracy and interpretability of predictive models for binary genomic outcomes.',
        'Analyzed the effectiveness of various algorithms in genomic data analysis, demonstrating that customized techniques can improve prediction accuracy by up to 15%, thereby advancing genomic research and predictive modelling.',
      ],
    },
    {
      title: 'Federated Learning Setup in PySyft',
      description: 'E2E example on breast cancer dataset using PySyft federated learning.',
      technologies: ['Python', 'PyTorch', 'PySyft'],
      link: 'https://github.com/santoshguntuka/pySyft',
      details: [
        'Utilized the concept of federated learning by implementing PySyft, a Python library for secure and private machine learning, to enable decentralized training across multiple nodes while ensuring data privacy.',
        'Developed an end-to-end example using a hospital setup to demonstrate the application of federated learning, showcasing how sensitive medical data can be securely shared and collaboratively analyzed without ever leaving the original locations.',
        'Successfully established and coordinated a federated learning setup across multiple collaborators, ensuring data privacy compliance and enabling joint model training across different institutions, leading to improved model accuracy and convergence speed.',
      ],
    },
    {
  "title": "Article Vault - Chrome Extension",
  "description": "A Chrome extension to save and organize articles for later reading.",
  "technologies": ["JavaScript", "HTML", "CSS", "Chrome Extensions API"],
  "link": "https://github.com/santoshguntuka/article-vault",
  "details": [
    "Developed a Chrome extension to enable users to save and organize web articles under different tags, making it easier to manage and retrieve content for later reading.",
    "Designed and built a user-friendly interface with responsive elements, ensuring a seamless user experience on both desktop and mobile browsers.",
    "Implemented tag-based organization, allowing users to categorize and filter articles by different tags for better content management.",
    "Ensured robust functionality by leveraging Chrome Extensions API, providing users with an efficient and intuitive tool for managing web articles directly from their browser.",
    "Successfully deployed the extension to the Chrome Web Store, enabling users worldwide to download and use the tool for efficient article management."
  ]
},

  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
