import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, VariablePage, VariablesPage } from "./pages";

function App() {
  return (
    <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/variables" element={<VariablesPage />}>
              <Route path=":variableId" element={<VariablePage />} />
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
       
    </main>
  );
}

export default App;
