const lastTenYears = (): { value: string; text: string }[] => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) =>
    (currentYear - i).toString()
  );

  return years.map((year) => {
    return { value: year, text: year };
  });
};

export default lastTenYears;
