import { useState } from 'react';

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const handleCheckboxChange = () => {
    setTcChecked(!tcChecked);
  };

  return (
    <div>
      <label htmlFor='terms'>
        I agree to
        <div
          className='tooltip tooltip-right tooltip-error'
          data-tip='No ice cream will actually be delivered'
          data-testid='tooltipTC'
        >
          <div className={`text-blue-800`}>Terms and Conditions</div>
        </div>
      </label>
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
