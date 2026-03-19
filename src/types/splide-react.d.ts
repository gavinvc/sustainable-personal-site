declare module '@splidejs/react-splide' {
  import * as React from 'react';
  export interface SplideProps extends React.HTMLAttributes<HTMLElement> {
    options?: any;
    ariaLabel?: string;
    className?: string;
    children?: React.ReactNode;
    // Event handlers supported by react-splide
    onMounted?: (splide: any) => void;
    onMove?: (splide: any) => void;
    onMoved?: (splide: any) => void;
    onPaginationUpdated?: (splide: any) => void;
  }

  export const Splide: React.ComponentType<SplideProps>;
  export const SplideSlide: React.ComponentType<any>;

  export default Splide;
}

// Allow importing the CSS if needed
declare module '@splidejs/splide/dist/css/splide.min.css';
