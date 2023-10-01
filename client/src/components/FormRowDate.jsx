import DatePicking from "./DatePicking";

const FormRowDate = ({ name }) => {
  return (
    <div className="app">
      <label htmlFor="date" className="form-label">
        date of birth
      </label>
      <DatePicking name={name}/>
    </div>
  );
};
export default FormRowDate;
