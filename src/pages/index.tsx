import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import KanbanBoard from '../components/KanbanBoard';
import { useState } from 'react';
import TopHeader from '../components/TopHeader';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen bg-surface">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          <TopHeader />
          <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <section className="flex-1 py-4 px-3 md:px-6 overflow-auto bg-white">
            <KanbanBoard />
          </section>
        </main>
      </div>
    </>
  );
}
