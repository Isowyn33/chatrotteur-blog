import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Link from '../components/link'
import Button from '../components/btn'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from 'react-icons/fa'
import Slider from '../components/slider'
import Box from '../components/box'
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components'


let Service = ({data, Icon = FaHome}) => (
  <Col>
    <Link to={`/${data.node.id}`}>
      <Box>
        <Icon size={30}/>
        <h4 className="mt-3">{data.node.title}</h4>
        <p>{data.node.content}</p>
      </Box>
    </Link>
  </Col>
)

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Slider/>
    <Container className="pt-4">
      <div className="text-center">
        <h4>Blog sur les voyages et la gastronomie</h4>
      </div>
    </Container>
    <Container className="py-5">
      <h2 className="text-center mb-4">Articles</h2>
      <ul>
      
    </ul>
      <Row>
      {data.allStrapiArticle.edges.map(document => (
          <Service data={document}/>
      ))}
      </Row>
    </Container>
    <div className="text-center py-5">
      <Button to="https://github.com/isowyn33/chatrotteur-blog" className="btn btn-primary btn-lg">
        <FaGithub className="mr-1"/>
        View on Github
      </Button>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
