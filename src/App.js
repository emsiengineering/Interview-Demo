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
        https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential&api_key=UdlAhqa8pEIkspTRywK7x9tkfeUKswnu4oSoMGQt&school.state=WA
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
  /*const result = [
    {
      'school.school_url': 'www.ramapo.edu',
      'latest.admissions.admission_rate.overall': 0.6289,
      'school.name': 'Ramapo College of New Jersey',
      'school.state': 'NJ',
      id: 186201,
      'latest.student.size': 5262,
      'school.city': 'Mahwah',
    },
    {
      'school.school_url': 'www.centenaryuniversity.edu',
      'latest.admissions.admission_rate.overall': 0.6682,
      'school.name': 'Centenary University',
      'school.state': 'NJ',
      id: 183974,
      'latest.student.size': 1241,
      'school.city': 'Hackettstown',
    },
    {
      'school.school_url': 'https://www.camden.rutgers.edu',
      'latest.admissions.admission_rate.overall': 0.7138,
      'school.name': 'Rutgers University-Camden',
      'school.state': 'NJ',
      id: 186371,
      'latest.student.size': 5618,
      'school.city': 'Camden',
    },
    {
      'school.school_url': 'www.alfred.edu',
      'latest.admissions.admission_rate.overall': 0.6269,
      'school.name': 'Alfred University',
      'school.state': 'NY',
      id: 188641,
      'latest.student.size': 1591,
      'school.city': 'Alfred',
    },
    {
      'school.school_url': 'www.shu.edu/',
      'latest.admissions.admission_rate.overall': 0.7036,
      'school.name': 'Seton Hall University',
      'school.state': 'NJ',
      id: 186584,
      'latest.student.size': 5919,
      'school.city': 'South Orange',
    },
    {
      'school.school_url': 'www.crouse.org/nursing',
      'latest.admissions.admission_rate.overall': 0.6591,
      'school.name': 'Pomeroy College of Nursing at Crouse Hospital',
      'school.state': 'NY',
      id: 190451,
      'latest.student.size': 247,
      'school.city': 'Syracuse',
    },
  ];*/

  return (
    <>
      <Search
        onSelect={(location) => {
          console.log('location', location);
          fetch(
            `
            per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential&api_key=a4k54fmkc3ZVm0EFGsE53Qp5stDknn9Apj1fULQx&school.state=WA`
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
