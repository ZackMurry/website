import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Header from 'components/Header'
import { FC } from 'react'
import { Repo, Law, Code, Book } from '@github/octicons-react'
import styles from '../public/index.module.css'
import ProfileSection from 'components/ProfileSection'

const AboutProjectsSection: FC = () => (
  <Box w='80%'>
    <Heading as='h3' fontWeight='600'>
      Projects
    </Heading>
    <Text fontSize='18px' mt='10px'>
      Here are some of the programming projects I've worked on over the past few years.
    </Text>
    {/* 
    in order of pride:
    Docs Hotkey
    Nodecode
    Math IA (present as robotics)
    ChesSRS
    Stellar (with compiler demo)
    RapidReels
    */}
  </Box>
)

const HomePage: FC = () => (
  <Box mx='10%' animation='ease-in-out 0.3s both'>
    <Header />
    <Flex
      //className={styles.content} */}
      mx='auto'
      maxWidth='1080px'
      width='65%'
      height='5000px'
      justifyContent='space-between'
      my='50px'
    >
      <ProfileSection />
      <AboutProjectsSection />
    </Flex>
  </Box>
)

export default HomePage
