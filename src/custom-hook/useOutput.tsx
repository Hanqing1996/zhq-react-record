import {useState} from 'react';

const useOutput = (amount: string) => {
    const [output, setOutput] = useState<string>(amount)

    const updateWithInput = (input: string) => {
        if (output.length === 16) {
            return;
        }
        if (output === '0') {
            if ('0123456789'.indexOf(input) >= 0) {
                setOutput(input)
            } else {
                setOutput(output + input)
            }
            return;
        }
        if (output.indexOf('.') >= 0 && input === '.') {
            return;
        }
        setOutput(output + input)
    }

    const remove = () => {
        if (output.length === 1) {
            setOutput('0')
        } else {
            setOutput(output.slice(0, -1))
        }
    }

    const clear = () => {
        setOutput('0')
    }
    const ok = (callback: () => void) => {
        setOutput('0')
        callback()
    }

    return {output, setOutput, updateWithInput, remove, clear, ok}
}

export default useOutput