import { ROUTES } from "@/config";

import PageHead from "@/components/PageHead";
import TestForm from "./components/TestForm";

const Home = () => {
    return (
        <div>
            <PageHead title={ROUTES.home.label} />

            <div className="flex flex-col">
                <div className="flex flex-col mb-4">
                    <h4 className="text-xl">Тест стека</h4>
                    <ul className="list-disc list-inside mb-3">
                        <li>React</li>
                        <li>Zustand</li>
                        <li>TanStack Query</li>
                        <li>React Hook Form + Zod</li>
                        <li>Vite</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>

                <div className="w-100">
                    <h4 className="text-xl">React Hook Form + Zod</h4>
                    <TestForm />
                </div>
            </div>
        </div>
    );
};

export default Home;
