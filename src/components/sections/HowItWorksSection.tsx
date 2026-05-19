import {
  Box,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DownloadIcon, SettingsIcon, ViewIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../../content/siteCopy';

const MotionBox = motion.create(Box);

const STEP_ICONS = [DownloadIcon, ViewIcon, SettingsIcon];

export default function HowItWorksSection() {
  return (
    <Box id="how-it-works" py={{ base: 14, md: 20 }} scrollMarginTop="80px">
      <Container maxW="7xl">
        <Stack spacing={12} align="center">
          <VStack spacing={3} textAlign="center" maxW="2xl">
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.600"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              How it works
            </Text>
            <Heading size="xl">Three steps to comfortable browsing</Heading>
            <Text color="surf.textMuted" fontSize="lg">
              Install once, browse everywhere. ShadowSurf handles the rest
              locally in your browser.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
            w="100%"
          >
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const StepIcon = STEP_ICONS[index];
              const href = step.anchor ? `#${step.anchor}` : undefined;

              const card = (
                <Box
                  p={8}
                  borderRadius="2xl"
                  bg="surf.surface"
                  border="1px solid"
                  borderColor="surf.border"
                  boxShadow="md"
                  h="100%"
                  _hover={
                    href
                      ? {
                          borderColor: 'brand.400',
                          transform: 'translateY(-4px)',
                        }
                      : undefined
                  }
                  transition="all 0.25s"
                >
                  <Text
                    fontSize="4xl"
                    fontWeight="800"
                    color="surf.borderStrong"
                    lineHeight="1"
                    mb={4}
                  >
                    {step.step}
                  </Text>
                  <Icon as={StepIcon} boxSize={8} color="brand.500" mb={4} />
                  <Heading size="md" mb={3}>
                    {step.title}
                  </Heading>
                  <Text color="surf.textMuted">{step.description}</Text>
                  {href && (
                    <Text
                      fontSize="sm"
                      color="brand.600"
                      mt={4}
                      fontWeight="600"
                    >
                      Try it in the demo →
                    </Text>
                  )}
                </Box>
              );

              return (
                <MotionBox
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {href ? (
                    <Link
                      href={href}
                      _hover={{ textDecoration: 'none' }}
                      display="block"
                    >
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </MotionBox>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
