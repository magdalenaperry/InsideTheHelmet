import React from 'react'

function IPRRS({ iprrsData, setIprrsData }) {

  const iprrs = [
    {
      "number": "1",
      "key": "dass1",
      "question": "I found it hard to wind down."
    },
    {
      "number": "2",
      "key": "dass2",
      "question": "I was aware of dryness of my mouth."
    },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target;

    setIprrsData({
      ...iprrsData, [name]: value,
    });

  }

  return (
    <>





      <div className='fs-5 mt-5'>Please rate your confidence to return to your sport on a scale from 0 to 10.</div>
      <hr></hr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">0</th>
        <td>no confidence at all</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">5</th>
        <td>moderate confidence</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">10</th>
        <td>complete confidence</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>












      <hr></hr>

      {iprrs.map(question => <div>

        {/* <div className="rendered-form form-check-inline"> */}
        {/* <div className="formbuilder-radio-group form-group field-radio-group"> */}

        <label
          htmlFor="radio-group"
          className="formbuilder-radio-group-label fs-5 mt-4">{question.question}


          {/* <span className="tooltip-element" tooltip="Select one">?</span> */}
        </label>

        <div
          className="radioGroupBelow"
          onChange={handleChange}
          // value={formData.dass}
          // className="radio-group"
          required>

            <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="1" />
            1</label>

          <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="2" />
          2</label>

          <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="3" />
         3</label>

          <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="4" />
          4</label>

          <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="5" />
          5</label>
          <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="6" />
          6</label>
          <label className="form-check-label " htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="7" />
          7</label>
          <label className="form-check-label" htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="8" />
          8</label>
          <label className="form-check-label" 
          htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="9" />
          9</label>
          <label className="form-check-label" htmlFor="inlineRadio1">
            <input
              className="form-check-input"
              type="radio"
              name={question.key}
              // id="inlineRadio1" 
              value="10" />
          10</label>




        </div>
        {/* </div> */}


        {/* // </div> */}
      </div>)}





    </>
  )
}

export default IPRRS