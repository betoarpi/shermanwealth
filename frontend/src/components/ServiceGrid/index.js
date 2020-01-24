import React from 'react'
import Service from '../Service/index'


export default function ServiceGrid({ services }) {
  return (
    <div>
    {
      services_grid.map((service) => {
        if (service.object_slug === slug) {
          return null
        }
        return (
          <Service
            key={service.object_id}
            title={service.title}
            url={`/services/${service.object_slug}`}
          />
        )
      })
    }
    </div>
  )
}
