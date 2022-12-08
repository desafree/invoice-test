import { QueryClient, QueryClientProvider } from "react-query";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const QueryProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
