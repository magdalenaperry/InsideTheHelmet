import React from 'react'

function MSPSS({ mspssData, setMspssData }) {

  const mspss = [
    {
      "number": "1",
      "key": "mspss1",
      "question": "There is a special person who is around when I am in need."
    },
    {
      "number": "2",
      "key": "mspss2",
      "question": "There is a special person with whom I can share my joys and sorrows."
    },
    {
      "number": "3",
      "key": "mspss3",
      "question": "My family really tries to help me."
    },
    {
      "number": "4",
      "key": "mspss4",
      "question": "I get the emotional help and support I need from my family."
    },
    {
      "number": "5",
      "key": "mspss5",
      "question": "I have a special person who is a real source of comfort to me."
    },
    {
      "number": "6",
      "key": "mspss6",
      "question": "My friends really try to help me."
    },
    {
      "number": "7",
      "key": "mspss7",
      "question": "I can count on my friends when things go wrong."
    },
    {
      "number": "8",
      "key": "mspss8",
      "question": "I can talk about my problems with my family."
    },
    {
      "number": "9",
      "key": "mspss9",
      "question": "I have friends with whom I can share my joys and sorrows."
    },
    {
      "number": "10",
      "key": "mspss10",
      "question": "There is a special person in my life who cares about my feelings."
    },
    {
      "number": "11",
      "key": "mspss11",
      "question": "My family is willing to help me make decisions."
    },
    {
      "number": "12",
      "key": "mspss12",
      "question": "I can talk about my problems with my friends."
    },
  ]


  const sum = []
  console.log(mspssData)

  const sumArray = () => {
    Object.values(mspssData).forEach(val => sum.push(+val))
    const sumValues = sum.reduce((a, b) => a + b, 0);
    // console.log(sumValues);
    // return sumValues;

    // sumValues.push(mspssData.mspssSum);
    // console.log(mspssData.mspssSum)
    return sumValues
  }

  const mspssValue = sumArray().toString();

  // console.log(sumValues);
  console.log(mspssValue);
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMspssData({
      ...mspssData, [name]: value
    });

  }


  return (
    <>

      <div className='fs-5 mt-5'>Read each statement carefully. Indicate how you feel about each statement.</div>
      <hr></hr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">1</th>
        <td>Very Strongly Disagree</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">2</th>
        <td>Strongly Disagree</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">3</th>
        <td>Mildly Disagree</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">4</th>
        <td>Neutral</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">5</th>
        <td>Mildy Agree</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">6</th>
        <td>Strongly Agree</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">7</th>
        <td>Very Strongly Agree</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>




      <hr></hr>

      {mspss.map(question => <div>

        <div className="rendered-form form-check-inline">
          <div className="formbuilder-radio-group form-group field-radio-group">

            <label
              htmlFor="radio-group"
              className="formbuilder-radio-group-label mt-4">{question.question}
              {/* <span className="tooltip-element" tooltip="Select one">?</span> */}
            </label>

            <div
              className="radioGroupBelow radio-group"
              onChange={handleChange}
              // value={formData.dass}
              // className="radio-group"
              required>

              <label className="form-check-label" htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={1} />
                1</label>

              <label className="form-check-label " htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={2} />
                2</label>

              <label className="form-check-label " htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={3} />
                3</label>

              <label className="form-check-label " htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={4} />
                4</label>

              <label className="form-check-label " htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={5} />
                5</label>
              <label className="form-check-label " htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={6} />
                6</label>
              <label className="form-check-label " htmlFor="inlineRadio1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value={7} />
                7</label>



            </div>
          </div>
        </div>
      </div>
      
      )}
      <div className="form-outline mb-4">
        <select
          name="mspssSum"
          type="select"
          className="form-select"
          id="race"
          onChange={handleChange}
          value={mspssData.mspssSum}
        >
          <option value={mspssValue}>{sumArray()}</option>
        </select>
      </div>

{/* 

      <input
        className=''
        onChange={handleChange}
        type='text'
        disabled
        name={sum}
        defaultValue= {sumArray}
        value={mspssData.mspssSum}
        placeholder={sumArray()}

      /> */}
    </>
  )
}

export default MSPSS