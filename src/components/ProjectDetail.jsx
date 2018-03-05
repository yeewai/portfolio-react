import React from 'react';
import { connect } from 'react-redux';
import StickyBox from "react-sticky-box";

import { projectsSelectors } from 'services/projects';

export const ProjectDetail = ({ project }) => {
    if ( !project ) { return <h2 id="no-match">There is no matching project</h2>; }

    return (
        <article className="projectDetail row justify-content-center">
            <section className="images col-sm-8">
                { project.images.map( (image, i) => (
                    <img className="img-fluid" src={image.url} alt={image.alt} key={`image-${i}`}/>
                )) }
            </section>
            <div className="col-sm">
                <StickyBox className="project-description card">
                    <section className="card-body">
                        <h2 className="card-title">{project.title}</h2>
                        <h4 className="card-subtitle mb-2 text-muted">{project.subtitle}</h4>
                        <p className="details">
                            <time>{project.date}</time>
                            <br />
                            Tools: {project.tools}
                        </p>
                        <section className="description" dangerouslySetInnerHTML={{__html: project.description}} />

                    </section>
                </StickyBox>
            </div>

        </article>
    );
}

export const mapStateToProps = (state, ownProps) => ({
    project: projectsSelectors.getByName(state, ownProps.match.params)
});

export default connect(mapStateToProps)(ProjectDetail);
