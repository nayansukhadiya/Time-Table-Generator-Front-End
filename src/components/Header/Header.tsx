import { MenubarDemo } from '../DemoComponents/MenuBarDemo';
import { ModeToggle } from '../mode-toggle';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className='fixed top-0 p-4 w-full flex justify-between items-center shadow-md border-b border-gray-500'>
      <div className='flex gap-7 items-center'>
        <div className='text-xl font-bold'>Logo</div>
        <MenubarDemo />
      </div>
      <ModeToggle />
    </div>
  );
}
