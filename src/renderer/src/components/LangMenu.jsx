import { Box, Text, Menu, MenuItem, Button, Portal } from '@chakra-ui/react'
import { LANGS_VER } from '../constants'

const langs = Object.entries(LANGS_VER)

const LangMenu = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text fontSize="lg">Language: </Text>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>{language}</Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {langs.map(([lang, ver]) => (
                <MenuItem
                  key={lang}
                  onClick={() => onSelect(lang)}
                  color={lang === language ? 'blue.400' : 'white'}
                  fontWeight={lang === language ? 'bold' : 'normal'}
                  _hover={{
                    color: lang === language ? 'blue.400' : 'blue.200',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {lang}
                  &nbsp;
                  <Text as="span" color="white" fontSize="sm">
                    {ver}
                  </Text>
                </MenuItem>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  )
}

export default LangMenu
