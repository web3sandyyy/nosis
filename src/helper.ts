export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export const romanNumber = (num: number): string => {
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  for (let i = 0; i < roman.length; i++) {
    while (num >= values[i]) {
      result += roman[i];
      num -= values[i];
    }
  }

  return result;
};