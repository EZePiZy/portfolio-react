import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react'



export default function Apply() {
    return (
<FormControl isRequired 
            color="displayColor"
            fontSize="display2"
            fontWeight="medium"
            position="relative">
    <FormLabel color="displayColor" as="span">First name</FormLabel>
    <Input placeholder='First name' />
    <FormLabel color="displayColor" as="span">Last name</FormLabel>
    <Input placeholder='Last name' />
    <FormLabel color="displayColor" as="span">Email address</FormLabel>
    <Input type='email' />
    <FormHelperText color="displayColor" as="span">We'll never share your email.</FormHelperText>
</FormControl>
  )
}
