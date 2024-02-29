import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useBreakpoint,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import Header from 'components/Header'
import {FC} from 'react'
import ProfileSection from 'components/ProfileSection'
import Image from 'next/image'
import {ExternalLinkIcon, LinkIcon} from '@chakra-ui/icons'
import dynamic from 'next/dynamic'
const ReactEmbedGist = dynamic(() => import('react-embed-gist'), {
  ssr: false,
})

const NodecodeSection: FC = () => {
  const gistClass = useColorModeValue('', 'dark-gist')
  const gistSize = useBreakpointValue({
    base: 'gist-size-small',
    lg: 'gist-size-large',
  })
  return (
    <Box w={{base: '90%', xl: '80%'}} mx={{base: 'auto', xl: '0px'}}>
      <Heading as="h3" fontWeight="600" fontSize={{base: '20px', xl: '28px'}}>
        Nodecode
      </Heading>
      <Text fontSize={{base: '14px', xl: '18px'}} mt="10px">
        I started working on Nodecode in preparation for the 2022 Technology
        Student Association conference, which is a national high-school
        competitions with many events. My teammate Daniel Huinda and I worked
        together to create something that had been in my list of ideas for
        several months: a graph-based programming language, in which related
        code is connected through edges. Through my earlier experience in
        creating{' '}
        <a
          style={{textDecoration: 'underline'}}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ZackMurry/stellar">
          stellar
          <ExternalLinkIcon mt="-5px" width="24px" ml="3px" />
        </a>
        , a C-like programming language written in C++, I engineered a C#-based
        compiler using a ported version of the LLVM application binary
        interface. Daniel, with his experience in Windows desktop applications,
        created the UI.
      </Text>
      <Box my="15px" w="100%" h={{base: 200, xl: 415}}>
        <iframe
          width="100%"
          height="100%"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/hLlilnDnIKQ?si=0VX5ZYGmXiYs-Zlk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </Box>
      <Heading
        as="h3"
        fontWeight="600"
        fontSize={{base: '18px', xl: '24px'}}
        mt="30px">
        How it works
      </Heading>
      <Text fontSize={{base: '14px', xl: '18px'}} mt="10px">
        A typical compiler has four basic components: a lexer, a parser, a
        semantic analyzer, and a code generator. Essentially, these parts read
        the text into symbols, group the symbols into an Abstract Syntax Tree
        (AST), run pre-processing to create things like function prototypes, and
        generate the executable binary, respectively. Since the user's code in
        Nodecode is already structurally organized into a modified AST, these
        first two compilation steps can be skipped, meaning that the compiler
        simply runs pre-processing on the AST and calls the LLVM interface to
        create an appropriate binary (which is easier said than done).
      </Text>
      <Box my="20px">
        <Image
          src="/nodecode_llvm.png"
          width="1920"
          height="1080"
          alt="Nodecode LLVM conversion."
        />
      </Box>

      <Text fontSize={{base: '14px', xl: '18px'}} mt="10px" mb="15px">
        For example, below is the code to pass a function declaration object
        into LLVM.
      </Text>

      <Box className={`${gistClass} ${gistSize}`}>
        <ReactEmbedGist
          // @ts-ignore
          gist="ZackMurry/b340dd3ea0876f3f2a3bb497e00aa8b9"
          file="ASTFunctionDefinition.cs"
        />
      </Box>
    </Box>
  )
}

const NodecodePage: FC = () => (
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
      <NodecodeSection />
    </Stack>
  </Box>
)

export default NodecodePage
