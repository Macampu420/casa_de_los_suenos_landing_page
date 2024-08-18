import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const HomePage = () => {
  return (
  <Flex w={'100%'} px={'20px'} h={'100vh'} gap={'1rem'} display={'flex'} flexDir={'column'} align={'center'} justify={'center'}>
    <h1 className="fs-1">Estamos soñando este sitio...</h1>

    <Flex w={'100%'} p={4} justify={'center'} flexDir={'column'} align={'center'}>
      <Text textAlign={'center'}>Pero mientras tanto, puedes echarle un vistazo a nuestras redes.</Text>
        <Flex gap={'1rem'} p={4} color={'#c23b31'}>
          <a href="https://www.instagram.com/casadelossuenossonson" target="_blank" rel="noreferrer">
              <FaInstagram size={40} color="#c23b31" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552995154276&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <FaFacebook size={40} color="#c23b31" />
            </a>
        </Flex>
        <Text textAlign={'center'}>O puedes echarle un vistazo a nuestro proyecto de memoria
           haciendo click <a href="https://casadelosuenos.netlify.app/" target="_blank" rel="noreferrer">aquí</a>
        </Text>
    </Flex>

      <Heading as={'h3'} color={'#c23b31'} fontFamily={'Andor'} size="lg" textAlign="center">Y recuerda, La calidad comienza en casa</Heading>
  </Flex>
  )
}

export default HomePage
