import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Flex
      as="footer"
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 1.5, sm: 0 }}
      borderTop="1px solid"
      borderColor="surf.border"
      py={6}
      px={4}
      justify="center"
      align="center"
      position="relative"
      zIndex={1}
      bg="surf.bgAlt"
    >
      <Text fontSize="sm" color="surf.textMuted" textAlign="center">
        <Link
          as={RouterLink}
          to="/privacy-policy"
          textDecoration="underline"
          color="brand.600"
        >
          Privacy Policy
        </Link>{' '}
        • Powered by{' '}
        <Link
          href="https://hagersew.com"
          isExternal
          textDecoration="underline"
          color="brand.600"
        >
          Hagersew
        </Link>
      </Text>
    </Flex>
  );
}
