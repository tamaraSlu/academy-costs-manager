import React from "react";
import { Button } from '@mui/material';
import { HitIcon } from "../hit-icon/hit-icon";

/**
 * HIT button control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * type - Button's style type (contained, outlined, text).
 * * clickEvent - Button's click event.
 * * icon - An optional icon to be displayed before the caption.
 * @returns HIT button control component.
 */
const HitButton = ({ children, type, clickEvent, icon }) => {

    const iconElement = icon ? <HitIcon>{icon}</HitIcon> : undefined;

    return <div className='hit-button'>
        <Button startIcon={iconElement} onClick={clickEvent} variant={type}>{children}</Button>
    </div>;
};

export { HitButton };
