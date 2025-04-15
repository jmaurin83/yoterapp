import dynamic from "next/dynamic";

// On importe dynamiquement le composant pour éviter les erreurs au build
const DashboardView = dynamic(() => import("../components/DashboardView"), {
  ssr: false,
});

export default function Home() {
  return <DashboardView />;
}
