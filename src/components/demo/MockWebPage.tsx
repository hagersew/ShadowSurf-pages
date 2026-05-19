import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { DemoDerived, DemoState } from './useDemoState';

const MotionBox = motion.create(Box);

interface MockWebPageProps {
  state: DemoState;
  derived: DemoDerived;
}

export default function MockWebPage({ state, derived }: MockWebPageProps) {
  const mediaFilter = `brightness(${state.brightness}%) contrast(${state.contrast}%)`;

  return (
    <MotionBox
      flex="1"
      overflow="auto"
      p={4}
      animate={{
        backgroundColor: derived.isDarkActive ? '#141824' : '#f8fafc',
        color: derived.isDarkActive ? '#e2e8f0' : '#1e293b',
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <Flex
        justify="space-between"
        align="center"
        mb={4}
        pb={2}
        borderBottom="1px solid"
        borderColor={derived.isDarkActive ? 'whiteAlpha.200' : 'gray.200'}
      >
        <Text fontWeight="700" fontSize="sm">
          DevBlog
        </Text>
        <Flex gap={3} fontSize="xs" opacity={0.8}>
          <Text>Articles</Text>
          <Text>Tutorials</Text>
          <Text>About</Text>
        </Flex>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: '1.4fr 0.6fr' }} gap={4}>
        <GridItem>
          <Text
            fontSize="lg"
            fontWeight="700"
            mb={2}
            lineHeight="short"
          >
            Building accessible dark themes for the modern web
          </Text>
          <Text fontSize="xs" opacity={0.75} mb={3}>
            Published March 12 · 8 min read
          </Text>
          <Text fontSize="sm" opacity={0.9} mb={3} lineHeight="tall">
            Late-night coding sessions shouldn&apos;t mean squinting at blinding
            white backgrounds. A thoughtful dark mode respects typography,
            contrast ratios, and the media embedded in your content.
          </Text>
          <Box
            h="100px"
            borderRadius="md"
            overflow="hidden"
            mb={3}
            bg={derived.isDarkActive ? '#1e2433' : '#e2e8f0'}
            style={{ filter: derived.isDarkActive ? mediaFilter : undefined }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xs" opacity={0.6}>
              [ hero image ]
            </Text>
          </Box>
          <Text fontSize="sm" opacity={0.85} lineHeight="tall">
            ShadowSurf injects a single stylesheet and toggles a root class—keeping
            layouts intact while shifting surfaces to comfortable dark tones.
          </Text>
        </GridItem>

        <GridItem>
          <Box
            p={3}
            borderRadius="md"
            mb={2}
            bg={derived.isDarkActive ? 'whiteAlpha.100' : 'white'}
            border="1px solid"
            borderColor={derived.isDarkActive ? 'whiteAlpha.200' : 'gray.200'}
          >
            <Text fontSize="xs" fontWeight="600" mb={1}>
              Trending
            </Text>
            <Text fontSize="xs" opacity={0.75}>
              CSS color-mix()
            </Text>
          </Box>
          <Box
            p={3}
            borderRadius="md"
            bg={derived.isDarkActive ? 'whiteAlpha.100' : 'white'}
            border="1px solid"
            borderColor={derived.isDarkActive ? 'whiteAlpha.200' : 'gray.200'}
          >
            <Text fontSize="xs" fontWeight="600" mb={1}>
              Newsletter
            </Text>
            <Text fontSize="xs" opacity={0.75}>
              Weekly dev tips
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </MotionBox>
  );
}
