import React from 'react'

function Stress({ formData, setFormData }) {

  const dass = [
    {
      "key": "dass1",
      "question": "I found it hard to wind down."
    },
    {
      "key": "dass2",
      "question": "I was aware of dryness of my mouth."
    },
    {
      "key": "dass3",
      "question": "I couldn’t seem to experience any positive feeling at all."
    },
    {
      "key": "dass4",
      "question": "I experienced breathing difficulty(e.g.excessively rapid breathing, breathlessness in the absence of physical exertion)."
    },
    {
      "key": "dass5",
      "question": "I found it difficult to work up the initiative to do things"
    },
    {
      "key": "dass6",
      "question": "I tended to over- react to situations."
    },
    {
      "key": "dass7",
      "question": "I experienced trembling(e.g.in the hands)."
    },
    {
      "key": "dass8",
      "question": "I felt that I was using a lot of nervous energy."
    },
    {
      "key": "dass9",
      "question": "I was worried about situations in which I might panic and make a fool of myself."
    },
    {
      "key": "dass10",
      "question": "I felt that I had nothing to look forward to."
    },
    {
      "key": "dass11",
      "question": "I found myself getting agitated."
    },
    {
      "key": "dass12",
      "question": "I found it difficult to relax."
    },
    {
      "key": "dass13",
      "question": "I felt down - hearted and blue."
    },
    {
      "key": "dass14",
      "question": "I was intolerant of anything that kept me from getting on with what I was doing."
    },
    {
      "key": "dass15",
      "question": "I felt I was close to panic."
    },
    {
      "key": "dass16",
      "question": "I was unable to become enthusiastic about anything."
    },
    {
      "key": "dass17",
      "question": "I felt I wasn’t worth much as a person."
    },
    {
      "key": "dass18",
      "question": "I felt that I was rather touchy."
    },
    {
      "key": "dass19",
      "question": "I was aware of the action of my heart in the absence of physical exertion(e.g.sense of heart rate increase, heart missing a beat)"
    },
    {
      "key": "dass20",
      "question": "I felt scared without any good reason."
    },
    {
      "key": "dass21",
      "question": "I felt that life was meaningless."
    }
  ]

  // onChange in form, links to state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData, [name]: value,
    });
  };

  return (
    <>
      {dass.map(question => <div>

        <div className="rendered-form form-check-inline">
          <div className="formbuilder-radio-group form-group field-radio-group">

            <label
              htmlFor="radio-group"
              className="formbuilder-radio-group-label">{question.question}


              {/* <span className="tooltip-element" tooltip="Select one">?</span> */}
            </label>

            <div 
            onChange={handleChange}
            // value={formData.dass}
            className="radio-group"
            required>

              {/* Option 0 */}
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  required
                  // checked=""
                  type="radio"
                  name={question.key}
                  id="inlineRadio0" 
                  value="0" />

                <label className="form-check-label" htmlFor="inlineRadio1">0</label>
              </div>

              {/* Option 1 */}
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.key}
                  // id="inlineRadio1" 
                  value="1" />

                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
              </div>

              {/* Option 2 */}
              <div className="form-check form-check-inline">
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
              <div className="form-check form-check-inline">
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

export default Stress