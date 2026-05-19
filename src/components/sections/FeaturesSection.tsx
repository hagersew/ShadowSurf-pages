import {
  Box,
  Container,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  MoonIcon,
  RepeatIcon,
  SettingsIcon,
  StarIcon,
  ViewIcon,
  LockIcon,
} from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FEATURES } from '../../content/siteCopy';

const MotionBox = motion.create(Box);

const FEATURE_ICONS = [
  MoonIcon,
  RepeatIcon,
  ViewIcon,
  StarIcon,
  SettingsIcon,
  LockIcon,
];

export default function FeaturesSection() {
  return (
    <Box id="features" py={{ base: 14, md: 20 }} scrollMarginTop="80px">
      <Container maxW="7xl">
        <Stack spacing={12}>
          <VStack spacing={3} textAlign="center" maxW="2xl" mx="auto">
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.600"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Features
            </Text>
            <Heading size="xl">
              Everything you need, nothing you don&apos;t
            </Heading>
            <Text color="surf.textMuted" fontSize="lg">
              Built for developers, designers, and anyone who spends long hours
              online.
            </Text>
          </VStack>

          <Grid
            templateColumns={{
              base: '1fr',
              sm: '1fr 1fr',
              lg: 'repeat(3, 1fr)',
            }}
            gap={5}
          >
            {FEATURES.map((feature, index) => (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Box
                  p={6}
                  h="100%"
                  borderRadius="xl"
                  bg="surf.surface"
                  border="1px solid"
                  borderColor="surf.border"
                  boxShadow="sm"
                  _hover={{
                    borderColor: 'brand.400',
                    boxShadow: 'md',
                  }}
                  transition="all 0.25s"
                >
                  <Icon
                    as={FEATURE_ICONS[index]}
                    boxSize={6}
                    color="brand.500"
                    mb={4}
                  />
                  <Heading size="sm" mb={2}>
                    {feature.title}
                  </Heading>
                  <Text color="surf.textMuted" fontSize="sm">
                    {feature.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
