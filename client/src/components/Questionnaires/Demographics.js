import React, { useState }from 'react'
// import { useMutation } from '@apollo/client';
// import { ADD_DEMO } from '../../utils/mutations';

function Demographics({demoData, setDemoData}) {

  // onChange in form, links to state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setDemoData({
      ...demoData, [name]: value,
    });
  };

  return (
    <>
      <div className="form-outline mb-4">
        <select
          name="race"
          type="select"
          className="form-select"
          id="race"
          onChange={handleChange}
          value={demoData.race}
        >
          <option value="" disabled>Race</option>
          <option value="race1">Race 1</option>
          <option value="race2">Race 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-outline mb-4">
        <select
          name="ethnicity"
          type="select"
          className="form-select"
          id="ethnicity"
          onChange={handleChange}
          value={demoData.ethnicity}
        >
          <option value="" disabled>Ethnicity</option>
          <option value="ethnicity1">Ethnicity 1</option>
          <option value="ethnicity2">Ethnicity 2</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>

      
  )
}

export default Demographics