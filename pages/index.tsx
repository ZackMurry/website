import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Header from 'components/Header'
import { FC } from 'react'
import { Repo, Law, Code, Book } from '@github/octicons-react'

const ProjectsSection = () => {
  const accentColor = useColorModeValue('black', 'white')
  return (
    <Box id='projects' mt='500px'>
      <Flex justifyContent='flex-start' alignItems='flex-start'>
        <Box p='3px 5px 0 10px'>
          <svg fill={accentColor} width='32' height='32' viewBox='0 0 12 16'>
            <Repo />
          </svg>
        </Box>
        <Heading as='h3'>Projects</Heading>
      </Flex>
      <Box borderLeft={`2px dashed ${accentColor}`} ml='25px'>
        <Box pl='50px' pt='50px'>
          <svg fill={accentColor} width='32' height='32' viewBox='0 0 14 14'>
            <Law />
          </svg>
          <Heading as='h5' fontSize='24px' pt='10px'>
            Cardtown
          </Heading>
          <Heading as='h6' fontSize='14px' fontWeight='normal'>
            December 2020 — Present
          </Heading>
          <Box pt='5px'>
            <Text>
              Cardtown is a platform for storing and organizing evidence for formal styles of debate. It is currently under
              development.
            </Text>
            <Flex justifyContent='flex-start' pt='10px' pl='10px'>
              <svg fill={accentColor} width='24' height='24' viewBox='0 3 14 10'>
                <Code />
              </svg>
              <Text pt='2px' pl='5px'>
                React, Next.js, Java, Spring, PostgreSQL, and Nginx
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box pl='50px' pt='50px'>
          <svg fill={accentColor} width='36' height='36' viewBox='0 0 16 11.2'>
            <Book />
          </svg>
          <Heading as='h5' fontSize='24px' pt='10px'>
            Blubo
          </Heading>
          <Heading as='h6' fontSize='14px' fontWeight='normal'>
            January 2021
          </Heading>
          <Box pt='5px'>
            <Text>Blubo is a website that allows users to compete with their friends to see who can read the most.</Text>
            <Flex justifyContent='flex-start' pt='10px' pl='10px'>
              <svg fill={accentColor} width='24' height='24' viewBox='0 3 14 10'>
                <Code />
              </svg>
              <Text pt='2px' pl='5px'>
                React, Next.js, Java, Spring, PostgreSQL, and Nginx
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const HomePage: FC = () => (
  <Box p='2.5%' mb='5000px'>
    <Header />
    <Box p='5%'>
      <Heading as='h1'>Hi, I'm Zack Murry</Heading>
      <ProjectsSection />
    </Box>
  </Box>
)

export default HomePage
