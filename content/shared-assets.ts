const driftWallAssetPath = "/assets/shared/hero";

export const sharedHeroDriftWallItems = Array.from({ length: 15 }, (_, index) => ({
  image: `${driftWallAssetPath}/drift-wall-${String(index + 1).padStart(2, "0")}.webp`,
  title: "Kodefy",
  href: undefined,
}));
