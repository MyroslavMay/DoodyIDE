import { Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { LANGS_VER } from '../constants'

const langs = Object.entries(LANGS_VER)

const LangMenu = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
        <Text fontSize='lg'>Language: </Text>
        <Menu isLazy>
            <MenuButton as={Button}>{language}</MenuButton>
        <MenuList color={'white'}>
            {langs.map(([lang, ver]) => (
                <MenuItem 
                key={lang} 
                onClick={() => onSelect(lang)} 
                color={lang === language ? 'blue.400' : 'white'}
                fontWeight={lang === language ? 'bold' : 'normal'}
                _hover={{color: lang === language ? 'blue.400' : 'blue.200', fontWeight: 'bold'}}>
                    {lang}
                    &nbsp;
                    <Text as="span" color="white" fontSize="sm">
                        {ver}   
                    </Text>
                </MenuItem>
            ))}
        </MenuList>
    </Menu>
    </Box>
  )
}

export default LangMenu