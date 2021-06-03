import { GetStaticProps } from 'next'
import React from 'react'

type Props = {
  name: string
  email: string
}

const About: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = {
    name: 'Ataide Bastosss'
  }
  return {
    props: {
      name: data.name
    }
  }
}

export default About
