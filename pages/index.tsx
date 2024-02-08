import { Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Header from 'components/Header'
import { FC } from 'react'
import { Repo, Law, Code, Book } from '@github/octicons-react'
import styles from '../public/index.module.css'
import ProfileSection from 'components/ProfileSection'

const AboutSection: FC = () => (
  <Box w={{ base: '90%', xl: '80%' }} mx={{ base: 'auto', xl: '0px' }}>
    <Heading as='h3' fontWeight='600' fontSize={{ base: '20px', xl: '28px' }}>
      About
    </Heading>
    <Text fontSize={{ base: '14px', xl: '18px' }} mt='10px'>
      Hi! I'm Zack, a first-year undergraduate student in Computer Science at the University of Missouri. I work as a
      research assistant in the Virtualization, Multimedia, and Networking (VIMAN) lab under Dr. Prasad Calyam.
      {/* todo: introduce webdev and compiler work, maybe in next section though */}
    </Text>
  </Box>
)

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
      <AboutSection />
    </Stack>
  </Box>
)

export default HomePage
