import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function HomePage() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box
      minH="100vh"
      bg="radial-gradient(circle at top, #1f2340 0%, #0b0d16 45%, #07080f 100%)"
      color="whiteAlpha.900"
    >
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Stack spacing={{ base: 16, md: 20 }}>
          <Grid
            templateColumns={{ base: '1fr', lg: '1.1fr 0.9fr' }}
            gap={{ base: 10, lg: 12 }}
            alignItems="center"
          >
            <GridItem>
              <Stack spacing={6}>
                <Heading
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  lineHeight="1.05"
                >
                  ShadowSurf
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="whiteAlpha.800"
                  maxW="2xl"
                >
                  ShadowSurf transforms any website into a beautiful,
                  eye-friendly dark mode.
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="whiteAlpha.700"
                  maxW="2xl"
                >
                  Whether you&apos;re working late, reducing eye strain, or just
                  prefer a darker interface, ShadowSurf gives you full control
                  over how websites look.
                </Text>
                <HStack spacing={4} pt={2}>
                  <Button
                    as="a"
                    href="https://chromewebstore.google.com/detail/cpaeljippeleemiejdjndmgffggbkkjc"
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="blue"
                    variant="outline"
                    size="lg"
                    px={8}
                    borderRadius="full"
                  >
                    Download extension
                  </Button>
                  <Button
                    onClick={scrollToFeatures}
                    colorScheme="purple"
                    size="lg"
                    px={8}
                    borderRadius="full"
                  >
                    Explore Features
                  </Button>
                </HStack>
              </Stack>
            </GridItem>

            <GridItem>
              <VStack
                spacing={4}
                p={{ base: 4, md: 6 }}
                borderRadius="2xl"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="2xl"
              >
                <Image
                  src="/assets/shadowsurf-icon-1024.png"
                  alt="ShadowSurf logo"
                  borderRadius="2xl"
                />
              </VStack>
            </GridItem>
          </Grid>

          <Box
            id="features"
            p={{ base: 6, md: 10 }}
            borderRadius="2xl"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Heading size="lg" mb={6}>
              Features
            </Heading>
            <List spacing={4}>
              {[
                'Enable dark mode on any website',
                'One-click toggle for quick control',
                'Disable dark mode on specific sites',
                'Smart color inversion that preserves images and media',
                'Lightweight and fast performance',
                'Clean and simple interface',
              ].map((feature) => (
                <ListItem key={feature} fontSize={{ base: 'md', md: 'lg' }}>
                  <HStack align="start" spacing={3}>
                    <Text color="purple.300" mt="1">
                      ●
                    </Text>
                    <Text>{feature}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              {
                src: '/assets/screenshot1.png',
                alt: 'ShadowSurf extension panel',
              },
              {
                src: '/assets/screenshot2.png',
                alt: 'ShadowSurf visual tuning controls',
              },
              {
                src: '/assets/screenshot3.png',
                alt: 'ShadowSurf domain rules section',
              },
            ].map((item) => (
              <Box
                key={item.src}
                bg="whiteAlpha.100"
                borderRadius="xl"
                overflow="hidden"
                border="1px solid"
                borderColor="whiteAlpha.300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            ))}
          </SimpleGrid>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <Box
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Heading size="md" mb={4}>
                Why ShadowSurf?
              </Heading>
              <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
                Unlike basic dark mode extensions, ShadowSurf focuses on
                performance and usability. It avoids breaking website layouts
                while delivering a smooth dark browsing experience.
              </Text>
            </Box>

            <Box
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Heading size="md" mb={4}>
                Privacy First
              </Heading>
              <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
                ShadowSurf does NOT track, collect, or share your data.
                Everything runs locally in your browser.
              </Text>
            </Box>
          </Grid>

          <Box
            p={{ base: 6, md: 10 }}
            borderRadius="2xl"
            bg="purple.500"
            bgGradient="linear(to-r, purple.600, blue.500)"
          >
            <Stack spacing={4}>
              <Heading size="lg">Built for long browsing sessions</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Perfect for developers, designers, and anyone who spends long
                hours online.
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">
                Install ShadowSurf and surf the web the way your eyes prefer.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Flex
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
        py={6}
        px={4}
        justify="center"
        bg="blackAlpha.400"
      >
        <Text fontSize="sm" color="whiteAlpha.700">
          <Link
            as={RouterLink}
            to="/privacy-policy"
            textDecoration="underline"
            color="purple.200"
          >
            Privacy Policy
          </Link>{' '}
          • Powered by{' '}
          <Link
            href="https://hagersew.com"
            isExternal
            textDecoration="underline"
            color="purple.200"
          >
            Hagersew
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default HomePage;
