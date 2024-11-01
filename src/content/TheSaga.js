import React from 'react'
import { Button, Center, Image, Link, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import { powerHeart } from '../utils/links.json'
import ph1CoverDetailed from '../images/bookCovers/bookCoverDetailed.jpg'
import phLogoCor from '../images/power-heart/logo-ph-cor.png'
import { amazonButtonColor } from '../utils/constants'

const AboutSaga = () => (
  <>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.presenting" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.time" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.soul" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="90vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.heart" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh" px={{ lg: 20 }} mb={{ lg: 20 }}>
      <Image src={phLogoCor} />
    </Center>
  </>
)

const TheSaga = () => {
  const books = [
    {
      title: 'thesaga.ph1',
      launched: true,
      link: powerHeart.ph1Kindle,
      image: ph1CoverDetailed,
    },
    {
      title: 'thesaga.ph2',
      launched: false,
      image: 'bookComingSoon',
      expected: '2025',
    },
    {
      title: 'thesaga.ph3',
      launched: false,
      image: 'bookComingSoon',
      expected: '2026',
    },
  ]

  const getButtonLabel = (launched) => (launched ? 'thesaga.actionButton' : 'thesaga.disabledButton')

  return (
    <>
      <AboutSaga />
      <Stack id="books" width={{ lg: '80vw' }} minHeight={510} gap={10} mt={20} py={2} mx="auto">
        <Stack mb={10}>
          <Center>
            <TranslatedHeading props={{ fontSize: 42 }} text={'thesaga.title'} />
          </Center>
          <Center>
            <TranslatedHeading props={{ fontSize: 56 }} text={'thesaga.name'} />
          </Center>
          <Center>
            <TranslatedLabel props={{ fontSize: 26 }} text={'thesage.available'} />
          </Center>
        </Stack>
        <Center flexDirection={{ sm: 'column', lg: 'row' }} justifyContent="space-evenly">
          {books.map((book) => {
            return (
              <Stack key={book.title} gap={5} mb={{ sm: 20, lg: 0 }}>
                <Center border={'solid'} borderColor={'black'}>
                  {book.launched ? (
                    <Image width={320} height={480} src={book.image} />
                  ) : (
                    <Center width={320} height={480} background={'black'} color={'white'} textAlign={'center'} fontSize={24} fontWeight={600}>
                      <TranslatedLabel text={'thesaga.writing'} />
                    </Center>
                  )}
                </Center>
                <Center>
                  <strong>
                    <TranslatedLabel props={{ fontSize: 26 }} text={book.title} />
                  </strong>
                </Center>
                <Link href={book.link} isExternal>
                  <Button
                    width="100%"
                    isDisabled={!book.launched}
                    color="black"
                    bg={amazonButtonColor}
                    fontSize={26}
                    fontWeight={600}
                    p={8}
                    border={3}
                    borderRadius={10}
                    borderStyle={'solid'}
                    borderColor={'orange.200'}
                    _hover={{
                      color: 'white',
                      bg: 'orange.500',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <TranslatedLabel text={getButtonLabel(book.launched)} />
                  </Button>
                </Link>
              </Stack>
            )
          })}
        </Center>
      </Stack>
    </>
  )
}

export default TheSaga
