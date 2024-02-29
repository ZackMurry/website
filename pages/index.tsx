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
import {FC} from 'react'
import ProfileSection from 'components/ProfileSection'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import Image from 'next/image'

const AboutSection: FC = () => (
  <Box mx={{base: 'auto', xl: '0px'}}>
    <Heading as="h3" fontWeight="600" fontSize={{base: '20px', xl: '28px'}}>
      About
    </Heading>
    <Text fontSize={{base: '14px', xl: '18px'}} mt="15px">
      Hi! I'm Zack, a first-year undergraduate student in Computer Science and
      Mathematics at the University of Missouri. I work as a student research
      assistant in the Virtualization, Multimedia, and Networking (VIMAN) lab,
      where I study drone networks and edge computing. I also enjoy front- and
      back-end web development, creating compilers, and working with robots!
      {/* todo: introduce webdev and compiler work, maybe in next section though */}
    </Text>
  </Box>
)

const ResearchSection: FC = () => {
  const imgWidth = useBreakpointValue({base: '33%', lg: '30%', xl: '25%'})
  return (
    <Box mt="50px" mx={{base: 'auto', xl: '0px'}}>
      <Heading as="h3" fontWeight="600" fontSize={{base: '20px', xl: '28px'}}>
        Research
      </Heading>
      <Text fontSize={{base: '14px', xl: '18px'}} mt="15px">
        My work in the VIMAN lab is mostly on designing and executing
        experiments on the NSF-funded Aerial Experimentation and Research
        Platform for Advanced Wireless (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://aerpaw.org/"
          style={{textDecoration: 'underline'}}>
          AERPAW
        </a>
        ) testbed, which facilitates experiments with autonomous drones and 5G
        networks. Specifically, I study computational offloading and control
        networking for video transmission applications, as well as truck-drone
        package delivery systems.
      </Text>

      <Stack
        //direction={{ base: 'column', md: 'row' }}
        direction="row"
        align="center"
        justify="center"
        my="15px">
        {/* todo: captions */}
        <Image
          src="/qgroundcontrol.jpg"
          width="632"
          height="552"
          alt="Drone navigation screenshot."
          style={{width: imgWidth, aspectRatio: 1}}
        />
        <Image
          src="/coral.jpg"
          width="732"
          height="732"
          alt="Google Coral environmental system connected to a Raspberry Pi."
          style={{width: imgWidth, aspectRatio: 1}}
        />
        <Image
          src="/CNERT_fig3b.png"
          width="556"
          height="445"
          alt="A figure I made for a paper."
          style={{width: imgWidth, aspectRatio: 1}}
        />
      </Stack>

      <Text fontSize={{base: '14px', xl: '18px'}} mt="15px">
        Additionally, I have recently started a project in edge computing by
        using the Internet Equity Initiative's{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://internetequity.org/floto/"
          style={{textDecoration: 'underline'}}>
          FLOTO
        </a>{' '}
        infrastructure for managing experiments in contexts outside of broadband
        speed/reliability. We are prototyping the use of Google Coral
        environmental sensors to collect data about the air quality, weather,
        and more in a distributed manner using Raspberry Pis.
      </Text>
    </Box>
  )
}

const WebDevelopmentSection: FC = () => {
  const captionColor = useColorModeValue('#444', '#aaa')
  return (
    <Box mt="50px" mx={{base: 'auto', xl: '0px'}}>
      <Heading as="h3" fontWeight="600" fontSize={{base: '20px', xl: '28px'}}>
        Web Development
      </Heading>
      <Text fontSize={{base: '14px', xl: '18px'}} mt="15px" mb="35px">
        I started making websites in my freshman year of high school, which was
        at the start of the pandemic. By following a few free, online courses, I
        taught myself the basics of the Java Spring framework and React. Since
        then, I have continued learning through creating projects. A few
        highlights are listed below, with more projects (both web and non-web)
        and information on the{' '}
        <a href="/projects.html" style={{textDecoration: 'underline'}}>
          Projects
        </a>{' '}
        page.
      </Text>
      <Image
        src="/chessrs.png"
        width="1918"
        height="976"
        alt="Screenshot from chess project."
        style={{width: '100%', marginTop: '15px'}}
      />
      <Text
        w={{base: '90%', xl: '80%'}}
        color={captionColor}
        textAlign="center"
        mx="auto"
        fontSize={{base: '12px', xl: '14px'}}
        mb="35px"
        mt="5px">
        ChesSRS is an interactive chess learning website that uses a
        flashcard-like spaced-repetition system (SRS) for practicing opening
        moves.
      </Text>

      {/* docs hotkey */}
      <Image
        src="/docs_hotkey_cws.png"
        // width='1918'
        // height='976'
        width="1493"
        height="702"
        alt="Docs Hotkey Chrome Webstore Page."
        style={{width: '100%', marginTop: '15px'}}
      />
      <Text
        w={{base: '90%', xl: '80%'}}
        color={captionColor}
        textAlign="center"
        mx="auto"
        fontSize={{base: '12px', xl: '14px'}}
        mb="35px"
        mt="5px">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs-hotkey.zackmurry.com/"
          style={{textDecoration: 'underline'}}>
          Docs Hotkey
        </a>{' '}
        is a Chrome extension for Google Docs that allows the creation of
        complex shortcuts. It has over 2,500 weekly users and a 4.9-star rating.
      </Text>

      <Image
        src="/sigma_scoring.png"
        width="1918"
        height="976"
        alt="Screenshot from scorekeeping project."
        style={{width: '100%', marginTop: '15px'}}
      />
      <Text
        w={{base: '90%', xl: '80%'}}
        color={captionColor}
        textAlign="center"
        mx="auto"
        fontSize={{base: '12px', xl: '14px'}}
        mb="35px"
        mt="5px">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://central-robotics.github.io/sigma-scoring/"
          style={{textDecoration: 'underline'}}>
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
const HomePage: FC = () => (
  <Box mx={{base: '0%', lg: '5%', xl: '10%'}}>
    <Header />
    <Stack
      //className={styles.content} */}
      direction={{base: 'column', xl: 'row'}}
      mx="auto"
      maxWidth="1080px"
      width={{base: '95%', md: '85%', lg: '80%', xl: '65%'}}
      mt={{base: '20px', xl: '50px'}}
      mb="350px">
      <ProfileSection />
      <Box w={{base: '100%', lg: '90%', xl: '80%'}} mx="auto">
        <AboutSection />
        <ResearchSection />
        <WebDevelopmentSection />
      </Box>
    </Stack>
  </Box>
)

export default HomePage
