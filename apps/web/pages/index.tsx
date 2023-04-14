import { type NextPage } from 'next';
import { Container } from '@mantine/core';
import Image from 'next/image';

import {cacheTest} from "cachetesting"

const Home: NextPage = () => {
  cacheTest.helloFunction({
    hiThere: "hello :)"
  })

  return (
    <>
      <Container>
        <Image src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Beagle-Pictures-720x340.jpg"
          width="512"
          height="512"
          alt="foobar" />
        <h1>hello</h1>
      </Container>
    </>
  );
};

export default Home;
