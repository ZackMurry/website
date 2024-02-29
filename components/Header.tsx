import {FC} from 'react'
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import {MarkGithub} from '@github/octicons-react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

// todo: mobile navbar
const Header: FC = () => {
  const iconColor = useColorModeValue('black', 'white')
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Box borderBottom="1px solid rgb(52, 56, 58)" w="100%" py="15px">
      <Flex
        mx="auto"
        maxWidth="1080px"
        w={{base: '90%', md: '65%'}}
        justifyContent="space-between"
        alignItems="center">
        <Heading
          as="h4"
          fontSize={{base: '20px', xl: '24px'}}
          fontWeight="normal">
          <a href="/">Zack Murry</a>
        </Heading>
        <Flex justifyContent="space-evenly" alignItems="center">
          <Box p="0 5px" pt="3px" mr="10px">
            <a href="/cv.pdf">
              <Heading as="h5" fontWeight="normal" fontSize="18px">
                CV
              </Heading>
            </a>
          </Box>
          <Box p="0 5px" pt="3px">
            <a href="/projects">
              <Heading as="h5" fontWeight="normal" fontSize="18px">
                Projects
              </Heading>
            </a>
          </Box>
          <Box p="0 5px" pt="4px">
            <IconButton
              aria-label="Change color mode"
              bg="none"
              onClick={toggleColorMode}>
              {colorMode !== 'light' ? (
                <SunIcon color="white" w="24px" h="24px" />
              ) : (
                <MoonIcon color="black" w="24px" h="24px" />
              )}
            </IconButton>
          </Box>
          <Box p="0 5px" pt="4px">
            <IconButton aria-label="Visit GitHub page" bg="none">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ZackMurry">
                <svg
                  fill={iconColor}
                  width="24"
                  height="31.25"
                  viewBox="0 0 16 16">
                  <MarkGithub />
                </svg>
              </a>
            </IconButton>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
