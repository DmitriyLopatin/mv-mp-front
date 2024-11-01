import { AppStyles, Footer } from "App.styled"
import Header from "features/Header/Header"
import React, { Suspense } from "react"
import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"

export const App = () => {
  return<>
      <AppStyles/>
      <Header/>
      <Suspense fallback={"Loading . . ."}>
        <PublicRoutes />
        <PrivateRoutes />
      </Suspense>
      <Footer>
        <div> MarketPlace MW</div>
      </Footer>
    </>
}
export default App
