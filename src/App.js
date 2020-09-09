import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search.js';
import Card from './Card.js';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-inline-start: 0;
`;

const App = () => {
  const [result, setResult] = useState([]);
  useEffect(
    () =>
      fetch(
        `
        https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=UdlAhqa8pEIkspTRywK7x9tkfeUKswnu4oSoMGQt
        `
      )
        .then((res) => res.json())
        .then((res) =>
          setResult(
            res.results
              .filter(
                (item) => item['latest.admissions.admission_rate.overall'] > 0
              )
              .slice(0, 30)
          )
        ),
    []
  );

  return (
    <>
      <Search
        onSelect={(location) => {
          fetch(
            `
            https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=a4k54fmkc3ZVm0EFGsE53Qp5stDknn9Apj1fULQx&school.state=${location}`
          )
            .then((res) => res.json())
            .then((res) =>
              setResult(
                res.results
                  .filter(
                    (item) =>
                      item['latest.admissions.admission_rate.overall'] > 0
                  )
                  .slice(0, 30)
              )
            );
        }}
      />
      <Wrapper>
        {result.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Wrapper>
    </>
  );
};

export default App;
