import { useState } from 'react';

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const handleCheckboxChange = () => {
    setTcChecked(!tcChecked);
  };

  const checkboxLabel = (
    <label htmlFor='terms'>
      I agree to <span className={`text-blue-800`}>Terms and Conditions</span>
    </label>
  );

  return (
    <div>
      {checkboxLabel}
      <input
        type='checkbox'
        id='terms'
        checked={tcChecked}
        onChange={handleCheckboxChange}
      />
      <button disabled={!tcChecked}>Confirm Order</button>
    </div>
  );
};
export default SummaryForm;
