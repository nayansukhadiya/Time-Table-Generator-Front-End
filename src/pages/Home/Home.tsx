import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../../components/ui/button';
import { WobbleCardDemo } from '@/components/WobbleCardDemo/WobbleCardDemo';

function Home() {
  const accordionItems = [
    {
      value: 'item-1',
      trigger: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      value: 'item-2',
      trigger: 'Is it styled?',
      content: "Yes. It comes with default styles that match the other components' aesthetic.",
    },
    {
      value: 'item-3',
      trigger: 'Is it animated?',
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      value: 'item-4',
      trigger: 'Is it customizable?',
      content: 'Yes. You can customize the styles, behavior, and functionality to suit your needs.',
    },
  ];

  return (
    <div className='flex w-full m-auto flex-col items-center justify-center min-h-svh gap-3 mt-[60px] p-5'>
      <Button variant='outline'>Click me</Button>
      <WobbleCardDemo />
      <div className='w-full'>
        <Accordion type='single' collapsible>
          {accordionItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className='text-3xl'>{item.trigger}</AccordionTrigger>
              <AccordionContent className='text-xl'>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Home;
