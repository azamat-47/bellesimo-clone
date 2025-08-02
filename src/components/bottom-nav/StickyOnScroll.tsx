import { useEffect, useRef, useState, type FC } from 'react';
import Navlinks from './Navlinks';

const StickyOnScroll: FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;

      const triggerTop = triggerRef.current.getBoundingClientRect().top;

      // faqatgina element yuqoriga chiqib ketganda fixed bo‘ladi
      setIsSticky(triggerTop <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Trigger: navbar boshlanish nuqtasi */}
      <div ref={triggerRef} />

     
      <div
  className={`w-full z-50 transition-all ${
    isSticky ? 'fixed top-0 left-0 bg-white shadow-md' : 'relative'
  }`}
>
  <div className={`${isSticky ? 'container mx-auto px-5 md:px-6 xl:px-20 pb-2': ''}`}>
    <Navlinks />
  </div>
</div>

    </>
  );
}

export default StickyOnScroll;