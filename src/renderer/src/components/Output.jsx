import { Box, Button, Text, useToast } from '@chakra-ui/react'
import { codeExec } from '../api';
import { useState } from 'react';

const Output = ({ editorRef, lang }) => {

    const [output, setOutput] = useState(null)
    const [loading, setLoading] = useState(false)
    const [Error, setError] = useState(false)
    const toast = useToast();

    const runCode = async () => {
        // get code
        const code = editorRef.current.getValue();
        // check if code is empty
        if (!code){
            toast({
                title: "Cannot run code",
                description: "Sorry, but you haven't written any code :(",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        try {
            setLoading(true);
            const { run: result } = await codeExec(lang, code);
            setOutput(result.output.split("\n"));
            result.stderr ? setError(true) : setError(false);
            if (result.code === 0) {
                toast({
                    title: "Success",
                    description: "You magic program running, check output :)",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })
            }
            Error ? toast({
                title: "Cannot run code",
                description: "Sorry, but you have bug in program :( \nCheck output and editor for errors",
                status: "error",
                duration: 3000,
                isClosable: true,
            }) : null;
        } catch (error) {
            toast({
                title: "Error",
                description: "Oops, but run failed :( \nIt API side problem. Please try again later and check your internet connection \nHere error code\n " + error || "(no code, some error occurred)",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <Box w='50%'>
         <Text mb={2} fontSize='lg'>Output:</Text>
         <Button variant='outline' colorScheme='green' mb={4} onClick={runCode} isLoading={loading}>Run your code</Button>
         <Box height='75vh' p={2} border='2px solid' borderRadius='10px' borderColor='#1e1e1e' bg='#1e1e1e' color={Error ? '#ff4242' : '#c1c1c1'}>
             {output ? 
             output.map(
                (line, i) => <Text key={i}>{line}</Text>
             )
             : "Press on run button to see your magic program :)"}
         </Box>
     </Box>
    );
};

export default Output;