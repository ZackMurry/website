import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import Image from 'next/image'

const ProfileSection: FC = () => (
  <Box alignSelf='baseline' position='sticky' w='20%' top='5em' mr='30px'>
    <Image
      src='/profile_pic_cropped.png'
      width='160'
      height='160'
      alt='Profile picture.'
      style={{ borderRadius: '50%', margin: '0 auto' }}
    />
    <Box py='15px'>
      <Heading as='h6' fontSize='22px'>
        Zack Murry
      </Heading>
      <Text mt='5px'>B.S. student in Computer Science</Text>
      <Text mt='5px'>University of Missouri</Text>
    </Box>
  </Box>
)

export default ProfileSection
