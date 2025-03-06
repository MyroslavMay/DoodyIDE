import { Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor.jsx'
import './style.css'

const App = () => {
  return (
    <Box minH="100vh" bg='#1d3768' color='white' py={0} px={6}>
      <CodeEditor />
    </Box>
  )
}

export default App;
