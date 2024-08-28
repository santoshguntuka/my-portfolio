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
