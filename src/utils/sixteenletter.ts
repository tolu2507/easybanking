export function formatNumberGroups(input: string) {
  const numericString = input.replace(/\D/g, '');
  if (/^\d{16}$/.test(numericString)) {
    const formattedArray = numericString.match(/.{1,4}/g);

    return formattedArray;
  } else {
    console.error('Invalid input. Please provide a 16-digit numeric string.');
    return null;
  }
}
