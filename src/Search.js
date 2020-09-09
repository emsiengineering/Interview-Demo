import React, { useState } from 'react';
import styled from 'styled-components';

let states = [
  'AK',
  'AL',
  'AR',
  'AS',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'GA',
  'GU',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VI',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY',
];

const Wrapper = styled.div`
  display: block;
  margin: 20px auto 40px auto;
  width: 600px;
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  color: gray;
  width: 100%;
  font-size: 30px;
  border: none;
  border-radius: 50px;
  padding: 10px 20px 10px 55px;
  ::placeholder {
    color: lightgray;
  }
`;

const Image = styled.img`
  width: 40px;
  position: absolute;
  left: 10px;
  top: 8px;
`;

const Suggestions = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 50px;
  width: 100%;
  box-shadow: 0 0 20px lightgray;
  z-index: 1;
  background: white;
  border-radius: 5px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 5px;
  background: white;
  color: gray;
  font-size: 20px;
  padding: 10px;
  :hover {
    background: #eef3ff;
  }
`;
const Suggestion = styled.li`
  list-style-type: none;
`;

const Search = ({ onSelect }) => {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const filteredList = states.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );
  console.log(input);
  return (
    <Wrapper onFocus={() => setOpen(true)}>
      <Input
        value={input}
        placeholder="Start Typing..."
        onChange={(e) => {
          setInput(e.target.value);
          setOpen(true);
        }}
      />
      <Image src="https://hottable.com/wp-content/uploads/2018/12/htlocation1.png" />
      {input && filteredList.length && open ? (
        <Suggestions>
          {filteredList.map((item) => (
            <Button
              key={item + input}
              onClick={() => {
                console.log('clicked!');
                onSelect(item);
                setInput(item);
                setOpen(false);
              }}
            >
              <Suggestion>{item}</Suggestion>
            </Button>
          ))}
        </Suggestions>
      ) : null}
    </Wrapper>
  );
};

export default Search;
