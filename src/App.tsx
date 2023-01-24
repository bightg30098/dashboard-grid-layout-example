const App = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <header className="h-16 text-white bg-blue-900">I'm header</header>
      <main className="bg-orange-900 text-white grow p-4 flex flex-col">
        <h1 className="shrink-0 bg-green-900">I'm heading</h1>
        <div className="grow grid grid-rows-4 grid-cols-2 bg-sky-900 gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="grid-cols-1 grid-rows-1 bg-purple-800">
              I'm Grid - {i}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
