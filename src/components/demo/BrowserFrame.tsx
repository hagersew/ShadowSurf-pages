import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { MOCK_HOSTNAME } from '../../content/siteCopy';

interface BrowserFrameProps {
  children: ReactNode;
  overlay?: ReactNode;
}

export default function BrowserFrame({ children, overlay }: BrowserFrameProps) {
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="surf.border"
      bg="white"
      boxShadow="xl"
    >
      <Flex
        align="center"
        gap={2}
        px={3}
        py={2}
        bg="gray.50"
        borderBottom="1px solid"
        borderColor="surf.border"
      >
        <HStack spacing={1.5}>
          <Box w={2.5} h={2.5} borderRadius="full" bg="red.400" />
          <Box w={2.5} h={2.5} borderRadius="full" bg="yellow.400" />
          <Box w={2.5} h={2.5} borderRadius="full" bg="green.400" />
        </HStack>
        <Flex
          flex={1}
          mx={2}
          px={3}
          py={1}
          bg="white"
          border="1px solid"
          borderColor="surf.border"
          borderRadius="md"
          fontSize="xs"
          color="surf.textMuted"
          align="center"
          gap={2}
        >
          <Text opacity={0.6}>🔒</Text>
          <Text noOfLines={1}>https://{MOCK_HOSTNAME}/dark-mode-guide</Text>
        </Flex>
      </Flex>

      <Box
        position="relative"
        minH={{ base: '420px', md: '480px' }}
        display="flex"
      >
        {children}
        {overlay}
      </Box>
    </Box>
  );
}
