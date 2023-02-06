import React from 'react'

const Input__counter: React.FC = () => {
const [value, setValue] = React.useState<string | number>('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
   setValue(+e.target.value);
}

return (<>
  <h1>Value: {value}</h1>
  <input
    type="number"
    value={value === 0 ? '' : value}
    onChange={handleChange}
  />
</>
);
}

export default Input__counter