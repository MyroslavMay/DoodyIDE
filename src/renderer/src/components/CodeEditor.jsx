import { useRef, useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import LangMenu from './LangMenu'
import { LANGS_SPIPPETS } from '../constants'
import Output from './Output'

const CodeEditor = () => {
    
    const editorRef = useRef()
    const [value, setValue] = useState('')
    const [lang, setLang] = useState('javascript')

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLang(language);
        setValue(LANGS_SPIPPETS[language])
    }
    
  return (
    <Box>
      <HStack spacing={4}>
        <Box w='50%'>
          <LangMenu language={lang} onSelect={onSelect} />
          <Editor 
            height="88vh" 
            theme="vs-dark"
            language={lang}
            defaultValue={LANGS_SPIPPETS[lang]}
            value={value} 
            onMount={onMount}
            onChange={ (value) => setValue(value) } />
          </Box>
          <Output editorRef={editorRef} lang={lang} />
      </HStack>
    </Box>
  )
}

export default CodeEditor
