import React, { Fragment } from 'react';
import Head from 'next/head';
import { Text, Box } from 'rebass';

import { Container } from '../components/Container';
import { Lesson } from '../components/Lesson';

const lessons = [
  {
    title: <Fragment>Nude & Брови </Fragment>,
    about: (
      <Fragment>
        Nude - это ты, только чуть лучше! Самый трендовый мейкап, который не
        выйдет из моды еще долгое время. Идеальная кожа, нежный макияж глаз,
        натуральные брови. Свежий, легкий макияж и в пир, и в мир!
      </Fragment>
    ),
    themes: [
      'Экспресс уход за лицом: как быстро оживить кожу и подготовить ее к макияжу;',
      'Лучшие бьюти-продукты на рынке: плюсы и минусы;',
      'Тонкости подбора тонального крема, консилера, корректора, хайлайтера, пудры, румян;',
      'Идеальная форма бровей для вашего строения лица;',
      'Как изменить взгляд с помощью бровей: выглядеть более стройной и молодой;',
    ],
    learn: [
      'Подбирать бьюти-средства, которые точно будете использовать;',
      'Создавать эффект увлажненной, ухоженной кожи;',
      'Выглядеть свежей при помощи румян и хайлайтера;',
      'Моделировать форму бровей, учитывая строение вашего лица;',
      'Самостоятельно поддерживать форму бровей;',
    ],
  },
];

export default () => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Text textAlign={'center'} fontSize={5} my={4}>
          Ирина Жукова
        </Text>
        <Box as={'ul'} />
        {lessons.map((lesson, idx) => {
          return <Lesson {...lesson} key={idx} />;
        })}
      </Container>
    </Fragment>
  );
};
