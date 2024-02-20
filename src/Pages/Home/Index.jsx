import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const HomePage = () => {
  return (
  <Flex w={'100%'} h={'100vh'} gap={'1rem'} display={'flex'} flexDir={'column'} align={'center'} justify={'center'}>
    <h1 className="fs-1">Estamos soñando este sitio...</h1>

    <Flex w={'100%'} p={4} justify={'center'} flexDir={'column'} align={'center'}>
      <p>Pero mientras tanto, puedes echarle un vistazo a nuestras redes.</p>
        <Flex gap={'1rem'} p={4} color={'#c23b31'}>
            <a href="https://www.instagram.com/casadelossuenos_sonson/?igsh=MW0xbjJkYjQ1amRoNQ%3D%3D" target="_blank" rel="noreferrer">
              <FaInstagram size={32} color="#c23b31" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552995154276&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <FaFacebook size={32} color="#c23b31" />
            </a>
        </Flex>
    </Flex>

    <h2 className="fs-4">Y recuerda, La calidad comienza en casa</h2>
  </Flex>
  )
}

export default HomePage
