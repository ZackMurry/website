import { Box, Flex, HStack, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Header from 'components/Header'
import { FC } from 'react'
import ProfileSection from 'components/ProfileSection'
import Image from 'next/image'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
import { MarkGithub } from '@github/octicons-react'

const AboutProjectsSection: FC = () => {
  const iconColor = useColorModeValue('black', 'white')
  return (
    <Box w={{ base: '90%', xl: '80%' }} mx={{ base: 'auto', xl: '0px' }}>
      <Heading as='h3' fontWeight='600' fontSize={{ base: '20px', xl: '28px' }}>
        Projects
      </Heading>
      <Text fontSize={{ base: '14px', xl: '18px' }} mt='10px'>
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
      <Box my='30px'>
        <Heading as='h3' fontWeight='600' fontSize={{ base: '18px', xl: '24px' }} textDecor='underline'>
          <a target='_blank' rel='noopener noreferrer' href='https://docs-hotkey.zackmurry.com'>
            Docs Hotkey
            <ExternalLinkIcon mt='-5px' width='24px' ml='10px' />
          </a>
        </Heading>
        <Stack mt='10px' direction={{ base: 'column', xl: 'row' }}>
          <Box width={{ base: '100%', xl: '60%' }}>
            <Text fontSize={{ base: '14px', xl: '18px' }}>
              A Chrome extension that enables the creation of complex keyboard shortcuts for Google Docs. These hotkeys are
              fully customizable and are compatible with a range of Docs functionality, including highlight (most popular),
              fonts, headings, add-ons, and more. Docs Hotkey is published on the Chrome Web Store, is used by over 2,500
              users every week, and has a five-star rating.
            </Text>
            <Flex justifyContent='flex-start' alignItems='center' mt='20px'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://chrome.google.com/webstore/detail/docs-hotkey/npkpplmpfeaeemeecniaikpjjfbfefhh?hl=en&authuser=0'
              >
                <LinkIcon boxSize={8} mr='10px' />
              </a>

              <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZackMurry/docs-hotkey'>
                <svg fill={iconColor} width='32' height='31.25' viewBox='0 0 16 16'>
                  <MarkGithub />
                </svg>
              </a>
            </Flex>
          </Box>
          <Box my={{ base: '15px', xl: 0 }}>
            <Image src='/docs_hotkey_preview.png' width='250' height='600' alt='Docs Hotkey Screenshot.' />
          </Box>
        </Stack>
      </Box>
      <Box my='40px'>
        <Heading as='h3' fontWeight='600' fontSize={{ base: '18px', xl: '24px' }} textDecor='underline'>
          <a href='/projects/nodecode'>Nodecode</a>
        </Heading>
        <Box mt='10px'>
          <Box>
            <Text fontSize={{ base: '14px', xl: '18px' }}>
              Nodecode is a desktop application for creating visually expressive programs and is particularly geared towards
              new programmers. The program placed 5th overall in Software Development at the 2022 National Technology Student
              Association Convention out of 500+ competitors. While it similar to block-code technologies like MIT Scratch,
              it differs by offering a graph-based approach to programming that allows for further visualization. This is
              among the first general-purpose node-based programming environment, as the idea has only been used in
              applications with limited scope, like in game-development software. You can read about how it works{' '}
              <a href='/projects/nodecode' style={{ textDecoration: 'underline' }}>
                here
              </a>
              .
            </Text>
            <Flex justifyContent='flex-start' alignItems='center' mt='20px'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://chrome.google.com/webstore/detail/docs-hotkey/npkpplmpfeaeemeecniaikpjjfbfefhh?hl=en&authuser=0'
              >
                <LinkIcon boxSize={8} mr='10px' />
              </a>

              <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZackMurry/docs-hotkey'>
                <svg fill={iconColor} width='32' height='31.25' viewBox='0 0 16 16'>
                  <MarkGithub />
                </svg>
              </a>
            </Flex>
          </Box>
          <Box my='20px'>
            <Image src='/nodecode_preview.png' width='1920' height='1080' alt='Nodecode Screenshot.' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const ProjectsPage: FC = () => (
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
      <AboutProjectsSection />
    </Stack>
  </Box>
)

export default ProjectsPage
