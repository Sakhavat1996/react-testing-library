export const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <div>React Test Library</div>
      <h2>heading2</h2>
      <span title="heading-title-element">Span Element</span>
      <img src="" alt="person library" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Ad daxil edin"
            value={"Gojayev"}
          />
        </div>
        <div>
          <label htmlFor="textarea">Name2</label>
          <textarea id="textarea" value="  sakhavat    " />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select name="" id="job-location">
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="can">Canada</option>
            <option value="fr">France</option>
            <option value="nor">Norway</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
