import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CHROME_STORE_URL } from '../../content/siteCopy';

const MotionBox = motion.create(Box);

export default function CtaSection() {
  return (
    <Box py={{ base: 14, md: 20 }}>
      <Container maxW="4xl">
        <MotionBox
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            p={{ base: 8, md: 12 }}
            borderRadius="3xl"
            textAlign="center"
            bgGradient="linear(135deg, brand.600 0%, purple.600 40%, cyan.600 100%)"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              inset={0}
              bg="blackAlpha.300"
              pointerEvents="none"
            />
            <Stack spacing={5} position="relative" color="white">
              <Heading size="lg" color="white">
                Ready for comfortable late-night browsing?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                opacity={0.95}
                color="whiteAlpha.900"
              >
                Install ShadowSurf and surf the web the way your eyes prefer.
              </Text>
              <Button
                as="a"
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                colorScheme="whiteAlpha"
                bg="white"
                color="brand.700"
                px={10}
                _hover={{ bg: 'whiteAlpha.900' }}
                alignSelf="center"
              >
                Get ShadowSurf for Chrome
              </Button>
            </Stack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
