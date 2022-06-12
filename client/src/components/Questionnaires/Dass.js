import React from 'react'

function Dass({ dassData, setDassData }) {

  const dass = [
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
    {
      "number": "3",
      "key": "dass3",
      "question": "I couldn’t seem to experience any positive feeling at all."
    },
    {
      "number": "4",
      "key": "dass4",
      "question": "I experienced breathing difficulty(e.g.excessively rapid breathing, breathlessness in the absence of physical exertion)."
    },
    {
      "number": "5",
      "key": "dass5",
      "question": "I found it difficult to work up the initiative to do things"
    },
    {
      "number": "6",
      "key": "dass6",
      "question": "I tended to over- react to situations."
    },
    {
      "number": "7",
      "key": "dass7",
      "question": "I experienced trembling(e.g.in the hands)."
    },
    {
      "number": "8",
      "key": "dass8",
      "question": "I felt that I was using a lot of nervous energy."
    },
    {
      "number": "9",
      "key": "dass9",
      "question": "I was worried about situations in which I might panic and make a fool of myself."
    },
    {
      "number": "10",
      "key": "dass10",
      "question": "I felt that I had nothing to look forward to."
    },
    {
      "number": "11",
      "key": "dass11",
      "question": "I found myself getting agitated."
    },
    {
      "number": "12",
      "key": "dass12",
      "question": "I found it difficult to relax."
    },
    {
      "number": "13",
      "key": "dass13",
      "question": "I felt down - hearted and blue."
    },
    {
      "number": "14",
      "key": "dass14",
      "question": "I was intolerant of anything that kept me from getting on with what I was doing."
    },
    {
      "number": "15",
      "key": "dass15",
      "question": "I felt I was close to panic."
    },
    {
      "number": "16",
      "key": "dass16",
      "question": "I was unable to become enthusiastic about anything."
    },
    {
      "number": "17",
      "key": "dass17",
      "question": "I felt I wasn’t worth much as a person."
    },
    {
      "number": "18",
      "key": "dass18",
      "question": "I felt that I was rather touchy."
    },
    {
      "number": "19",
      "key": "dass19",
      "question": "I was aware of the action of my heart in the absence of physical exertion(e.g.sense of heart rate increase, heart missing a beat)"
    },
    {
      "number": "20",
      "key": "dass20",
      "question": "I felt scared without any good reason."
    },
    {
      "number": "21",
      "key": "dass21",
      "question": "I felt that life was meaningless."
    }
  ]

  // onChange in form, links to state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setDassData({
      ...dassData, [name]: value,
    });
  };

  return (
    <>
      <div className='fs-5 mt-5'>Please read each statement and circle a number 0, 1, 2 or 3 which indicates how much the statement
        applied to you over the past week. There are no right or wrong answers. Do not spend too much
        time on any statement.</div>
        <hr></hr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">0</th>
        <td>Did not apply to me at all</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">1</th>
        <td>Applied to me to some degree, or some of the time</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">2</th>
        <td>Applied to me to a considerable degree or a good part of time</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>
      <tr className='fs-5'>
        <th className='pe-4 py-2' scope="row">3</th>
        <td>Applied to me very much or most of the time</td>
        {/* <td>Column content</td> */}
        {/* <td>Column content</td> */}
      </tr>

      <hr></hr>

      {dass.map(question => <div>

        <div className="rendered-form form-check-inline">
          <div className="formbuilder-radio-group form-group field-radio-group">

            <label
              htmlFor="radio-group"
              className="formbuilder-radio-group-label fs-5 mt-4">{question.question}


              {/* <span className="tooltip-element" tooltip="Select one">?</span> */}
            </label>

            <div 
            onChange={handleChange}
            // value={formData.dass}
            className="radio-group"
            required>

              {/* Option 0 */}
              <div className="form-check form-check-inline fs-5">
                <input
                  className="form-check-input fs-5"
                  required
                  // checked=""
                  type="radio"
                  name={question.key}
                  id="inlineRadio0" 
                  value="0" />

                <label className="form-check-label" htmlFor="inlineRadio1">0</label>
              </div>

              {/* Option 1 */}
              <div className="form-check form-check-inline fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value="1" />

                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
              </div>

              {/* Option 2 */}
              <div className="form-check form-check-inline fs-5">
                <input
                  className="form-check-input"
                  // checked=""
                  type="radio"
                  name={question.key}
                  // id="inlineRadio2"
                  value="2" />

                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
              </div>

              {/* Option 3 */}
              <div className="form-check form-check-inline fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  id="inlineRadio3"
                  value="3" />

                <label className="form-check-label" htmlFor="inlineRadio3">3</label>
              </div>


            </div>
          </div>


        </div>
      </div>)}
    </>
  )
}

export default Dass