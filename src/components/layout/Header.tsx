import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { CHROME_STORE_URL } from '../../content/siteCopy';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const NAV_LINKS = [
  { label: 'How it works', sectionId: 'how-it-works' },
  { label: 'Demo', sectionId: 'demo' },
  { label: 'Features', sectionId: 'features' },
];

export default function Header() {
  const scrollToSection = useScrollToSection();
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      py={3}
      backdropFilter="blur(12px)"
      bg="rgba(255, 255, 255, 0.82)"
      borderBottom="1px solid"
      borderColor="surf.border"
      boxShadow="sm"
    >
      <Container maxW="7xl">
        <Flex align="center" justify="space-between" gap={4}>
          <HStack
            as={RouterLink}
            to="/"
            spacing={3}
            _hover={{ opacity: 0.85 }}
            flexShrink={0}
          >
            <Image
              src="/assets/shadowsurf-icon-128.png"
              alt="ShadowSurf"
              boxSize="36px"
              borderRadius="lg"
            />
            <Text
              fontFamily="heading"
              fontWeight="700"
              fontSize="lg"
              color="surf.text"
              display={{ base: 'none', sm: 'block' }}
            >
              ShadowSurf
            </Text>
          </HStack>

          <HStack
            spacing={6}
            display={{ base: 'none', md: 'flex' }}
            fontSize="sm"
            color="surf.textMuted"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.sectionId}
                as="button"
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                _hover={{ color: 'brand.600' }}
                transition="color 0.2s"
              >
                {item.label}
              </Link>
            ))}
            <Link
              as={RouterLink}
              to="/privacy-policy"
              _hover={{ color: 'brand.600' }}
              transition="color 0.2s"
            >
              Privacy
            </Link>
          </HStack>

          <Button
            as="a"
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            colorScheme="purple"
            flexShrink={0}
            px={5}
          >
            Get extension
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
