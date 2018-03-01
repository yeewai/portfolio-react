import React from 'react';
import { FileText, Github, Linkedin, Mail, Aperture } from 'react-feather';
import { Tooltip } from 'react-tippy';

import AboutSkill from './AboutSkill';

const About = () => (
    <article className="about animated fadeIn">
        <section className="row ">
            <div className="col-3 offset-sm-1">
                <img class="portrait img-fluid" src="/assets/images/me.png" alt="Yee Wai" />
            </div>
            <div className="col-7" id="about">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">
                            Yee Wai
                        </h2>
                        <a className="icon-link" href="mailto:yeekiwai@gmail.com">
                            <Tooltip title="yeekiwai@gmail.com"><Mail title="yeekiwai@gmail.com" /></Tooltip>
                        </a>
                        <a className="icon-link" href="assets/wai-resume.pdf">
                            <Tooltip title="Resume"><FileText title="Resume" /></Tooltip>
                        </a>
                        <a className="icon-link" href="https://github.com/yeewai">
                            <Tooltip title="Github"><Github title="Github" /></Tooltip>
                        </a>
                        <a className="icon-link" href="https://www.linkedin.com/in/yee-wai/">
                            <Tooltip title="Linkedn"><Linkedin title="LinkedIn" /></Tooltip>
                        </a>
                        <a className="icon-link" href="https://500px.com/yeekiwai">
                            <Tooltip title="500px"><Aperture title="500px" /></Tooltip>
                        </a>
                        <p>Raised in Chicago, Yee learned to draw from her grandma. Then some time later, she discovered the internet. And she started drawing things that grandma might not approve of anymore. Somewhere along the way she picked up coding and made websites to display her art. All they needed were animated gif backgrounds. She has since learned design and toned it down a few notches.</p>
                        <div class="contact" id="emailme">Shoot me an email at <a href="mailto:yeekiwai@gmail.com">yeekiwai@gmail.com</a></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="textblock row" id="skills">
            <div className="col-10 offset-sm-1">
                <div className="card">
                    <div className="card-body">

                        <h3>Technical Skills</h3>
                        <ul class="skills">
                            {[
                                { title: "React/Redux", shortName:"react", skillLevel: "full" },
                                { title: "Ruby on Rails", shortName:"RoR", skillLevel: "full" },
                                { title: "php", shortName:"php", skillLevel: "full" },
                                { title: "Javascript/jQuery", shortName:"jQ", skillLevel: "threequarter" },
                                { title: "HTML/CSS", shortName:"html", skillLevel: "full" },
                                { title: "Lua (Corona SDK)", shortName:"lua", skillLevel: "threequarter" },
                                { title: "C/C++/C#", shortName:"C", skillLevel: "threequarter" },
                                { title: "Common Lisp", shortName:"cl", skillLevel: "threequarter" },
                                { title: "Java/Spring Boot", shortName:"java", skillLevel: "threequarter" },
                                { title: "Scala/Play Framework", shortName:"scala", skillLevel: "half" }
                            ].map((s, i) => <AboutSkill { ...s } key={`tech-${i}`} />  )}

                        </ul>
                        <ul class="skills">
                            {[
                                { title: "Photoshop", shortName:"Ps", skillLevel: "full" },
                                { title: "Illustrator", shortName:"Ai", skillLevel: "threequarter" },
                                { title: "Clip Studio Paint", shortName:"clip", skillLevel: "full" }
                            ].map((s,i) => <AboutSkill { ...s } key={`tech-${i}`} />  )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </article>
)

export default About;
