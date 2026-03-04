import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveId(null);
        return;
      }

      const scrollPosition = window.scrollY + offset + 10;

      const current = sectionIds
        .map(id => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.offsetTop };
        })
        .filter(Boolean)
        .reverse()
        .find(section => scrollPosition >= section!.top);

      setActiveId(current?.id ?? null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
