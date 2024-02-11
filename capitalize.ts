export default function capitalize(string: string): string {
    const firstLetterCapitalized = string[0].toUpperCase();
    const restOfString = string.substring(1);
    return firstLetterCapitalized + restOfString;
}