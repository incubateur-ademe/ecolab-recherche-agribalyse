import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { mq } from 'utils/styles'

import Loader from 'components/misc/Loader'
import BreadCrumb from './aliment/BreadCrumb'
import Informations from './aliment/Informations'
import RelatedAliments from './aliment/RelatedAliments'

const Wrapper = styled.div`
  flex: 1;
  margin: 0 2em 2em;

  ${mq.small} {
    margin: 0 1em 2em;
  }
`
export default function Aliment(props) {
  const { ciqual_code } = useParams()

  const [currentAliment, setCurrentAliment] = useState(null)

  useEffect(() => {
    setCurrentAliment(
      props.aliments.find(aliment => aliment.ciqual_code === ciqual_code)
    )
  }, [props.aliments, ciqual_code])

  return (
    <Wrapper>
      {currentAliment ? (
        <>
          <BreadCrumb aliment={currentAliment} />
          <Informations aliment={currentAliment} />
          <RelatedAliments aliments={props.aliments} aliment={currentAliment} />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}