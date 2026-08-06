export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div
        className="
          panel
          glow
          scan-line
          max-w-3xl
          w-full
          p-12
          text-center
        "
      >
        <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm">
          Space Command Interface
        </p>

        <h1 className="text-6xl font-bold mt-4">
          USS EVAN BALWANI
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Initializing Ship Systems...
        </p>

        <div className="mt-10 space-y-3 text-left max-w-sm mx-auto">
          <p>🛰 Navigation ........ ONLINE</p>
          <p>⚡ Reactor ........... ONLINE</p>
          <p>🛠 Engineering ....... ONLINE</p>
          <p>📡 Communications .... ONLINE</p>
        </div>
      </div>
    </main>
  );
}