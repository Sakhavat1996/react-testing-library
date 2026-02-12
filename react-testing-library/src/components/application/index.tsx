export const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>heading2</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="textarea">Name2</label>
          <textarea id="textarea" />
        </div>
        <div>
          <label htmlFor="">Job Location</label>
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
