import NavBar from '@/components/NavBar';

import NAV_BAR_LINK from '@/constants/NavBar';

export default function Home() {
  return (
    <div className='lg:px-20'>
      <nav className='flex items-center justify-between'>
        <div className='logo sm:basis-1/3'>
          {/* logo here */}
          <span>DevEliasKh</span>
        </div>
        <NavBar links={NAV_BAR_LINK} className='basis-2/3' />
      </nav>
    </div>
  );
}
