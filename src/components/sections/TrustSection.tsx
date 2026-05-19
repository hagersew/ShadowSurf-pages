import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function TrustSection() {
  return (
    <Box py={{ base: 10, md: 14 }}>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          <MotionBox
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              bg="surf.surface"
              border="1px solid"
              borderColor="surf.border"
              boxShadow="md"
              h="100%"
            >
              <Heading size="md" mb={4}>
                Why ShadowSurf?
              </Heading>
              <Text color="surf.textMuted" fontSize={{ base: 'md', md: 'lg' }}>
                Unlike basic dark mode extensions, ShadowSurf focuses on
                performance and usability. It avoids breaking website layouts
                while delivering a smooth dark browsing experience.
              </Text>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              bg="surf.surface"
              border="1px solid"
              borderColor="surf.border"
              boxShadow="md"
              h="100%"
            >
              <Heading size="md" mb={4}>
                Privacy first
              </Heading>
              <Text color="surf.textMuted" fontSize={{ base: 'md', md: 'lg' }}>
                ShadowSurf does NOT track, collect, or share your data.
                Everything runs locally in your browser using Chrome storage
                APIs.
              </Text>
            </Box>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
}
