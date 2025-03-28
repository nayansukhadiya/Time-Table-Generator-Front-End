import React from 'react';
import { WobbleCard } from '../ui/wobble-card';

export function WobbleCardDemo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
      {/* First Card */}
      <WobbleCard
        containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
        className=''
      >
        <div className='max-w-xs'>
          <h2 className='text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Gippity AI powers the entire universe
          </h2>
          <p className='mt-4 text-left text-base text-neutral-200'>
            With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform
            for developers.
          </p>
        </div>
        <img
          src='https://png.pngtree.com/png-vector/20240904/ourmid/pngtree-black-and-white-photo-of-an-abstract-beautiful-liquid-metal-shape-png-image_13748074.png'
          alt='demo image'
          className='absolute -right-4 lg:-right-[4%] grayscale filter -bottom-10 object-contain rounded-2xl'
          style={{ maxWidth: '500px', maxHeight: '500px' }}
          />
      </WobbleCard>

      {/* Second Card */}
      <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
        <h2 className='max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
          No shirt, no shoes, no weapons.
        </h2>
        <p className='mt-4 max-w-[26rem] text-left text-base text-neutral-200'>
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>

      {/* Third Card */}
      <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
        <div className='max-w-sm'>
          <h2 className='max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Signup for blazing-fast cutting-edge state-of-the-art Gippity AI wrapper today!
          </h2>
          <p className='mt-4 max-w-[26rem] text-left text-base text-neutral-200'>
            With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform
            for developers.
          </p>
        </div>
        <img
          src='https://ouch-cdn2.icons8.com/CHctGoM_NBgXP-YtpMf-hjQBC-yxS5x9vq6f07ybTD8/rs:fit:428:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjI4/L2IxYWQ1OTQ1LTM4/NGItNDcyZC04YTdh/LTEyM2NkZmYyM2Jk/Ni5wbmc.png'
          alt='demo image'
          className='absolute -right-10 md:-right-[4%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl'
          style={{ maxWidth: '500px', maxHeight: '500px' }}
        />
      </WobbleCard>
    </div>
  );
}
