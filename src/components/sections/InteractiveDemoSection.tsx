import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import BrowserFrame from '../demo/BrowserFrame';
import MockExtensionPopup from '../demo/MockExtensionPopup';
import MockWebPage from '../demo/MockWebPage';
import { useDemoState } from '../demo/useDemoState';

const HELPER_CHIPS = [
  'Toggle global dark mode',
  'Disable on this site',
  'Adjust brightness & contrast',
  'Add domains to blacklist',
];

export default function InteractiveDemoSection() {
  const demo = useDemoState();
  const [highlightPopup, setHighlightPopup] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.hash.split('?')[1] ?? '',
    );
    if (
      window.location.hash.includes('demo') ||
      params.get('highlight') === 'popup'
    ) {
      setHighlightPopup(true);
      const t = setTimeout(() => setHighlightPopup(false), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.location.hash.includes('demo')) {
          setHighlightPopup(true);
          setTimeout(() => setHighlightPopup(false), 3000);
        }
      },
      { threshold: 0.3 },
    );
    const el = document.getElementById('demo');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box id="demo" py={{ base: 14, md: 20 }} scrollMarginTop="80px">
      <Container maxW="7xl">
        <Stack spacing={10}>
          <VStack spacing={4} textAlign="center" maxW="2xl" mx="auto">
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.600"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Live demo
            </Text>
            <Heading size="xl">Try ShadowSurf right here</Heading>
            <Text color="surf.textMuted" fontSize="lg">
              Use the extension panel to control the mock page below—same
              controls, same flow, no install required.
            </Text>
            <Flex wrap="wrap" gap={2} justify="center">
              {HELPER_CHIPS.map((chip) => (
                <Tag
                  key={chip}
                  size="md"
                  variant="subtle"
                  colorScheme="purple"
                  borderRadius="full"
                >
                  {chip}
                </Tag>
              ))}
            </Flex>
          </VStack>

          <Box
            p={{ base: 3, md: 6 }}
            borderRadius="2xl"
            bg="surf.surface"
            border="1px solid"
            borderColor="surf.border"
            boxShadow="lg"
          >
            <HStack
              justify="space-between"
              mb={4}
              px={1}
              flexWrap="wrap"
              gap={2}
            >
              <Text fontSize="sm" color="surf.textSubtle">
                Simulated browser · {demo.state.hostname}
              </Text>
              <Tag
                colorScheme={demo.derived.isDarkActive ? 'green' : 'gray'}
                borderRadius="full"
              >
                {demo.derived.isDarkActive ? 'Dark mode ON' : 'Dark mode OFF'}
              </Tag>
            </HStack>

            <BrowserFrame
              overlay={
                <MockExtensionPopup demo={demo} highlight={highlightPopup} />
              }
            >
              <Box flex="1" w="100%" pr={{ base: 0, md: '300px' }}>
                <MockWebPage state={demo.state} derived={demo.derived} />
              </Box>
            </BrowserFrame>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
