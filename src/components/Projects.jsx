import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { projectsSelectors } from 'services/projects';

export const Projects = ({projects, projectsType}) => {
    return (
        <article className={`projects ${projectsType} animated fadeIn`}>
            <ul className="allitems ">
                { projects.map( (m, i) =>(
                    <li key={`project-${i}`}>
                        <Link to={`/${projectsType}/${m.slug}`}>
                            <div className="card animated fadeIn">
                                <img className="card-img-top" src={m.thumbnail} alt={m.title} />
                                <div className="card-body">
                                    <h3 className="card-title">{m.title}</h3>
                                    { m.subtitle ? <h4 class="card-subtitle mb-2 text-muted">{m.subtitle}</h4> : null}
                                </div>
                            </div>
                        </Link>
                    </li>
                )) }
            </ul>
        </article>
    );
}

export const mapStateToProps = (state, ownProps) => ({
    projectsType: ownProps.match.params.projectsType,
    projects: ownProps.match.params.projectsType === "art" ? projectsSelectors.getArt(state) : projectsSelectors.getCode(state)
});

export default connect(mapStateToProps)(Projects);
