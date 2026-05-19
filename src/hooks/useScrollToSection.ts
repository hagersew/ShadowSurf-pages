import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId: string) => {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
        return;
      }
      scrollToSection(sectionId);
    },
    [location.pathname, navigate],
  );
}
