import React from 'react';
import { Text } from 'rebass';

export const Lesson = ({ title, about, themes, learn }) => {
  return (
    <li>
      <Text as={'span'} mb={4} fontSize={3}>
        {title}
      </Text>
      <Text my={3}>{about}</Text>
      <Text>На уроке мы обсудим:</Text>
      <ul>
        {themes.map((theme, idx) => (
          <li key={idx}>{theme}</li>
        ))}
      </ul>
      <Text>Вы научитесь:</Text>
      <ul>
        {learn.map((l, idx) => (
          <li key={idx}>{l}</li>
        ))}
      </ul>
    </li>
  );
};
