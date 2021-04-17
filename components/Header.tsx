import { FC } from 'react'
import { Box, Flex, Heading, Icon, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MarkGithub } from '@github/octicons-react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header: FC = () => {
  const iconColor = useColorModeValue('black', 'white')
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justifyContent='space-between' alignItems='center' pb='15px'>
      <Heading as='h4' fontSize='24px'>
        Zack Murry
      </Heading>
      <Flex justifyContent='space-evenly' alignItems='center'>
        <Box p='0 5px' pt='3px'>
          <a href='/#projects'>
            <Heading as='h5' fontSize='18px'>
              Projects
            </Heading>
          </a>
        </Box>
        <Box p='0 5px'>
          <IconButton aria-label='Change color mode' bg='none' onClick={toggleColorMode}>
            {colorMode !== 'light' ? (
              <SunIcon color='white' w='24px' h='24px' />
            ) : (
              <MoonIcon color='black' w='24px' h='24px' />
            )}
          </IconButton>
        </Box>
        <Box p='0 5px' pb='5px'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZackMurry'>
            <svg fill={iconColor} width='32' height='31.25' viewBox='0 0 16 16'>
              <MarkGithub />
            </svg>
          </a>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
