import { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { UseDemoStateReturn } from './useDemoState';

const MotionBox = motion.create(Box);

interface MockExtensionPopupProps {
  demo: UseDemoStateReturn;
  highlight?: boolean;
}

export default function MockExtensionPopup({
  demo,
  highlight = false,
}: MockExtensionPopupProps) {
  const { state, derived, setGlobalEnabled, setBrightness, setContrast, toggleSite, addToBlacklist, removeFromBlacklist } = demo;
  const [newDomain, setNewDomain] = useState('');

  return (
    <MotionBox
      position="absolute"
      top={{ base: 2, md: 4 }}
      right={{ base: 2, md: 4 }}
      w={{ base: '92%', sm: '280px' }}
      maxW="300px"
      zIndex={10}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      bg="gray.800"
      color="white"
      borderRadius="lg"
      boxShadow="2xl"
      border="2px solid"
      borderColor={highlight ? 'cyan.400' : 'whiteAlpha.300'}
      p={4}
      outline={highlight ? '2px solid rgba(34, 211, 238, 0.5)' : 'none'}
      outlineOffset="2px"
    >
      <Stack spacing={4}>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading size="sm">ShadowSurf</Heading>
            <Text fontSize="xs" opacity={0.75}>
              Modern dark mode for any site
            </Text>
          </Box>
          <Switch
            colorScheme="purple"
            isChecked={state.globalEnabled}
            onChange={(e) => setGlobalEnabled(e.target.checked)}
          />
        </Flex>

        <Box borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="md" p={3}>
          <HStack justify="space-between" mb={2}>
            <Text fontWeight="semibold" fontSize="sm">
              {state.hostname}
            </Text>
            <Badge colorScheme={derived.siteStatusEnabled ? 'green' : 'red'}>
              {derived.siteStatusEnabled ? 'Enabled' : 'Disabled'}
            </Badge>
          </HStack>
          <Text fontSize="xs" opacity={0.8} mb={3}>
            {derived.siteStatusEnabled
              ? 'Dark mode is active on this site.'
              : 'Dark mode is off on this site.'}
          </Text>
          <Button
            size="sm"
            width="100%"
            colorScheme="purple"
            variant="outline"
            onClick={toggleSite}
          >
            {derived.siteStatusEnabled
              ? 'Disable on this site'
              : 'Enable on this site'}
          </Button>
        </Box>

        <Box borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="md" p={3}>
          <Text fontWeight="semibold" fontSize="sm" mb={2}>
            Visual tuning
          </Text>
          <Text fontSize="xs" opacity={0.8}>
            Brightness: {state.brightness}%
          </Text>
          <Slider
            aria-label="Brightness"
            min={60}
            max={120}
            value={state.brightness}
            onChange={setBrightness}
            colorScheme="purple"
            size="sm"
            mt={1}
            mb={3}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          <Text fontSize="xs" opacity={0.8}>
            Contrast: {state.contrast}%
          </Text>
          <Slider
            aria-label="Contrast"
            min={70}
            max={130}
            value={state.contrast}
            onChange={setContrast}
            colorScheme="purple"
            size="sm"
            mt={1}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Box borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="md" p={3}>
          <Text fontWeight="semibold" fontSize="sm" mb={1}>
            Blacklist
          </Text>
          <Text fontSize="xs" opacity={0.75} mb={2}>
            Dark mode runs on every site except these domains.
          </Text>
          <HStack>
            <Input
              size="sm"
              placeholder="example.com"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              bg="gray.700"
              borderColor="whiteAlpha.300"
            />
            <Button
              size="sm"
              colorScheme="purple"
              onClick={() => {
                addToBlacklist(newDomain);
                setNewDomain('');
              }}
            >
              Add
            </Button>
          </HStack>
          <Stack mt={2} spacing={1}>
            {state.blacklist.map((domain) => (
              <HStack key={domain} justify="space-between">
                <Text fontSize="sm">{domain}</Text>
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={() => removeFromBlacklist(domain)}
                >
                  Remove
                </Button>
              </HStack>
            ))}
            {state.blacklist.length === 0 && (
              <Text fontSize="xs" opacity={0.75}>
                No blacklisted domains.
              </Text>
            )}
          </Stack>
        </Box>
      </Stack>
    </MotionBox>
  );
}
