import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export function Layout({ children, currentPath }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPath={currentPath} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
