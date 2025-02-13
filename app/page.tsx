import { GlowingEffectDemoSecond } from '@/components/GlowingEffectDemoSecond'
import { TabsDemo } from '@/components/TabsDemo'
import { TextHoverEffectDemo } from '@/components/TextHoverEffectDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo'

import React from 'react'
import Details from './details/page'

const page = () => {
  return (
    <div>
      <TextHoverEffectDemo/>
    <WobbleCardDemo/>
      {/* <GlowingEffectDemoSecond/> */}
    <Details/>
    </div>
  )
}

export default page
