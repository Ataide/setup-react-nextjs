import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Container } from '../styles/pages/home'

type Props = {
  title: string
  description: string
  author: string
}

const Home: React.FC<Props> = (props) => {
  return (
    <div>

      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <main>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <p>Made with 💖 - <strong>{props.author}</strong></p>
      </main>
      </Container>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = {
    author: 'Ataide Bastoss',
    title: 'Setup NextJS',
    description: 'Feito'
  }
  return {
    props: {
      ...data
    }
  }
}

export default Home
