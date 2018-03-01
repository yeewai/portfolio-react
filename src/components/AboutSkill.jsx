import React from 'react';
import { Tooltip } from 'react-tippy';

const AboutSkill = ({title, shortName, skillLevel}) => (
    <li class={`skill-${skillLevel}`}>
        <Tooltip arrow={true} title={title}>{shortName}</Tooltip>
    </li>
)

export default AboutSkill;
