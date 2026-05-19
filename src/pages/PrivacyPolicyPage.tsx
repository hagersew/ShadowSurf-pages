import { Box, Button, Container, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SiteLayout from '../components/layout/SiteLayout';

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <Box py={{ base: 12, md: 16 }}>
        <Container maxW="3xl">
          <Stack
            spacing={8}
            p={{ base: 6, md: 10 }}
            borderRadius="2xl"
            bg="surf.surface"
            border="1px solid"
            borderColor="surf.border"
            boxShadow="md"
          >
            <Stack spacing={4}>
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Legal
              </Text>
              <Heading size="xl">Privacy Policy</Heading>
              <Text color="surf.textMuted">
                ShadowSurf does not collect, store, or share any personal user data.
              </Text>
              <Text color="surf.textMuted">
                All settings and preferences are stored locally on the user&apos;s
                device using Chrome storage APIs. No browsing data is transmitted or
                accessed externally.
              </Text>
              <Text color="surf.textMuted">
                We respect user privacy and are committed to keeping your browsing
                experience secure.
              </Text>
            </Stack>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button as={RouterLink} to="/" colorScheme="purple">
                Back to Home
              </Button>
              <Text fontSize="sm" color="surf.textMuted" alignSelf="center">
                Questions? Visit{' '}
                <Link
                  href="https://hagersew.com"
                  isExternal
                  textDecoration="underline"
                  color="brand.600"
                >
                  Hagersew
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </SiteLayout>
  );
}

export default PrivacyPolicyPage;
