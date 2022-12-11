import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
});

const QueryProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
};

export default QueryProvider;
