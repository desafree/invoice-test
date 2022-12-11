const invoicesKeys = {
  all: ["invoices"],
  lists: () => [...invoicesKeys.all, "list"],
  list: (filters: string) => [...invoicesKeys.lists(), filters],
  details: () => [...invoicesKeys.all, "detail"],
  detail: (id: string) => [...invoicesKeys.details(), id],
};

export default invoicesKeys;
