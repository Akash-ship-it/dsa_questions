function validParentheses(s) {
    // create a stack
    const stack = []

    // object to check if the character is opener
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i < s.length; i++) {
        const currentCharacter = s[i];

        // Check if the character is opener
        if(obj[currentCharacter]) {
            // Push in the stack
            stack.push(currentCharacter)
        } else {
            // If currentCharcter not an opener
            if(stack.length === 0) return false

            // check if the currentCharcter is associated or pair of last opener
            const lastOpener = stack.pop(currentCharacter)

            if(obj[lastOpener] !== currentCharacter) {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(validParentheses('{[]}'))