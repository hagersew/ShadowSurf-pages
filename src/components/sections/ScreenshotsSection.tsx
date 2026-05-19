import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const SCREENSHOTS = [
  {
    src: '/assets/screenshot1.png',
    alt: 'ShadowSurf extension panel',
    caption: 'Extension popup',
  },
  {
    src: '/assets/screenshot2.png',
    alt: 'ShadowSurf visual tuning controls',
    caption: 'Visual tuning',
  },
  {
    src: '/assets/screenshot3.png',
    alt: 'ShadowSurf domain rules section',
    caption: 'Domain blacklist',
  },
];

export default function ScreenshotsSection() {
  return (
    <Box py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <Stack spacing={10}>
          <VStack spacing={3} textAlign="center" maxW="2xl" mx="auto">
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.600"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Interface
            </Text>
            <Heading size="xl">A popup designed for speed</Heading>
            <Text color="surf.textMuted" fontSize="lg">
              Every control is one click away—global toggle, site status,
              sliders, and blacklist management.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {SCREENSHOTS.map((item, index) => (
              <MotionBox
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="surf.border"
                  bg="surf.surface"
                  boxShadow="md"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    w="100%"
                    objectFit="cover"
                  />
                  <Text
                    p={3}
                    fontSize="sm"
                    color="surf.textMuted"
                    textAlign="center"
                  >
                    {item.caption}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
