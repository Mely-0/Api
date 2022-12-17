import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'




export const WeatherForms = ({newLocation}) => {
    const [city , setCity]=useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({city})
    if(city === '' || !city)return;
    newLocation(city);
}


    return (
        <div className=" card-body">
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <input type="text" name="city" placeholder="Your City     Name" className="form-control"  onChange={(e)=>
                    setCity(e.target.value)}/>
            </div>
            <button className="btn-block" type='submit' onClick={onOpen}>
                Get Weather
            </button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
                {city}
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </form>
        
    </div>
    )
}
