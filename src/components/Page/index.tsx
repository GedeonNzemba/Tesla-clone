import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {
              name: 'Model S',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Model Y',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Model 3',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Model X',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Solar Panels',
              description: 'Lowest Cost Solar Panels in America'
            },
             {
              name: 'Solar Roof',
              description: 'Produce clean Energy From Your Roof'
            },
            {
              name: 'Accessories',
              description: 'Tesla Electronic bundler'
            },
            {
              name: 'Gedeon Nzemba',
              description: 'Junior - Intermediate Front End Developer'
            },
            
          ].map(modelName => (
            <ModelSection
              key={modelName.name}
              className="colored"
              modelName={modelName.name}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName.name}
                  description={modelName.description}
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
