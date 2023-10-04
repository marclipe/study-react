# React Router 

`npm install react-router-dom`

My example 

```
export function App() {
  return (
    <>
      <h1>Social Medias</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/instagram" element={<Instagram/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
```