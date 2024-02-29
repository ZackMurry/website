import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import {FC, ReactElement} from 'react'
import Image from 'next/image'
import {EmailIcon} from '@chakra-ui/icons'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'

interface ContactLinkProps {
  link: string
  mt: string
  text: string
  icon: any
}

const ContactLink: FC<ContactLinkProps> = ({link, mt, text, icon}) => (
  <a target="_blank" rel="noopener noreferrer" href={link}>
    <Flex alignItems="center" justifyContent="flex-start">
      <Icon as={icon} mt={mt} mr="10px" />
      <Text mt="5px">{text}</Text>
    </Flex>
  </a>
)

const ProfileSection: FC = () => {
  const imageSize = useBreakpointValue({base: 80, xl: 160})
  const showContact = useBreakpointValue({base: false, xl: true})
  return (
    <Stack
      direction={{base: 'row', xl: 'column'}}
      justify="flex-start"
      align="center"
      alignSelf="baseline"
      position={{base: undefined, xl: 'sticky'}}
      w={{base: '90%', xl: '20%'}}
      top="5em"
      m={{base: '0 auto', xl: '0 30px 0 0'}}>
      <Box mx={{base: '0', xl: 'auto'}}>
        <Image
          src="/profile_pic_cropped.png"
          // src=''
          width={imageSize}
          height={imageSize}
          alt="Profile picture."
          style={{borderRadius: '50%'}}
        />
      </Box>
      <Flex flexDir="column" justifyContent="center" py="15px">
        <Heading as="h6" fontSize={{base: '18px', xl: '22px'}}>
          Zack Murry
        </Heading>
        <Text mt="5px" fontSize={{base: '14px', xl: '16px'}}>
          B.S. student in Computer Science and Mathematics
        </Text>
        <Text
          mt={{base: '0px', xl: '5px'}}
          fontSize={{base: '14px', xl: '16px'}}>
          University of Missouri
        </Text>
      </Flex>
      {showContact && (
        <Box w="100%">
          <ContactLink
            icon={EmailIcon}
            mt="7px"
            link="mailto:zjmfrr@missouri.edu"
            text="Email"
          />
          <ContactLink
            icon={FaGithub}
            mt="7px"
            link="https://github.com/ZackMurry"
            text="GitHub"
          />
          <ContactLink
            icon={FaLinkedin}
            mt="5px"
            link="https://linkedin.com/in/zack-murry"
            text="LinkedIn"
          />
        </Box>
      )}
    </Stack>
  )
}

export default ProfileSection
