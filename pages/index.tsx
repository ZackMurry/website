import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
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
      Hi! I'm Zack, a second-year undergraduate student in Computer Science and
      Mathematics at the University of Missouri. I work as a student research
      assistant in the Virtualization, Multimedia, and Networking (VIMAN) lab,
      where I study computer networking, drone navigation, and edge computing.
      This past summer (2024), I did an internship at the University of Chicago
      researching distributed computing using Raspberry Pis. Outside of
      research, I also enjoy full-stack web development, compilers, and robots!
    </Text>
  </Box>
)

const ResearchSection: FC = () => {
  const imgWidth = useBreakpointValue({ base: '33%', lg: '30%', xl: '25%' })
  return (
    <Box mt='50px' mx={{ base: 'auto', xl: '0px' }}>
      <Heading as='h3' fontWeight='600' fontSize={{ base: '20px', xl: '28px' }}>
        Research
      </Heading>
      <Heading
        as='h4'
        fontWeight='600'
        fontSize={{ base: '16px', xl: '20px' }}
        fontStyle='italic'
        color='gray.600'
        mt='15px'
      >
        VIMAN
      </Heading>
      <Text fontSize={{ base: '14px', xl: '18px' }} mt='15px'>
        My work in the VIMAN lab is focused on creating solutions for autonomous
        drones. For example, we're currently working on a route generation
        software for package delivery using drones and delivery trucks via
        Reinforcement Learning (RL) with a Deep Q-Network (DQN). Additionally, I
        run experiments on the NSF-funded Aerial Experimentation and Research
        Platform for Advanced Wireless (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://aerpaw.org/'
          style={{ textDecoration: 'underline' }}
        >
          AERPAW
        </a>
        ) testbed, which facilitates experiments with autonomous drones and 5G
        networks. Specifically, I study computational offloading and control
        networking for video transmission applications, as well as truck-drone
        package delivery systems. We published a paper at an IEEE workshop
        earlier this year with experiments on the AERPAW testbed, which is
        available{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://ieeexplore.ieee.org/abstract/document/10620812/'
          style={{ textDecoration: 'underline' }}
        >
          here
        </a>
        .
      </Text>

      <Stack
        //direction={{ base: 'column', md: 'row' }}
        direction='row'
        align='center'
        justify='center'
        my='15px'
      >
        {/* todo: captions */}
        <Image
          src='/qgroundcontrol.jpg'
          width='632'
          height='552'
          alt='Drone navigation screenshot.'
          style={{ width: imgWidth, aspectRatio: 1 }}
        />
        <Image
          src='/coral.jpg'
          width='732'
          height='732'
          alt='Google Coral environmental system connected to a Raspberry Pi.'
          style={{ width: imgWidth, aspectRatio: 1 }}
        />
        <Image
          src='/CNERT_fig3b.png'
          width='556'
          height='445'
          alt='A figure I made for a paper.'
          style={{ width: imgWidth, aspectRatio: 1 }}
        />
      </Stack>

      <Heading
        as='h4'
        fontWeight='600'
        fontSize={{ base: '16px', xl: '20px' }}
        fontStyle='italic'
        color='gray.600'
        mt='30px'
      >
        University of Chicago
      </Heading>
      <Text fontSize={{ base: '14px', xl: '18px' }} mt='15px'>
        At my internship, I collaborated with the Agricultural and Rural (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://aerpaw.org/'
          style={{ textDecoration: 'underline' }}
        >
          ARA
        </a>
        ) Wireless Living Lab to deploy six Raspberry Pis in and around Ames,
        Iowa across farms and Iowa State buildings. These devices are connected
        to ARA's 5G radio infrastructure, and I conducted distributed computing
        experiments across these 5G links using Apache Hadoop to run MapReduce
        workloads.
      </Text>
    </Box>
  )
}

const WebDevelopmentSection: FC = () => {
  const captionColor = useColorModeValue('#444', '#aaa')
  return (
    <Box mt='50px' mx={{ base: 'auto', xl: '0px' }}>
      <Heading as='h3' fontWeight='600' fontSize={{ base: '20px', xl: '28px' }}>
        Web Development
      </Heading>
      <Text fontSize={{ base: '14px', xl: '18px' }} mt='15px' mb='35px'>
        I started making websites in my freshman year of high school, which was
        at the start of the pandemic. By following a few free, online courses, I
        taught myself the basics of the Java Spring framework and React. Since
        then, I have continued learning through creating projects. A few
        highlights are listed below, with more projects (both web and non-web)
        and information on the{' '}
        <a href='/projects.html' style={{ textDecoration: 'underline' }}>
          Projects
        </a>{' '}
        page.
      </Text>
      <Image
        src='/chessrs.png'
        width='1918'
        height='976'
        alt='Screenshot from chess project.'
        style={{ width: '100%', marginTop: '15px' }}
      />
      <Text
        w={{ base: '90%', xl: '80%' }}
        color={captionColor}
        textAlign='center'
        mx='auto'
        fontSize={{ base: '12px', xl: '14px' }}
        mb='35px'
        mt='5px'
      >
        ChesSRS is an interactive chess learning website that uses a
        flashcard-like spaced-repetition system (SRS) for practicing opening
        moves.
      </Text>

      {/* docs hotkey */}
      <Image
        src='/docs_hotkey_cws.png'
        // width='1918'
        // height='976'
        width='1493'
        height='702'
        alt='Docs Hotkey Chrome Webstore Page.'
        style={{ width: '100%', marginTop: '15px' }}
      />
      <Text
        w={{ base: '90%', xl: '80%' }}
        color={captionColor}
        textAlign='center'
        mx='auto'
        fontSize={{ base: '12px', xl: '14px' }}
        mb='35px'
        mt='5px'
      >
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://docs-hotkey.zackmurry.com/'
          style={{ textDecoration: 'underline' }}
        >
          Docs Hotkey
        </a>{' '}
        is a Chrome extension for Google Docs that allows the creation of
        complex shortcuts. It has over 4,500 weekly users and a 4.9-star rating.
      </Text>

      <Image
        src='/sigma_scoring.png'
        width='1918'
        height='976'
        alt='Screenshot from scorekeeping project.'
        style={{ width: '100%', marginTop: '15px' }}
      />
      <Text
        w={{ base: '90%', xl: '80%' }}
        color={captionColor}
        textAlign='center'
        mx='auto'
        fontSize={{ base: '12px', xl: '14px' }}
        mb='35px'
        mt='5px'
      >
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://central-robotics.github.io/sigma-scoring/'
          style={{ textDecoration: 'underline' }}
        >
          Sigma Scoring
        </a>{' '}
        is a web app that allows for visual scorekeeping for the 2022-2023 FIRST
        Technology Challenge (FTC) game. I was a programmer for my high school's
        FTC robotics team for two years, and I currently volunteer at local
        tournaments to help score matches.
      </Text>
    </Box>
  )
}

// todo: extract this code into _app.tsx
// todo: interactive CV (with links and more) would be cool
const HomePage: FC = () => (
  <Box mx={{ base: '0%', lg: '5%', xl: '10%' }}>
    <Header />
    <Stack
      //className={styles.content} */}
      direction={{ base: 'column', xl: 'row' }}
      mx='auto'
      maxWidth='1080px'
      width={{ base: '95%', md: '85%', lg: '80%', xl: '65%' }}
      mt={{ base: '20px', xl: '50px' }}
      mb='350px'
    >
      <ProfileSection />
      <Box w={{ base: '100%', lg: '90%', xl: '80%' }} mx='auto'>
        <AboutSection />
        <ResearchSection />
        <WebDevelopmentSection />
      </Box>
    </Stack>
  </Box>
)

export default HomePage
