import React from 'react'
import { Box, Center, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import TranslatedHeading from '../components/TranslatedHeading'
import bookCover from '../images/bookCovers/mainCover.jpg'

const ThreeColumns = () => {
  return (
    <Container maxW="container.lg" width={'100%'}>
      <Center mt={'1em'} mb={'3em'}>
        <TranslatedHeading text={'Pronto para exalar sua alma?'} />
      </Center>
      <Flex width={'100%'} direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
        <Stack width={{ base: '100%', md: '30%' }}>
          <TranslatedHeading props={{ fontSize: '1.75rem' }} text={'Acompanhe'} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>
          <Text>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Stack>
        <Box maxWidth={{ base: '100%', md: '35%' }}>
          <Image width={'100%'} src={bookCover} />
        </Box>
        <Stack width={{ base: '100%', md: '30%' }}>
          <TranslatedHeading props={{ fontSize: '1.75rem' }} text={'Explore'} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>
        </Stack>
      </Flex>
    </Container>
  )
}

export default ThreeColumns
