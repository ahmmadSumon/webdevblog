import { GlowingEffectDemoSecond } from '@/components/GlowingEffectDemoSecond'
import { TabsDemo } from '@/components/TabsDemo'
import { TextHoverEffectDemo } from '@/components/TextHoverEffectDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo'

import React from 'react'
import Details from './details/page'
import Counter from '@/components/counter'

const page = () => {
  return (
    <div>
      <TextHoverEffectDemo/>
      <WobbleCardDemo/>  
   {/* <Counter/> */}
    <Details/>
    <GlowingEffectDemoSecond/>
    </div>
  )
}

export default page
