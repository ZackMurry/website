import { Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Header from 'components/Header'
import { FC } from 'react'
import ProfileSection from 'components/ProfileSection'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const AboutSection: FC = () => (
  <Box mx={{ base: 'auto', xl: '0px' }}>
    <Heading as='h3' fontWeight='600' fontSize={{ base: '20px', xl: '28px' }}>
      About
    </Heading>
    <Text fontSize={{ base: '14px', xl: '18px' }} mt='15px'>
      Hi! I'm Zack, a first-year undergraduate student in Computer Science and Mathematics at the University of Missouri. I
      work as a student research assistant in the Virtualization, Multimedia, and Networking (VIMAN) lab, where I study drone
      networks and edge computing. I also enjoy front- and back-end web development, creating compilers, and working with
      robots!
      {/* todo: introduce webdev and compiler work, maybe in next section though */}
    </Text>
  </Box>
)

const ResearchSection: FC = () => (
  <Box mt='50px' mx={{ base: 'auto', xl: '0px' }}>
    <Heading as='h3' fontWeight='600' fontSize={{ base: '20px', xl: '28px' }}>
      Research
    </Heading>
    <Text fontSize={{ base: '14px', xl: '18px' }} mt='15px'>
      My work in the VIMAN lab is mostly on designing and executing experiments on the NSF-funded Aerial Experimentation and
      Research Platform for Advanced Wireless (
      <a target='_blank' rel='noopener noreferrer' href='https://aerpaw.org/' style={{ textDecoration: 'underline' }}>
        AERPAW
      </a>
      ) testbed, which facilitates experiments with autonomous drones and 5G networks. Specifically, I study computational
      offloading and control networking for video transmission applications, as well as truck-drone package delivery systems.
    </Text>

    <Stack direction={{ base: 'column', lg: 'row' }} align='center' justify='center' my='15px'>
      {/* todo: captions */}
      <Image
        src='/qgroundcontrol.jpg'
        width='632'
        height='552'
        alt='Drone navigation screenshot.'
        style={{ width: 200, height: 200 }}
      />
      <Image
        src='/coral.jpg'
        width='732'
        height='732'
        alt='Google Coral environmental system connected to a Raspberry Pi.'
        style={{ width: 200, height: 200 }}
      />
      <Image
        src='/CNERT_fig3b.png'
        width='556'
        height='445'
        alt='A figure I made for a paper.'
        style={{ width: 230, height: 200 }}
      />
    </Stack>

    <Text fontSize={{ base: '14px', xl: '18px' }} mt='15px'>
      Additionally, I have recently started a project in edge computing by using the Internet Equity Initiative's{' '}
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://internetequity.org/floto/'
        style={{ textDecoration: 'underline' }}
      >
        FLOTO
      </a>{' '}
      infrastructure for managing experiments in contexts outside of broadband speed/reliability. We are prototyping the use
      of Google Coral environmental sensors to collect data about the air quality, weather, and more in a distributed manner
      using Raspberry Pis.
    </Text>
  </Box>
)

// todo: extract this code into _app.tsx
const HomePage: FC = () => (
  <Box mx={{ base: '0%', lg: '5%', xl: '10%' }}>
    <Header />
    <Stack
      //className={styles.content} */}
      direction={{ base: 'column', xl: 'row' }}
      mx='auto'
      maxWidth='1080px'
      width={{ base: '95%', md: '85%', lg: '80%', xl: '65%' }}
      height='5000px'
      mt={{ base: '20px', xl: '50px' }}
      mb='50px'
    >
      <ProfileSection />
      <Box w={{ base: '100%', lg: '90%', xl: '80%' }} mx='auto'>
        <AboutSection />
        <ResearchSection />
      </Box>
    </Stack>
  </Box>
)

export default HomePage
