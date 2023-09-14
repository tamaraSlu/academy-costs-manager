import React from "react";
import './hit-label.css'

/**
 * HIT label control - Encapsulates MUI's complexity, providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * bold - Should be bold or not (boolean).
 * * fontType - Font size type (title, subtitle, content).
 * @returns Cusom icon element.
 */
const HitLabel = ({ children, bold, fontType }) => {
    const labelProperties = ['hit-label'];
    
    // Add consistent bold property.
    if (bold) {
        labelProperties.push('bold');
    }
    
    // Add consistent size type.
    if (fontType) {
        labelProperties.push(fontType);
    }

    const labelClass = labelProperties.join(' ');

    return <div className={labelClass}>
        {children}
    </div>
};

export { HitLabel };
