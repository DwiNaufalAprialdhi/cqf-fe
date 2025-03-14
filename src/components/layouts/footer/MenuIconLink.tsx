import React from 'react'
import IconLink from './IconLink'
import Icon from '@/components/Icons/Icon'

export default function MenuIconLink() {
      return (
            <>
                  <div className='flex items-center gap-x-2'>
                        <IconLink link='#'>
                              <Icon name='facebook' className='w-3 h-auto text-white' />
                        </IconLink>
                        <IconLink link='#'>
                              <Icon name='youtube' className='w-3 h-auto text-white' />
                        </IconLink>
                        <IconLink link='#'>
                              <Icon name='instagram' className='w-3 h-auto text-white' />
                        </IconLink>
                        <IconLink link='#'>
                              <Icon name='linkedin' className='w-3 h-auto text-white' />
                        </IconLink>
                  </div>
            </>
      )
}
