export const normalizeBase = (value: string) => {
  const trimmed = value.trim();

  if (trimmed === "" || trimmed === "/") return "/";

  return `/${trimmed.replace(/^\/+/, "").replace(/\/+$/, "")}/`;
};
