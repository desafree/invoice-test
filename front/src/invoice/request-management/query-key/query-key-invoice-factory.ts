const invoicesKeys = {
  all: ["invoices"],
  lists: () => [...invoicesKeys.all, "list"] as const,
  list: (filters: string) => [...invoicesKeys.lists(), filters] as const,
  details: () => [...invoicesKeys.all, "detail"] as const,
  detail: (id: string) => [...invoicesKeys.details(), id] as const,
};

export default invoicesKeys;
