# React Router 


### Config the React Router 

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

### Add Links
- `Link`
- Param `to` that receives the URL/path

```
  <nav>
    <Link to="/">Home</Link>
    <Link to="/instagram">Instagram</Link>
    <Link to="/twitter">Twitter</Link>
    <Link to="/facebook">Facebook</Link>
  </nav>
```

### Loading data
- useFetch
- Loading data individuals
- Use custom hook