import { GlowingEffectDemoSecond } from '@/components/GlowingEffectDemoSecond'
import { TabsDemo } from '@/components/TabsDemo'
import { TextHoverEffectDemo } from '@/components/TextHoverEffectDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo'

import React from 'react'
import Details from './details/page'
import Counter from '@/components/counter'
import { VortexDemo } from '@/components/VortexDemo'

const page = () => {
  return (
    <div>
      <TextHoverEffectDemo/>
      <WobbleCardDemo/>  
   {/* <Counter/> */}
    <Details/>
    <GlowingEffectDemoSecond/>
    <VortexDemo/>
    </div>
  )
}

export default page
