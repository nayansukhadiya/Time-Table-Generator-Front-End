import React from 'react'
import { Button } from '../../components/ui/button';
import { MenubarDemo } from '../../components/DemoComponents/MenuBarDemo';

function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-svh gap-3'>
      <Button variant="outline">Click me</Button>
      {/* <MenubarDemo /> */}
    </div>
  );
}

export default Home