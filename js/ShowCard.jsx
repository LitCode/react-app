// @flow

import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;

`;
const Image = Styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;

`;

type Props = {
  title: string,
  description: string,
  year: string,
  poster: string
};
const ShowCard = (props: Props) => (
  <Wrapper className="show-card">
    <Image alt={`${props.title} show poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
