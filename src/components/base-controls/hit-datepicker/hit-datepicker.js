import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { HitLabel } from "../hit-label/hit-label";
import './hit-datepicker.css';

const HitDatepicker = ({ children }) => {
  const labelElement = children ? <HitLabel>{children}</HitLabel> : undefined;

  return <div className='hit-datepicker'>
    <div className="datepicker-label">
      {labelElement}
    </div>
    <DatePicker />
  </div>;
};

export { HitDatepicker };
