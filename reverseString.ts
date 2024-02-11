export default function reverseString(string: string): string {
    const arrayFromString = string.split("");
    const reversedArray = arrayFromString.reverse();
    return reversedArray.join("");
    
}