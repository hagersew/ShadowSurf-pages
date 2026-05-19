import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <Box minH="100vh" position="relative" color="surf.text">
      <Box className="site-aurora" aria-hidden />
      <Box position="relative" zIndex={1}>
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
