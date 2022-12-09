const invoicesKeys = {
  all: ["invoices"] as const,
  lists: () => [...invoicesKeys.all, "list"] as const,
  list: (filters: string) => [...invoicesKeys.lists(), filters] as const,
  details: () => [...invoicesKeys.all, "detail"] as const,
  detail: (id: string) => [...invoicesKeys.details(), id] as const,
};

export default invoicesKeys;

/*// 🕺 remove everything related to the todos feature
queryClient.removeQueries(todoKeys.all)

// 🚀 invalidate all the lists
queryClient.invalidateQueries(todoKeys.lists())

// 🙌 prefetch a single todo
queryClient.prefetchQueries(todoKeys.detail(id), () => fetchTodo(id))*/
