import { GlowingEffectDemoSecond } from '@/components/GlowingEffectDemoSecond'
import { TabsDemo } from '@/components/TabsDemo'
import { TextHoverEffectDemo } from '@/components/TextHoverEffectDemo'
import { WobbleCardDemo } from '@/components/WobbleCardDemo'

import React from 'react'

const page = () => {
  return (
    <div>
      <TextHoverEffectDemo/>
    <WobbleCardDemo/>
      {/* <GlowingEffectDemoSecond/> */}
    <TabsDemo/>
    </div>
  )
}

export default page
