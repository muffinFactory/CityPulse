import React, { ReactNode } from "react"

import { QueryClientProvider as QCProvider, QueryClient } from "@tanstack/react-query"

type QueryClientProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => (
  <QCProvider client={queryClient}>{children}</QCProvider>
)

export default QueryClientProvider
