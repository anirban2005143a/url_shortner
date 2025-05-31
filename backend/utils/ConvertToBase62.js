const base62Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Encode number (BigInt) to Base62 string
function encodeBase62(num) {
    if (num === 0n) return "0";
    let encoded = "";
    while (num > 0n) {
        encoded = base62Chars[Number(num % 62n)] + encoded;
        num = num / 62n;
    }
    return encoded;
}

// Convert string to Base62
export const stringToBase62 = (str) => {
    const bytes = new TextEncoder().encode(str);
    let num = 0n;
    console.log(bytes)
    for (let byte of bytes) {
        num = (num << 8n) + BigInt(byte);
    }
    return encodeBase62(num);
}

// Example usage:
const originalText = "Hello, Base62!";
const encoded = stringToBase62(originalText);

console.log("Original:", originalText);
console.log("Encoded :", encoded);
