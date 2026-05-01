import { Box, Button, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function PrivacyPolicyPage() {
  return (
    <Box
      minH="100vh"
      bg="radial-gradient(circle at top, #1f2340 0%, #0b0d16 45%, #07080f 100%)"
      color="whiteAlpha.900"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="3xl">
        <Stack
          spacing={8}
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.300"
        >
          <Stack spacing={4}>
            <Heading size="xl">Privacy Policy</Heading>
            <Text color="whiteAlpha.800">
              ShadowSurf does not collect, store, or share any personal user data.
            </Text>
            <Text color="whiteAlpha.800">
              All settings and preferences are stored locally on the user&apos;s device using
              Chrome storage APIs. No browsing data is transmitted or accessed externally.
            </Text>
            <Text color="whiteAlpha.800">
              We respect user privacy and are committed to keeping your browsing experience secure.
            </Text>
          </Stack>

          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            <Button as={RouterLink} to="/" colorScheme="purple">
              Back to Home
            </Button>
            <Text fontSize="sm" color="whiteAlpha.700" alignSelf="center">
              Powered by{' '}
              <Link href="https://hagersew.com" isExternal textDecoration="underline" color="purple.200">
                Hagersew
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default PrivacyPolicyPage
