import React from 'react'
import Chip from '@mui/material/Chip'
import { ProjectDataInterface, TestimonialDataInterface } from './ProjectsData'

const ProjectTemplate: React.FC<{ projectData: ProjectDataInterface }> = (
  props
) => {
  const { projectData } = props

  return (
    <div className="project-description">
      <div className="project-header">
        <img src={projectData.pictureUrl} alt={projectData.title + ' Logo'} />
        <div className="project-info">
          <h2>{projectData.title}</h2>
          <p>{projectData.subtitle}</p>
          <p>{projectData.date}</p>
        </div>
      </div>
      <hr />
      <section>
        <h3>Technologies</h3>
        <div className="project-tags">
          {projectData.tags.map((tag: string, index: number) => (
            <Chip key={index} label={tag} className="project-tag" />
          ))}
        </div>
      </section>
      <hr />
      <section>
        <h3>Context</h3>
        <p
          dangerouslySetInnerHTML={{ __html: projectData.contextDescription }}
        />
      </section>
      <hr />
      <section>
        <h3>Key Responsibilities</h3>
        <ul className="project-responsibilities">
          {projectData.responsibilities.map((r: string, index: number) => (
            <li key={index} className="project-responsibility">
              {r}
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <h3>Description</h3>
        <p dangerouslySetInnerHTML={{ __html: projectData.bodyDescription }} />
      </section>
      <hr />
      <section>
        <h3>People I've worked with</h3>
        {projectData.testimonials.map(
          (testimonialData: TestimonialDataInterface, index: number) => (
            <a href={testimonialData.linkedInUrl} target="_blank">
              <div className="testimonies-section" key={index}>
                <div className="testimonial-pic">
                  <img
                    src={testimonialData.referentPictureUrl}
                    alt="testimonier"
                  />
                </div>
                <blockquote className="testimonial">
                  {testimonialData.testimonialText}
                  <cite>
                    <b>{testimonialData.referent}</b>,{' '}
                    {testimonialData.referentRole}
                  </cite>
                </blockquote>
              </div>
            </a>
          )
        )}
      </section>
    </div>
  )
}

export default ProjectTemplate
