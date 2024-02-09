import { Box, Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
import Image from 'next/image'

const ProfileSection: FC = () => {
  const imageSize = useBreakpointValue({ base: 80, xl: 160 })
  return (
    <Stack
      direction={{ base: 'row', xl: 'column' }}
      justify='flex-start'
      align='center'
      alignSelf='baseline'
      position={{ base: undefined, xl: 'sticky' }}
      w={{ base: '90%', xl: '20%' }}
      top='5em'
      m={{ base: '0 auto', xl: '0 30px 0 0' }}
    >
      <Box mx={{ base: '0', xl: 'auto' }}>
        <Image
          // src='/profile_pic_cropped.png'
          src=''
          width={imageSize}
          height={imageSize}
          alt='Profile picture.'
          style={{ borderRadius: '50%' }}
        />
      </Box>
      <Flex flexDir='column' justifyContent='center' py='15px'>
        <Heading as='h6' fontSize='22px'>
          Zack Murry
        </Heading>
        <Text mt='5px'>B.S. student in Computer Science</Text>
        <Text mt={{ base: '0px', xl: '5px' }}>University of Missouri</Text>
      </Flex>
    </Stack>
  )
}

export default ProfileSection
