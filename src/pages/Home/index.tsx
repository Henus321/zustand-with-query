import PageHead from "@/components/PageHead";
import { ROUTES } from "@/config";

const Home = () => {
    return (
        <div>
            <PageHead title={ROUTES.home.label} />

            <h4 className="text-xl">Тест стека</h4>
            <ul className="list-disc list-inside">
                <li>React</li>
                <li>Zustand</li>
                <li>TanStack Query</li>
                <li>React Hook Form + Zod</li>
                <li>Vite</li>
                <li>TailwindCSS</li>
            </ul>
        </div>
    );
};

export default Home;
