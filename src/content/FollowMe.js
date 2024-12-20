import React from 'react'
import { Center, Heading, Stack, Link, IconButton } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import { socialNetworks } from '../utils/links.json'
import { FaAmazon, FaTwitter, FaYoutube } from 'react-icons/fa'

const FollowMe = () => {
  return (
    <Center id="contact" backgroundColor="black" borderRadius={10} minHeight={410} width={['100vw', '80vw']} my={2} py={2}>
      <Stack color="white" maxWidth="90%" fontSize={{ sm: 33, md: 23, lg: 33 }} height="100%" mx="auto">
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Stack width={300}>
            <Center>
              <TranslatedLabel text="equilibrio" />
            </Center>
            <Center>
              <Link href={socialNetworks.youtube} isExternal>
                <IconButton height={40} width={40} fontSize={46} aria-label="Youtube" colorScheme="red" icon={<FaYoutube />} />
              </Link>
            </Center>
          </Stack>
          <Stack width={300}>
            <Center>
              <TranslatedLabel text="liberdade" />
            </Center>
            <Center>
              <Link href={socialNetworks.twitter} isExternal>
                <IconButton height={40} width={40} fontSize={46} aria-label="Twitter" colorScheme="twitter" icon={<FaTwitter />} />
              </Link>
            </Center>
          </Stack>
          <Stack width={300}>
            <Center>
              <TranslatedLabel text="transformacao" />
            </Center>
            <Center>
              <Link href={socialNetworks.amazon} isExternal>
                <IconButton height={40} width={40} fontSize={46} aria-label="Amazon" colorScheme="yellow" icon={<FaAmazon />} />
              </Link>
            </Center>
          </Stack>
        </Stack>
        <Center mt={5}>
          <Heading variant="h3">@rodolfoberlese</Heading>
        </Center>
      </Stack>
    </Center>
  )
}

export default FollowMe
