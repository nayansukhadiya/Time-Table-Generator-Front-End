import { MenubarDemo } from '../DemoComponents/MenuBarDemo';
import { ModeToggle } from '../mode-toggle';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className='fixed top-0 px-4 py-2 w-full flex justify-between items-center shadow-md border-b border-gray-500 z-[45] bg-black'>
      <div className='flex gap-7 items-center'>
        <div className='text-xl font-bold'>Logo</div>
        <MenubarDemo />
      </div>
      <ModeToggle />
    </div>
  );
}
