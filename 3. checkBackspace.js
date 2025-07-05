function checkBackspace(s, t) {
    const finalS = helperCheck(s)
    const finalT = helperCheck(t)

    return finalS === finalT
}

// helper for processing of both strings, we'll getting final string without any # characters
function helperCheck(string) {
    // stack for characters (# exception)
    const stack = []

    for(let i = 0; i < string.length; i++) {
        // if the character is not a #
        if(string[i] !== "#") {
            // Push in the stack
            stack.push(string[i])
        } else {
            if(string.length > 0) {
                stack.pop()
            }
        }
    }
    return stack.join("")
}

console.log(checkBackspace('ab##', 'c#d#'))