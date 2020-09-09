import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  flex: 450px 0 0;
  margin: 15px;
  padding: 25px;
  line-height: 150%;
  border-radius: 5px;
  list-style-type: none;
  background: white;
  box-shadow: 0 0 20px lightgray;
`;

const Image = styled.img`
  margin: 10px 30px 10px 10px;
  width: 100px;
  height: 100px;
  align-self: center;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Number = styled.div`
  color: #848dd0;
  font-weight: bold;
`;

const Location = styled.div`
  background: lightblue;
  padding: 0 15px;
  border-radius: 5px;
  width: fit-content;
  box-shadow: inset 0 10px 15px #eef3ff;
  margin-bottom: 10px;
`;

const Flex = styled.div`
  display: flex;
  ${(props) => props.styles}
`;

const Half = styled.div`
  flex: 50% 0 0;
`;

const BarContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 100px;
  height: 10px;
  border-radius: 5px;
  background: lightgray;
`;
const Bar = styled.div`
  height: 10px;
  background: lightblue;
  width: ${(props) => props.percentage}%;
  border-radius: 5px 0 0 5px;
`;

const StyledHr = styled.hr`
  width: 100%;
  margin: 15px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 20px;
`;

const Item = styled.li``;

const Card = ({ item }) => {
  let cleanedDegrees = {};
  if (item['latest.programs.cip_4_digit']) {
    cleanedDegrees = item['latest.programs.cip_4_digit'].reduce(
      (accu, item) => {
        if (accu[item.credential.title]) {
          accu[item.credential.title] = accu[item.credential.title] + 1;
        } else {
          accu[item.credential.title] = 1;
        }
        return accu;
      },
      {}
    );
  }
  return (
    <Container>
      <div>
        <Flex>
          <Image src="data:image/png;base64,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" />
          <Flex styles="flex-grow:1; flex-direction:column;">
            <Title>{item['school.name']}</Title>

            <Location>
              {item['school.city']}, {item['school.state']}
            </Location>

            <Flex>
              <Half>
                Student Size:
                <Number>
                  {item['latest.student.size'] &&
                    item['latest.student.size'].toLocaleString()}
                </Number>
              </Half>
              <Half>
                Admission Rate:
                <Number>
                  {(
                    item['latest.admissions.admission_rate.overall'] * 100
                  ).toFixed(0)}
                  %
                  <BarContainer>
                    <Bar
                      percentage={(
                        item['latest.admissions.admission_rate.overall'] * 100
                      ).toFixed(0)}
                    />
                  </BarContainer>
                </Number>
              </Half>
            </Flex>
          </Flex>
        </Flex>
        <StyledHr />
        <List>
          <b>Available Program Counts</b>:
          {Object.entries(cleanedDegrees).map(([key, value]) => (
            <Item key={key}>
              {key}: <b>{value}</b>
            </Item>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default Card;
