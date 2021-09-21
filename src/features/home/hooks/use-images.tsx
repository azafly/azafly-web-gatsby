
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { useFetchHomeData } from './use-data'
import { getFormattedImageUrl } from '../utils'
import { ContactlessTwoTone } from '@material-ui/icons'



export const homePageImages = {
  paymentImage: '',
  servicesHeaderText_subtext1_image: '',
  servicesHeaderText_subtext2_image: '',
  servicesHeaderText_subtext3_image: '',
  heroMainImage1: '',
  setupImage: ''
}





export const useHomeImageData = () => {

  const homeData = useFetchHomeData()
  type ImageString = keyof typeof homeData

  const map: any = {}
  Object.keys(homePageImages).forEach(key => {
    if (key in homeData && homeData[key as ImageString]) {
      map[key] = getFormattedImageUrl(homeData[key as ImageString] as string)
    }
  })


  const response = useStaticQuery(graphql`
  {
     setupImage: file(relativePath: { eq: ""}) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    },
     paymentImage: file(relativePath: { eq: "images/smiling-man.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    servicesHeaderTextImage1: file(relativePath: { eq: "images/smiling-man.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    },
   servicesHeaderTextImage2: file(relativePath: { eq: "images/smiling-man.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    servicesHeaderTextImage3: file(relativePath: { eq: "images/smiling-man.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    },
      heroMainImage1: file(relativePath: { eq: "images/smiling-man.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    },
}`)

  return response
}
