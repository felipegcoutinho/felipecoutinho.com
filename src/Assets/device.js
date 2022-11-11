// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS_320px: `(min-width: ${size.mobileS})`,
  mobileM_375px: `(min-width: ${size.mobileM})`,
  mobileL_425px: `(min-width: ${size.mobileL})`,
  tablet_768px: `(min-width: ${size.tablet})`,
  laptop_1024px: `(min-width: ${size.laptop})`,
  laptopL_1440px: `(min-width: ${size.laptopL})`,
  desktop_2560px: `(min-width: ${size.desktop})`,
};
