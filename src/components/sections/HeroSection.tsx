import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { CHROME_STORE_URL } from '../../content/siteCopy';
import BrowserFrame from '../demo/BrowserFrame';
import MockWebPage from '../demo/MockWebPage';
import { useDemoState } from '../demo/useDemoState';

const MotionBox = motion.create(Box);

export default function HeroSection() {
  const previewDemo = useDemoState();
  const scrollToSection = useScrollToSection();

  return (
    <Box pt={{ base: 10, md: 16 }} pb={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: 10, lg: 14 }}
          alignItems="center"
        >
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.600"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Dark mode for every website
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                lineHeight="1.05"
                mb={5}
              >
                Surf the web{' '}
                <Box
                  as="span"
                  bgGradient="linear(to-r, brand.600, cyan.500)"
                  bgClip="text"
                >
                  your eyes
                </Box>{' '}
                will thank you
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="surf.textMuted"
                maxW="xl"
                mb={4}
              >
                ShadowSurf transforms any site into a beautiful, eye-friendly
                dark mode—with per-site control, smart media tuning, and zero
                tracking.
              </Text>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                pt={2}
              >
                <Button
                  as="a"
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="purple"
                  size="lg"
                  px={8}
                >
                  Add to Chrome — Free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  px={8}
                  borderColor="surf.borderStrong"
                  color="surf.text"
                  _hover={{ bg: 'surf.surfaceMuted' }}
                  onClick={() => scrollToSection('demo')}
                >
                  Try the demo
                </Button>
              </Stack>
            </MotionBox>
          </GridItem>

          <GridItem>
            <MotionBox
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Box
                as="button"
                type="button"
                display="block"
                w="100%"
                textAlign="inherit"
                _hover={{ transform: 'translateY(-4px)' }}
                transition="transform 0.25s"
                onClick={() => scrollToSection('demo')}
              >
                <BrowserFrame>
                  <MockWebPage
                    state={previewDemo.state}
                    derived={previewDemo.derived}
                  />
                </BrowserFrame>
                <HStack justify="center" mt={3} spacing={2}>
                  <Image
                    src="/assets/shadowsurf-icon-128.png"
                    alt=""
                    boxSize="20px"
                    borderRadius="md"
                  />
                  <Text fontSize="sm" color="surf.textSubtle">
                    Click to interact with the full demo ↓
                  </Text>
                </HStack>
              </Box>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
